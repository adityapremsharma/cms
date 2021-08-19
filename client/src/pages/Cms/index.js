import React, { useState, useEffect, useRef, useContext } from "react";
import Sidebar from "../../components/layout/Sidebar";
import Canvas from "./Canvas";
import { Context as DataContext } from "../../context/dataContext";

const Home = () => {
  const {
    state: { elements },
    setelements,
  } = useContext(DataContext);

  const [overCanvas, setoverCanvas] = useState(false);
  const draggable = true;
  let overElement = useRef();
  let currentElement = useRef();

  useEffect(() => {
    const canvas = document.querySelector(".canvas");
    const onOverCanvas = (e) => {
      e.preventDefault();
      setoverCanvas(true);
    };
    canvas.addEventListener("dragover", onOverCanvas);

    return () => {
      canvas.removeEventListener("dragover", onOverCanvas);
    };
  }, []);

  const selected = (el) => {};
  const release = (el) => {
    if (overCanvas) {
      console.log("released");
      let component = {
        id: Math.round(Math.random() * 100000),
        ...el,
      };
      setelements([...elements, component]);
    }
    setoverCanvas(false);
  };

  console.log(elements);

  useEffect(() => {
    const dragStart = (item) => {
      item.classList.add("selected");
    };

    const dragEnd = (item) => {
      item.classList.remove("selected");
    };
    [...document.querySelectorAll(".drag")].forEach((item) => {
      item.draggable = true;

      item.addEventListener("dragstart", () => dragStart(item));
      item.addEventListener("dragend", () => dragEnd(item));
    });

    return () => {
      [...document.querySelectorAll(".drag")].forEach((item) => {
        item.removeEventListener("dragstart", () => dragStart(item));
        item.removeEventListener("dragend", () => dragEnd(item));
      });
    };
  }, [elements]);

  const onDragEnd = () => {
    const over = overElement.current;
    const current = currentElement.current;

    let tempArray = elements;
    let temp = tempArray[over.index];
    tempArray[over.index] = tempArray[current.index];
    tempArray[current.index] = temp;

    setelements([...tempArray]);
    console.log("done");
  };

  return (
    <div className="cms">
      <Sidebar selected={selected} release={release} />

      <Canvas
        elements={elements}
        overElement={overElement}
        currentElement={currentElement}
        onDragEnd={onDragEnd}
        draggable={draggable}
      />
    </div>
  );
};

export default Home;
