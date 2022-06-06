import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../Shared/PrimaryButton";

const Contact = () => {
  return (
    <div className='bg-slate-900 px-10 py-14 '>
      <div className='text-center pb-14 text-white'>

        <h1 className='text-4xl'>Update Your Profile</h1>
      </div>
      <div className='grid grid-cols-1 justify-items-center gap-5'>
        <input
          type='text'
          placeholder='Alternate Email Address'
          className='input w-full max-w-md'
          name='field1'
        />
        <input
          type='text'
          placeholder='Gender'
          className='input w-full max-w-md'
          name='field2'
        />
        <input
          type='text'
          placeholder='Nationality'
          className='input w-full max-w-md'
          name='field3'
        />
        <input
          type='text'
          placeholder='Current Address'
          className='input w-full max-w-md'
          name='field4'
        />
        <textarea
          className='textarea w-full max-w-md'
          placeholder='Suggession'
          rows={3}
          name='field5'
        ></textarea>
        <Link className='btn btn-success mt-9' to="/">Submit</Link>
      </div>
    </div>
  );
};

export default Contact;