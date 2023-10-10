import { SocialMediaIcon } from "./SocialMediaIcon";
import React, { ReactElement } from 'react';
import { AiOutlineInstagram, AiOutlineTwitter, AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { LuDessert } from "react-icons/lu";



const SocialMedia = () => {
    return(
        <div>
            <aside className="w-[95px] h-full flex flex-col items-center bg-white pt-20 gap-4">
                <span className="font-semibold text-black1">Links</span>
                <SocialMediaIcon icon={<AiOutlineInstagram/>} link="https://instagram.com/pedrops26"/>
                <SocialMediaIcon icon={<BsFacebook />} link="https://www.facebook.com/pedropablo.saldarriagajaramillo/"/>
                <SocialMediaIcon icon={<AiOutlineTwitter/>} link="https://twitter.com/pedrops26"/>
                <SocialMediaIcon icon={<AiFillGithub/>} link="https://github.com/pedrops26"/>
                <SocialMediaIcon icon={<LuDessert/>} link="https://instagram.com/cheesecakesdepedro"/>
            </aside>
        </div>
    );
}

export {SocialMedia};