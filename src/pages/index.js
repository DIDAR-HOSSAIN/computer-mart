import FeaturedCategory from "@/components/frontend/FeaturedCategory/FeaturedCategory";
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
        <h1 className="border-8 text-center lg:text-4xl md:text-4xl font-bold bg-yellow-300 mt-8">Featured Category</h1>
        </div>

        <div className="gap-8 rounded-lg grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">

              <FeaturedCategory />

            </div>

      <div className="">
        <h1 className="text-center lg:text-4xl md:text-4xl font-bold bg-yellow-300 mt-8">Featured Products</h1>
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



