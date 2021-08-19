import React, { useContext } from "react";
import Canvas from "./Canvas";
import { Context as DataContext } from "../../context/dataContext";

const View = () => {
  const {
    state: { elements },
  } = useContext(DataContext);
  return (
    <div>
      <Canvas
        elements={elements}
        overElement={() => null}
        currentElement={() => null}
        onDragEnd={() => null}
        draggable={false}
      />
    </div>
  );
};

export default View;
