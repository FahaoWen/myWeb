import Image from "next/image";
import HeaderSection from "./components/HeaderSection";
import NavBar from "./components/NavBar";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import About from "./components/About";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="mb-28">
      <NavBar/>
      </div>
      <container className ='container mx-auto py-4 px-12'>
      <HeaderSection />
      </container>
      <Experience />
      <About/>
      <Contact />
    </main>
  );
}
