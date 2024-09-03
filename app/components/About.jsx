'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa";

function About() {

  const aboutMe = [
    { 
      'paragraph':  `
      I grew up in Jiangmen city, Guangdong province, China, where I was surrounded
       by a mix of rich history and cultural heritage. This vibrant city, known for
        its delicious dim sum, really shaped my early years. From a young age, 
        I had a fascination with technology and innovation, which led me to study 
        Information Technology. When I moved to the USA in 2018 as an international student,
         it was a big change—navigating a new culture and language was tough, 
         but it was also an amazing opportunity for growth. Transitioning to 
         life in the US was a challenging but exciting chapter for me. 
         Adapting to a new environment pushed me to expand my skills and embrace 
         new opportunities.
      `,

      'image': "/images/background.jpg"
  },

  { 
    'paragraph':  `
    Staying active is a big part of my life. 
    I make it a point to work out almost every day because
     it keeps me feeling great and helps me stay focused. 
     Whether I’m hitting the gym or going for a run, I find that regular 
     exercise really boosts my mood and keeps me disciplined. One of my
      favorite ways to stay fit is by playing pickleball. It’s a fantastic mix of fun and fitness, 
      and I love the social aspect of it too. Playing pickleball not only helps me stay in shape but
       also lets me unwind and enjoy some friendly competition.
    `,

    'image': "/images/hobby.jpg"
},

  { 
  'paragraph':  `
  Coming out as gay at 21 was a significant and liberating moment for me, 
  especially after moving to the US. Being part of the LGBTQ+ community has 
  been a journey of self-discovery and acceptance. Meeting my partner and becoming more 
  involved in LGBTQ+ culture has been incredibly rewarding. Since coming out, 
  I’ve learned so much about myself and the LGBTQ+ community. Embracing my identity has brought
   me closer to others who share similar experiences and values. It’s been a powerful part of 
   my personal growth, enriching my life and deepening my connections with those around me.
  `,
  'image': "/images/life.jpg"
  },
  ];

  const [aboutState, setAboutState] = useState(2);

  function changeStatue(value){
      setAboutState(value);
  }

  return (
  <section className='text-white mt-20'id='about'>
      <div className="mt-50  font-bold ">
        <h1 className="animate-bounce underline xl:text-3xl sm:text-xl ml-3 text-center lg:float-left lg:ml-28 ">
          About me
        </h1>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-16'>
        <div className='col-span-1 flex justify-center items-center lg:pl-14'>
        <Image
              src={aboutMe[aboutState].image}
              width={280}
              height={280}
              alt="profile pic"
              className='m-0 items-center text-center '
              
            />
        </div>
        <div className='col-span-2 items-center'>
            <div className='grid grid-cols-3 text-center text-xl font-semibold'>
              <div className={`col-span-1 hover:border rounded-xl hover:bg-gray-500 ${aboutState === 0 ? 'border-b-4 border-l-4 border-r-4 border-green-400' : ''}`}>
                <button onClick={() =>changeStatue(0)} className='w-full h-full'>Background</button>
              </div>
              <div className={`col-span-1 hover:border rounded-xl hover:bg-gray-500 ${aboutState === 1 ? 'border-b-4 border-l-4 border-r-4 border-green-400' : ''}`}>
                <button onClick={() =>changeStatue(1)} className='w-full h-full'>Hobby</button>
              </div>
              <div className={`col-span-1 hover:border rounded-xl hover:bg-gray-500 ${aboutState === 2 ? 'border-b-4 border-l-4 border-r-4 border-green-400' : ''}`}>
                <button onClick={() =>changeStatue(2)} className='w-full h-full'>Life</button>
              </div>
            </div>

            <div className='text-center mt-8' >
              <p className='px-9 py-5 leading-8'>{aboutMe[aboutState].paragraph}</p>
            </div>
        </div>
      </div>
      </section>
  )
}

export default About
