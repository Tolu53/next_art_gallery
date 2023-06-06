import img1 from '@/assets/img1.jpg'
import img2 from '@/assets/img2.jpg'
import img3 from '@/assets/img3.jpg'
import img4 from '@/assets/img4.jpg'
import Image from 'next/image';
import Link from 'next/link';


export default function Art(){


    const data=[{
        id:1,
        title:'The Art of the Deal',
        classy:'w-[20vw] object-cover aspect-video absolute top-[50%] left-[30%] transform -translate-x-1/2 -translate-y-1/2',
        src:img1
    ,},{
    id:2,
    title:'The Art of the Deal',
    classy:'w-[20vw] object-cover aspect-video top-[50%] right-[30%] transform -translate-x-1/2 -translate-y-1/2',
    src:img2}
    ,{
        id:3,
        title:'The Art of the Deal',
        classy:'w-[20vw] object-cover aspect-video',
        src:img3}
        ,{
            id:4,
            title:'The Art of the Deal',
            classy:'w-[20vw] object-cover aspect-video',
            src:img4}]
    return(
        <>
        <div className=' perspect flex justify-center items-center h-screen flex-col overflow-hidden w-full relative'>
        <h1 className='text-5xl'>Art</h1>
<div className=' inner flex justify-center items-center text-white  duration-1000'>
            {data.map(({ id, title, src, classy}) =>(

                <div key={id} className=' mx-2 cursor-pointer first-letter:capitalize font-medium
                hover:scale-105 duration-1000 list-none  '>
                 <a className='text-md w-full'>{title}</a>
                 <Image src={src} alt={title} className={classy} />
                 <div className='desc'>

                 </div>
                 </div>      
        ))
        }         
</div>         
        </div>
        </>
    )
}