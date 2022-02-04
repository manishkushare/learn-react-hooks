import {useState} from "react";
function UseStateWithObjects(){
    const initialState = {
        firstName :"",
        lastName : "",
    }
    const [state , setState] = useState(initialState);
    return (
        <div>
            <input type="text" placeholder="First Name" value={state.firstName} 
             onChange={(event)=> {
                 return setState((prevState)=> {
                     return {
                         ...prevState,
                         firstName : event.target.value,
                     }
                 })
             } } />
            <input type="text" placeholder="Last Name"  value={state.lastName} 
             onChange={(event)=> {
                 return setState(prevState=> {
                     return {
                         ...prevState,
                         lastName : event.target.value,
                     }
                 })
             } }/>
            <h2>First Name : {state.firstName}</h2>
            <h2>Last Name : {state.lastName}</h2>
        </div>
    )
}
export default UseStateWithObjects;

/*
what we need to learn here
initial value can be anything, any valid data type, that is number,string,boolean, null,
undefined, objects or arrays

MOST IMPORTANT POINT IN USESTATE TO KNOW WHEN UPDATING STATE,
IT DOES NOT MIERGE AUTHOMATICALLY AND UPDATE,
SO WE NEED TO MERGE IT AND THEN UPDATE IT MANUALLY
*/