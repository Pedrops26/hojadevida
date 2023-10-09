import { Cards } from "./Cards";
import { IoIosBook } from "react-icons/io";


const MainCards = () => {
    return(
        <div className="flex flex-col gap-6">
            <div className="flex items-center gap-x-6">
                <Cards icon={<IoIosBook />} title="Hola" description="Adios"/>
                <Cards icon={<IoIosBook />} title="Hola" description="Adios"/>
                <Cards icon={<IoIosBook />} title="Hola" description="Adios"/>
            </div>
            <div className="flex items-center gap-x-6">
                <Cards icon={<IoIosBook />} title="Hola" description="Adios"/>
                <Cards icon={<IoIosBook />} title="Hola" description="Adios"/>
                <Cards icon={<IoIosBook />} title="Hola" description="Adios"/>
            </div>
        </div>

    );
}

export {MainCards};