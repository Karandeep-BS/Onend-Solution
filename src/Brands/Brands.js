import "./Brands.css"
export default function Brands(){
    return (
        <div className="w-full h-[63vh] bg-[#ffffff] overflow-hidden flex relative justify-center items-center ">
            <div className="w-full h-[40vh] flex flex-col justify-around ">
                <div className="font-Josefinsans font-medium text-[3vh] text-[#000000CC] ">
                BRANDS THE REAL DEAL
                </div>
                <div className="w-full flex flex-row justify-evenly items-center">
                    <div className="logo1  h-[11.8vh] w-[20vw]">
                        <img 
                        className="w-full h-full"
                        src="./images/Cotopaxi-Black.png"
                        />
                    </div>

                    <div className="logo2 h-[14.9vh] w-[15.3vw]">
                        <img 
                        className="w-full h-full"
                        src="./images/disney.png"
                        />
                    </div>

                    <div className="logo3 h-[20vh] w-[19vw]">
                        <img 
                        className="w-full h-full"
                        src="./images/Harman-Black.png"
                        />
                    </div>

                    <div className="logo4 w-[17.2vw] h-[10.1vh]">
                        <img 
                        className="w-full h-full"
                        src="./images/Scouted-Logo-Black.png"
                        />
                    </div>

                    <div className="logo5 w-[19.5vw] h-[8.3vh]">
                        <img 
                        className="w-full h-full"
                        src="./images/Spikeball_Horizontal_Logo_Black.png"
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}