'use client'
import React, {useState} from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
function Contact() {

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            access_key: "39e510d7-d0f6-426f-ab66-d5b5f4c84e85",
            name: e.target.name.value,
            email: e.target.email.value,
            content: e.target.content.value,
        }),
    });
    const result = await response.json();
    if (result.success) {
        console.log(result);
        alert('Email sent successfully!');
        e.target.reset();
    }else{
        alert("Fail to sent out email, please try later!")
    }
    }
  return (
    <section className=" grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4" id= 'contact'>
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let&apos; connect</h5>
        <p className="text-[#ADB7BE] bb-4 max-w-md">
          {""}
          I&apos;m currently seeking new job opportunities in Software Development
          filed and would love to connect with professionals in the industry.
          Your insights and advice would be invaluable as I navigate this next
          step in my career. Thank you for considering connecting with me.
        </p>

        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/FahaoWen">
            <Image src={GithubIcon} alt="github icon"></Image>
          </Link>
          <Link href="https://www.linkedin.com/in/fahaowen">
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
              placeholder="Enter your subject here"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="content"
              type="text"
              className="text-white block mb-2 text-sm font-medium"
            >
              Content
            </label>
            <textarea
              name="content"
              id="content"
              required
              placeholder="Leave your message here..."
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <button
            type="submit"
            className=" bg-green-500 hover:bg-green-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send
          </button>
         
        </form>
      </div>
    </section>
  );
}

export default Contact;
