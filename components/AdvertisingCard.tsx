import { ReactNode } from "react";

interface AdvertisingCardProps{
    title: string,
    description: string
}

const AdvertisingCard = ({title, description}: AdvertisingCardProps) => {
    return(
        <div className="whitespace-normal text-center bg-white w-[310px] h-[225px] flex flex-col px-8 py-7 gap-5">
            <div className="flex flex-col items-center gap-6">
                <span className="text-black1 text-lg font-semibold">{title}</span>
            </div>
            <span className="text-gray2 text-sm">{description}</span>
            <span className="text-yellow1">More Info {">"}</span>
        </div>
    );
}

export {AdvertisingCard};