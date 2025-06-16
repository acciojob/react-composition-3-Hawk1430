
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div className="main">
        <div className="toolTip__div">
          <Tooltip text="This is tooltip">
            <h2>Hover over me</h2>
          </Tooltip>
        </div>
        <div className="toolTip__div">
          <Tooltip text="This is another tooltip">
            <p>Hover over me to see another tooltip</p>
          </Tooltip>
        </div>
    </div>
  )
}

export default App
