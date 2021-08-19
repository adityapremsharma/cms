import React, { useEffect } from "react";

const Blocks = ({ selected, release }) => {
  useEffect(() => {
    [...document.querySelectorAll(".item")].forEach((item) => {
      item.draggable = true;

      item.addEventListener("dragstart", () => {
        item.classList.add("selected");
      });
      item.addEventListener("dragend", () => {
        item.classList.remove("selected");
      });
    });
  }, []);

  return (
    <div className="blocks">
      <div className="section">
        <p className="menu">Layout</p>
        <div
          className="item"
          onDragStart={() => selected({ type: "layout", element: "navbar" })}
          onDragEnd={() => release({ type: "layout", element: "navbar" })}
        >
          <p>Navbar</p>
        </div>
        <div
          className="item"
          onDragStart={() => selected({ type: "layout", element: "tabs" })}
          onDragEnd={() => release({ type: "layout", element: "tabs" })}
        >
          <p>Tabs</p>
        </div>
        <div
          className="item"
          onDragStart={() => selected({ type: "layout", element: "carousel" })}
          onDragEnd={() => release({ type: "layout", element: "carousel" })}
        >
          <p>Carousel</p>
        </div>
        <div
          className="item"
          onDragStart={() => selected({ type: "layout", element: "card" })}
          onDragEnd={() => release({ type: "layout", element: "card" })}
        >
          <p>Card</p>
        </div>
      </div>

      <div className="section">
        <p className="menu">Elements</p>
        <div
          className="item"
          onDragStart={() => selected({ type: "elements", element: "section" })}
          onDragEnd={() => release({ type: "elements", element: "section" })}
        >
          <p>Section</p>
        </div>
        <div
          className="item"
          onDragStart={() => selected({ type: "elements", element: "text" })}
          onDragEnd={() => release({ type: "elements", element: "text" })}
        >
          <p>Text</p>
        </div>
        <div
          className="item"
          onDragStart={() => selected({ type: "elements", element: "link" })}
          onDragEnd={() => release({ type: "elements", element: "link" })}
        >
          <p>Link</p>
        </div>
        <div
          className="item"
          onDragStart={() => selected({ type: "elements", element: "image" })}
          onDragEnd={() => release({ type: "elements", element: "image" })}
        >
          <p>Image</p>
        </div>
        <div
          className="item"
          onDragStart={() => selected({ type: "elements", element: "video" })}
          onDragEnd={() => release({ type: "elements", element: "video" })}
        >
          <p>Video</p>
        </div>
        <div
          className="item"
          onDragStart={() => selected({ type: "elements", element: "onecolumn" })}
          onDragEnd={() => release({ type: "elements", element: "onecolumn" })}
        >
          <p>1 column</p>
        </div>
        <div
          className="item"
          onDragStart={() => selected({ type: "elements", element: "twocolumn" })}
          onDragEnd={() => release({ type: "elements", element: "twocolumn" })}
        >
          <p>2 columns</p>
        </div>
        <div
          className="item"
          onDragStart={() => selected({ type: "elements", element: "threecolumn" })}
          onDragEnd={() => release({ type: "elements", element: "threecolumn" })}
        >
          <p>3 columns</p>
        </div>
      </div>

      <div className="section">
        <p className="menu">Forms</p>
        <div
          className="item"
          onDragStart={() => selected({ type: "forms", element: "input" })}
          onDragEnd={() => release({ type: "forms", element: "input" })}
        >
          <p>Input</p>
        </div>
        <div
          className="item"
          onDragStart={() => selected({ type: "forms", element: "textarea" })}
          onDragEnd={() => release({ type: "forms", element: "textarea" })}
        >
          <p>Textarea</p>
        </div>
        <div
          className="item"
          onDragStart={() => selected({ type: "forms", element: "checkbox" })}
          onDragEnd={() => release({ type: "forms", element: "checkbox" })}
        >
          <p>Checkbox</p>
        </div>
        <div
          className="item"
          onDragStart={() => selected({ type: "forms", element: "radio" })}
          onDragEnd={() => release({ type: "forms", element: "radio" })}
        >
          <p>Radio</p>
        </div>
        <div
          className="item"
          onDragStart={() => selected({ type: "forms", element: "select" })}
          onDragEnd={() => release({ type: "forms", element: "select" })}
        >
          <p>Select</p>
        </div>
        <div
          className="item"
          onDragStart={() => selected({ type: "forms", element: "label" })}
          onDragEnd={() => release({ type: "forms", element: "label" })}
        >
          <p>Label</p>
        </div>
        <div
          className="item"
          onDragStart={() => selected({ type: "forms", element: "button" })}
          onDragEnd={() => release({ type: "forms", element: "button" })}
        >
          <p>Button</p>
        </div>
      </div>
    </div>
  );
};

export default Blocks;
