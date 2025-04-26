import "./Boxes.css"
import"./Mobile.css"
export default function Boxes(){
    return(
        <div className="w-[100%] MainBox mt-[3%] h-[60vh] flex items-center relative overflow-hidden justify-center flex-row ">
            <div className="BOX w-[40%] h-[60vh] flex flex-row mr-[5vw] text-nowrap">
                <div className="Svgcontainer h-[80%] w-[5vw] flex flex-col justify-between">
                    <div className=" Svgbox h-[10vh] w-[4.5vw] flex justify-end items-center">
                        <img 
                        className="Svg-icons h-[6vh]"
                        src="Images/Icon.svg"
                        />
                    </div>
                    <div className="Svgbox h-[10vh] w-[4.5vw] flex justify-end items-center">
                        <img 
                        className="Svg-icons h-[6vh]"
                        src="Images/Icon-1.svg"
                        />
                    </div>
                    <div className="Svgbox h-[10vh] w-[4.5vw] flex justify-end items-center">
                        <img 
                        className="Svg-icons h-[6vh]"
                        src="Images/Icon-2.svg"
                        />
                    </div>
                    
                </div>
                <div className="h-[80%] w-[100%] flex flex-col justify-between ">
                    <div className="h-[] BoxContainers w-[100%] ml-[5vh] flex items-start flex-col ">
                        <div className="Default BigText text-[4vh] text-[white] font-worksans font-medium leading-[130%] tracking-normal pb-[1.5vh]">Web Design and Development</div>
                        <div className="MobileText hidden BigText text-[4vh] text-[white] font-worksans font-medium leading-[2vh] tracking-normal ">Web Design and</div>
                        <div className="MobileText hidden BigText text-[4vh] text-[white] font-worksans font-medium leading-[4vh] tracking-normal pb-[1.5vh]">Development</div>
                        <div className="SmallText font-Josefinsans font-[400]  text-[2.5vh] text-[gray]">Product agency that relates people relations</div>
                    </div>
                    <div className="BoxContainers h-[] w-[100%] ml-[5vh] flex items-start flex-col">
                        <div className="BigText text-[4vh] text-[white] font-worksans font-medium pb-[1.5vh]">Strategy and Planning</div>
                        <div className="SmallText font-Josefinsans font-normal text-[2.5vh] text-[gray]">Product agency that relates people relations</div>
                    </div>
                    <div className="BoxContainers h-[] w-[100%] ml-[5vh] flex items-start flex-col">
                        <div className="BigText text-[4vh] text-[white] font-worksans font-medium pb-[1.5vh]">Digital Marketing</div>
                        <div className="SmallText font-Josefinsans font-normal text-[2.5vh] text-[gray]">Product agency that relates people relations</div>
                    </div>
                </div>
            </div>


            <div className="BOX w-[40%] h-[60vh] flex flex-row ml-[5vw] text-nowrap">
                <div className="h-[80%] Svgcontainer w-[5vw] flex flex-col justify-between">
                    <div className="h-[10vh] Svgbox w-[4.5vw] flex justify-center items-center">
                        <img 
                        className=" Svg-icons h-[6vh]"
                        src="Images/Icon-3.svg"
                        />
                    </div>
                    <div className="Svgbox h-[10vh] w-[4.5vw] flex justify-end items-center">
                        <img 
                        className="Svg-icons h-[6vh]"
                        src="Images/Icon-4.svg"
                        />
                    </div>
                    <div className="Svgbox h-[10vh] w-[4.5vw] flex justify-end items-center">
                        <img 
                        className=" Svg-icons h-[6vh]"
                        src="Images/Icon-5.svg"
                        />
                    </div>
                    
                </div>
                <div className="h-[80%] w-[100%] flex flex-col justify-between ">
                    <div className="BoxContainers h-[] w-[100%] ml-[5vh] flex items-start flex-col ">
                        <div className="BigText text-[4vh] text-[white] font-worksans font-medium leading-[130%] tracking-normal pb-[1.5vh]">Branded Mobile Apps</div>
                        <div className="SmallText font-Josefinsans font-[400]  text-[2.5vh] text-[gray]">Product agency that relates people relations</div>
                    </div>
                    <div className="BoxContainers h-[] w-[100%] ml-[5vh] flex items-start flex-col">
                        <div className="BigText text-[4vh] text-[white] font-worksans font-medium pb-[1.5vh]">Photography and Video</div>
                        <div className="SmallText font-Josefinsans font-normal text-[2.5vh] text-[gray]">Product agency that relates people relations</div>
                    </div>
                    <div className="BoxContainers h-[] w-[100%] ml-[5vh] flex items-start flex-col">
                        <div className="BigText text-[4vh] text-[white] font-worksans font-medium pb-[1.5vh]">AR and 3D Animation</div>
                        <div className="SmallText font-Josefinsans font-normal text-[2.5vh] text-[gray]">Product agency that relates people relations</div>
                    </div>
                </div>
            </div>
        </div>
    )
}