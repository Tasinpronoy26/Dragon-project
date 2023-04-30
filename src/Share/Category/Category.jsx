import React from 'react';
import { Link } from 'react-router-dom';

const Category = (props) => {

    const { category } = props;

    return (
        <div>
            <p>{category.name}</p>
        </div>
    );
};

export default Category;