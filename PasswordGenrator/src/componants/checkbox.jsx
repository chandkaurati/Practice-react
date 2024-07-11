import React from "react";

function CheckBox({ isChecked, onchange, label }) {
  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={onchange} />
      {label}
    </label>
  );
}

export default CheckBox;
