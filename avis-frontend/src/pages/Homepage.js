import React from "react";
import MainBanner from "../components/MainBanner";
import DonationSteps from "../components/DonationProcess"
const Homepage = () => {
  return (
    // mainbanner component
    
    <div className="bg-gray-100 min-h-screen">
      <MainBanner />

      <DonationSteps />

    </div>
  );
};

export default Homepage;
