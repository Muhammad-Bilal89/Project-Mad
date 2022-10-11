import React, { useState } from "react";
import "./App.css";
export default function MAD() {
  const [val, setVal] = useState(false);
  return (
    <div className="mad-main">
      <h3>Are you Mad ? </h3>
      <div className="mad-btn">
        <div className="mad-yes-btn">
          {!val ? (
            <>
              <button
                // onClick={() => alert("i know you are")}
                onMouseEnter={() => setVal(!val)}
              >
                NO
              </button>
              <div style={{ width: "80px" }}></div>
            </>
          ) : (
            <>
              <div style={{ width: "80px" }}></div>
              <button
                // onClick={() => alert("i know you are")}
                onMouseEnter={() => setVal(!val)}
              >
                NO
              </button>
            </>
          )}
          <button onClick={() => alert("i know you are")}>YES</button>
        </div>
      </div>
    </div>
  );
}
