import { useContext } from "react"
import {reactcontext} from "../wrapper"


const Second = () => {
    const one = useContext(reactcontext);
    console.log(one);
  return (
    <div>second</div>
  )
}

export default Second