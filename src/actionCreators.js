import {
  MANAGE_CURRENT_NUMBER,
  CLEAR_CALCULATOR,
  OPERATION_MANAGE
} from "./actionTypes";

const manageCurrent = num => {
  return {
    type: MANAGE_CURRENT_NUMBER,
    current: num
  };
};

const operationManage = operator => {
  return {
    type: OPERATION_MANAGE,
    operator
  };
};

const clearCalculator = () => {
  return {
    type: CLEAR_CALCULATOR
  };
};

export { manageCurrent, operationManage, clearCalculator };
