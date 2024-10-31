// src/pages/index.js
import NavBar from "../components/NavBar"; // Adjust the path if necessary
import TextBox from "@/components/TextBox"; // Make sure the component name is correctly referenced
import React from 'react';

const Home = () => {
  return (
    <div> {/* Add padding to the main container */}
      <NavBar />
      <div className="mr-4 ml-4">
      <div className="space-y-4 mt-6"> {/* Add margin-top and vertical spacing */}
        <div className="text-3xl font-bold">Home Page</div> {/* Main heading */}
        <div className="text-xl font-semibold ">Enter Your Product&apos;s Description for Feedback to Improve It! </div> {/* Subheading */}

        <TextBox placeholder="Type here..." />
      </div>
      </div>
      
    </div>
  );
};

export default Home;
