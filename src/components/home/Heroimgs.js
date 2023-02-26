import Image from "next/image"
import img1 from '@/assets/img1.jpg'
import img2 from '@/assets/img2.jpg'
import img3 from '@/assets/img3.jpg'
import img4 from '@/assets/img4.jpg'
import Link from "next/link"
export default function Heroimgs(){

    return(
        <div className="w-full flex justify-around z-40 items-center h-screen ">
            <div className="w-1/6">
            <Link href="/about"><Image src={img1} /></Link>
            </div>
            <div className="w-1/6">
            <Image src={img2}  />
            </div>
            <div className="w-1/6">
            <Image src={img3}  />
            </div>
        </div>


    )}