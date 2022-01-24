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
                            <div>
                                <img src={image} className='images' />
                            </div>
                            <div>
                                <div>{title}</div>
                                <div>{price}</div>
                                <div>{category}</div>
                            </div>
                        </div>
                  
                </Link>
            </div>
        )
    })

    return <> {list} </>
};
