import Image from 'next/image';
import { Button } from './Button';

interface PortfolioCardsProps{
    imageURL: string,
    title: string,
    description: string
}

const PortfolioCards = ({imageURL, title, description}: PortfolioCardsProps) => {
    return(
        <div className='w-[310px] h-[474px] bg-white'>
            <div className="">
                <Image
                className=''
                src={imageURL}
                height={300} 
                width={310} 
                alt='Profile photo'/>
            </div>
            <div className='w-[310px] flex flex-col p-4 whitespace-normal'>
                <div className='flex flex-col'>
                <span className='text-black1 font-semibold'>{title}</span>
                <span className='text-gray2'>{description}</span>
                <a className='text-yellow1 hover:cursor-pointer'>Lee más...</a>
                </div>
            </div>
        </div>

    );
}

export {PortfolioCards};