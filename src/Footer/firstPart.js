export default function First() {
    return (
        <div className=" w-full h-[60vh] flex flex-col justify-center overflow-hidden items-center">
            <div className=" w-[89.2vw] h-[27.8vh]   relative flex flex-row">
                <div className="w-[9vw]  h-full relative">
                    <div className="">
                        <img 
                        className=""
                        src="./images/logo.png"
                        />
                    </div>

                    <div className="Socials justify-evenly w-full flex flex-row bottom-[3vh] absolute ">
                        <div className="">
                            <img 
                            className="w-[2vw] h-[4vh]"
                            src="./images/Twitter.png"
                            />
                        </div>
                        <div className="">
                            <img 
                            className="w-[2vw] h-[4vh]"
                            src="./images/Fb.png"
                            />
                        </div>
                        <div className="">
                            <img 
                            className="w-[2vw] h-[4vh]"
                            src="./images/insta.png"
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
                            class="flex items-center justify-center px-6 text-sm font-semibold text-black bg-[#b6f214] hover:bg-lime-500 transition-colors text-[3.1vh]"
                        >
                            SUBMIT
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-4 h-4 ml-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
  }