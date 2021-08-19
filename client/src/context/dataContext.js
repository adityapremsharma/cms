import createDataContext from "./createDataContext";

const dataReducer = (state, action) => {
  switch (action.type) {
    case "ELEMENTS":
      return { ...state, elements: action.payload };
    default:
      return state;
  }
};

const setelements = (dispatch) => {
  return (getelements) => dispatch({ type: "ELEMENTS", payload: getelements });
};

export const { Context, Provider } = createDataContext(dataReducer, { setelements }, { elements: [] });
