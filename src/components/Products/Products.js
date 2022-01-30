import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Styles.css';

export default function Products() {
    const products = useSelector(state => state.allProducts.products);

    const list = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
            <div key={id} className='main'>
                <Link to={`/product/${id}`}>
                    <div className='cards'>
                        <img src={image} className='images' />
                        <div className='info'>
                            <h3 className='infos'>{title}</h3>
                            <h3 className='infos'>{price}</h3>
                            <h3 className='infos'>{category}</h3>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })

    return <> {list} </>
};
