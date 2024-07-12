import React, { useState } from "react";

const usePasswordGenrator = () => {
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const genratePassword = (checkboxData, length) => {
    let charset = "";
    let GenratePassword = "";

    let FilterdCheckboxData = checkboxData?.filter((data) => data.state);

    if (FilterdCheckboxData.length === 0) {
      setErrMessage("Please Select At least one option");
      setPassword("");
      return;
    }

    FilterdCheckboxData.forEach((option) => {
      switch (option.title) {
        case "include lowercase":
          charset += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "include upprcase":
          charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "include numbers":
          charset += "1234567890";
          break;
        case "include spceial characters":
          charset += "!@#$%^&*";
          break;

        default:
          break;
      }
    });

    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * chaset.length);
      GenratePassword += charset[randomIndex];
    }

    setPassword(GenratePassword);
  };

  return { password, errMessage, genratePassword };
};

export default usePasswordGenrator;
