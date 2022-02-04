import {useState} from "react";
function Counter(){
    console.dir(useState);
    const [count, incrementCount] = useState(0);
    return (
        <div>
            <button onClick={()=>incrementCount(count+1)}>Count {count} </button>
        </div>
    )
}
export default Counter;

/*
# In the above code with the help of the useState hook (a react hook function ) we are able to 
us the state feature of the react in the functional componenet

# so, it's a function, so will use them by calling it

on line 4 we are calling the useState(initialValue) fuction with the initial value, for our app it
is 0

then, we at the first, that value is store in the count variable and we also have the method to
increment the value

method incrementCount will accept an argument, and it will cause the count value to change and 
the method will cause the state to update and re render the UI 

Count will always store current value, and at the initilaization, it will contaion, initial value

*/