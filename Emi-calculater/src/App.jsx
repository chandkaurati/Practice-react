import { useState } from "react";
import "./App.css";
import { tenureData } from "./utils/constants";

function App() {
  const [cost, setCost] = useState(0);
  const [intrest, setIntrest] = useState(0);
  const [fee, setFee] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(0);
  const rate = (1 / 100) * 40000;

  function calculateEmi(downPayment) {
    if (!cost) return;
    const loanAmt = cost - downPayment;
    const rateOfIntrest = intrest / 100;
    const numOfyears = tenure / 12;

    const EMI =
      (loanAmt * rateOfIntrest * (1 + rateOfIntrest) ** numOfyears) /
      ((1 + rateOfIntrest) ** numOfyears - 1);

    return Number(EMI / 100).toFixed(0)
  }
  function updateEmi(e) {
    if (!cost) return;

    const dp = parseInt(e.target.value);
    setDownPayment(dp.toFixed(0));

    const emi = calculateEmi(dp);
    setEmi(emi);
  }
  function updateDownpayment(e) {}
  return (
    <>
      <div className="container">
        <h2>EMI Calculater</h2>

        <span>
          <p className="title">Total Cost of Asset</p>
          <input
            type="number"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </span>

        <span>
          <p className="title"> Intrest Rate (in %)</p>
          <input
            type="number"
            value={intrest}
            onChange={(e) => setIntrest(e.target.value)}
          />
        </span>

        <span>
          <p className="title">preceeing fee (in %)</p>
          <input
            type="number"
            value={fee}
            onChange={(e) => setFee(e.target.value)}
          />
        </span>

        <span>
          <p className="title">Down Payment</p>
          <p>{`Total Down Payment After processing fee ${""}`}</p>
          <input
            type="range"
            value={downPayment}
            min={0}
            max={cost}
            onChange={updateEmi}
          />

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>{`0%`}</p>
            <p>{`${downPayment}`}</p>
            <p>{`100%`}</p>
          </div>
        </span>

        {/*  */}

        <span>
          <p className="title"> loan per month</p>
          <p>
            {" "}
            Total Loan per month {(cost - downPayment) * (1 + intrest / 100)}
          </p>
          <input
            type="range"
            min={calculateEmi(cost)}
            max={calculateEmi(0)}
            value={emi}
            onChange={updateDownpayment}
          />

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>{`0%`}</p>
            <p>{`${emi}`}</p>
            <p>{`100%`}</p>
          </div>
        </span>

        {/*render the tenure field*/}

        <div className="tenure_data">
          {tenureData.map((value) => {
            return (
              <button
                className={`tenure ${value == tenure ? "selected" : ""}`}
                key={value}
                value={value}
                onClick={(e) => setTenure(Number(e.target.value))}
              >
                {value}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
