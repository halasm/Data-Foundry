import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"

export default function SearchBar({ setSearchString }) {
    const [input, setInput] = useState("");

    const handleChange = (value) => {
        setInput(value)
        setSearchString(value)
    }

    return (
      <div className="input-wrapper">
        <FaSearch className = "m-2" id="search-icon"/>
        <input
          placeholder = "Type Data Source/Person of Contact" 
          value={input} onChange = {(e) => handleChange(e.target.value)}/> 
      </div>
    );
};
  