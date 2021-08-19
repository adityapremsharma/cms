import React from "react";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";

const Canvas = ({ elements, overElement, currentElement, onDragEnd, draggable }) => {
  return (
    <div className="canvas">
      {elements.map((el, index) => {
        return (
          <div
            key={el.id}
            onDragOver={() => (overElement.current = { el, index })}
            onDragStart={() => (currentElement.current = { el, index })}
            onDragEnd={onDragEnd}
          >
            {el.element === "button" ? (
              <Button draggable={draggable} />
            ) : el.element === "card" ? (
              <Card draggable={draggable} />
            ) : el.element === "input" ? (
              <Input draggable={draggable} />
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Canvas;
