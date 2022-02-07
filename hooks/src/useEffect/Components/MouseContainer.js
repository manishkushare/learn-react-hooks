import React,{useState} from "react"
import MouseMove from "./MouseMove"
function MouseContainer(){
    const [display, setDisplay] = useState(true);
    return (
        <div>
            <button onClick={()=> setDisplay(!display)}>
                Display
            </button>
            {
                display && <MouseMove/>
            }
        </div>
    )
}
export default MouseContainer;