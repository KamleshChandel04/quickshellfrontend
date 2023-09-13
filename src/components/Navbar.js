import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";

function NavBar({ setGroupingOption }) {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Select");
    const [selectedOption2, setSelectedOption2] = useState("Select");

    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownVisible((prevState) => !prevState);
    };
    const handleGroupingChange = (choice) => {
        setGroupingOption(choice);
    };
    const handleOptionChange = (choice) => {
        setSelectedOption(choice);
        //  setDropdownVisible(false);
        setSelectedOption2("Select");
        setGroupingOption(choice);
    };
    const handleOptionChange2 = (choice) => {
        setSelectedOption2(choice);
        //  setDropdownVisible(false);
        setSelectedOption("Select");
        setGroupingOption(choice);
    };

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setDropdownVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        // Cleanup on unmount
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="navbar">
            <button ref={buttonRef} onClick={toggleDropdown} className="button">
                Display
                <span className="arrow-down"></span>
            </button>
            {dropdownVisible && (
                <div className="dropdown" ref={dropdownRef}>
                    <div className="dropdown-item">
                        <span className="dropdown-label">Grouping</span>
                        <select
                            className="select"
                            value={selectedOption}
                            onChange={(e) =>
                                handleOptionChange(e.target.value)
                            }>
                            <option value="Select" disabled>Select</option>
                            <option value="status">Status</option>
                            <option value="userId">User</option>
                        </select>
                    </div>
                    <div className="dropdown-item">
                        <span className="dropdown-label">Ordering</span>
                        <select
                            className="select"
                            value={selectedOption2}
                            onChange={(e) =>
                                handleOptionChange2(e.target.value)
                            }>
                            <option value="Select" disabled>Select</option>
                            <option value="priority">Priority</option>
                            <option value="title">Title</option>
                        </select>
                    </div>
                </div>
            )}
        </div>
    );
}

export default NavBar;
