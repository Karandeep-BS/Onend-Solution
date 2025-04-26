import "./Work.css"
import "./Mobile.css"
export default function WText(){
    return(
        <div className=" WorkTextMain w-[40%] h-[100%] overflow-hidden flex items-center ">
            <div className="WorkText w-[50vw] h-[60vh] flex flex-col  ">
                <div className=" OLS w-[50vw] flex flex-col text-[10vh] justify-center text-left font-worksans font-medium ml-[2vh] tracking-[-3h] leading-[10vh]   text-nowrap ">
                    <span className="Default">Our Latest</span>
                    <span className="Default justify-start items-start">Work</span>
                    <span className="MobileTextWork hidden">Our Latest Work</span>
                </div>
                <div className=" OurCase w-[50vw] flex flex-row text-[2.5vh]  text-left font-worksans font-medium ml-[2vh]  leading-[15vh] text-nowrap items-center">
                    <div className="">
                        OUR CASE STUDIES
                    </div>
                    <div className=" ml-[1vw] ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-6 6l6-6m-6-6l6 6"/></svg>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}