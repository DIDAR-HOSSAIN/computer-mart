import Image from 'next/image';


const FeaturedProducts = ({ products }) => {
    
    return (
      <>
      {products.map((processor) => (
        <div key={processor.id}>
          <figure className='flex justify-center items-center'> 
          <Image src={processor.image} width={200} height={200} alt={processor.name} />
          </figure>
         <div className='text-center'>
           <h2>{processor.name}</h2>
          <p>Category: {processor.category}</p>
          <p>Price: {processor.price}</p>
          <p>Average Rating: {processor.averageRating}</p>
         </div>
        </div>
      ))}
    </>
    );
  };


export default FeaturedProducts;







//  <div>
//       <h1>Processors</h1>
//       {processorsData.processors.map((processor) => (
//         <div key={processor.id}>
//           <h2>{processor.name}</h2>
//           <p>Category: {processor.category}</p>
//           <p>Price: {processor.price}</p>
//           <p>Description: {processor.description}</p>
//           <p>Key Features:</p>
//           <ul>
//             <li>Brand: {processor.keyFeatures.Brand}</li>
//             <li>Model: {processor.keyFeatures.Model}</li>
//             <li>Specification: {processor.keyFeatures.Specification}</li>
//           </ul>
//           <img src={processor.image} alt={processor.name} />
//           <p>Average Rating: {processor.averageRating}</p>
//           <p>Individual Rating: {processor.individualRating}</p>
//           <h3>Reviews:</h3>
//           <ul>
//             {processor.reviews.map((review, index) => (
//               <li key={index}>
//                 <p>Rating: {review.rating}</p>
//                 <p>Comment: {review.comment}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>