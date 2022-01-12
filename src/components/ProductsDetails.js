import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { selectedProducts } from '../redux/actions/actions';

export default function ProductsDetails() {
    const { productId } = useParams();
    const product = useSelector(state => state.product);
    const dispatch = useDispatch();

    const fetchProductsDetails = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
            .catch(error => {
                console.log('Error', error);
            });
        dispatch(selectedProducts(response.data))
    };

    return (
        <div>
            <h1>Products Details</h1>
        </div>
    );
};