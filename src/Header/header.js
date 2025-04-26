import Hero from "./hero";
import MainNavbar from "./MainNavbar";


export default function Header() {
    return (
        <div className=" w-full h-full flex flex-col overflow-hidden">
            <MainNavbar />
            <Hero />
        </div>
    );
  }