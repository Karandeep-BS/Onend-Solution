import "./Work.css"
import "./Mobile.css"
export default function Slides() {
    return (
        <div className="w-[60%] SlidesMain h-full overflow-hidden flex items-center relative">
            <div className="w-full SlidesContainer h-[90vh] flex flex-row  relative">
                <div className="bg-black SliderCircle opacity-60 rounded-full h-[10vh] w-[10vh] absolute top-[50vh] right-[6vw] flex justify-center items-center z-50">
                    <div className=" flex z-10">
                                <svg xmlns="http://www.w3.org/2000/svg" width="4vw" height="4vh" viewBox="0 0 24 24"><path fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-6 6l6-6m-6-6l6 6"/></svg>
                    </div>
                </div>
                
                {/* =============================[Slide 1]=========================== */}
                <div className="w-[50vw] SlideClass h-[90vh] bg-black mr-[1vw] relative flex justify-center ">
                    <div className=" SlidesTextcontainer w-[80%] h-[20vh] bottom-[2vh] absolute text-left">
                        <div className="flex flex-row">
                            <div className="Default BigTextW text-[3vh] mt-[1vh] z-10 text-white text-nowrap  font-worksans font-medium ">
                            Conlete - Mobile App
                            </div>
                            <div className="MobileTextWork flex-col hidden BigTextW text-[3vh] mt-[1vh] z-10 text-white text-nowrap  font-worksans font-medium ">
                                <span>Conlete -</span> 
                                <span>Mobile App</span>
                            </div>
                        </div>
                        
                        <div className="flex flex-row mt-[0.9vh]">
                            <div className="SmallTextG text-[#B6F214] mt-[0.9vh] flex font-worksans font-medium text-[2.5vh] z-10">
                                CASE STUDIES
                            </div>
                            <div className=" ml-[1vw] mt-[0.9vh] z-10">
                                <svg xmlns="http://www.w3.org/2000/svg" width="4vw" height="4vh" viewBox="0 0 24 24"><path fill="#B6F214" stroke="#B6F214" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-6 6l6-6m-6-6l6 6"/></svg>
                            </div>
                        </div>
                    </div>
                    <img 
                        className="BgImages w-full h-full object-cover  opacity-40 absolute top-0 left-0"
                        src="Images/Slides-1.jpg"
                        alt="Slide 1"
                    />
                </div>

                {/* =============================[Slide 2]=========================== */}
                <div className="w-[45vw] SlideClass h-[90vh] bg-black mr-[1vw] relative flex justify-center">
                    <div className="SlidesTextcontainer w-[80%] h-[20vh] bottom-[2vh] absolute text-left">
                        <div className="flex flex-row">
                            <div className="BigTextW text-[3vh] mt-[1vh] z-10 text-white text-nowrap  font-worksans font-medium leading-6vh]">
                            NFT - Website
                            </div>
                        </div>
                        
                        <div className="flex flex-row mt-[0.9vh]">
                            <div className="SmallTextG text-[#B6F214] mt-[0.9vh] font-worksans font-medium text-[2.5vh] z-10">
                                CASE STUDIES
                            </div>
                            <div className=" ml-[1vw] mt-[0.9vh] z-10">
                                <svg xmlns="http://www.w3.org/2000/svg" width="4vw" height="4vh" viewBox="0 0 24 24"><path fill="#B6F214" stroke="#B6F214" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-6 6l6-6m-6-6l6 6"/></svg>
                            </div>
                        </div>
                    </div>
                    <img 
                        className="BgImages w-full h-full object-cover opacity-40 absolute top-0 left-0"
                        src="Images/Slides-2.jpg"
                        alt="Slide 2"
                    />
                </div>

                {/* =============================[Slide 3]=========================== */}
                <div className="w-[30vh] SlideNum3 SlideClass h-[90vh] bg-black relative overflow-hidden flex justify-center">
                    <div className="SlidesTextcontainer w-[80%] h-[20vh] bottom-[2vh] ml-[7vh] absolute text-left">
                        <div className="flex flex-row">
                            <div className="BigTextW text-[3vh] mt-[1vh] z-10 text-white text-nowrap  font-worksans font-medium leading-6vh]">
                            Nursury - Website
                            </div>
                        </div>
                        
                        <div className="flex flex-row mt-[0.9vh]">
                            <div className="SmallTextG text-[#B6F214] text-nowrap mt-[0.9vh] font-worksans font-medium text-[2.5vh] z-10">
                                CASE STUDIES
                            </div>
                            <div className=" ml-[1vw] mt-[0.9vh] z-10">
                                <svg xmlns="http://www.w3.org/2000/svg" width="4vw" height="4vh" viewBox="0 0 24 24"><path fill="#B6F214" stroke="#B6F214" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-6 6l6-6m-6-6l6 6"/></svg>
                            </div>
                        </div>
                    </div>
                    <img 
                        className="BgImages w-[140%] h-full object-cover opacity-40 absolute top-0 left-[-4%]"
                        src="Images/Slides-3.png"
                        alt="Slide 3"
                    />
                </div>

            </div>
        </div>
    );
}
