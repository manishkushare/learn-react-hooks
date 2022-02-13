import ComponentB from "./ComponentB";
import { UserContext } from "./UserContext";
import React,{useContext} from "react";
function ComponentA(){
    const user = useContext(UserContext);
    console.log(user);
    return <ComponentB/>
}
export default ComponentA;