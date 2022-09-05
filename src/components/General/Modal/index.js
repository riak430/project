import React from "react";
import Shadow from "../Shadow";
import style from "./style.module.css";
const Modal = (props) => {
  return (
    <div
      className={style.modal}
      style={{ top: props.show ? "200px" : "-100vh" }}
    >
      <Shadow show={props.show} />
      {props.children}
    </div>
  );
};
export default Modal;
