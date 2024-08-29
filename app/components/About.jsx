"use client";
import React from "react";
import Link from "next/link";

function About() {
  const experiences = [
    {
      company: "Mohawk Industries",
      role: "Systems Developer Intern",
      date: "05/2023 - 08/2023",
      location: "Calhoun, GA", // Fixed typo: "Calhund" to "Calhoun"
      link: "https://mohawkind.com/",
      jobDes: [
        "Updated 20-year-old VBA programs into a high-performance module-based design using Python.",
        "Rebuilt the user interface using Tkinter, creating a modern and user-friendly platform.",
      ],
      skills: ["Python", "Tkinter", "SQL", "Git"],
    },
    {
      company: "Virtucom",
      role: "Installation Technician",
      date: "05/2022 - 08/2022",
      location: "Peachtree Corners, GA", // Fixed typo: "corner" to "Corners"
      link: "https://virtucom.com/",
      jobDes: [
        "Installed operating systems, security protocols, and configured startup settings on 500+ devices.",
        "Provided IT support to solve client's issues on smart panels, PCs, Chromebooks, and laptops.",
      ],
      skills: ["Communication", "Networking", "Customer Service", "Operating Systems"],
    },
  ];

  return (
    <section className="mt-11">
      <div className="mt-50 text-white font-bold">
        <h1 className="animate-bounce underline xl:text-3xl sm:text-xl ml-3 text-center lg:float-left lg:ml-28">
          Work Experiences
        </h1>
      </div>
      {experiences.map((experience, index) => (
        <div
          key={index} // Added key prop to the parent div
          className="grid grid-cols-1 lg:grid-cols-3 text-white mt-10 place-items-center"
        >
          <div className="col-span-1">
            <Link href={experience.link}>
              <h1 className="font-semibold text-center bg-clip-text hover:text-transparent hover:bg-gradient-to-l hover:from-pink-400 hover:to-green-300 hover:font-extrabold">
                {experience.company}
              </h1>
            </Link>
            <p className="text-center">
              <span className="italic">{experience.role}</span> <br />
              {experience.date}. <br />
              {experience.location}
            </p>
          </div>

          <div
            id="about"
            className="grid lg:grid-cols-3 col-span-2 border-2 rounded-xl p-14 m-5 border-green-400 border-opacity-50 hover:border-opacity-90 hover:border-3"
          >
            <div className="col-span-2">
              <ul>
                {experience.jobDes.map((desc, index) => (
                  <li key={index} className="mt-2 mr-2">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-1 mt-2 lg:border-l-2">
              <div className="pl-2">Skills/Technologies:</div>
              <div className="pl-2">
                <dl>
                  {experience.skills.map((skill, index) => (
                    <li key={index}>{skill}</li> // Added key prop to each skill
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default About;
