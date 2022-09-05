import React from "react";
import css from "./style.module.css";
function Shadow(props) {
  return (
    <div
      style={{ visibility: props.show ? "visible" : "hidden" }}
      className={css.shadow}
    ></div>
  );
}
export default Shadow;
