import React, { useState } from "react";
import "../styles/App.css";

const Tooltip = ({ text, children }) => {
  const [show, setShow] = useState(false);

  // Clone the child element and add the required props and className
  const clonedChild = React.cloneElement(children, {
    className: `${children.props.className || ""} tooltip`.trim(),
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
  });

  return (
    <>
      {clonedChild}
      {show && <div className="tooltiptext">{text}</div>}
    </>
  );
};

export default Tooltip;
