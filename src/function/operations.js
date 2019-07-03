export default function operations(state, nextOperator) {
  const { operator, current, previous } = state;
  if (state.operator === "=") {
    return {
      ...state,
      operatorFlag: true,
      previous: current,
      operator: nextOperator
    };
  }
  return {
    ...state,
    current: operation[operator](parseInt(previous, 10), parseInt(current, 10)),
    operatorFlag: true,
    previous: operation[operator](
      parseInt(previous, 10),
      parseInt(current, 10)
    ),
    operator: nextOperator
  };
}

const operation = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  "*": (x, y) => x * y,
  "/": (x, y) => x / y
};
