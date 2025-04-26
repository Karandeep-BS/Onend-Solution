export default function First() {
    return (
        <div className=" w-full h-[60vh] flex flex-col justify-center overflow-hidden items-center">
            <div className=" w-[89.2vw] h-[27.8vh]   relative flex flex-row">
                <div className="w-[9vw]  h-full relative">
                    <div className="">
                        <img 
                        className=""
                        src="Images/logo.png"
                        />
                    </div>

                    <div className="Socials justify-evenly w-full flex flex-row bottom-[3vh] absolute ">
                        <div className="">
                            <img 
                            className="w-[2vw] h-[4vh]"
                            src="Images/Twitter.png"
                            />
                        </div>
                        <div className="">
                            <img 
                            className="w-[2vw] h-[4vh]"
                            src="Images/Fb.png"
                            />
                        </div>
                        <div className="">
                            <img 
                            className="w-[2vw] h-[4vh]"
                            src="Images/insta.png"
                            />
                        </div>
                    </div>

                    
                </div>

                <div className="w-[70%] h-full  right-0 absolute flex justify-evenly ">
                    <div className="Texts font-worksans font-medium text-[3.4vh] flex flex-col w-[6vw] h-[20.8vh]  text-left justify-evenly text-white">
                        <span>Work</span>
                        <span>About</span>
                        <span>Careers</span>
                    </div>
                    <div className="Texts w-[8.6vw] h-[20.8vh] relative text-white  ">
                        <div className="Texts font-worksans font-medium text-[3.4vh] flex flex-col w-[6vw] h-[20.8vh] text-left justify-evenly text-nowrap">
                            <span>Services</span>
                            <span>Blogs</span>
                            <span>Contact us</span>
                        </div>
                    </div>
                    <div className="Texts w-[29.6vw] h-full relative text-white ">

                        <div className="Texts font-worksans font-medium text-[3.4vh] flex flex-col w-[6vw] h-[12.6vh] text-left justify-evenly text-nowrap">
                            <span>Subscribe to our </span>
                            <span>Newsletter</span>
                        </div>


                    <div class="flex w-full h-[10.4vh] text-[3.1vh] overflow-hidden absolute bottom-0 shadow-lg">
                        <input
                            type="email"
                            placeholder="ENTER EMAIL"
                            class="flex-grow px-4 py-3 text-[] text-gray-700 placeholder-gray-500  bg-white focus:outline-none"
                        />
                        <button
                            class=" flex items-center justify-start pl-2  font-semibold text-black bg-[#b6f214] hover:bg-lime-500 transition-colors text-[3.5vh] relative"
                        >
                            SUBMIT
                            <div className=" h-full flex justify-start items-center left-">
                                <svg className=" " xmlns="http://www.w3.org/2000/svg" width="3vw" height="3vh" viewBox="0 0 24 24"><path fill="white" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-6 6l6-6m-6-6l6 6"/></svg>
                            </div>
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
  }