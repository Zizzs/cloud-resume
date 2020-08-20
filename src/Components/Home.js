import React from "react";
import photo from "../assets/Images/PortfolioPhoto.jpg";

function Home() {
  return (
    <div className="bg-mainSoftGray h-main w-full relative">
      <div>
        <p className="text-mainBlack text-center relative text-6xl">
          Alex Williams
        </p>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <img
            className="w-2/3 m-auto mt-12 border-mainMaroon border-4"
            src={photo}
            alt="Myself Alex Williams"
          />
        </div>
        <div className="mt-12 h-secondMain text-white bg-mainGunmetal border-mainMaroon border-4">
          <div className="p-5 grid grid-rows-6 mt-24">
            <p className="text-2xl row-span-5">
              I am Software Engineer and Frontend Developer focusing on AWS
              Cloud Based Technologies. Over the past two years, I have gone
              from no coding background to working professionally and learning
              new frameworks and technologies.
            </p>
            <div className="">
              <p>Alex Williams</p>
              <p>Zizzs17@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
