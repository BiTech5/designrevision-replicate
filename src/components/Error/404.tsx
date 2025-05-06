import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
            <h1 className="text-6xl font-bold text-gray-400">404</h1>
            <p className="text-4xl  text-blue-950 mt-4">Something went wrong!</p>
            <p className="text-sm text-gray-500">There was a problem on our end. Please try again later.</p>
            <Link
                to="/posts"
                className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600 transition text-sm" 
            >
                Go Back
            </Link>
        </div>
    );
};

export default NotFound;