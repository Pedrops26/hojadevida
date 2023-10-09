import { ReactNode } from "react";

interface SocialMediaIconProps{
    icon: ReactNode,
    link: string
}

const SocialMediaIcon = ({icon, link}: SocialMediaIconProps) => {
    return(
        <div className="w-[48px] h-[48px] hover:cursor-pointer bg-yellow1 rounded-full flex flex-col justify-center items-center">
            <span className="text-4xl text-black "><a href={link}>{icon}</a></span>
        </div>
    );
}

export {SocialMediaIcon};