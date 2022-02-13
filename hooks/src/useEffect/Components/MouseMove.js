import React,{useState,useEffect} from "react"
// useEffect run only once
function MouseMove(){
    let [x,setX] = useState(0);
    let [y,setY] = useState(0);
    useEffect(()=> {
        console.log("inside use effect");
        window.addEventListener('mousemove', logMousePosition);
        /*
        The return function from useEffect will act as componentWillUnmount
        */
        return () => {
            window.removeEventListener('mousemove', logMousePosition);
        }
    },[])
    const logMousePosition= (e)=> {
        console.log("Mouse position log");
        setX(e.clientX);
        setY(e.clientY);
    }
    return (
        <div >
            Mouse X - {x} Y-{y}
        </div>
    )
}
export default MouseMove;