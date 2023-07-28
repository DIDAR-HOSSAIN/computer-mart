import Card from "@/components/frontend/Card/card";
import RootLayout from "@/components/frontend/RootLayout/RootLayout";
import Head from "next/head";


const Home = ({featuredCategory, productCategory}) => {
  console.log('home page upper',featuredCategory)
  console.log('home page upper watches',productCategory)
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
        <h1 className="border-8 text-center lg:text-6xl md:text-4xl font-bold bg-yellow-300 mt-8">Featured Category</h1>
        </div>

        <div className="gap-8 rounded-lg grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">

         {<Card featuredCategory={featuredCategory} />}
            </div>

      <div className="">
        <h1 className="text-center lg:text-6xl md:text-4xl font-bold bg-yellow-300 mt-8">Featured Products</h1>
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
  const res1 = await fetch('http://localhost:5000/featured-category');
  const res2 = await fetch('http://localhost:5000/watches');
  const data1 = await res1.json();
  const data2 = await res2.json();
  console.log('from Json Server', data1)
  console.log('from Json Server', data2)

  return {
    props:{
      featuredCategory:data1,
      productCategory:data2
    },
    // revalidate:10,
  };
};
