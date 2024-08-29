import Image from "next/image";
import HeaderSection from "./components/HeaderSection";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="mb-28">
      <NavBar/>
      </div>
      <container class ='container mx-auto py-4 px-12'>
      <HeaderSection />
      </container>
      <About />
      <Project/>
      <Contact />
    </main>
  );
}
