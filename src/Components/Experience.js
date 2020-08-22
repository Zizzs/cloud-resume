import React from "react";

function Experience() {
  return (
    <div className="bg-mainSoftGray">
      <p className="text-mainBlack text-left text-4xl sm:text-6xl">
        Alex Williams
      </p>

      <div className="w-full mt-12 text-white bg-mainGunmetal border-mainDarkBlue border-4">
        <div className="p-5">
          <div>
            <p className="text-lg sm:text-3xl lg:text-3xl">
              Sleepless Inc | Software Engineer | June 2019 to October 2019
            </p>
            <hr />
            <p className="text-base sm:text-xl lg:text-xl">
              Maintained a PHP/SQL Back-End and PHP/Javascript Front-End for
              legal medical data. Majority of the work composed of performing
              routine bug fixes and testing to create a better user experience
              for the company using the application. Back-End development
              consisted of adding new code to the existing API and archiving old
              data. Front-End development consisted primarily of fixing bugs,
              creating new tools and converting old PHP to modern ES6 Javascript
            </p>
            <p className="text-lg sm:text-3xl lg:text-3xl mt-5">
              Epicodus | Instructor | April 2019 to June 2019
            </p>
            <hr />
            <p className="text-base sm:text-xl lg:text-xl">
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
