import { InfoCardText } from "./InfoCardText";
import { Line } from "./Line";

const InfoCard = () => {
    return(
        <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2 text-black1">
                <span className="title">Sobre mí:</span>
                <InfoCardText text_1="Edad" text_2="23"/>
                <InfoCardText text_1="Ciudad" text_2="Medellín"/>
                <InfoCardText text_1="Celular" text_2="+573207256513"/>
                <InfoCardText text_1="Github" text_2="Pedrops26"/>
                <Line size='220'/>
            </div>
        </div>
    );
}

export {InfoCard};