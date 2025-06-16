import React, { useState } from 'react';
import './../styles/App.css';

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className={visible?"tooltip" : ""}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && <span className="tooltiptext">{text}</span>}
    </div>
  );
};

export default Tooltip;
