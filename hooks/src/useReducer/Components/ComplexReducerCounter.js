import { useReducer } from "react";
//  use case of useReducer with complex state and action 
// here we can add values in the action if it is object
// also if state is object we can take care of two state variables as well
const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducer = (prevState, action) => {
    let value = action.value;
    switch(action.type){
        case "incrementCounter1" : return {
            ...prevState,
            firstCounter : prevState.firstCounter + value
        }
        case "decrementCounter1" : return {
            ...prevState,
            firstCounter : prevState.firstCounter - value
        }
        case "incrementCounter2" : return {
            ...prevState,
            secondCounter : prevState.secondCounter + value
        }
        case "decrementCounter2" : return {
            ...prevState,
            secondCounter : prevState.secondCounter - value
        }
    }
};

function ComplextReducerCounter() {

  const [state, dispatch] = useReducer(reducer, initialState);
  let { firstCounter, secondCounter } = state;

  return (
    <div>
      <h1>First Counter - {firstCounter}</h1>
      <h1>Second Counter - {secondCounter}</h1>

      <h2 onClick={() => dispatch({ type: "decrementCounter1", value: 1 })}>
        Decrement Counter1
      </h2>
      <h2 onClick={() => dispatch({ type: "incrementCounter1", value: 1 })}>
        Increment Counter1
      </h2>
      <h2 onClick={() => dispatch({ type: "decrementCounter1", value: 10 })}>
        Decrement Counter1 by 10
      </h2>
      <h2 onClick={() => dispatch({ type: "incrementCounter1", value: 10 })}>
        Increment Counter1 by 10
      </h2>
      <h2 onClick={() => dispatch({ type: "decrementCounter2", value: 1 })}>
        Decrement Counter2
      </h2>
      <h2 onClick={() => dispatch({ type: "incrementCounter2", value: 1 })}>
        Increment Counter2
      </h2>
    </div>

  );
}
export default ComplextReducerCounter;
