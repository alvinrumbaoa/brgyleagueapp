import { useEffect } from 'react';
import { useRouter } from 'next/router';

const LogoutPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Remove the token from localStorage or cookies
    localStorage.removeItem('token');
    // or if using cookies
    // document.cookie = 'token=; Max-Age=0';

    // Redirect to the login or home page
    router.push('/login');
  }, [router]);

  return (
    <div>
      Logging out...
    </div>
  );
};

export default LogoutPage;