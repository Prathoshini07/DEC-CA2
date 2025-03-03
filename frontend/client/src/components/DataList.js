import React from 'react';
import DataItem from './DataItem';

const DataList = ({ data, onDelete }) => {
    if (!data || data.length === 0) {
        return <p>No data available.</p>;
    }

    return (
        <ul>
            {data.map(item => (
                <DataItem key={item._id} item={item} onDelete={onDelete} />
            ))}
        </ul>
    );
};

export default DataList;