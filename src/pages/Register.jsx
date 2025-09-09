import Lottie from "lottie-react";
import login from "../assets/login.json";
import useTitle from "../hooks/useTitle";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaUser, FaLock, FaEyeSlash, FaEye } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { Link } from "react-router";

const Register = () => {
  useTitle("Register");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const onSubmit = (data) => {
    console.log("Form data:", data);
  };

  return (
    <div className="bg-gradient-to-br from-[#FBF9D1] to-[#E6CFA9] flex flex-col md:flex-row items-center justify-center">
      {/* Animation - Responsive sizing */}
      <div className="hidden md:flex md:w-1/2 lg:w-3/5 h-full justify-center items-center p-4">
        <div className="max-w-2xl">
          <Lottie animationData={login} loop={true} className="w-full h-full" />
        </div>
      </div>

      {/* Registration Form */}
      <div className="w-full md:w-1/2 lg:w-2/5 h-full flex flex-col justify-center px-4 py-2 overflow-y-auto">
        {/* Heading */}
        <div className="text-center mb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-[#9A3F3F] mb-1">
            Create Account!
          </h1>
          <p className="text-sm text-[#C1856D]">
            Sign up to continue your journey
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl shadow-xl border border-[#E6CFA9] max-w-md mx-auto w-full">
          <div className="p-4 sm:p-6">
            {/* API Error Message */}
            {error && (
              <div className="bg-[#FBF9D1] border-l-4 border-[#9A3F3F] p-3 mb-4 rounded-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-[#9A3F3F]"
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
                  </div>
                  <div className="ml-3">
                    <p className="text-xs text-[#9A3F3F]">{error}</p>
                  </div>
                </div>
              </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-[#9A3F3F] mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser color="#9A3F3F" opacity={0.5} />
                  </div>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className={`pl-9 pr-3 py-2 w-full border text-sm ${
                      errors.name ? "border-[#9A3F3F]" : "border-[#E6CFA9]"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C1856D]`}
                    {...register("name", {
                      required: "Name is required",
                    })}
                  />
                </div>
                {errors.name && (
                  <p className="text-[#9A3F3F] text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-[#9A3F3F] mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MdAlternateEmail color="#9A3F3F" opacity={0.5} />
                  </div>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className={`pl-9 pr-3 py-2 w-full border text-sm ${
                      errors.email ? "border-[#9A3F3F]" : "border-[#E6CFA9]"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C1856D]`}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                </div>
                {errors.email && (
                  <p className="text-[#9A3F3F] text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-[#9A3F3F] mb-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock color="#9A3F3F" opacity={0.5} />
                  </div>
                  <button
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <FaEyeSlash color="#9A3F3F" opacity={0.6} />
                    ) : (
                      <FaEye color="#9A3F3F" opacity={0.6} />
                    )}
                  </button>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className={`pl-9 pr-3 py-2 w-full border text-sm ${
                      errors.password ? "border-[#9A3F3F]" : "border-[#E6CFA9]"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C1856D]`}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                      pattern: {
                        value:
                          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                        message:
                          "Password must include uppercase, lowercase, numbers, and special characters",
                      },
                    })}
                  />
                </div>
                {errors.password && (
                  <p className="text-[#9A3F3F] text-xs mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Confirm Password Field */}
              <div>
                <label className="block text-sm font-medium text-[#9A3F3F] mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock color="#9A3F3F" opacity={0.5} />
                  </div>
                  <button
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <FaEyeSlash color="#9A3F3F" opacity={0.6} />
                    ) : (
                      <FaEye color="#9A3F3F" opacity={0.6} />
                    )}
                  </button>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className={`pl-9 pr-3 py-2 w-full border text-sm ${
                      errors.confirmPassword
                        ? "border-[#9A3F3F]"
                        : "border-[#E6CFA9]"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C1856D]`}
                    {...register("confirmPassword", {
                      required: "Confirm Password is required",
                      validate: (value) =>
                        value === watch("password") || "Passwords do not match",
                    })}
                  />
                </div>
                {errors.confirmPassword && (
                  <p className="text-[#9A3F3F] text-xs mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
              {/* Profile Picture Field */}
              <div>
                <label className="block text-sm font-medium text-[#9A3F3F] mb-1">
                  Profile Picture
                </label>
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    className={`file:mr-4 file:py-1 file:px-2
                      file:rounded-md file:border-0
                      file:text-sm file:font-medium
                      file:bg-[#FBF9D1] file:text-[#9A3F3F]
                      hover:file:bg-[#E6CFA9]
                      text-sm text-[#9A3F3F]
                      py-1 px-2 w-full border ${
                        errors.profile_picture
                          ? "border-[#9A3F3F]"
                          : "border-[#E6CFA9]"
                      } rounded-lg focus:outline-none`}
                    {...register("profile_picture")}
                  />
                </div>
                {errors.profile_picture && (
                  <p className="text-[#9A3F3F] text-xs mt-1">
                    {errors.profile_picture.message}
                  </p>
                )}
              </div>
              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 font-medium rounded-lg text-white bg-[#9A3F3F] hover:bg-opacity-90 transition duration-300 shadow-md hover:shadow-lg text-sm flex items-center justify-center cursor-pointer mt-2"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>Creating Account...</span>
                    </div>
                  ) : (
                    "Create Account"
                  )}
                </button>
              </div>
            </form>
            <div className="mt-4 text-center">
              <p className="text-xs text-[#C1856D]">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-[#9A3F3F] font-medium hover:underline"
                >
                  Sign in
                </Link>
              </p>
            </div>
            <div className="mt-5 relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#E6CFA9]"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-2 bg-white text-[#C1856D]">
                  Or register with
                </span>
              </div>
            </div>
            {/* Social Login Buttons */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-3 border border-[#E6CFA9] rounded-lg shadow-sm bg-[#FBF9D1] text-xs font-medium text-[#9A3F3F] hover:bg-[#E6CFA9] hover:bg-opacity-30 transition duration-300 cursor-pointer"
                onClick={() => {
                  try {
                    localStorage.setItem(
                      "loginRedirectFrom",
                      window.location.pathname
                    );
                    window.location.href = import.meta.env.VITE_GOOGLE_AUTH_URL;
                  } catch (err) {
                    setError(
                      "Failed to connect to Google authentication. Please try again."
                    );
                  }
                }}
              >
                <svg
                  className="h-4 w-4 mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                </svg>
                Google
              </button>
              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-3 border border-[#E6CFA9] rounded-lg shadow-sm bg-[#FBF9D1] text-xs font-medium text-[#9A3F3F] hover:bg-[#E6CFA9] hover:bg-opacity-30 transition duration-300 cursor-pointer"
                onClick={() => {
                  try {
                    localStorage.setItem(
                      "loginRedirectFrom",
                      window.location.pathname
                    );
                    window.location.href = import.meta.env.VITE_GITHUB_AUTH_URL;
                  } catch (err) {
                    setError(
                      "Failed to connect to GitHub authentication. Please try again."
                    );
                  }
                }}
              >
                <svg
                  className="h-4 w-4 mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
