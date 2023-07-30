import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductDetails = ({detailsProduct}) => {
    return (
         <>
        {Object.keys(detailsProduct).map((category) => (
          <div key={category} className="category">
            <div className="products">
              {detailsProduct[category].map((product) => (
                <div key={product.id} className="product">
                  {/* <Link href={`/${product?.id}`}> */}
                  <Link href={`/${product?.id}`}>
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

export default ProductDetails;