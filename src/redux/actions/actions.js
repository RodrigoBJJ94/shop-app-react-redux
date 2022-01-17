import { SET_PRODUCTS, SELECTED_PRODUCTS, REMOVE_SELECTED_PRODUCTS } from "../actionTypes/actionTypes";

export const setProducts = (products) => {
    return {
        type: SET_PRODUCTS,
        payload: products
    };
};

export const selectedProducts = (products) => {
    return {
        type: SELECTED_PRODUCTS,
        payload: products
    };
};

export const removeSelectedProducts = () => {
    return {
        type: REMOVE_SELECTED_PRODUCTS,
    };
};

