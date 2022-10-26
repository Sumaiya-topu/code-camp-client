import React, { Fragment } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Categories from '../../Layout/Pages/Categories/Categories';
import Category from '../../Layout/Pages/Category/Category';

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    return (
        <div>
            <h4>Categories</h4>
            <div>
                {
                    categories.map(category => <p><Link key={category.id}>{category.name}</Link></p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;