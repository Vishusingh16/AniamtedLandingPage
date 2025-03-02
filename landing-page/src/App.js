import {init} from "./utils/initDroneLayer.js";
import { useEffect } from "react";

function App() {
useEffect(() => {
  init()
},[])


  return (
    <div className="App">
 
    </div>
  );
}

export default App;
