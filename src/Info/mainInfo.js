import Info from "./info"
import Video from "./videos"
export default function MainInfo(){
    return(
        <div className="w-[100%] flex justify-center  relative">
            <Video />
            <Info />
        </div>
    )
}