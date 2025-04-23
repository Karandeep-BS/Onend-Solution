import TopTexts from "./toptext"
import Boxes from "./Boxes"
export default function Services(){
    return(
        <div className="w-full h-svh bg-black overflow-hidden flex relative flex-col items-center ">
            <TopTexts />
            <Boxes />
        </div>
    )
}