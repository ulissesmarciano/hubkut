import React from 'react';
import { Link } from 'react-router-dom';

const InfoListItem = ({itemEmoji, itemName, to}) => {
    return (
        <li>
            <img src={itemEmoji} alt='ícone empresa' />
            <Link to={to}>
                <p>{itemName}</p>
            </Link>
        </li>
    );
};

export default InfoListItem;
