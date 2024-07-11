import React from "react";

function Button({ title, clickHandle, classes }) {
  return (
    <button className={``} onClick={clickHandle}>
      {title}
    </button>
  );
}

export default Button;
