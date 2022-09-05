import React from "react";
import styl from "./style.module.css";

const CurrentFoods = (props) => {
  const sum = props.price * props.shirheg;

  return (
    <div className={styl.foode}>
      <img
        src={props.ImgUrl}
        alt="food photo"
        width="100px"
        height="100px"
      ></img>
      <h3>{props.ner}</h3>
      <button onClick={() => props.hoolNemeh(props.index)}>+</button>
      <p>{props.shirheg}</p>
      <button onClick={() => props.hoolHasah(props.index)}>-</button>
      <h3>{sum} une</h3>
    </div>
  );
};
export default CurrentFoods;
//    current food const ruu hooloo oruulsan
