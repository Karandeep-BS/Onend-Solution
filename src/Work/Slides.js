import "./Work.css"

export default function Slides() {
    return (
        <div className="w-[60%] h-full overflow-hidden flex items-center relative">
            <div className="w-full h-[90vh] flex flex-row overflow-hidden relative">
                <div className="bg-black opacity-60 rounded-full h-[10vh] w-[10vh] absolute top-[50vh] right-[18vh] flex justify-center items-center z-50">
                    <div className=" flex z-10">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-6 6l6-6m-6-6l6 6"/></svg>
                    </div>
                </div>
                
                {/* =============================[Slide 1]=========================== */}
                <div className="w-[50vw] SlideClass h-[90vh] bg-black mr-[1vw] relative flex justify-center ">
                    <div className="w-[80%] h-[20vh] bottom-[2vh] absolute text-left">
                        <div className="flex flex-row">
                            <div className="text-[3vh] mt-[1vh] z-10 text-white text-nowrap  font-worksans font-medium leading-6vh]">
                            Conlete - Mobile App
                            </div>
                        </div>
                        
                        <div className="flex flex-row mt-[0.9vh]">
                            <div className="text-[#B6F214] mt-[0.9vh] font-worksans font-medium text-[2.5vh] z-10">
                                CASE STUDIES
                            </div>
                            <div className=" ml-[1vw] mt-[0.9vh] z-10">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#B6F214" stroke="#B6F214" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-6 6l6-6m-6-6l6 6"/></svg>
                            </div>
                        </div>
                    </div>
                    <img 
                        className="w-full h-full object-cover  opacity-40 absolute top-0 left-0"
                        src=".Images/Slides-1.jpg"
                        alt="Slide 1"
                    />
                </div>

                {/* =============================[Slide 2]=========================== */}
                <div className="w-[45vw] SlideClass h-[90vh] bg-black mr-[1vw] relative flex justify-center">
                    <div className="w-[80%] h-[20vh] bottom-[2vh] absolute text-left">
                        <div className="flex flex-row">
                            <div className="text-[3vh] mt-[1vh] z-10 text-white text-nowrap  font-worksans font-medium leading-6vh]">
                            NFT - Website
                            </div>
                        </div>
                        
                        <div className="flex flex-row mt-[0.9vh]">
                            <div className="text-[#B6F214] mt-[0.9vh] font-worksans font-medium text-[2.5vh] z-10">
                                CASE STUDIES
                            </div>
                            <div className=" ml-[1vw] mt-[0.9vh] z-10">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#B6F214" stroke="#B6F214" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-6 6l6-6m-6-6l6 6"/></svg>
                            </div>
                        </div>
                    </div>
                    <img 
                        className="w-full h-full object-cover opacity-40 absolute top-0 left-0"
                        src=".Images/Slides-2.jpg"
                        alt="Slide 2"
                    />
                </div>

                {/* =============================[Slide 3]=========================== */}
                <div className="w-[30vh] SlideClass h-[90vh] bg-black relative overflow-hidden flex justify-center">
                    <div className="w-[80%] h-[20vh] bottom-[2vh] ml-[7vh] absolute text-left">
                        <div className="flex flex-row">
                            <div className="text-[3vh] mt-[1vh] z-10 text-white text-nowrap  font-worksans font-medium leading-6vh]">
                            Nursury - Website
                            </div>
                        </div>
                        
                        <div className="flex flex-row mt-[0.9vh]">
                            <div className="text-[#B6F214] text-nowrap mt-[0.9vh] font-worksans font-medium text-[2.5vh] z-10">
                                CASE STUDIES
                            </div>
                            <div className=" ml-[1vw] mt-[0.9vh] z-10">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#B6F214" stroke="#B6F214" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-6 6l6-6m-6-6l6 6"/></svg>
                            </div>
                        </div>
                    </div>
                    <img 
                        className="w-[140%] h-full object-cover opacity-40 absolute top-0 left-[-4%]"
                        src=".Images/Slides-3.png"
                        alt="Slide 3"
                    />
                </div>

            </div>
        </div>
    );
}
