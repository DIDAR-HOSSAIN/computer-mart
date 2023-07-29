import Storage from '@/components/frontend/ProductCategories/Storage';
import RootLayout from '@/components/frontend/RootLayout/RootLayout';
import React from 'react';

const StorageCategory = ({storages}) => {
    return (
        <>    
    <div className="gap-8 rounded-lg grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
         {<Storage storages={storages} />}

         </div>        
            
        </>
    );
};

export default StorageCategory;

StorageCategory.getLayout = function getLayout(page) {
    return (
      <RootLayout>
        {page}
      </RootLayout>
    )
  }


export const getStaticProps = async()=>{
    const res = await fetch('http://localhost:5000/storage');
    const data = await res.json();
    console.log('from Json Server', data)

  
    return {
      props:{
        storages:data,
      },
      revalidate:10,
    };
  };