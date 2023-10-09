import { EducationInfo } from "./EducationInfo";
import { Line } from "./Line";

const EducationCard = () => {
    return(
        <div className="bg-white p-8 flex flex-col items-center">
            <EducationInfo academyName="CEFTI-Sena" actualState="Finalizado" date="2015-2016" certificateTitle="Técnico Programación de Software" certificationDescription="Lorem ipsum y no se que vainas"/>
            <Line size='901'/>
            <EducationInfo academyName="CEFTI-Sena" actualState="Finalizado" date="2015-2016" certificateTitle="Técnico Programación de Software" certificationDescription="Lorem ipsum y no se que vainas"/>
            <Line size='901'/>
            <EducationInfo academyName="CEFTI-Sena" actualState="Finalizado" date="2015-2016" certificateTitle="Técnico Programación de Software" certificationDescription="Lorem ipsum y no se que vainas"/>
            <Line size='901'/>
        </div>
    );
}

export {EducationCard};