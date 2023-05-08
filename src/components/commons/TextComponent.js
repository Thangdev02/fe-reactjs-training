import React from "react";

function TextComponent({ props }) {
  const renderStyle = () => {
    switch (props.style) {
      case "s12b":
        return {
          fontSize: "12px",
          fontWeight: "bold",
        };
      case "s12":
        return {
          fontSize: "12px",
        };
      case "s30b":
        return {
          fontSize: "30px",
          fontWeight: "bold",
        };
      case "s30":
        return {
          fontSize: "30px",
        };
      default:
        return {
          fontSize: "16px",
        };
    }
  };

  return (
    <p
      style={renderStyle()}
    >
      {props.title}
    </p>
  );
}
export default TextComponent;
