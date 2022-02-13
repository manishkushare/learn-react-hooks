import { UserContext } from "./UserContext";
import {useContext} from "react";
function ComponentC(){
   const user = useContext(UserContext);
   console.log(user);
    
    return <h2>Hello {user} </h2>
}
export default ComponentC;