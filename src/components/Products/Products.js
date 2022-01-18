import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Products() {
    const products = useSelector(state => state.allProducts.products);

    const list = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
            <div key={id}>
                <Link to={`/product/${id}`}>
                    <div>
                        <div>
                            <div>{image}</div>
                            <div>
                                <div>{title}</div>
                                <div>{price}</div>
                                <div>{category}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })

    return <> {list} </>
};
