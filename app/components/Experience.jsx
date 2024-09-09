"use client";
import React from "react";
import Link from "next/link";

function About() {
  const experiences = [
    {
      company: "Mohawk Industries",
      role: "Software Developer Intern",
      date: "05/2023 - 08/2023",
      location: "Calhoun, GA", // Fixed typo: "Calhund" to "Calhoun"
      link: "https://mohawkind.com/",
      jobDes: [
        `Enhanced application efficiency by optimizing code and refactoring components, reducing
        runtime 20% and launch time 35%, contributing to more efficient business operations and
        product development.`,
        `Translated legacy Visual Basic code to Python, creating maintainable and scalable architecture
        that reduced technical debt 30% and aligned with modern software design patterns.`,
        `Revamped user interface with TTKBootstrap, improving design and usability for a more intuitive
        user experience.`,
        `Collaborated with cross-functional teams, gathering feedback and refining solutions, ensuring
        alignment with business objectives and user needs and enhancing overall quality of IT products.`
      ],
      skills: ["Python", "Tkinter", "SQL", "Git",'TTKBootstrap','Visual Basic','Microsoft SQL Server','BitBucket','Technical Debt Reductions','Teamwork','Cross-functional Collaboration'],
    },
    {
      company: "Virtucom",
      role: "IT Technician Intern",
      date: "05/2022 - 08/2022",
      location: "Peachtree Corners, GA", // Fixed typo: "corner" to "Corners"
      link: "https://virtucom.com/",
      jobDes: [
        `Installed operating systems and security protocols across 500+ devices, ensuring network
        security and consistent performance, aligning with enterprise IT standards.`,
        `Provided IT support for smart panels, PCs, Chromebooks, and laptops, effectively
        troubleshooting issues that enhanced system functionality and user satisfaction.`,
        `Coordinated deployment schedules with school, delivering timely and efficient installation and
        setup of IT equipment.`
      ],
      skills: ["Communication", "Networking", "Customer Service", "Operating Systems",'IT Troubleshooting & Support'],
    },
  ];

  return (
    <section className="mt-11" id="experience">
      <div className="mt-50 text-white font-bold">
        <h1 className="animate-bounce underline xl:text-3xl sm:text-xl ml-3 text-center lg:float-left lg:ml-28" >
          Work Experience
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
            className="grid lg:grid-cols-3 col-span-2 border-2 rounded-xl p-14 m-5 border-green-400 border-opacity-50 hover:border-opacity-90 hover:border-3"
          >
            <div className="col-span-2">
              <dl>
                {experience.jobDes.map((desc, index) => (
                  <li key={index} className="mt-2 mr-2">
                    {desc}
                  </li>
                ))}
              </dl>
            </div>
            <div className="col-span-1 mt-2 lg:border-l-2">
              <div className="pl-2">Skills/Technologies:</div>
              <div className="pl-4">
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
