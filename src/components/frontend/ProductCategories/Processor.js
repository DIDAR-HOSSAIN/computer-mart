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
      <figure><Image className='w-32 h-32' src={processor?.image} width={300} height={300} alt=""/></figure>
      <div className="card-body bg-white rounded-b-2xl">
          <h2 className="font-bold">{processor?.name}</h2>
      </div>
      </Link>
      </div>
    ))
   }
  </>
    );
};

export default Processor;