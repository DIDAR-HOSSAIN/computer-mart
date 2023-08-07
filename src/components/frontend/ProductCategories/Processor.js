import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Processor = ({ allProcessor }) => {
  const processorCategories = allProcessor.filter((product) => product.category === 'Processor');

  const handleAddProduct = (productId) => {
    const productWithId = processorCategories.find((item) => item.id === productId);
    console.log('Product added to cart:', productWithId);
  };

  return (
    <>
      {processorCategories?.map((processor) => (
        <div key={processor.id} className="px-10 pt-8">
          <Link href={"/"}>
            <figure className='flex justify-center items-center'>
              <Image src={processor?.image} width={300} height={300} alt="" />
            </figure>
            <div className='text-center'>
              <h2>{processor.name}</h2>
              <p>Category: {processor.category}</p>
              <p>Price: {processor.price}</p>
              <p>Average Rating: {processor.averageRating}</p>
            </div>
          </Link>
          <button onClick={() => handleAddProduct(processor.id)} className="btn btn-active btn-accent">
            Add To Cart
          </button>
        </div>
      ))}
    </>
  );
};

export default Processor;
