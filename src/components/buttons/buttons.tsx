import { useState, CSSProperties } from "react";
import Button from "react-bootstrap/Button";

import { icons } from "../../assets/assets";
import './index.css'

type CustomButton = {
  color?: string;
  onClick?: () => void;
  disabled?: boolean;
  text?: string;
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
    backgroundColor: "rgb(106, 106, 106, .55)",
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
      <img className="btn-btn"  src={icons.doubleLeft} alt="Previous"  />
    </Button>
  );
};

export const NextButton = ({ color, onClick }: CustomButton) => {
  const [isHovered, setIsHovered] = useState(false);

  const defaultStyle: CSSProperties = {
    backgroundColor: "rgb(106, 106, 106, .55)",
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
      <img src={icons.doubleRight} alt="Next" className="btn-btn" />
    </Button>
  );
};

export const CarouselPrevButton = ({ color, onClick }: CustomButton) => {
  const [isHovered, setIsHovered] = useState(false);

  const defaultStyle: CSSProperties = {
    backgroundColor: "rgb(106, 106, 106, .55)",
    border: "none",
    cursor: "pointer",
    marginRight: '15px'
  };

  const hoverStyle: CSSProperties = {
    // color: hoverColor,
    backgroundColor: color,
  };



  return (
    <Button
      style={isHovered ? { ...defaultStyle, ...hoverStyle } : defaultStyle}
      onClick={onClick}
      className="btn-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={icons.singleLeft} alt="Next" className="btn-btn" />
    </Button>
  );
};


export const CarouselNextButton = ({ color, onClick }: CustomButton) => {
  const [isHovered, setIsHovered] = useState(false);

  const defaultStyle: CSSProperties = {
    backgroundColor: "rgb(106, 106, 106, .55)",
    border: "none",
    cursor: "pointer",
    marginLeft: '15px'
  };

  const hoverStyle: CSSProperties = {
    // color: hoverColor,
    backgroundColor: color,
  };



  return (
    <Button
      style={isHovered ? { ...defaultStyle, ...hoverStyle } : defaultStyle}
      onClick={onClick}
      className="btn-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={icons.singleRight} alt="Next" className="btn-btn" />
    </Button>
  );
};

export const BuyButton = (props: any) => {
  const [isHovered, setIsHovered] = useState(false);

  const defaultStyle: CSSProperties = {
    backgroundColor: "rgb(106, 106, 106, .55)",
    border: "none",
    cursor: "pointer",
  };

  const hoverStyle: CSSProperties = {
    // color: hoverColor,
    backgroundColor: 'orange',
  };



  return (
    <Button
      style={isHovered ? { ...defaultStyle, ...hoverStyle } : defaultStyle}
 
      
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* <img src={next} alt="Next" className="btn-btn" /> */}
    </Button>
  );
};