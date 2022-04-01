import React from "react";

export default function Die(props) {
  return (
    <div
      className={props.isHeld ? "die-green" : "die-face"}
      onClick={props.onClick}
    >
      <h2 className="die__number">{props.value}</h2>
    </div>
  );
}
