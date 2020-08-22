import React from "react";

function Experience() {
  return (
    <div className="bg-mainSoftGray">
      <p className="text-mainBlack text-left text-6xl">Alex Williams</p>

      <div className="w-full h-secondMain mt-12 text-white bg-mainGunmetal border-mainDarkBlue border-4">
        <div className="p-5 grid grid-rows-2">
          <div>
            <p className="text-base text-5xl lg:text-3xl">
              Epicodus - Instructor - April 2019 to June 2019
            </p>
            <p>
              Worked with aspiring Web Developers in building their fundamental
              programming skills. Participated and lead the student stand-ups.
              Managed student trade shows to preview their work to other
              students and employers. Graded student's code reviews weekly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
