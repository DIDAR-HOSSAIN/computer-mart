import Card from "@/components/frontend/Card/card";
import RootLayout from "@/components/frontend/RootLayout/RootLayout";
import Head from "next/head";


const Home = () => {
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
        <h1 className="text-center lg:text-6xl md:text-4xl font-bold bg-yellow-300 mt-8">Featured Category</h1>

         <Card featuredCategory={featuredCategory} />

      </div>

      <div className=""><h1 className="text-center lg:text-6xl md:text-4xl font-bold bg-yellow-300 mt-8">Featured Products</h1></div>
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
  const res = await fetch('http://localhost:5000/featuredCategory');
  const data = await res.json();
  console.log('from Json Server', data)

  return {
    props:{
      featuredCategory:data.data
    },
    // revalidate:10,
  };
};