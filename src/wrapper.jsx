import { createContext } from "react"

export const reactcontext = createContext(null);

const Wrapper = (props) => {
  
  return <>
    <reactcontext.Provider value={"hello world"}>
      {props.children}
    </reactcontext.Provider>
  </>

}

export default Wrapper