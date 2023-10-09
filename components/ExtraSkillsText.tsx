import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Line } from "./Line";

interface ExtraSkillsText{
    text: string
}

const ExtraSkillsText = ({text}: ExtraSkillsText) => {
    return(
        <div className="flex items-center">
            <span className="text-yellow-500 pr-2"><IoIosArrowDroprightCircle /></span>
            <span>{text}</span>
        </div>
    );
}

export {ExtraSkillsText}