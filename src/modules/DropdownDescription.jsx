import { DataContext, useData } from "../DataContext";

export default function DropdownDescription({ isOpen, onToggle }) {
    const data = useData();
    return (
        <div className="dropdown">
            <button className="dropdown__button" onClick={onToggle}>
                {data.descriptionName}
                <span className={`dropdown__icon ${isOpen ? "open" : ""}`}>
                    {isOpen ? "▲" : "▼"}
                </span>
            </button>
            <div className={`dropdown__content ${isOpen ? "open" : ""}`}>
                {data.descriptionDrop.map((descriptionItem, index) => {
                    return (
                        <div key={index} className="dropdown__item flex-column">
                            <h3 className="dropdown__title">
                                {descriptionItem.name}
                            </h3>
                            {descriptionItem.parts.map((part, index) => {
                                return (
                                    <div key={index}>
                                        <h4 className="dropdown__subtitle">
                                            {part.title}
                                        </h4>
                                        <p className="dropdown__text">
                                            {part.text}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
