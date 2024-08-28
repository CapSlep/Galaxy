import { DataContext, useData } from "../DataContext";
import DropdownDescription from "./DropdownDescription";
import DropdownFeatures from "./DropdownFeatures";
import { useState } from "react";

export default function DropdownContainer() {
    const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open

    const toggleDropdown = (dropdownId) => {
        setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
    };

    return (
        <div className="drop__container">
            <DropdownDescription
                isOpen={openDropdown === 1}
                onToggle={() => toggleDropdown(1)}
            />
            <DropdownFeatures
                isOpen={openDropdown === 2}
                onToggle={() => toggleDropdown(2)}
            ></DropdownFeatures>
        </div>
    );
}
