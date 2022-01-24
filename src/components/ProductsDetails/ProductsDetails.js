import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { selectedProducts, removeSelectedProducts } from '../../redux/actions/actions';

export default function ProductsDetails() {
    const product = useSelector(state => state.product);
    const { image, title, price, category, description } = product;
    const { productId } = useParams();
    const dispatch = useDispatch();

    const fetchProductsDetails = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .catch(error => {
                console.log('Error', error);
            });
        dispatch(selectedProducts(response.data));
    };

    useEffect(() => {
        if (productId && product !== "") fetchProductsDetails();
        return () => {
            dispatch(removeSelectedProducts());
        };
    }, [productId]);

    return (
        <div>
            {Object.keys(product).length === 0 ? (
                <div>... Loading</div>
            ) : (
                <div>
                    <div>
                        <div>
                            <div>
                                <img src={image}></img>
                            </div>
                            <div>
                                <h1>{title}</h1>
                                <h2>
                                    <a>{price}</a>
                                </h2>
                                <h3>{category}</h3>
                                <p>{description}</p>
                                <div>
                                    <div>
                                        <i></i>
                                    </div>
                                    <div>Add to Cart</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
