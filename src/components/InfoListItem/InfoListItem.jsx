import React from "react";
import { Link } from "react-router-dom";

const InfoListItem = ({ itemEmoji, itemName, to, target }) => {
  return (
    <li>
      <img src={itemEmoji} alt="ícone empresa" />
      {to ? (
        <Link to={to} target={target}>
          <p>{itemName}</p>
        </Link>
      ) : (
        <p>{itemName}</p>
      )}
    </li>
  );
};

export default InfoListItem;
