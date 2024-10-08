import React from "react";
import Link from "next/link";
import Image from "next/image";
function NavBar() {
  const navigation = {
    "Home":"/",
    "Experience": "#experience",
    "About me": "#about",
    "Contact me": "#contact",
  };

  return (
    <div className="text-white mb-20 grid grid-cols-1 lg:grid-cols-12 fixed top-0 w-full z-10 bg-black pb-3">
      <div className="font-bold text-4xl col-span-4 place-self-center mb-4 mt-2 lg:float-left">
        <Image src='/images/logo.png' width={70} height={50} alt="logo" className="mt-3"></Image>
      </div>

      <div className="col-span-8 place-self-center lg:float-right">
        <nav className="blog">
          <ul className="flex flex-row space-x-4 ">
            {Object.entries(navigation).map(([label, route]) => (
              <li
                key={route}
                className="text-gray-400 hover:font-bold hover:text-m  lg:text-xl lg:px-5 font-semibold text-sm lg:xl"
              >
                <Link href={route}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
