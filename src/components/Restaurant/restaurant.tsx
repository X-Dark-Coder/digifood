import classNames from "classnames";
import { Rate } from "components/shared";
import { RestaurantProps } from "./types";

const Restaurant: React.FC<RestaurantProps> = ({ categories, closed, distance, name, openAt, rate, picture }) => {
    const renderCategories = () => {
        return categories.map((category,index) => {
            if(index + 1 !== categories.length) return category + ", ";
            else return category;
        });
    };

    const pictureClasses = classNames("w-full h-full object-cover absolute rounded-t-lg",{
        "grayscale" : closed
    })

    return (
        <div className="min-w-[335px] max-w-[335px] h-[170px] shadow-main rounded-lg">
            <div className="w-full h-[100px] relative rounded-t-lg">
                <img src={picture} alt="restaurant" className={pictureClasses} />
                <div className="bg-mono-sky-lightest w-[50px] h-[20px] rounded-[4px] absolute bottom-[9px] left-[9px] flex justify-center items-center">
                    <span className="text-mono-ink-light text-[12px] translate-y-px">{distance} km</span>
                </div>
            </div>
            <div className="p-3">
                <div className="flex justify-between items-center">
                    <h3 className="text-medium-16 font-medium text-mono-ink">{name}</h3>
                    <Rate stars={rate} />
                </div>
                <div className="flex justify-between items-center mt-1">
                    <span className="text-small text-mono-ink-lighter">{renderCategories()}</span>
                    {closed ? (
                        <span className="text-small font-semibold text-accent-redd">Closed</span>
                    ) : (
                        <span className="text-small font-semibold text-accent-cyan">Open at {openAt}</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Restaurant;
