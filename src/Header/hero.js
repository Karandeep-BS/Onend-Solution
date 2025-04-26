import HeroImage from "../Bg-images/hero-bg-image";
import "./hero.css"
import "./Mobile.css"

export default function Hero() {
    return (
        <div className="w-full Hero HeroHight relative h-[110vh] bg-[#B6F214] flex float-start justify-center overflow-hidden">
            <HeroImage />
            <div className=" HeroContent  w-full mt-[5%] relative flex">
                <div className="TextHero w-[60%] ml-[2vh] h-[66vh] relative flex flex-col">
                    <div className="svg w-[50%]   absolute bottom-[10%] left-[55%]">
                        <img className="ShapeSvg w-[30vw] h-[30vh]" src="Images/Shape.svg" />
                    </div>

                    <div className="w-full AHeroText text-[11vh] text-nowrap flex flex-col justify-start text-left leading-[100%] tracking-[-0.5vh] font-[500] font-worksans">
                        <span className="default-life-text">Let's build products</span>
                        <span className="default-life-text">together for life</span>

  {/* ==============================================Mobile================================================ */}
                         <div className="hidden show-life-stack  w-full text-nowrap flex-col justify-start text-left leading-[100%] tracking-[-0.5vh] font-[500] font-worksans">
                                <span>Let's build</span>
                                <span>products together</span>
                                <span>for life</span>
                         </div>
                    </div>
{/* ========================================================================================================== */}


                    <div className="w-full BHeroText h-[16vh] mt-[4vh] text-[4vh] text-nowrap flex flex-col justify-evenly text-left leading-[40px] tracking-[0px] font-[400] font-Josefinsans text-[#000000CC] mb-[4vh]">
                        <span className="default-life-text">Onend is a digital solution for a product agency that </span>
                        <span className="default-life-text">relates people relations, story development. </span>
                        {/* ==============================================Mobile================================================ */}
                        <div className="w-full hidden BHeroText show-life-stack h-[16vh] mt-[4vh] text-[4vh] text-nowrap flex-col justify-evenly text-left leading-[40px] tracking-[0px] font-[400] font-Josefinsans text-[#000000CC] mb-[4vh]">
                            <span>Onend is a digital solution for a product </span>
                            <span>agency that relates people relations, story </span>
                            <span> development. </span>
                        </div>
                    {/* ========================================================================================================== */} 
                    </div>

                    

                    <div className="GET-START HeroButton h-[11vh] w-[20vw] bg-white flex items-center justify-center">
                        <div className="GET_START_T text-[2.7vh] font-worksans font-medium leading-[20px] tracking-[0px]">
                            GET STARTE
                        </div>
                        <div className="ml-[1vh] HeroArrow">
                            <svg className="Parrow h-[3vh] w-[3vw]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-6 6l6-6m-6-6l6 6"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="w-[40%] THEBOX left-[8%]  flex flex-col relative">
                    <div className="row-1  flex flex-row">
                        <div className="row-1-box h-[20.6vh] bg-black border-t-[0.3vh] border-l-[0.3vh] border-[white] w-[29.33%]"></div>
                        <div className="row-1-box bg-black border-t-[0.3vh] border-[white] w-[29.33%]"></div>
                        <div className="row-1-box border-y-[0.5vh] border-r-[0.5vh] border-[white] w-[29.33%]"></div>
                        <div className="relative w-[12%] row-1-box">
                            <div className="absolute inset-0 pointer-events-none">
                                <div className="absolute bottom-0 left-0 h-[0.5vh] w-[40%] bg-white" />
                                <div className="absolute top-0 left-0 h-[0.5vh] w-[20%] bg-white" />
                            </div>
                        </div>
                    </div>

                    <div className="row-2 flex flex-row">
                        <div className="row-2-box h-[20.6vh] relative w-[29.33%] border-l-[0.3vh] border-[white]">
                            <div className="absolute inset-0 bg-black [clip-path:polygon(0_0,100%_0,0_100%)]"></div>
                            <div className="absolute inset-0 [clip-path:polygon(100%_100%,100%_0,0_100%)]"></div>
                        </div>
                        <div className="row-2-box bg-black THEBLACK w-[29.33%]">
                        </div>
                        <div className="row-2-box border-b-[0.3vh] border-x-[0.5vh] border-[white] w-[29.33%]"></div>
                        <div className="relative w-[12%] row-2-box">
                            <div className="absolute inset-0 pointer-events-none">
                                <div className="absolute bottom-[-2px] left-0 h-[0.5vh] w-[100%] bg-white" />
                            </div>
                        </div>
                    </div>

                    <div className="row-3 flex flex-row">
                        <div className="row-3-box h-[20.6vh] relative w-[29.33%]">
                            <div className="absolute inset-0 pointer-events-none">
                                <div className="absolute top-0 left-0 h-[0.5vh] w-[100%] bg-white" />
                                <div className="absolute top-0 left-0 w-[0.5vh] h-[40%] bg-white" />
                            </div>
                        </div>
                        <div className="row-3-box relative w-[29.33%]">
                            <div className="absolute inset-0 pointer-events-none">
                                <div className="absolute top-0 left-0 h-[0.5vh] w-[100%] bg-white" />
                                <div className="absolute top-0 left-0 w-[0.5vh] h-[60%] bg-white" />
                            </div>
                        </div>
                        <div className="row-3-box relative w-[29.33%]">
                            <div className="absolute inset-0 pointer-events-none">
                                <div className="absolute top-0 left-0 h-[0.5vh] w-[100%] bg-white" />
                                <div className="absolute BottomLineLeft top-0 left-0 w-[0.5vh] h-[92%] bg-white" />
                                <div className="absolute BottomLineRight top-0 right-0 w-[0.5vh] h-[92%] bg-white" />
                            </div>
                        </div>
                    </div>

                    <div className="HeroBottomCircle h-[40vh] w-[58.66%] border-[0.5vh] border-[white] absolute top-[20.6vh] overflow-hidden right-[12%] rounded-full flex items-center justify-center"> 
                        <div className="HeroBottomFill w-[50%] h-[20.6vh] absolute THEGREEN   border-b-[0.5vh] border-[white] bg-[#b6f214] top-[0px] left-[0px] "></div>
                        <div className="HeroBottomInnerCircle  h-[20.6vh]  flex items-center justify-center relative">
                            <div className="BlackWhiteCircle h-[20vh] w-[20vh]  bg-white border-[red] rounded-full relative overflow-hidden">
                                <div className="absolute  inset-0 bg-black [clip-path:polygon(0_0,100%_0,0_100%)]" />
                            </div>
                            <div className="HeroTopArc w-[6.5vw] h-[11.1vh] absolute -top-[0.16vh] -left-[0.3vw] border-t-[0.5vh] border-l-[0.5vh] border-white rounded-tl-full " />
                            <div className="HeroTopArc2 hidden absolute -top-[0.16vh] -left-[0.3vw] ">
                                <div className="HeroTopArc3 w-[6.5vw] h-[11.1vh] absolute -top-[0.16vh] -left-[0.3vw] border-t-[0.5vh] border-l-[0.5vh] border-white rounded-tl-full " />

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
} 
