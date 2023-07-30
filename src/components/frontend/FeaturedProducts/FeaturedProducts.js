import Image from 'next/image';
import Link from 'next/link';


const FeaturedProducts = ({ products }) => {

    return (
      <>
      {products.map((processor) => (
        <div key={processor.id}>
          <Link href={`/${processor?.id}`}>
          <figure className='flex justify-center items-center'> 
          <Image src={processor.image} width={200} height={200} alt={processor.name} />
          </figure>
         <div className='text-center'>
           <h2>{processor.name}</h2>
          <p>Category: {processor.category}</p>
          <p>Price: {processor.price}</p>
          <p>Average Rating: {processor.averageRating}</p>
         </div>
          </Link>
        </div>
      ))}
    </>
    );
  };


export default FeaturedProducts;
