'use client'
import React, {useState} from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
function Contact() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status ==='200'){
        console.log('message sent');
        setEmailSubmitted(true)
    }
  };

  return (
    <section className=" grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let`&apos;` connect</h5>
        <p className="text-[#ADB7BE] bb-4 max-w-md">
          {""}
          I`&apos;`m currently seeking new job opportunities in Software Development
          filed and would love to connect with professionals in the industry.
          Your insights and advice would be invaluable as I navigate this next
          step in my career. Thank you for considering connecting with me.
        </p>

        <div className="socials flex flex-row gap-2">
          <Link href="github.com">
            <Image src={GithubIcon} alt="github icon"></Image>
          </Link>
          <Link href="github.com">
            <Image src={LinkedinIcon} alt="linkedin icon"></Image>
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              type="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              placeholder="xxx@xxxx.com"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="subject"
              type="text"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              placeholder="Just Say hi"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              type="text"
              className="text-white block mb-2 text-sm font-medium"
            >
              Content
            </label>
            <textarea
              name="message"
              id="message"
              required
              placeholder="Leave your message here..."
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <button
            type="submit"
            className=" bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send
          </button>
          {
            emailSubmitted &&(
                <p className="text-green-500 text-sm mt-2">
                    Email sent successfully!
                </p>
            )
          }
        </form>
      </div>
    </section>
  );
}

export default Contact;
