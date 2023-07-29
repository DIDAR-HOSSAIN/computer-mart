import RootLayout from '@/components/frontend/RootLayout/RootLayout';
import Processor from '@/components/frontend/ProductCategories/Processor';

const ProcessorCategory = ({allProcessor}) => {
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
    const res1 = await fetch('http://localhost:5000/processors');
    // const res2 = await fetch('http://localhost:5000/watches');
    const data1 = await res1.json();
    // const data2 = await res2.json();
    console.log('from Json Server', data1)
    // console.log('from Json Server', data2)
  
    return {
      props:{
        allProcessor:data1,
        // productCategory:data2
      },
      revalidate:10,
    };
  };