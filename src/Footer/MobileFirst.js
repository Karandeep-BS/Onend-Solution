import "./Mobile.css";

export default function MobileFirst() {
  return (
    <div className="MobileFirst mt-[4vh] w-full  flex flex-col justify-start overflow-hidden items-center">
      
      {/* =============================[ Top Navigation Links ]=========================== */}
      <div className="right-0 flex">
        <div className="Texts pl-[5vw] font-worksans font-medium text-[3vh] flex flex-col w-[45vw] h-[20.8vh] text-left justify-evenly text-white">
          <span>Work</span>
          <span>About</span>
          <span>Careers</span>
        </div>

        <div className="Texts pl-[5vw] w-[45vw] h-[20.8vh] relative text-white">
          <div className="Texts font-worksans font-medium text-[3vh] flex flex-col w-full h-[20.8vh] text-left justify-evenly text-nowrap">
            <span>Services</span>
            <span>Blogs</span>
            <span>Contact us</span>
          </div>
        </div>
      </div>

      {/* =============================[ Newsletter Section ]=========================== */}
      <div className="flex-col flex h-full w-full justify-start">

        <div className="mt-[5vh] ml-[5vw] Texts font-worksans font-medium text-white text-[3vh] flex flex-col w-[95vw] h-[12.6vh] text-left justify-evenly text-nowrap">
          <span>Subscribe to our</span>
          <span>Newsletter</span>
        </div>

        <div className="ml-[5vw] mt-[2vh] flex w-[95vw] h-[5.5vh] text-[2vh] overflow-hidden bottom-0 shadow-lg">
          <input
            type="email"
            placeholder="ENTER EMAIL"
            className="flex-grow w-[10vw] px-4 py-3 text-gray-700 placeholder-gray-500 bg-white focus:outline-none"
          />
          <button
            className="flex items-center w-[40vw] justify-center font-semibold text-black bg-[#b6f214] hover:bg-lime-500 transition-colors mr-[5vw] text-[2vh] relative"
          >
            SUBMIT
            <div className="h-full flex justify-start items-center">
              <svg
                className=""
                xmlns="http://www.w3.org/2000/svg"
                width="5vw"
                height="5vh"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14m-6 6l6-6m-6-6l6 6"
                />
              </svg>
            </div>
          </button>
        </div>

        {/* =============================[ Logo and Social Media ]=========================== */}
        <div className="mt-[3vh] justify-center items-center w-full flex flex-row relative">
          <div className="h-[7vh] w-[30vw]">
            <img
              className="object-cover"
              src="Images/logo.png"
              alt="Logo"
            />
          </div>

          <div className="Socials justify-end w-[50vw] h-[10vh] items-center flex flex-row">
            <div className="mr-[4vw]">
              <img
                className="w-[8vw] h-[4vh]"
                src="Images/Twitter.png"
                alt="Twitter"
              />
            </div>
            <div className="mr-[4vw]">
              <img
                className="w-[8vw] h-[4vh]"
                src="Images/Fb.png"
                alt="Facebook"
              />
            </div>
            <div className="mr-[4vw]">
              <img
                className="w-[8vw] h-[4vh]"
                src="Images/insta.png"
                alt="Instagram"
              />
            </div>
          </div>
        </div>

      </div>
      <div className=" w-full h-[15vh] flex flex-row font-worksans text-[2vh] text-[#FFFFFFCC] font-normal   overflow-hidden justify-center items-center border-t-[1vh] border-[#FFFFFF33]">
            All Rights Reserved  
            <span className="text-[#b6f214] ml-[1vw]">@ Onend Solutions</span>
        </div>
    </div>
  );
}
