import { EducationCard } from "./EducationCard";
import { Text } from "./Text";
import { MainCards } from "./MainCards";
import { MainMenu } from "./MainMenu";
import { Portfolio } from "./Portfolio";
import { Footer } from "./Footer";
import { SocialMedia } from "./SocialMedia";

const Main = () => {
    return(
        <div className="w-screen bg-gray1 flex flex-col items-center gap-10">
            <MainMenu />
            <Text title="Mi conocimiento" description={<span>He trabajado con Java, C#, PHP y Python por la parte de Backend<br/>
            Actualmente trabajo más con Frontend, manejando HTML/CSS, Javascript, React, Tailwind y NextJS<br/>
            También he manejado MySQL, AzureDevops, Figma, Github y tengo conocimientos sobre trabajar en equipos Scrum</span>}/>
            <MainCards />
            <Text title="Educación" description={<span>Técnico en Programación de Software, CEFIT-Sena<br/>
            Pregrado en Ingeniería de Sistemas, Universidad de Antioquia<br/>
            Cursos de Codeacademy, Udemy, Platzi</span>}/>
            <EducationCard />
            <Text title="Portafolio" description={<span>Amet minim mollit non deserunt ullamco est sit aliqua dolor <br/>
            do amet sint. Velit officia consequat duis enim velit mollit. <br/>
            lorem ipsum</span>}/>
            <Portfolio />
            <Footer />
        </div>
    );
}

export {Main};