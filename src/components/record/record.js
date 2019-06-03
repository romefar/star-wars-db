import React from 'react';

import './record.css';

const Record = ({itemData, field, label}) => { 
    return (
        <li className="list-group-item">
            <span className="term">{label}:</span>
            <span>{itemData[field]}</span>
        </li>
    )
}

export default Record;