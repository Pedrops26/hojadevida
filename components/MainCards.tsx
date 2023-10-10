import { AdvertisingCard } from "./AdvertisingCard";
import { Cards } from "./Cards";
import { IoIosApps, IoIosBook, IoIosCafe, IoIosGitMerge, IoIosPodium, IoLogoCss3 } from "react-icons/io";


const MainCards = () => {
    return(
        <div className="flex flex-col gap-6">
            <div className="flex items-center gap-x-6">
                <Cards icon={<IoIosBook />} title="Web Development" description="Blog and E-commerce"/>
                <Cards icon={<IoIosApps />} title="UI/UX Design" description="Mobile App"/>
                <Cards icon={<IoIosCafe />} title="Sound Design" description="Voice Over"/>
            </div>
            <div className="flex items-center gap-x-6">
                <Cards icon={<IoIosGitMerge />} title="Game Design" description="Props & Objects"/>
                <Cards icon={<IoIosPodium />} title="Photography" description="Portrait"/>
                <AdvertisingCard title="Advertising" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. "/>
            </div>
        </div>

    );
}

export {MainCards};