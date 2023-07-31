import Motherboard from '@/components/frontend/ProductCategories/Motherboard';
import RootLayout from '@/components/frontend/RootLayout/RootLayout';
import React from 'react';

const MotherboardCategory = ({motherboards}) => {
    return (
   <>    
    <div className="gap-8 rounded-lg grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
         {<Motherboard motherboards={motherboards} />}

         </div>        
            
        </>
    );
};

export default MotherboardCategory;

MotherboardCategory.getLayout = function getLayout(page) {
    return (
      <RootLayout>
        {page}
      </RootLayout>
    )
  }


export const getStaticProps = async()=>{
  // if(typeof window == 'undefined'){
  //   return {
  //     props:{
  //       products:[],
  //     },
  //   };
  // }
    const res = await fetch(`${process.env.SERVER_URL}/api/productdb`);
    const data = await res.json();


  
    return {
      props:{
        motherboards:data,
      },
      revalidate:10,
    };
  };