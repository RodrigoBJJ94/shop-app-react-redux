import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../redux/actions/actions';
import Products from '../Products/Products';

export default function ProductsList() {
    const products = useSelector(state => state);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
            .catch((error) => {
                console.log('Error', error);
            });
            dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            <Products />
        </div>
    );
};
