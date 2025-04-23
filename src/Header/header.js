import Hero from "./hero";
import Navbar from "./navbar";



export default function Header() {
    return (
        <div className=" w-full h-full flex flex-col overflow-hidden">
            <Navbar />
            <Hero />
        </div>
    );
  }