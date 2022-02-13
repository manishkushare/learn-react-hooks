import ComponentA from "./ComponentA";
import React, { useState} from "react";
// import { UserContext } from "./UserContext";
import { UserContext } from "./UserContext";
function App() {
  const [name, setName] = useState("Manish");
  return (
    <>
    <UserContext.Provider value={name}>
        <ComponentA />

    </UserContext.Provider>
  
    </>
  );
}
export default App;
