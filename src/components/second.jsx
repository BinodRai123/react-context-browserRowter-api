import { useContext } from "react"
import { reactcontext } from "../wrapper.jsx"

const change = (data, setData) => {
    setData([...data, ...data])
    console.log(data)
}

const Second = () => {
    const [data, setData] = useContext(reactcontext);

  return (
    <>
        {data.map(all => all.name)}
        <button 
            className="p-2 bg-pink-600 text-white rounded-[5px] m-4 active:scale-90"
            onClick={()=>change(data, setData)}
        >
            Duplicate
        </button>
    </>
  )
}

export default Second