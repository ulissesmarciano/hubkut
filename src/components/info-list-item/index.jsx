import React from 'react';
import { Link } from 'react-router-dom';

const InfoListItem = ({ itemEmoji, itemName, to }) => {
    return (
        <li>
            <img src={itemEmoji} alt='ícone empresa' />
            {to ? (
                <Link to={to}>
                    <p>{itemName}</p>
                </Link>) : (
                <p>{itemName}</p>
            )}
        </li>
    );
};

export default InfoListItem;
