import Ram from '@/components/frontend/ProductCategories/Ram';
import RootLayout from '@/components/frontend/RootLayout/RootLayout';
import React from 'react';

const RamCategory = ({rams}) => {
    return (
         <>    
    <div className="gap-8 rounded-lg grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
         {<Ram rams={rams} />}

         </div>        
            
        </>
    );
};

export default RamCategory;

RamCategory.getLayout = function getLayout(page) {
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
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();

  
    return {
      props:{
        rams:data,
      },
      revalidate:10,
    };
  };