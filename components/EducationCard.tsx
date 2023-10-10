import { EducationInfo } from "./EducationInfo";
import { Line } from "./Line";

const EducationCard = () => {
    return(
        <div className="bg-white p-8 flex flex-col items-center">
            <EducationInfo academyName="CEFIT-Sena" actualState="Finalizado" date="Feb, 2015- Nov, 2016" certificateTitle="Técnico Programación de Software" certificationDescription="Programación de Software, conocimientos en Java, JavaScript, PHP, HTML/CSS, MySQL."/>
            <Line size={901} />
            <EducationInfo academyName="Universidad de Antioquia" actualState="Finalizado" date="Ago, 2018- Ago 2023" certificateTitle="Pregrado Ingeniería de Sistemas" certificationDescription="Ingeniero de Sistemas, conocimientos en Desarrollo Web, Gestión de Proyectos, Arquitectura, entre otras áreas."/>
            <Line size={901} />
            <EducationInfo academyName="Politécnico di Torino" actualState="Finalizado" date="Ago, 2023 - Ene, 2025" certificateTitle="Posgrado Desarrollo Web" certificationDescription="Posgrado en Desarrollo Web, conocimientos en diferentes áreas del desarrollo web."/>
            <Line size={901} />
        </div>
    );
}

export {EducationCard};