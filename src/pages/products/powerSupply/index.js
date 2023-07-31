import PowerSupply from '@/components/frontend/ProductCategories/PowerSupply';
import RootLayout from '@/components/frontend/RootLayout/RootLayout';
import React from 'react';

const powerSupplyCategory = ({powerSupplies}) => {
    return (
    <>    
    <div className="gap-8 rounded-lg grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
         {<PowerSupply powerSupplies={powerSupplies} />}

         </div>        
            
        </>
    );
};

export default powerSupplyCategory;


powerSupplyCategory.getLayout = function getLayout(page) {
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
        powerSupplies:data,
      },
      revalidate:10,
    };
  };