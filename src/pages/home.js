import Banner from "@/components/home/Banner";
import Heroimgs from "@/components/home/Heroimgs";
import Nav from "@/components/home/Nav"

export default function About(){

    return(
        <div>
            <div className="bg-black h-screen">
                <Banner />
                <Heroimgs />
                <Nav />
            </div>
        </div>
    )
}