import { ReactNode } from "react";

interface CardsProps{
    icon: ReactNode,
    title: string,
    description: string
}

const Cards = ({icon, title, description}: CardsProps) => {
    return(
        <div className="flex flex-col items-center bg-white w-[310px] h-[225px] pt-7 gap-3">
            <div className="flex flex-col items-center gap-6">
                <span className="text-yellow1 text-7xl">{icon}</span>
                <span className="text-black1 text-lg">{title}</span>
            </div>
            <span className="text-gray2 text-sm">{description}</span>
        </div>
    );
}

export {Cards};