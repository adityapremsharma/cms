import React from "react";

const Button = ({ styles, text, draggable }) => {
  return (
    <div className={`button ${draggable ? "drag" : ""}`} style={styles.backgroundStyle}>
      <p style={styles.textStyle}>{text}</p>
    </div>
  );
};

export default Button;

Button.defaultProps = {
  styles: {
    backgroundStyle: {
      width: "100px",
      height: "40px",
      border: "2px solid black",
      borderRadius: "5px",
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      userSelect: "none",
    },
    textStyle: {
      color: "black",
      margin: "auto",
    },
  },

  text: "Button",
};
