import {useReducer}from "react";
// understadning useReducer with simple state and action
const reducer = (state,action)=> {
    switch(action){
        case "increment" : 
            return state + 1;
        case "decrement" : 
            return state-1;
        case "reset" :
            return initialState;
    }
}
const initialState = 0;
function Counter(){
    const [count,dispatch]= useReducer(reducer,initialState);
    return (
        <div>
            <h2>{count}</h2>
            <h2 onClick={()=> dispatch("increment")} >Incrementr</h2>
            <h2 onClick={()=>dispatch("decrement")}>Decrement</h2>
            <h2 onClick={()=>dispatch("reset")}>Reset</h2>
        </div>
    )
}
export default Counter;