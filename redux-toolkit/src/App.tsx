/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { incrementByAmount, decrementByAmount } from "./redux/counter";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const { value } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <h1> The count is: {value}</h1>
      <button onClick={() => dispatch(incrementByAmount(1))}>Increment</button>
      <button onClick={() => dispatch(decrementByAmount(1))}>Decrement</button>
    </div>
  );
}

export default App;
