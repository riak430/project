import React from "react";
import stylee from "./style.module.css";
import CurrentFoods from "../currentFood/CurrentFood";

function CurrentOrder(props) {
  const w = props.foods?.map((el, i) => {
    return (
      <CurrentFoods
        key={el.ner + i}
        ner={el.ner}
        price={el.price}
        ImgUrl={el.imgUrl}
        shirheg={el.shirheg}
        hoolNemeh={props.hoolNemeh}
        hoolHasah={props.hoolHasah}
        index={i}
        disabled={props.disabledBtn}
      />
    );
  });
  return (
    <div className={stylee.www}>
      {w}
      <div className={stylee.ww}>Cashless Credit: {props.totalPrice} </div>
      <div className={stylee.wwww}>
        <button onClick={props.showModal}>Pay with Cashless Credit</button>
      </div>
      <h2>Total: {props.une.totalPrice}</h2>
    </div>
  );
}

export default CurrentOrder;
