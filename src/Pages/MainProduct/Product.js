import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

import OrderModal from './OrderModal';

const Product = ({ product, check, setCheck }) => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);


    const { title, price, quantity, image, description, sold, _id } = product
    const navigateToProductDetails = id => {
        navigate(`/products/${id}`);
    }


    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure className='w-50'><img src={image} alt={title} /></figure>
            <h2 className="px-6 pt-2 font-mono text-2xl font-bold">{title}</h2>
            <div className="card-body grid grid-cols-2 justify-items-start">
                <div>
                    <p className='font-bold text-xl p-2'>${price}</p>
                    <div className="card-actions p-1">
                        <button onClick={() => navigateToProductDetails(_id)} className="btn btn-secondary btn-sm  border-cyan-600">Details</button>

                    </div>

                </div>
                <div>

                    <div className='py-3'>Available: <div className="badge btn-outline badge-s"> {quantity}</div>
                    </div>
                    <div>Total Sold: <div className="badge btn-outline badge-s"> {sold}</div>
                    </div>


                </div>
                <OrderModal product={product}></OrderModal>


            </div>
        </div>
    )

};

export default Product;