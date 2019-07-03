import React from "react";
import { connect } from "react-redux";
import Button from "./Button";
import {
  manageCurrent,
  operationManage,
  clearCalculator
} from "../actionCreators";
import "../App.css";

const nums = Array.from(Array(10).keys()); // this line generate an array of number from 0 to 9
const operators = ["+", "-", "*", "/", "="];

function Calculator({
  current,
  manageCurrent,
  operationManage,
  clearCalculator
}) {
  return (
    <div className="Calculator-container">
      <div className="Calculator-outdoor">
        <div className="Calculator-Display">{current}</div>
        <button className="button-operation clear" onClick={clearCalculator}>
          Clear
        </button>
        <div className="Calculator-Buttons">
          <div className="Calculator-Nums">
            {nums.map(num => (
              <Button
                className={"button-num"}
                key={num}
                onClick={() => manageCurrent(`${num}`)}
              >
                {num}
              </Button>
            ))}
          </div>
          <div className="Calculator-Operators">
            {operators.map(operator => (
              <Button
              className={"button-operation"}
                key={operator}
                onClick={() => operationManage(operator)}
              >
                {operator}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  current: state.current
});

const mapDispatchToProps = { manageCurrent, operationManage, clearCalculator };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculator);
