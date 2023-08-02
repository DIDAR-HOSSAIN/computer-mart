import Monitor from '@/components/frontend/ProductCategories/Monitor';
import RootLayout from '@/components/frontend/RootLayout/RootLayout';
import React from 'react';

const MonitorCategory = ({monitors}) => {
    return (
        <>    
        <div className="gap-8 rounded-lg grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
             {<Monitor monitors={monitors} />}
    
             </div>        
                
            </>
    );
};

export default MonitorCategory;

MonitorCategory.getLayout = function getLayout(page) {
    return (
      <RootLayout>
        {page}
      </RootLayout>
    )
  }


export const getStaticProps = async()=>{
  // if(typeof window == "undefined"){
  //   return {
  //     props:{
  //       products:[],
  //     },
  //   };
  // }
    const res = await fetch(`${process.env.SERVER_URL}/api/productdb`);
    const data = await res.json();
    console.log('from Json Server', data)

  
    return {
      props:{
        monitors:data.data,
      },
      revalidate:10,
    };
  };