import React, {useState,useEffect} from "react";
/*
Below Counter function is to explain useEffect with conditional run
*/
// function Counter(){
//     const [count, setCount] = useState(0);
//     const [name,setName] = useState('');
//     useEffect(()=> {
//         console.log("inside use effect");
//         document.title = `You clicked me ${count} times`
//     },[count])
//     return (
//         <div>
//             <input type="text" value={name}  onChange={(event) => setName(event.target.value) } />
//             <button onClick={()=> setCount(prevCount => prevCount+1)}>
//                 Count :  {count}
//             </button>
           
//         </div>
//     )
// }

/*
Below Counter function is to explain useEffect with incorrect dependencies
*/
function Counter (){
    const [count, setCount] = useState(0);
    // const tick = ()=> {
    //     setCount(count+1);
    // }
    function tick(){
        setCount(prevCount =>prevCount+1);

    }
    useEffect(()=> {
        const interval = setInterval(tick,1000);
        return ()=> {
            clearInterval(interval);
        }
    },[])
    return (
        <div>
            {count}
        </div>
    )
}

export default Counter;