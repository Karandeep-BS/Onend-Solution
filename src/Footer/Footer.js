import First from "./firstPart";
import Secound from "./SecoundPart";
export default function Footer() {
    return (
        <div className=" w-full h-[75vh] flex flex-col overflow-hidden bg-black relative">
            <First />
            <Secound />
        </div>
    );
  }