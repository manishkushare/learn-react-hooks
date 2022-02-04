import { useState } from "react";
function CounterWithPrevStateInUseHooks() {
  let initialCount = 0;
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      Count {count}
      <button onClick={()=>setCount(initialCount)}>Reset</button>
      <button onClick={()=> setCount(prevCount=> prevCount +1 )} >Increment</button>
      <button onClick={()=> setCount(prevCount=> prevCount -1 )} >Decrement</button>
      <button onClick={()=> setCount(prevCount=> prevCount + 5 )} >IncrementBy5</button>
    </div>
  );
}
export default CounterWithPrevStateInUseHooks;

/*
Now here we are learning better way to update state by using prevState in useState, if your updated 
state depends upon prevState,
Like in our example, we need to increment decrement or reset the state/ count by 1, so we 
need to have prevState

that's why, setCount(prevState=> {})
setCount method contains an argument called prevState
This is the best practice to update the state, if our state is dependent on the value of prevState
*/