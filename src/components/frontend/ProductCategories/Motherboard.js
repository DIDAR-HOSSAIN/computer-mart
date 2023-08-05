import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Motherboard = ({motherboards}) => {
  const motherboardCategories = motherboards.filter((product) => product.category === 'Motherboard');
  
    return (
        <>
        {
         motherboardCategories?.map((borad)=>(
          <div key={borad.id} className=" px-10 pt-8">
          <Link href={"/"}>
          <figure className='flex justify-center items-center'><Image className='w-32 h-32' src={borad?.image} width={300} height={300} alt=""/></figure>
           <div className='text-center'>
           <h2>{borad.name}</h2>
          <p>Category: {borad.category}</p>
          <p>Price: {borad.price}</p>
          <p>Average Rating: {borad.averageRating}</p>
         </div>
          </Link>
          </div>
        ))
       }
      </>
    );
};

export default Motherboard;