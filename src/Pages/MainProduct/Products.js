import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import Product from './Product';

const Products = () => {

    const [products, setProducts] = useProducts([]);
    const productsHome = products.slice(0, 6)


    return (
        <div className='container'>
            <div className="row">
                <h1 className='text-3xl font-bold text-blue-900 text-center m-9'> Our Products</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        productsHome.map(product => <Product
                            key={product._id}
                            product={product}
                        >
                        </Product>)
                    }
                </div>
            </div>
            <div className='text-center'><Link className='btn mt-9' to="/products">SEE MORE...</Link>
            </div>
        </div>
    );
};

export default Products;