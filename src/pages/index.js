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
      <h1 className="text-6xl">This is home</h1>
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