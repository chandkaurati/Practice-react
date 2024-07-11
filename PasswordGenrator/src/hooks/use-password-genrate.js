import React, { useState } from "react";

const usePasswordGenrator = () => {
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const genratePassword = (checkboxData, length) => {
    let passwordString;
    switch (checkboxData.title) {
      case "include lowercase":
        passwordString += "abcdefghijklmnopqrstuvwxyz";
        break;
      case "include upprcase":
        passwordString += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        break;
      case "include numbers":
        passwordString += "1234567890";
        break;
      case "include spceial characters":
        passwordString += "!@#$%^&*";
        break;

      default:
        break;
    }
  };

  return { password, errMessage, genratePassword };
};

export default usePasswordGenrator;
