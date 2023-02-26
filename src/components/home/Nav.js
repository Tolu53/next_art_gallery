import React ,{useState} from 'react'
import img1 from '@/assets/img1.jpg'
import img2 from '@/assets/img2.jpg'
import img3 from '@/assets/img3.jpg'
import img4 from '@/assets/img4.jpg'
import Image from 'next/image';
import { FaTimes} from 'react-icons/fa'
import Link from 'next/link'

export default function Heroimgs(){


    const  [isOpen, toggleOpen ] = useState(false);
    const links = [{
        id:1,
        src:img1,
        title:"Home",
        link:"home",
    },{
        id:2,
        src:img2,
        title:"About",
        link:"about",
    },{
        id:3,
        src:img3,
        title:"Film",
        link:"film",
    },{
        id:4,
        src:img4,
        title:"Photography",
        link:"photography",
    },{
        id:5,
        src:img1,
        title:"Art",
        link:"art",
    }]
    return(
        <div>
        <div className='duration-1000'>
            
            <div className='flex items-center justify-center duration-1000 z-50'>
                
            <button onClick={() => toggleOpen(!isOpen)} className='px-4 text-white  bg-red-600 absolute bottom-28 md:bottom-80 lg:bottom-12  hover:scale-110 active:scale-90 z-50 active:rounded-[100%] duration-1000'>
            { isOpen ? < FaTimes size={30} className='duration-500' />: "See More"}
            </button>
{isOpen  && (<div className='bg-black w-full h-[50vw] md:h-[30vw] p-5 absolute bottom-0 justify-center items-center duration-500 flex'>
<div className='flex justify-center items-center text-white  duration-1000'>
            {links.map(({ id, title, src,link}) =>(
                <Link href={link} > 
                <div key={id} className=' mx-2 cursor-pointer first-letter:capitalize font-medium
                hover:scale-105 duration-1000 list-none  '>
                 <a className='text-md w-full'>{title}</a>
                 <Image src={src} alt={title} className=' w-[20vw] object-cover aspect-video ' />
                 </div> 
                 </Link>
          
        ))
        }
            </div>
</div>)}

       
            </div>
        </div>
    </div>
    )
}