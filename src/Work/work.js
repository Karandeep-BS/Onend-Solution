import WText from "./WText"
import Slides from "./Slides"
import WorkImage from "../Bg-images/work-bg-image"
import "./Mobile.css"
export default function Work(){
    return(
        <div className="w-full WorkMain h-svh bg-white overflow-hidden flex relative  ">
            <WText />
            <Slides />
            <WorkImage />
        </div>
    )
}