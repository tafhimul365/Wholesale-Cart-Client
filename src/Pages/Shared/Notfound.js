import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div>

            <div className='flex  justify-center p-16'>
                <img className='flex w-1/3 justify-center align-middle' src="https://wholesalecart.com/static/media/404.27463b69.svg" alt="error" ></img>
            </div>
            <h1 className='text-4xl text-black text-center font-bold'>Page Not Found</h1>
            <div className='text-center'><Link className='btn mt-9' to="/">Return</Link>

            </div>
        </div>
    );
};

export default Notfound;