import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Processor = ({allProcessor}) => {
    return (
        <>
    {
     allProcessor?.map((processor)=>(
      <div key={processor.id} className=" px-10 pt-8">
      <Link href={"/"}>
      <figure className='flex justify-center items-center'><Image className='w-32 h-32' src={processor?.image} width={300} height={300} alt=""/></figure>
      <div className='text-center'>
           <h2>{processor.name}</h2>
          <p>Category: {processor.category}</p>
          <p>Price: {processor.price}</p>
          <p>Average Rating: {processor.averageRating}</p>
         </div>
      </Link>
      </div>
    ))
   }
  </>
    );
};

export default Processor;