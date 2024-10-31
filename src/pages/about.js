// src/pages/about.js
import NavBar from "../components/NavBar"; // Adjust the path if necessary

const About = () => {
  return (
    <div>
      <NavBar />
      <div className="p-4">
        <h1 className="text-2xl font-bold">About Us</h1>
        <p className="mt-2">
          Welcome to our application! We are dedicated to providing the best
          service possible. This application is designed to help you with
          product description feedback.
        </p>
        <p className="mt-2">
          Our team is passionate about helping users improve their product
          descriptions for better visibility and sales.
        </p>
      </div>
    </div>
  );
};

export default About;
