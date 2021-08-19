import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider as DataProvider } from "./context/dataContext";
import { Provider as PageProvider } from "./context/pageContext";
import "./styles/main.scss";

ReactDOM.render(
  <React.StrictMode>
    <PageProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </PageProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
