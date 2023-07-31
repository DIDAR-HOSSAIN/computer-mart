import RootLayout from "@/components/frontend/RootLayout/RootLayout";
import Image from "next/image";


const DynamicProduct = ({singleData}) => {
  console.log('from processsor data dynamic router',singleData)

  return (


 <div>
        <div key={singleData.id}>
        <figure className='flex justify-center items-center'>
        <Image src={singleData.image} width={400} height={300} alt={singleData.name} />
        </figure>
          <div className="font-bold p-4 ml-12">
          <h2>{singleData.name}</h2>
          <p>Category: {singleData.category}</p>
          <p>Price: {singleData.price}</p>
          <p>Description: {singleData.description}</p>
          <p>Key Features:</p>
          <ul>
            <li>Brand: {singleData.keyFeatures.Brand}</li>
            <li>Model: {singleData.keyFeatures.Model}</li>
            <li>Specification: {singleData.keyFeatures.Specification}</li>
          </ul>
          <p>Average Rating: {singleData.averageRating}</p>
          <p>Individual Rating: {singleData.individualRating}</p>
          <h3>Reviews:</h3>
          <ul>
            {singleData.reviews.map((review, index) => (
              <li key={index}>
                <p>Rating: {review.rating}</p>
                <p>Comment: {review.comment}</p>
              </li>
            ))}
          </ul>
          </div>
        </div>
    </div>
  
  

  )
        }

export default DynamicProduct;

export const getServerSideProps = async(context)=>{
  // if(typeof window == 'undefined'){
  //   return {
  //     props:{
  //       products:[],
  //     },
  //   };
  // }
  const {params} = context
  const res = await fetch(`http://localhost:3000/api/productdb/${params.productId}`);
  const data = await res.json();
  console.log(data);
  
  return {
    props:{
      singleData:data,
    }
  }
}


DynamicProduct.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}


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