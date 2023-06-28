import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>This is home page</h1>
      <Link to="/about" className="text-blue-500">
        about
      </Link>
    </div>
  );
};

export default HomePage;
