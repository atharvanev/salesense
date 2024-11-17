import Button from "@/components/Button";
import NavBar from "../components/NavBar"; // Adjust the path if necessary
import TextBox from "../components/Textbox"; // Make sure the component name is correctly referenced
import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Home = () => {
  return (
    <div>
      {/* Add padding to the main container */}
      <NavBar />

      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Background gradient with blur applied only to the background */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-300 to-orange-200 filter blur-2xl -z-10 "></div>
          <div className="relative p-4 m-4 z-10">
            <div className="space-y-4 mt-6">
              {/* Add margin-top and vertical spacing */}
              <div className="flex text-gray-500 text-sm font-Lexend font-bold space-x-2">
                <IoIosCheckmarkCircleOutline className="text-xl" />
                <div className="pr-2"> Easy To Use</div>
                <IoIosCheckmarkCircleOutline className="text-xl" />
                <div className="pr-2">Reliable</div>
                <IoIosCheckmarkCircleOutline className="text-xl" />
                <div className="pr-2">Constuctive Feedback</div>
              </div>
              <div className="text-7xl font-Lexend">A data driven tool for</div>
              <div className="text-7xl font-Lexend">product descriptions.</div>
              <div className="text-xl m-4 p-4">
                Solutions that bring engagement and increase conversion for your
                listings.
              </div>
            </div>
            <div className="mt-8 text-4xl opacity-20 font-bold shadow-sm ">Enter Your Products description below</div>

          </div>
          
        </div>
        {/* Subheading */}
        <TextBox placeholder="Type here..." />

        <div className="flex justify-center">
          <Button text={"Generate Feedback"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
