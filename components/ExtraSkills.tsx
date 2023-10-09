import { ExtraSkillsText } from "./ExtraSkillsText";
import { Line } from "./Line";

const ExtraSkills = () => {
    return(
        <div className="flex flex-col gap-3">
            <span className="title text-black">Habilidades extra:</span>
            <div className="text-gray2">
                <ExtraSkillsText text="Experiencia equipos Scrum" />
                <ExtraSkillsText text="Conocimientos GitHub" />
                <ExtraSkillsText text="Conocimientos BD" />
            </div>
            <Line size='220'/>
        </div>
    );
}

export {ExtraSkills}