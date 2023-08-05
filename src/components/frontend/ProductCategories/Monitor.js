import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Monitor = ({monitors}) => {
  const monitorCategories = monitors.filter((product) => product.category === 'Monitor');

    return (
        <>
        {
         monitorCategories?.map((monitor)=>(
          <div key={monitor.id} className=" px-10 pt-8">
          <Link href={"/"}>
          <figure className='flex justify-center items-center'><Image className='w-32 h-32' src={monitor?.image} width={300} height={300} alt=""/></figure>
          <div className='text-center'>
           <h2>{monitor.name}</h2>
          <p>Category: {monitor.category}</p>
          <p>Price: {monitor.price}</p>
          <p>Average Rating: {monitor.averageRating}</p>
         </div>
          </Link>
          </div>
        ))
       }
      </>
    );
};

export default Monitor;