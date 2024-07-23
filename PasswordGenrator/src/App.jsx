import { useState, useRef } from "react";
import Button from "./componants/button";
import usePasswordGenrator from "./hooks/use-password-genrate";

import "./App.css";

function App() {
  const [checkBoxData, setcheckBoxData] = useState([
    { title: "include lowercase", state: false },
    { title: "include upprcase", state: false },
    { title: "include numbers", state: false },
    { title: "include spceial characters ", state: false },
  ]);
  const [passwordLength, setpasswordLength] = useState(0);
  const [includeNumbers, setincludeNumbers] = useState(false);
  const [includeSpecialChars, setincludeSpecialChars] = useState(false);
  const [copied, setCopied] = useState(false)
  const textRef=useRef(null)

  const handleCheckboxChange = (index) => {
    const updatedCheckboxData = [...checkBoxData];
    updatedCheckboxData[index].state = !updatedCheckboxData[index].state;
    setcheckBoxData(updatedCheckboxData);
  };

  const hanldeCopytext = ()=>{
     let selectedText = window.getSelection().toString()
     let textToCopy = selectedText || textRef.current.innerText

     navigator.clipboard.writeText(textToCopy)
     setCopied(true)
     setTimeout(() => {
       setCopied(false)
     }, 2000);
  }

  const { password, errMessage, genratePassword } = usePasswordGenrator();

  return (
    <div className="app">

      <div className="header">
        {password && (
          <div className="password">
            <p ref={textRef}>{password}</p>
            <Button title={copied?"copied" :"copy"} clickHandle={hanldeCopytext} />
          </div>
        )}

        <div className="pass__length">
          <p> password length</p>
          <p>{passwordLength}</p>
        </div>
        <input
          type="range"
          max={20}
          min={4}
          value={passwordLength}
          onChange={(e) => setpasswordLength(e.target.value)}
        />
      </div>

      {/* strnegth */}

      {/* Error handling */}

      {errMessage && (
        <p style={{color : "red"}}>{errMessage}</p>
      )}

      <div className="checkboxes">
        {checkBoxData.map((data, i) => (
          <div key={i}>
            <input
              type="checkbox"
              checked={data.state}
              onChange={() => handleCheckboxChange(i)}
            />
            <label>{data.title}</label>
          </div>
        ))}
      </div>

      <div className="genratePasswordBtn">
        <Button classes={""} title={"genrate  password"} clickHandle={()=> genratePassword(checkBoxData, passwordLength)} />
      </div>
    </div>
  );
}

export default App;
