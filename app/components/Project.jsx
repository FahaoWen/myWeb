import React from 'react'
import Image from 'next/image'
function Project() {
  return (
    <div className='text-white'>
        <div>
        <h1 className="animate-bounce underline xl:text-3xl sm:text-xl ml-3 text-center lg:float-left lg:ml-28">
          Work Experiences
        </h1>
        </div>
        <div className=' grid grid-cols-1 lg:grid-cols-2'> 
        
            <div className='col-span-1 mx-5'>
                <a href="#" class="flex flex-col items-center  rounded-lg shadow md:flex-row md:max-w-xl hover:bg-opacity-50 hover:bg-slate-700 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <Image class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/images/pic.PNG" alt="" width={48} height={96}></Image>
            
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight ">Noteworthy technology acquisitions 2021</h5>
                        <p class="mb-3 font-normal ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                </a>
            </div>

            <div className='col-span-1 mx-5'>
            <a href="#" class="flex flex-col items-center  rounded-lg shadow md:flex-row md:max-w-xl hover:bg-opacity-50 hover:bg-slate-700 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <Image class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/images/pic.PNG" alt="" width={48} height={96}></Image>
                
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight ">Noteworthy technology acquisitions 2021</h5>
                    <p class="mb-3 font-normal ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Project
