import React from "react";

function Projects() {
  const projects = [
    {
      title: "Cloud Resume",
      description: "This website, a AWS cloud hosted portfolio and resume.",
      link: "https://github.com/Zizzs/cloud-resume",
    },
    {
      title: "Void, MERN Stack PBBG",
      description:
        "Void is an in development Persistant Browser Based Game focusing on RPG style mechanics set in a multi-dimensional space themed world.",
      link: "https://github.com/Zizzs/MERN-Stack-RPG",
    },
  ];

  const projectsDiv = projects.map((index) => (
    <div>
      <br />
      <p className="text-xl sm:text-5xl xl:text-3xl">{index.title}</p>
      <p className="text-base sm:text-3xl xl:text-base">{index.description}</p>
      <p>
        <a
          className="text-blue-300 hover:text-blue-200 text-base sm:text-2xl xl:text-base"
          href={index.link}
        >
          Github Repo Link
        </a>
      </p>
    </div>
  ));
  return (
    <div>
      <div className="bg-mainSoftGray">
        <p className="text-mainBlack text-left text-4xl sm:text-6xl">
          Alex Williams
        </p>

        <div className="w-full mt-12 text-white bg-mainGunmetal border-mainDarkBlue border-4">
          <div className="p-5">
            <div>
              <p className="text-lg sm:text-3xl lg:text-3xl">Projects</p>
            </div>
            <hr />
            <div>{projectsDiv}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
