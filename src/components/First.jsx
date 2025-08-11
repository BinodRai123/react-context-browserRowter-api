import { useContext } from "react"
import Second from "./second.jsx"
import { reactcontext } from "../wrapper.jsx";

const First = () => {
    const data = useContext(reactcontext);

  return (
    <>
        <div>First</div>
        <button 
            className="block bg-green-400 rounded-[5px]"
             onClick={() => console.log(data)}>
            show Data
        </button>

        <Second />
    </>
  )
}

export default First