import { SocialMediaIcon } from "./SocialMediaIcon";
import React, { ReactElement } from 'react';
import { AiOutlineInstagram } from "react-icons/ai";

const SocialMedia = () => {
    return(
        <div>
            <aside className="w-[95px] h-full flex flex-col items-center bg-white pt-20 gap-4">
                <span className="font-semibold text-black1">Links</span>
                <SocialMediaIcon icon={<AiOutlineInstagram/>} link="https://instagram.com/pedrops26"/>
                <SocialMediaIcon icon={<AiOutlineInstagram/>} link="https://instagram.com/pedrops26"/>
                <SocialMediaIcon icon={<AiOutlineInstagram/>} link="https://instagram.com/pedrops26"/>
                <SocialMediaIcon icon={<AiOutlineInstagram/>} link="https://instagram.com/pedrops26"/>
                <SocialMediaIcon icon={<AiOutlineInstagram/>} link="https://instagram.com/pedrops26"/>
            </aside>
        </div>
    );
}

export {SocialMedia};