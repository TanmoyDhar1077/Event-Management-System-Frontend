import { useNavigate, useRouteError } from "react-router";
import error from "../assets/error.json";
import Lottie from "lottie-react";
import useTitle from "../hooks/useTitle";

const ErrorPage = () => {
  useTitle("Page Not Found");
  const navigate = useNavigate();
  const routeError = useRouteError();
  const errorMessage =
    routeError?.statusText || routeError?.message || "Page not found";
  const statusCode = routeError?.status || 404;

  return (
    <div className="bg-gradient-to-br from-[#FBF9D1] to-[#E6CFA9] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md md:max-w-2xl mx-auto text-center">
        {/* Animation Container */}
        <div className="w-full max-w-sm md:max-w-md mx-auto mb-6">
          <Lottie animationData={error} loop={true} />
        </div>

        <div className="flex flex-col items-center bg-white bg-opacity-70 backdrop-blur-md p-6 rounded-lg shadow-lg">
          {/* Error Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Oops!
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-2">
            {errorMessage}
          </p>
          <p className="text-sm md:text-base text-gray-500 mb-6">
            Error Code: {statusCode}
          </p>
          {/* Home Button */}
          <button
            onClick={() => navigate("/")}
            className="w-full px-4 py-2 font-medium rounded-lg text-white bg-[#9A3F3F] hover:bg-opacity-90 transition duration-300 shadow-md hover:shadow-lg text-sm flex items-center justify-center cursor-pointer"
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
