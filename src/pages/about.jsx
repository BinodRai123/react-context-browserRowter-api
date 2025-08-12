import { useNavigate } from "react-router-dom";

const About = () => {
  const buttonColor =
    "text-2xl self-start p-3 rounded-[0.21em] text-white bg-green-600 cursor-pointer active:scale-95";
  const navigate = useNavigate();

  const changetoProduct = (name) => {
    navigate(`/about/productdetail/${name}`);
  };

  return (
    <>
      <div className="flex flex-col gap-[2.5em] mt-[2em] ">
        <button
          onClick={() => changetoProduct("Product 1")}
          className={buttonColor}
        >
          Product 1
        </button>

        <button
          onClick={() => changetoProduct("Product 2")}
          className={buttonColor}
        >
          Product 2
        </button>

        <button
          onClick={() => changetoProduct("Product 3")}
          className={buttonColor}
        >
          Product 3
        </button>
        
      </div>
    </>
  );
};

export default About;
