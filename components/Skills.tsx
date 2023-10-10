import { Line } from "./Line";
import { PercentageLine } from "./PercentageLine";

const Skills = () => {
    return(
        <div>
            <div className="flex flex-col gap-4 pb-6">
                <span className="title">Idiomas:</span>
                <div>
                    <PercentageLine title="Español" percentage="100" width={100}/>
                    <PercentageLine title="Inglés" percentage="65" width={50} />
                    <PercentageLine title="Italiano" percentage="20" width={20}/>
                </div>
            </div>
            <Line size={220}/>
            <div className="flex flex-col gap-4 pb-6">
                <span className="title">Lenguajes de programación:</span>
                <PercentageLine title="HTML" percentage="90" width={90}/>
                <PercentageLine title="CSS" percentage="70" width={50}/>
                <PercentageLine title="Python" percentage="20" width={20}/>
                <PercentageLine title="React" percentage="30" width={20}/>
            </div>
            <Line size={220}/>
        </div>
    );
}

export {Skills};