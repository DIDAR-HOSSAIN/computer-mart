import RootLayout from '@/components/frontend/RootLayout/RootLayout';
import Processor from '@/components/frontend/ProductCategories/Processor';

const ProcessorCategory = ({allProcessor}) => {
  console.log('allprocessor data',allProcessor);
    return (
 <>    
    <div className="gap-8 rounded-lg grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
         {<Processor allProcessor={allProcessor} />}

         </div>        
            
        </>
    );
};

export default ProcessorCategory;

ProcessorCategory.getLayout = function getLayout(page) {
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
        allProcessor:data.data,
      },
      revalidate:10,
    };
  };