import React from "react";

const Input = ({ styles, placeholder, inputType, icon, draggable }) => {
  return (
    <div className={`input ${draggable ? "drag" : ""}`} style={styles.backgroundStyle}>
      <input type={inputType} placeholder={placeholder} style={styles.inputStyle} />
    </div>
  );
};

export default Input;

Input.defaultProps = {
  styles: {
    backgroundStyle: {},
    inputStyle: {
      padding: "5px 10px",
      borderRadius: "5px",
      outline: "none",
      width: "50%",
    },
    imageStyle: {
      width: "150px",
      height: "200px",
    },
    textStyle: {
      color: "black",
      fontSize: "16px",
    },
  },

  placeholder: "Input placeholder",
  inputType: "text",
  icon: "",
};
