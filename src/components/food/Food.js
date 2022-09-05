import React from "react";
import style from "./style.module.css";
const Food = (props) => {
  return (
    <button className={style.food} onClick={() => props.nemelt(props.index)}>
      <span>
        <h1>{props.ner}</h1>
        <p>{props.price}</p>
      </span>
      <img src={props.ImgUrl} alt="food photo" width="40%" height="100px"></img>
    </button>
  );
};
export default Food;
