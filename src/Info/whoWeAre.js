import './WHO.css';
export default function Who(){
    return (
        <div className=" w-[90vw] h-[60vh] mb-[5vh] flex flex-col items-center justify-evenly ">
            <div className="text-[3vh] mt-[8vh] font-Josefinsans leading-[1.5vh] font-medium tracking-[0px] ">
                WHO ARE WE
            </div>

            <div 

            className="OTD text-[7vh] sm:text-[5.8vh] text-nowrap font-worksans font-medium leading-[9vh] tracking-[0px] my-[2vh] flex flex-col">
            <span>Onend is a digital solution for a product agency</span>
            <span>that relates people relations with products, story</span>
            <span>development, and other services.</span>
            </div>

            <div className="w-[25vw] h-[10vh] bg-[#B6F214] flex items-center justify-center">
                <div
                className=" GET font-worksans font-medium text-[3vh] text-nowrap ">
                Get a free consultation
                </div>

                <div className="ml-[1vh]" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-6 6l6-6m-6-6l6 6"/></svg>
                </div>
            </div>
        </div>
    );
}