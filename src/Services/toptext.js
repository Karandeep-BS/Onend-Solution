import "./Mobile.css"

export default function TopTexts(){
    return(
        <div className=" TopMain w-[100%] mt-[3%] h-[20vh] flex items-center relative overflow-hidden justify-center flex-col">
            <div className="w-[100%] h-[4vh] mb-[2vh] text-[#FFFFFFCC] flex justify-center items-center relative overflow-hidden leading-[20px] text-[3vh] font-Josefinsans font-medium tracking-normal">
            OUR BEST SERVICES
            </div>

            <div className=" Default w-[100%] h-[9vh] text-nowrap flex items-center justify-center relative overflow-hidden leading-[60px] text-[9vh] font-worksans text-[white] font-medium tracking-normal ">
            We provide end-to-end solutions
            </div>
            <div className="MobileTopText hidden flex-col w-[100%]  text-nowrap items-center justify-center relative overflow-hidden text-[11vw] font-worksans text-[white] font-medium tracking-normal ">
            We provide end-
            <span>to-end solutions</span>
            </div>
        </div>
    )
}