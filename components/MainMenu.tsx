import { Button } from "./Button";
import { MainText } from "./MainText";
import { ParagraphText } from "./ParagraphText";
import Image from 'next/image';

const MainMenu = () => {
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
                    <Button handleClick={()=>{
                            (true);
                    }}/>
                </div>
            </div>
            <div>
            <Image
                className=''
                src={'/images/Foto2.jpg'}
                height={180} 
                width={200} 
                alt='Profile photo'/>
            </div>
        </div>

    );
}

export {MainMenu};