export default (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload.number;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
