import { Sidebar } from "@/components/Sidebar"
import { Main } from "@/components/Main";
import { SocialMedia } from "@/components/SocialMedia";

const Home = () => {
  return (
    <div>
      <div className="bg-gray1 flex gap-x-6 whitespace-nowrap text-white ">
        <Sidebar />
        <Main />
        <SocialMedia />
      </div>
    </div>

  );
}

export default Home;
