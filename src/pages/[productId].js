

const DynamicProduct = ({allData}) => {

  return (
    <div>
      
    </div>

  )
        }

export default DynamicProduct;

export const getServerSideProps = async(context)=>{
  const {params} = context
  const res = await fetch(`http://localhost:5000/porcessors/${params.newsId}`);
  const data = await res.json();
  console.log(data);
  
  return {
    props:{
      allData:data,
    }
  }
}