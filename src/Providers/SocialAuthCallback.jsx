import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import Lottie from "lottie-react";
import loading from "../assets/loading.json"; 

const SocialAuthCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  useEffect(() => {
    const token = searchParams.get('token');
    const user = searchParams.get('user');
    const error = searchParams.get('error');
    const redirectPath = localStorage.getItem('loginRedirectFrom') || '/';
    
    // Clear the stored path
    localStorage.removeItem('loginRedirectFrom');

    if (error) {
      setError(decodeURIComponent(error));
      // Redirect back to login after 3 seconds
      setTimeout(() => {
        navigate('/login', { state: { error: decodeURIComponent(error) } });
      }, 3000);
      return;
    }

    if (token && user) {
      try {
        localStorage.setItem('token', token);
        localStorage.setItem('user', decodeURIComponent(user));
        navigate(redirectPath);
      } catch (err) {
        setError('Failed to process authentication data. Please try again.');
        setTimeout(() => {
          navigate('/login', { state: { error: 'Authentication failed' } });
        }, 3000);
      }
    } else {
      setError('Authentication failed. Missing token or user data.');
      setTimeout(() => {
        navigate('/login', { state: { error: 'Authentication failed' } });
      }, 3000);
    }
  }, [searchParams, navigate]);

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-br from-[#FBF9D1] to-[#E6CFA9]">
      <div className="text-center bg-white p-8 rounded-xl shadow-xl max-w-md w-full">
        {error ? (
          <>
            <svg
              className="mx-auto h-12 w-12 text-[#9A3F3F]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <h2 className="mt-4 text-lg font-bold text-[#9A3F3F]">Authentication Error</h2>
            <p className="mt-2 text-[#C1856D]">{error}</p>
            <p className="mt-4 text-sm text-[#C1856D]">Redirecting to login page...</p>
          </>
        ) : (
          <>
            <div className="w-24 h-24 mx-auto">
              <Lottie animationData={loading} loop={true} />
            </div>
            <h2 className="mt-4 text-lg font-bold text-[#9A3F3F]">Completing Authentication</h2>
            <p className="mt-2 text-[#C1856D]">Please wait while we sign you in...</p>
          </>
        )}
      </div>
    </div>
  );
};

export default SocialAuthCallback;