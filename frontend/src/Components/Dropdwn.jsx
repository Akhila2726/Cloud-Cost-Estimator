import React from "react";

function Dropdwn({ selectedOption, setSelectedOption, type, a, b, c }) {
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label htmlFor="dropdwn">{type}</label>
      <select id="dropdwn" value={selectedOption} onChange={handleChange}>
        <option value="">Select</option>
        <option value={a}>{a}</option>
        <option value={b}>{b}</option>
        <option value={c}>{c}</option>
      </select>

      
    </div>
  );
}

export default Dropdwn;
