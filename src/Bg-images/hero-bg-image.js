import "./BG-Mobile.css"
export default function HeroImage(){
    return (
        <div className=" w-full h-full absolute">
            <div className="h-[60vh] Hero-bg w-[60vw] bottom-[18vh] left-[-25vw] absolute opacity-30">
                <img 
                className=" w-full hero-img  "
                src="Images/hero-image.png"
                />
            </div>
        </div>
    )
}
