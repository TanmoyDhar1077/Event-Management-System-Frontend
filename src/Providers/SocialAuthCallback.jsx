import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router';

const SocialAuthCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get('token');
    const user = searchParams.get('user');

    if (token && user) {
      localStorage.setItem('token', token);
      localStorage.setItem('user', user);
      navigate('/');
    } else {
      navigate('/login?error=auth_failed');
    }
  }, [searchParams, navigate]);

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-br from-[#FBF9D1] to-[#E6CFA9]">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#9A3F3F] mx-auto"></div>
        <p className="mt-4 text-[#9A3F3F] font-medium">Completing authentication...</p>
      </div>
    </div>
  );
};

export default SocialAuthCallback;