import { Line } from "./Line";

interface EducationInfo{
    academyName: string,
    actualState: string,
    date: string,
    certificateTitle: string,
    certificationDescription: string
}

const EducationInfo = ({academyName, actualState, date, certificateTitle, certificationDescription}: EducationInfo) => {
    return(

            <div className="w-[904px] h-[150px] flex gap-44">
                <div className="flex flex-col gap-4">
                    <span className="text-black1 flex flex-col">{academyName}</span>
                    <div className="flex items-center gap-x-5">
                        <span className="text-black1">{actualState}</span>
                        <span className="bg-yellow1 text-white">{date}</span>
                    </div>
                </div>
            <div className="flex flex-col gap-4">
                <span className="text-black1">{certificateTitle}</span>
                <p className="text-gray2">{certificationDescription}</p>
            </div>
            
        </div>
   
    );
}

export {EducationInfo};