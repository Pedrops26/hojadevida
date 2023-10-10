import { ExtraSkills } from "./ExtraSkills";
import { InfoCard } from "./InfoCard";
import { ProfileCard } from "./ProfileCard";
import { Skills } from "./Skills";

const Sidebar = () => {
    return (
        <aside className="px-10 flex flex-col items-center bg-white">
            <ProfileCard />
            <InfoCard />
            <Skills />
            <ExtraSkills />
        </aside>
    );
}

export { Sidebar };