import Image from 'next/image';
import Link from 'next/link';


const FeaturedProducts = ({ products }) => {

    return (
      <>
      {products?.map((product) => (
        <div key={product._id}>
          <Link href={`/${product.id}`}>
          <figure className='flex justify-center items-center'> 
          <Image src={product.image} width={200} height={200} alt={product.name} />
          </figure>
         <div className='text-center'>
           <h2>{product.name}</h2>
          <p>Category: {product.category}</p>
          <p>Price: {product.price}</p>
          <p>Average Rating: {product.averageRating}</p>
         </div>
          </Link>
        </div>
      ))}
    </>
    );
  };


export default FeaturedProducts;
