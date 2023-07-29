import FeaturedCategory from "@/components/frontend/FeaturedCategory/FeaturedCategory";
import FeaturedProducts from "@/components/frontend/FeaturedProducts/FeaturedProducts";
import RootLayout from "@/components/frontend/RootLayout/RootLayout";
import Head from "next/head";


const Home = ({products}) => {
  console.log('home page upper', products)

  return (
    <div>
       <Head>
        <title>Computer Mart</title>
        <meta name="description" content="Computer Sale" />
        <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      </Head>
      <div className="">
        <h1 className="border-8 text-center lg:text-4xl md:text-2xl font-bold bg-yellow-300 mt-8">Featured Category</h1>
        </div>

        <div className="gap-8 rounded-lg grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">

            <FeaturedCategory />

            </div>

      <div className="">
        <h1 className="border-8 text-center lg:text-4xl md:text-2xl font-bold bg-yellow-300 mt-8">Featured Products</h1>
        </div>

        <div className="gap-8 rounded-lg grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">

            {
              <FeaturedProducts products={products}  />
            }
            

            </div>



    </div>
  );
};

export default Home;



Home.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}


export const getStaticProps = async()=>{
  const res = await fetch('http://localhost:5000/products');
  // const res2 = await fetch('http://localhost:5000/watches');
  const data = await res.json();
  // const data2 = await res2.json();
  console.log('from Json Server', data)
  // console.log('from Json Server', data2)

  return {
    props:{
      products:data,
      // productCategory:data2
    },
    // revalidate:10,
  };
};
