import "./Projectbg.css"
import "./BG-Mobile.css"
export default function ProjectImage1(){
    return (
        <div className="P1M h-full w-full absolute">
            <div className="P1 h-[30vh] Pimage1 w-[30vw] z-10 top-[1vh] -left-[10vw] opacity-60 absolute">
                <img 
                className="P1I w-full  "
                src="Images/Project-bg-1.png"
                />
            </div>
        </div>
    )
}