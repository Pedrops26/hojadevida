interface ButtonProps{
    handleClick: () => void;
}

const Button = ({handleClick = () => {}}: ButtonProps) => {
    return(
        <button
            onClick={handleClick} 
            className="bg-yellow1 w-[154px] h-[51px] hover:cursor-pointer hover:bg-black1 hover:text-xl"> 
            ¡Contáctame!
        </button>
    );
}

export {Button};