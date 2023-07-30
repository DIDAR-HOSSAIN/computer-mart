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
    const res = await fetch('http://localhost:5000/processors');
    const data = await res.json();
    console.log('from Json Server', data)
  
    return {
      props:{
        allProcessor:data,
      },
      revalidate:10,
    };
  };