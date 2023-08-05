import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Storage = ({storages}) => {
  const storageCategories = storages.filter((product) => product.category === 'Storage');

    return (
         <>
        {
         storageCategories?.map((storage)=>(
          <div key={storage.id} className=" px-10 pt-8">
          <Link href={"/"}>
          <figure className='flex justify-center items-center'><Image className='w-32 h-32' src={storage?.image} width={300} height={300} alt=""/></figure>
          <div className='text-center'>
           <h2>{storage.name}</h2>
          <p>Category: {storage.category}</p>
          <p>Price: {storage.price}</p>
          <p>Average Rating: {storage.averageRating}</p>
         </div>
          </Link>
          </div>
        ))
       }
      </>
    );
};

export default Storage;