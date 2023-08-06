import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Processor = ({allProcessor}) => {
  const processorCategories = allProcessor.filter((product) => product.category === 'Processor');
  console.log('only processor product', processorCategories)

  const handleAddProduct = (processorCategories)=>{
    console.log('from cart',processorCategories)
    processorCategories?.map((item)=>(
      console.log(item.name)
    ))



  };

    return (
        <>
    {
     processorCategories?.map((processor)=>(
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
      <button onClick={()=>handleAddProduct(processorCategories)} className="btn btn-active btn-accent">Add To Cart</button>
      </div>
    ))
   }
  </>
    );
};

export default Processor;