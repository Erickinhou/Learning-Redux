import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const counterReducer = useSelector((state) => state.counterReducer);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter: {counterReducer}</h1>
      {isLogged ? <h3>Valuable Information I shouldn't see</h3> : ""}
      <button onClick={() => dispatch(increment(4))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
