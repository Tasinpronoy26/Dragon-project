import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

const LeftSide = () => {
    
    const [ categories, setCategories ] = useState([]);

    useEffect(() => {
        
        fetch('category.json')
        .then( res => res.json())
        .then( data => setCategories(data))

    },[])


    return (
        <div>
            <h4>All Category</h4>
            {
                categories.map(category => <Category key={category.id} category={category}></Category>)
                
            }
        </div>
    );
};

export default LeftSide;