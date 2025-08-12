import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetail = () => {
  const navigate = useNavigate();

  const gotoAbout = () => {
    navigate(-1);
  };

  return (
    <>
      <h1>Details of...</h1>
      <h1>product</h1>

      <button
        onClick={() => gotoAbout()}
        className="text-2xl self-start p-3 rounded-[0.21em] text-white bg-green-600 cursor-pointer active:scale-95"
      >
        Go Back
      </button>
    </>
  );
};

export default ProductDetail;
