export default function Video(){
    return (
        <div className="w-[90vw] h-[90vh] absolute top-[-30vh] flex overflow-hidden flex-col justify-center items-center">
            <div className="w-full flex flex-row bg-black">
                <div className="h-[45vh] w-[50vw] overflow-hidden opacity-30 ">
                    <img
                    className="w-[50vw] h-[75vh]"
                    src="/images/work-1.jpg"
                    />
                </div>
                <div className="h-[45vh] w-[50vw] overflow-hidden opacity-30 ">
                    <img
                    className="w-[50vw] h-[75vh]"
                    src="/images/work-2.jpg"
                    />
                </div>
            </div>
            <div className="w-full flex flex-row bg-black">
                <div className="h-[45vh] w-[50vw]  overflow-hidden opacity-30">
                    <img
                    className="w-[50vw] h-[75vh]"
                    src="/images/work-3.jpg"
                    />
                </div>
                <div className="h-[45vh] w-[50vw]  overflow-hidden opacity-30">
                    <img
                    className="w-[50vw] h-[75vh]"
                    src="/images/work-4.png"
                    />
                </div>
            </div>
            <div className="h-[52px] w-[52px] bg-[#b6f214] absolute flex justify-center items-center ">
            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24"><path fill="#000" d="M18.25 12L8.5 17.629V6.37z"/></svg>
            </div>
        </div>
    )
}