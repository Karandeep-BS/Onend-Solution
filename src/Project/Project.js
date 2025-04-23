import "./Project.css"
import ProjectImage1 from "../Bg-images/Project-bg-images1"
import ProjectImage2 from "../Bg-images/Project-bg-images2"
export default function Project(){
    return(
        <div className="w-full h-[63vh] bg-[#B6F214] overflow-hidden flex relative justify-center items-center ">
            <ProjectImage1 />
            <ProjectImage2 />
            <div className="ProjectTexes w-[80%] h-[40vh] flex flex-col justify-around items-center relative">
                <div className="SAP font-Josefinsans text-[#000000CC] font-medium text-[3vh]">START A PROJECT</div>
                <div className="font-worksans font-medium text-[10vh]">Let’s work together</div>
                <div className=" GET-START h-[11vh] w-[20vw] bg-white flex items-center justify-center">
                    <div className="GET_START_T text-[2.7vh] font-worksans font-medium leading-[20px] tracking-[0px]  ">
                        GET IN TOUCH
                    </div>
                    <div className="ml-[1vh] ">
                    <svg className="Parrow" xmlns="http://www.w3.org/2000/svg" width="3vw" height="3vh" viewBox="0 0 24 24"><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-6 6l6-6m-6-6l6 6"/></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}