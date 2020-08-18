import React from "react";
import photo from "../assets/Images/PortfolioPhoto.jpg";

function Home() {
  return (
    <div className="bg-mainLight w-10/12 h-main m-auto mt-16 grid grid-cols-2">
      <div>
        <img
          className="w-2/3 m-auto mt-5 border-mainDark border-4"
          src={photo}
          alt="Myself Alex Williams"
        />
      </div>
      <div>
        <p className="text-mainDark">
          My name is Alex Williams and I am a Software Engineer looking to
          improve my skills in using the AWS cloud based services.
        </p>
      </div>
    </div>
  );
}

export default Home;
