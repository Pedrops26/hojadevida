import Image from 'next/image';
import { Line } from './Line';

const ProfileCard = () => {
    return (
        <div className="flex flex-col pt-12 gap-7 items-center">
            <Image
                className='rounded-full'
                src={'/images/Foto.jpg'}
                height={160} 
                width={160} 
                alt='Profile photo'/>
            <div className='flex flex-col items-center gap-16'>
                <div className='flex flex-col gap-5 items-center'>
                    <div className='text-black1 font-semibold text-lg flex flex-col items-center'>
                        <span>Pedro Pablo</span>
                        <span>Saldarriaga Jaramillo</span>
                    </div> 
                    <span className='text-gray2 text-sm'>Desarrollador Web</span>
                </div>
            </div>
            <Line size={220}/>

        </div>
    );
}

export {ProfileCard}