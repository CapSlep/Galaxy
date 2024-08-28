import { DataContext, useData } from "../DataContext";

export default function DropdownFeatures({ isOpen, onToggle }) {
    const data = useData();
    return (
        <div className="dropdown">
            <button className="dropdown__button" onClick={onToggle}>
                {data.featuresName}
                <span className={`dropdown__icon ${isOpen ? "open" : ""}`}>
                    {isOpen ? "▲" : "▼"}
                </span>
            </button>
            <div className={`dropdown__content ${isOpen ? "open" : ""}`}>
                {data.features.map((feature, index) => {
                    return (
                        <div key={index} className="dropdown__item flex-column">
                            <h3 className="dropdown__title">{feature.name}</h3>

                            <p className="dropdown__text">{feature.text}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
