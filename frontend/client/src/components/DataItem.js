import React from 'react';

const DataItem = ({ item, onDelete }) => {
    return (
        <li>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
            <button onClick={() => onDelete(item._id)}>Delete</button>
        </li>
    );
};

export default DataItem;