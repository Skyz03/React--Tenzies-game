import React from "react";

export default function Die(props) {
  return (
    //  Die class name based on the true of false of the value like switch between green and white
    <div
      className={props.isHeld ? "die-green" : "die-face"}
      onClick={props.onClick}
    >
      <h2 className="die__number">{props.value}</h2>
    </div>
  );
}
