import React, { useState } from "react";
import Blocks from "./Blocks";
import Layer from "./Layer";
import Styles from "./Styles";

const Sidebar = ({ selected, release }) => {
  const [activeTab, setactiveTab] = useState("styles");
  return (
    <div className="sidebar">
      <div className="tabs">
        <div className={`item ${activeTab === "styles" ? "active" : ""}`} onClick={() => setactiveTab("styles")}>
          <p>Styles</p>
        </div>
        <div className={`item ${activeTab === "layer" ? "active" : ""}`} onClick={() => setactiveTab("layer")}>
          <p>Layer</p>
        </div>
        <div className={`item ${activeTab === "blocks" ? "active" : ""}`} onClick={() => setactiveTab("blocks")}>
          <p>Blocks</p>
        </div>
      </div>
      <div className="main">
        {activeTab === "styles" && <Styles />}
        {activeTab === "layer" && <Layer />}
        {activeTab === "blocks" && <Blocks selected={selected} release={release} />}
      </div>
    </div>
  );
};

export default Sidebar;
