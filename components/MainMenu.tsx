import { useState } from "react";
import { Button } from "./Button";
import { HireMeDialog } from "./Dialogs/HireMeDialog";
import { MainText } from "./MainText";
import { ParagraphText } from "./ParagraphText";
import Image from 'next/image';



const MainMenu = () => {

    const [dialogOpen, setDialogOpen] = useState<boolean>(false);

    const handleHireMeClick = () => {
        console.log('Hice click en el boton de login');
        setDialogOpen(true);
    }

    return(
        <div className="bg-white p-10 flex items-center">
            <div className="flex flex-col px-8 gap-5">
                <div>
                    <MainText />
                </div>
                <div>
                    <ParagraphText />
                </div>
                <div>
                    <Button handleClick={handleHireMeClick}/>
                </div>
                <HireMeDialog open={dialogOpen} setOpen={setDialogOpen}/>
            </div>
            <div>
                <Image
                    className=''
                    src={'/images/Foto2.jpg'}
                    height={180} 
                    width={200} 
                    alt='Profile photo'/>
            </div>
            <HireMeDialog open={dialogOpen} setOpen={setDialogOpen}/>
        </div>

    );
}

export {MainMenu};