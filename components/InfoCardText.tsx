interface InfoCardText{
    text_1: string,
    text_2: string
}

const InfoCardText = ({text_1, text_2}: InfoCardText) => {
    return(
        <div className="flex gap-x-10 justify-between text-gray2">
            <span className="font-weight-500">{text_1}:</span>
            <span className="font-thin">{text_2}</span>
        </div>
    );
}

export {InfoCardText};

