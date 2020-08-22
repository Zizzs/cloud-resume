import React from "react";
import CCP from "../assets/Images/AWS-CloudPractitioner.png";

function Certifications() {
  return (
    <div className="bg-mainSoftGray">
      <p className="text-mainBlack text-left text-4xl sm:text-6xl">
        Alex Williams
      </p>

      <div className="w-full mt-12 text-white bg-mainGunmetal border-mainDarkBlue border-4">
        <div className="p-5">
          <div>
            <p className="text-lg sm:text-3xl lg:text-3xl">Certifications</p>
          </div>
          <hr />
          <div className="p-2 sm:p-10 xl:grid xl:grid-cols-2">
            <div>
              <img
                className="xl:w-2/4 mx-auto"
                src={CCP}
                alt="Certified Cloud Practitioner Badge"
              />
              <p className="text-center sm:text-3xl xl:text-base">
                Validation Number: 15ER3B9CN2R1QEGB
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certifications;
