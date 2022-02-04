import React,{useState} from "react";
function UseStateWithArray(){
    const initialState = [];
    const [state, setState] = useState(initialState);
    const addNumberToArray = ()=> {
        const number = Math.floor(Math.random()*100);
        setState((prevState)=> {
            return [...prevState, prevState[prevState.length]= number];
        })
    }
    return (
        <div>
            Array : {state}
            <button onClick={addNumberToArray}>Add random number to array</button>
            {
                state && state.length >= 1 && state.map((elem,index) => {
                    return <li key={index}>{elem}</li>
                })
            }
        </div>
    )
}
export default UseStateWithArray;