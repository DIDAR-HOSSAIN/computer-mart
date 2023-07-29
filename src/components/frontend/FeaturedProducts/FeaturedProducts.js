import Image from 'next/image';
import Link from 'next/link';


const FeaturedProducts = ({ products }) => {
    
    return (
      <>
        {Object.keys(products).map((category) => (
          <div key={category} className="category">
            <div className="products">
              {products[category].map((product) => (
                <div key={product.id} className="product">
                  <Link href={`/${product?.id}`}>
                  {/* <Link href={`/news/${news?.id}`}> */}
                    <figure>
                      <Image
                        className="product-image"
                        src={product.image}
                        width={300}
                        height={300}
                        alt=""
                      />
                    </figure>
                  </Link>
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>Price: {product.price}</p>
                    <p>Rating: {product.averageRating}</p>
                    <p>Status: {product.status ? 'In Stock' : 'Out of Stock'}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </>
    );
  };


export default FeaturedProducts;