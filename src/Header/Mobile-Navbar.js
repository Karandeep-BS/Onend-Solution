import SlidingMenu from "./Menu";
export default function MobileNavbar() {
    return (
        <div className=" w-full h-[12.64vh] bg-[rgb(0,0,0)] flex justify-center items-center">
            <SlidingMenu />
            <div className="logo w-[15vh] h-[6vh] ">
                <img 
                className="w-full h-full "
                src="Images/logo.png"></img>
            </div>
        </div>
    );
  }