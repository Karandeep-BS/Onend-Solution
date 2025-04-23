import Who from "./whoWeAre";
import InfoImage1 from "../Bg-images/info-bg-image";
import InfoImage2 from "../Bg-images/info-bg-image2";
export default function Info(){
    return (
        <div className="info relative w-[100%] h-[140vh] -z-10 bg-[white] flex justify-center items-end overflow-hidden ">
            <Who />
            <InfoImage1 />
            <InfoImage2 />
        </div>
    );
}