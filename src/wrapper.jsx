import { createContext, useState } from "react"
import { BrowserRouter } from "react-router-dom";

export const reactcontext = createContext(null);

const Wrapper = (props) => {
  const [data, setData] = useState([{name: "binod", age: 20}]);
  
  return <>
    <BrowserRouter>
      <reactcontext.Provider value={[data, setData]}>
        {props.children}
      </reactcontext.Provider>
    </BrowserRouter>
  </>

}

export default Wrapper