import React, { useState } from 'react';
import Loading from '../Shared/Loading';

import Review from './Review';
// import Loading from '../Shared/Loading'
const Testimonials = () => {
    const [reviews, setReviews] = useState()
    const [load, setLoad] = useState(false)
    fetch(`http://localhost:5001/reviews`)
        .then(res => res.json())
        .then(data => {
            setReviews(data)
            setLoad(true)

        })




    return (
        load ? <section className='my-28' >

            <div div className='text-center' >
                <h2 className='text-3xl font-bold'>Customer review</h2>
            </div >


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews?.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section > : <Loading></Loading>
    )

};

export default Testimonials;