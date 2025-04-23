export default function Navbar() {
    return (
        <div className=" w-full h-[12.64vh] top-[-1.58vh] bg-[rgb(0,0,0)] flex items-center">
            <div className="logo w-[9vw] h-[8.21vh] top-[1.42vh] ml-[6%]">
                <img 
                className="w-full h-full bg-cover "
                src="Images/logo.png"></img>
            </div>

           <div className="w-[80%] flex justify-end">
                <div className="w-[30.09vw] W-S-A h-[3.16vh] flex justify-around text-[2.5vh] text-white font-medium ">
                    <div className="">
                        WORK
                    </div>
                    <div className="">
                        SERVICES
                    </div>
                    <div className="">
                        ABOUT
                    </div>
                    <div className="">
                        CONTACT
                    </div>
                </div>
           </div>
        </div>
    );
  }
