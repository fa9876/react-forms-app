import { Link } from "react-router-dom";
const AboutPage = () => {
  return (
    <div>
      <h1>This is about page</h1>
      <Link to="/" className="text-blue-500">
        Back
      </Link>
    </div>
  );
};

export default AboutPage;
