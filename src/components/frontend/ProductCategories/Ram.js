import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Ram = ({rams}) => {
  const ramCategories = rams.filter((product) => product.category === 'RAM');
  
    return (
         <>
        {
         ramCategories?.map((ram)=>(
          <div key={ram.id} className=" px-10 pt-8">
          <Link href={"/"}>
          <figure className='flex justify-center items-center'><Image className='w-32 h-32' src={ram?.image} width={300} height={300} alt=""/></figure>
          <div className='text-center'>
           <h2>{ram.name}</h2>
          <p>Category: {ram.category}</p>
          <p>Price: {ram.price}</p>
          <p>Average Rating: {ram.averageRating}</p>
         </div>
          </Link>
          </div>
        ))
       }
      </>
    );
};

export default Ram;