import createDataContext from "./createDataContext";
import apiPages from "../apis/apiPages";

const pageReducer = (state, action) => {
  switch (action.type) {
    case "PAGES":
      return { ...state, pages: action.payload };
    case "PAGE_DATA":
      return { ...state, pageData: action.payload };
    default:
      return state;
  }
};

const getpages = (dispatch) => async () => {
  const res = await apiPages.get("/pages");
  dispatch({ type: "PAGES", payload: res.data });
};

const getpageData = (dispatch) => async (pageName) => {
  const res = await apiPages.get(`/${pageName}`);
  dispatch({ type: "PAGE_DATA", payload: res.data });
};

const onChangeInput = (dispatch, state) => async (e, data, index) => {
  const newObj = state.pageData.components.find((item) => item.id === data.id);
  newObj.value = e.target.value;
  state.pageData.components[index] = newObj;
  console.log(state.pageData.components[index]);
  dispatch({ type: "PAGE_DATA", payload: state.pageData });
};

export const { Context, Provider } = createDataContext(
  pageReducer,
  { getpages, getpageData, onChangeInput },
  { pages: [], pageData: null }
);
