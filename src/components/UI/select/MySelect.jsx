import React from "react";

const MySelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option disabled={true} value="value1">
        {defaultValue}
      </option>
      {options.map((o) => (
        <option value={o.value} key={o.value}>
          {o.name}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
