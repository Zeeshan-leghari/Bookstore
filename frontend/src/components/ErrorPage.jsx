import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
      <div className="text-center max-w-2xl relative">
        {/* Animated circles in background */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply opacity-50 blur-3xl animate-blob dark:bg-purple-900/20"></div>
        <div className="absolute -top-40 -right-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply opacity-50 blur-3xl animate-blob animation-delay-2000 dark:bg-blue-900/20"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply opacity-50 blur-3xl animate-blob animation-delay-4000 dark:bg-pink-900/20"></div>

        <div className="relative z-10">
          {/* Animated emoji */}
          <div className="mb-8 animate-bounce">
            <span className="text-8xl">🚀</span>
          </div>

          {/* Error content */}
          <h1 className="text-9xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 animate-pulse">
            404
          </h1>
          <p className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Houston, We Have a Problem!
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
            The page you're looking for seems to have left our orbit. Let's get
            you back to safety.
          </p>

          {/* Home button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:scale-105 hover:shadow-lg transition-all duration-300 transform"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            Return to Home Base
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;