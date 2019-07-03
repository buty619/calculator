import { createStore } from "redux";
import operatios from "../src/function/operations";

const reducer = (state, action) => {
  if (action.type === "MANAGE_CURRENT_NUMBER") {
    if (state.operatorFlag) {
      
      return {
        ...state,
        current: action.current,
        operatorFlag: false
      };
    }
    if (state.current === "0") {
      return {
        ...state,
        current: action.current
      };
    } else {
      return {
        ...state,
        current: state.current + action.current
      };
    }
  }
  if (action.type === "CLEAR_CALCULATOR") {
    return {
      ...state,
      current: "0",
      operator: "",
      operatorFlag: false,
      previous: "0"
    };
  }
  if (action.type === "OPERATION_MANAGE") {
    if (state.operator !== "") {
      return operatios(state, action.operator);
    }
    return {
      ...state,
      operator: action.operator,
      previous: state.current,
      operatorFlag: true
    };
  }
  return state;
};
export default createStore(reducer, {
  current: "0",
  operator: "",
  previous: "0",
  operatorFlag: false
});
