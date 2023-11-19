import type { NextApiRequest, NextApiResponse } from 'next';
import User from '../../models/User';

export default async function signup(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { username, password } = req.body;
      const hashedPassword = bcrypt.hashSync(password, 10);

      const user = new User({ username, password: hashedPassword });
      await user.save();

      res.status(201).json({ message: 'User created' });
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
