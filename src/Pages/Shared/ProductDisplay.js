import React, { useState } from 'react';
import useProducts from '../../hooks/useProducts';
import OrderModal from '../MainProduct/OrderModal';
import Product from '../MainProduct/Product';
import Products from '../MainProduct/Products';
import Footer from './Footer';

const ProductDisplay = () => {

    const [products, setProducts] = useProducts([]);


    return (
        <div id="products" className='container'>
            <div className="row">
                <h1 className='text-3xl font-bold text-blue-900 text-center m-9'> Our Products</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}

                        >
                        </Product>)
                    }





                </div>
            </div>
        </div>
    );

};

export default ProductDisplay;