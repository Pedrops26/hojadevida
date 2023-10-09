import { ReactNode } from "react";

interface TextProps{
    title: string,
    description: ReactNode
}

const Text = ({title, description}: TextProps) => {
    return(
        <div className="flex flex-col items-center gap-5">
            <span className="font-bold text-3xl text-black1">{title}</span>
            <div className="flex flex-col items-center text-gray2">
            <p className="text-center">{description}</p>
            </div>
        </div>
    );
}

export {Text};