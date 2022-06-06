import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({})
    const [load, setLoad] = useState(false)
    const { title, price, quantity, image, description, sold } = product

    fetch(`http://localhost:5001/products/${productId}`)
        .then(res => res.json())
        .then(data => {
            setProduct(data)
            setLoad(true)
        })
    if (!load) {
        return <Loading></Loading>

    } else {
        return (

            <div className='flex justify-center my-9'>
                <div className=" card card-compact  justify-center w-96 bg-base-100 shadow-xl">
                    <figure className='w-50'><img src={image} alt={title} /></figure>
                    <div className="card-body">
                        <h2 className="px-6 pt-2 font-mono text-2xl font-bold">{title}</h2>
                        <h3 className="px-6 pt-2 text-sm font-medium ">{description}</h3>
                        <div className="card-body grid grid-cols-2 justify-items-start">
                            <div>
                                <p className='font-bold text-xl p-2'>${price}</p>



                            </div>
                            <div>

                                <div className='py-3'>Available: <div className="badge btn-outline badge-s"> {quantity}</div>
                                </div>
                                <div>Total Sold: <div className="badge btn-outline badge-s"> {sold}</div>
                                </div>


                            </div>
                        </div>


                    </div>
                </div>
            </div>
        );
    }
};

export default ProductDetails;