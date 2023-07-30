import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PowerSupply = ({powerSupplies}) => {
    return (
         <>
        {
         powerSupplies?.map((powerSupply)=>(
          <div key={powerSupply.id} className=" px-10 pt-8">
          <Link href={"/"}>
          <figure className='flex justify-center items-center'><Image className='w-32 h-32' src={powerSupply?.image} width={300} height={300} alt=""/></figure>
          <div className='text-center'>
           <h2>{powerSupply.name}</h2>
          <p>Category: {powerSupply.category}</p>
          <p>Price: {powerSupply.price}</p>
          <p>Average Rating: {powerSupply.averageRating}</p>
         </div>
          </Link>
          </div>
        ))
       }
      </>
    );
};

export default PowerSupply;