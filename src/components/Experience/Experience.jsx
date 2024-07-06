import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='Experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>90%</div>
        <span  style={{color: darkMode?'white':''}}>School </span>
        <span>Percentage</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>91.2%</div>
        <span  style={{color: darkMode?'white':''}}>Intermediate </span>
        <span>Perecentage</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>89%</div>
        <span  style={{color: darkMode?'white':''}}>B.tech </span>
        <span>Percentage</span>
      </div>
    </div>
  );
};

export default Experience;
