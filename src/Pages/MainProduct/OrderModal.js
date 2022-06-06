import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const OrderModal = ({ product }) => {
    const { title, price, quantity, image, description, sold, _id } = product
    const [modals, setModals] = useState(false)
    const [user] = useAuthState(auth)
    const handleModal = (e) => {
        setModals(e)
    }
    const OrderOption = ['Prepayment', 'Cash On delivery', 'Collect from warehouse']



    const handleBooking = event => {
        event.preventDefault()
        const cart = {

            patient: user.email,
            patientName: user.displayName,
            title,
            ordrerQuantity: event.target.quantity.value,
            deliveryOption: event.target.opt.value,

        }




        fetch('http://localhost:5001/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cart)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`${title} is added to cart`)
                }
                setModals(false)
            });
    }

    return (
        <div>
            <label for={_id} onClick={() => handleModal(true)} className="btn modal-button">Add to Cart</label>
            {modals ? < >




                <input type="checkbox" id={_id} className="modal-toggle" />
                <label for={_id} className="modal cursor-pointer">
                    <label className="modal-box relative" for={_id}>
                        <label for={_id} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                        <h2 className="px-6 pt-2 font-mono text-2xl font-bold">{title}</h2>
                        <p className="py-4 px-6">{description}</p>
                        <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>

                            <select name="opt" className="select select-bordered w-full max-w-xs">
                                {
                                    OrderOption.map((opt, index) => <option
                                        key={index}
                                        value={opt}
                                    >{opt}</option>)
                                }
                            </select>
                            <input type="number" name="quantity" required placeholder='minimum order is 10 unit' className="input input-bordered w-full max-w-xs" min={10} max={quantity} />


                            <input type="submit" data-bs-dismiss={_id} value="Add to Cart" className="btn btn-secondary w-full max-w-xs" />
                        </form>
                    </label>
                </label>


            </ > : null}
        </div>
    );
};

export default OrderModal;