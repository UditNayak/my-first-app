import "./ProductCard.css";
import logo from "./logo.svg";
import { useRef, useState } from "react"; // Hook to create a reference to a DOM element
import Effect from "./Effect/Effect";

function ProductCard({ title, price }) {
  let iRef = useRef(0);
  let pRef = useRef(0);
  let oRef = useRef(0);
  let [inputV, setInputV] = useState("Class");
  function printTitle() {
    console.log(title);
    if (pRef.current) {
      pRef.current.style.display =
        pRef.current.style.display === "none" ? "block" : "none";
    }
  }
  return (
    <div className="container">
      <img src={logo} alt="React Logo"  id="react-logo"/>
      <input type="text" ref={iRef} onChange={displayOutPut} value={inputV} />
      <p >Over here the output will arrive- {inputV}</p>
      <p onClick={printTitle}>{title}</p>
      <p ref={pRef}>{price}</p>
      <Effect />
    </div>
  );

  function displayOutPut(e){
    console.log("rendered", inputV);
    setInputV(e.target.value);
    // console.log(iRef.current.value);
    // console.log(oRef.current.value);
    // // oRef.current.innerText = oRef.current.innerText + iRef.current.value;
    // oRef.current.innerText = `Over here the output will arrive- ${iRef.current.value}`
  }
}

export default ProductCard;
