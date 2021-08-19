import React from "react";

const Card = ({ styles, text, image, draggable }) => {
  return (
    <div className={`card ${draggable ? "drag" : ""}`} style={styles.backgroundStyle}>
      <img src={image} alt={text} style={styles.imageStyle} />
      <p style={styles.textStyle}>{text}</p>
    </div>
  );
};

export default Card;

Card.defaultProps = {
  styles: {
    backgroundStyle: {
      padding: "20px",
      backgroundColor: "#fff",
      boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.5)",
      display: "inline-block",
      borderRadius: "5px",
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

  text: "This is a card",
  image: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
};
