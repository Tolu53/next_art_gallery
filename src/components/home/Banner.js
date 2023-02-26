import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function Banner(){

    return(
        <div className="">
        <div>
          <div className='flex flex-col justify-center items-left w-full h-screen absolute top-0 '>
  <h1 className=' md:text-[10vw] text-7xl px-10 text-white '> Black </h1>
  <Marquee gradient={false} speed={200} pauseOnHovr>
  <div className=' md:text-[10vw] text-7xl flex justify-evenly w-[250vw] duration-300 my-20 -z-10'>
  <Link href="/"><span className='text-green-700'>Film</span> </Link>
  <a href="#"><span className='text-white'>Photography</span> </a>
  <a href="#"><span className='text-green-700'>Art</span> </a>
  </div>
  </Marquee>
  <h1 className=' md:text-[10vw] text-7xl px-10 text-white  '> Display</h1>
          </div>
        </div>
      </div>
    )
}