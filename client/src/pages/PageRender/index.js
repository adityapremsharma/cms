import React, { useEffect, useRef, useContext } from "react";
import TextInput from "../../components/ui/TextInput";
import { Context as PageContext } from "../../context/pageContext";
import { useLocation } from "react-router-dom";
import PasswordInput from "../../components/ui/PasswordInput";
import SelectInput from "../../components/ui/SelectInput";

const PageRender = () => {
  const location = useLocation();

  const {
    state: { pageData },
    getpageData,
    onChangeInput,
  } = useContext(PageContext);

  let userInput = useRef().current;

  useEffect(() => {
    const page = location.pathname.substring(1);
    getpageData(page);

    // eslint-disable-next-line
  }, [location.pathname]);

  const convertArrayToObject = (array, key) => {
    const initialValue = {};
    return array.reduce((obj, item) => {
      return {
        ...obj,
        [item[key]]: item.value,
      };
    }, initialValue);
  };

  userInput = pageData && convertArrayToObject(pageData.components, "name");

  console.log("pd", pageData);

  function onChange(e, data, index) {
    onChangeInput(e, data, index);
    userInput = { ...userInput, [e.target.name]: e.target.value };
    console.log("in", userInput);
  }

  if (pageData === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {pageData.components.map((data, index) => {
        return data.type === "text" ? (
          <TextInput key={data.id} data={data} onChange={(e) => onChange(e, data, index)} />
        ) : data.type === "password" ? (
          <PasswordInput key={data.id} data={data} onChange={(e) => onChange(e, data, index)} />
        ) : data.type === "select" ? (
          <SelectInput key={data.id} data={data} onChange={(e) => onChange(e, data, index)} />
        ) : (
          <></>
        );
      })}
    </div>
  );
};

export default PageRender;
