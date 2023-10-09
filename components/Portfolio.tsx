import { PortfolioCards } from "./PortfolioCards";

const Portfolio = () => {
    return(
        <div className="w-[970px] overflow-x-auto whitespace-nowrap flex gap-x-10">
            <PortfolioCards imageURL="/images/Foto.jpg" title="diosmio" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna "/>
            <PortfolioCards imageURL="/images/Foto.jpg" title="diosmio" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna "/>
            <PortfolioCards imageURL="/images/Foto.jpg" title="diosmio" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna "/>
            <PortfolioCards imageURL="/images/Foto.jpg" title="diosmio" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna "/>
        </div>
    );
}

export {Portfolio};