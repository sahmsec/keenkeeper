import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[60vh] px-6">
      
      <h1 className="text-5xl font-bold text-[#244D3F]">
        404
      </h1>

      <p className="mt-4 text-gray-500">
        Oops! The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="mt-6 px-5 py-2 rounded-md bg-[#244D3F] text-white hover:opacity-90"
      >
        Go Back Home
      </Link>

    </div>
  );
};

export default NotFound;