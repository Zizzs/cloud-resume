import React from "react";
import photo from "../assets/Images/PortfolioPhoto.jpg";

function Home() {
  return (
    <div className="bg-mainSoftGray">
      <p className="text-mainBlack text-left text-4xl sm:text-6xl">
        Alex Williams
      </p>
      <div className="xl:grid xl:grid-cols-2 xl:gap-2">
        <div>
          <img
            className="w-100 m-auto mt-12 border-mainDarkBlue border-4"
            src={photo}
            alt="Myself Alex Williams"
          />
        </div>
        <div className="w-100 h-secondMain mt-12 text-white bg-mainGunmetal border-mainDarkBlue border-4">
          <div className="p-5 grid grid-rows-8">
            <p className="text-base sm:text-5xl xl:text-3xl row-span-6">
              I am Software Engineer and Frontend Developer focusing on AWS
              Cloud Based Technologies. Over the past two years, I have gone
              from no coding background to working professionally and learning
              new frameworks and technologies.
            </p>
            <hr />
            <div className="text-base sm:text-4xl">
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
