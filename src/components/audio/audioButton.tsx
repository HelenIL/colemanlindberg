import React, { useState, CSSProperties } from "react";
import Button from "react-bootstrap/Button";
import prev from "../../assets/angle-left-solid-full.svg";
import next from "../../assets/angle-right-solid-full.svg";

type CustomButton = {
  color: string;
  onClick: () => void;
  disabled?: boolean;
};

export const PrevButton = ({ color, onClick, disabled }: CustomButton) => {
  const [isHovered, setIsHovered] = useState(false);

  const defaultStyle: CSSProperties = {
    backgroundColor: "white",
    border: "none",
    cursor: "pointer",
  };

  const hoverStyle: CSSProperties = {
    // color: hoverColor,
    backgroundColor: color,
  };

  const disabledStyle: CSSProperties = {
    backgroundColor: "#dedede",
    cursor: "not-allowed",
    border: "none",
  };

  const buttonStyle: CSSProperties = disabled
    ? { ...defaultStyle, ...disabledStyle }
    : isHovered
    ? { ...defaultStyle, ...hoverStyle }
    : defaultStyle;

  return (
    <Button
      style={buttonStyle}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={prev} alt="Previous" width="20" height="20" />
    </Button>
  );
};

export const NextButton = ({ color, onClick }: CustomButton) => {
  const [isHovered, setIsHovered] = useState(false);

  const defaultStyle: CSSProperties = {
    backgroundColor: "white",
    border: "none",
    cursor: "pointer",
  };

  const hoverStyle: CSSProperties = {
    // color: hoverColor,
    backgroundColor: color,
  };



  return (
    <Button
      style={isHovered ? { ...defaultStyle, ...hoverStyle } : defaultStyle}
      onClick={onClick}
      
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={next} alt="Next" width="20" height="20" />
    </Button>
  );
};
