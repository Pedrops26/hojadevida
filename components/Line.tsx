interface LineProps{
    size: string
}

const Line = ({size}: LineProps) => {
    return(
        <div className={`w-[${size}px] border-t-2 border-gray1 pt-6`}></div>
    );
}

export {Line}