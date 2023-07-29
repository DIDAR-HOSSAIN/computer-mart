import Image from 'next/image';
import { useRouter } from 'next/router';

const ProductDetails = ({ products }) => {
  const router = useRouter();

  if (router.isFallback) {
    // You can show a loading state here
    return <div>Loading...</div>;
  }

  if (!products) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{products.name}</h1>
      <Image src={products.image} alt={products.name} />
      <p>{products.description}</p>
      <p>Price: {products.price}</p>
      <p>Specification: {products.keyFeatures.Specification}</p>
      <p>Average Rating: {products.averageRating}</p>

      <h2>Reviews:</h2>
      {products.reviews.map((review, index) => (
        <div key={index}>
          <p>Rating: {review.rating}</p>
          <p>Comment: {review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const productId = params.id;

  try {
    const res = await fetch(`http://localhost:5000/products/${productId}`);
    if (!res.ok) {
      throw new Error('Product not found');
    }
    const data = await res.json();
    console.log('from products details page',data)
    return {
      props: {
        products: data,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
}

export default ProductDetails;
