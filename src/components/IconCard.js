import React from "react";


function IconCard(props) {
  return (
      <span id={props.id} onClick={() => props.onClick(props.id)} value={props.id}>
        <img src={props.image} width="75" alt="emoji"/>
      </span>
  );
}

export default IconCard;