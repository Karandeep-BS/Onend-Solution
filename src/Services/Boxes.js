import "./Boxes.css"
export default function Boxes(){
    return(
        <div className="w-[100%] mt-[3%] h-[60vh] flex items-center relative overflow-hidden justify-center flex-row ">
            <div className="BOX w-[40%] h-[60vh] flex flex-row mr-[5vw] text-nowrap">
                <div className="h-[80%] w-[5vw] flex flex-col justify-between">
                    <div className="h-[10vh] w-[4.5vw] flex justify-end items-center">
                        <img 
                        className="h-[6vh]"
                        src="./images/icon.svg"
                        />
                    </div>
                    <div className="h-[10vh] w-[4.5vw] flex justify-end items-center">
                        <img 
                        className="h-[6vh]"
                        src="./images/icon (1).svg"
                        />
                    </div>
                    <div className="h-[10vh] w-[4.5vw] flex justify-end items-center">
                        <img 
                        className="h-[6vh]"
                        src="./images/icon (2).svg"
                        />
                    </div>
                    
                </div>
                <div className="h-[80%] w-[100%] flex flex-col justify-between ">
                    <div className="h-[] w-[100%] ml-[5vh] flex items-start flex-col ">
                        <div className="text-[4vh] text-[white] font-worksans font-medium leading-[130%] tracking-normal pb-[1.5vh]">Web Design and Development</div>
                        <div className="font-Josefinsans font-[400]  text-[2.5vh] text-[gray]">Product agency that relates people relations</div>
                    </div>
                    <div className="h-[] w-[100%] ml-[5vh] flex items-start flex-col">
                        <div className="text-[4vh] text-[white] font-worksans font-medium pb-[1.5vh]">Strategy and Planning</div>
                        <div className="font-Josefinsans font-normal text-[2.5vh] text-[gray]">Product agency that relates people relations</div>
                    </div>
                    <div className="h-[] w-[100%] ml-[5vh] flex items-start flex-col">
                        <div className="text-[4vh] text-[white] font-worksans font-medium pb-[1.5vh]">Digital Marketing</div>
                        <div className="font-Josefinsans font-normal text-[2.5vh] text-[gray]">Product agency that relates people relations</div>
                    </div>
                </div>
            </div>


            <div className="BOX w-[40%] h-[60vh] flex flex-row ml-[5vw] text-nowrap">
                <div className="h-[80%] w-[5vw] flex flex-col justify-between">
                    <div className="h-[10vh] w-[4.5vw] flex justify-center items-center">
                        <img 
                        className="h-[6vh]"
                        src="./images/icon (3).svg"
                        />
                    </div>
                    <div className="h-[10vh] w-[4.5vw] flex justify-end items-center">
                        <img 
                        className="h-[6vh]"
                        src="./images/Icon (4).svg"
                        />
                    </div>
                    <div className="h-[10vh] w-[4.5vw] flex justify-end items-center">
                        <img 
                        className="h-[6vh]"
                        src="./images/icon (5).svg"
                        />
                    </div>
                    
                </div>
                <div className="h-[80%] w-[100%] flex flex-col justify-between ">
                    <div className="h-[] w-[100%] ml-[5vh] flex items-start flex-col ">
                        <div className="text-[4vh] text-[white] font-worksans font-medium leading-[130%] tracking-normal pb-[1.5vh]">Branded Mobile Apps</div>
                        <div className="font-Josefinsans font-[400]  text-[2.5vh] text-[gray]">Product agency that relates people relations</div>
                    </div>
                    <div className="h-[] w-[100%] ml-[5vh] flex items-start flex-col">
                        <div className="text-[4vh] text-[white] font-worksans font-medium pb-[1.5vh]">Photography and Video</div>
                        <div className="font-Josefinsans font-normal text-[2.5vh] text-[gray]">Product agency that relates people relations</div>
                    </div>
                    <div className="h-[] w-[100%] ml-[5vh] flex items-start flex-col">
                        <div className="text-[4vh] text-[white] font-worksans font-medium pb-[1.5vh]">AR and 3D Animation</div>
                        <div className="font-Josefinsans font-normal text-[2.5vh] text-[gray]">Product agency that relates people relations</div>
                    </div>
                </div>
            </div>
        </div>
    )
}