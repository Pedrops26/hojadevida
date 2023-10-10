import { ReactNode } from "react";

interface PercentageLine{
    title: string,
    percentage: string,
    width: number
}

const PercentageLine = ({title, percentage, width}: PercentageLine) => {
    return(
        <div>
            <div className="flex justify-between text-gray2">
                <span>{title}</span>
                <span>{percentage}%</span>
            </div>
            <div className='border p-1 border-yellow-500'>
                <div className={`border w-[${width}%] border-yellow-500`}></div>
            </div>
        </div>

    );
}

export {PercentageLine}