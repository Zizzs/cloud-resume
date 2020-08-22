import React from "react";

function Skills() {
  const languages = ["Javascript", "C#", "Python", "PHP"];
  const frameAndLib = [
    "Node.js",
    "React.js",
    "Redux",
    "SQL",
    "Angular",
    "jQuery",
    "MongoDB",
    "HTML",
  ];
  const technical = [
    "Cloud Engineering",
    "Cloud Architecture",
    "Cloud Security",
    "Debugging",
    "Testing",
    "Team Management",
    "Agile Development",
    "Fast Typer",
  ];
  const languageDiv = languages.map((index) => (
    <p className="text-center text-black bg-mainSoftGray border-red-500 border-2 text-lg sm:text-4xl xl:text-2xl">
      {index}
    </p>
  ));
  const frameAndLibDiv = frameAndLib.map((index) => (
    <p className="text-center text-black bg-mainSoftGray border-green-500 border-2 text-lg sm:text-4xl xl:text-2xl">
      {index}
    </p>
  ));
  const technicalDiv = technical.map((index) => (
    <p className="text-center text-black bg-mainSoftGray border-blue-500 border-2 text-lg sm:text-4xl xl:text-2xl">
      {index}
    </p>
  ));
  return (
    <div>
      <div className="bg-mainSoftGray">
        <p className="text-mainBlack text-left text-4xl sm:text-6xl">
          Alex Williams
        </p>
        <div className="w-full mt-12 text-white bg-mainGunmetal">
          <p className="text-center text-black bg-mainSoftGray text-lg sm:text-5xl xl:text-2xl">
            Languages
          </p>
          <div className="grid sm:gap-4 xl:grid-cols-4 p-5">{languageDiv}</div>
          <p className="text-center text-black bg-mainSoftGray text-lg sm:text-5xl xl:text-2xl">
            Frameworks and Libraries
          </p>
          <div className="grid sm:gap-4 xl:grid-cols-4 p-5">
            {frameAndLibDiv}
          </div>
          <p className="text-center text-black bg-mainSoftGray text-lg sm:text-5xl xl:text-2xl">
            Technical Skills
          </p>
          <div className="grid sm:gap-4 xl:grid-cols-4 p-5">{technicalDiv}</div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
