import { useContext } from "react"
import {reactcontext} from "../wrapper.jsx"

const Second = () => {
    const use = useContext(reactcontext);
    console.log(use)

  return (
    <div>second</div>
  )
}

export default Second