import Image from 'next/image';
import Link from 'next/link';


const FeaturedCategory = () => {
  return (
    <>     
      <div className=" px-10 pt-2">
      <Link href={"/products/processor"}>
      <figure className='flex justify-center items-center'><Image src={"/featuredCategoryImages/processor.png"} width={70} height={70} alt=""/></figure>
      <div className="bg-white rounded-b-2xl text-center">
          <h2 className="">Processor/ CPU</h2>
      </div>
      </Link>
      </div>

      <div className=" px-10 pt-2">
      <Link href={"/products/motherboard"}>
      <figure className='flex justify-center items-center'><Image className='' src={"/featuredCategoryImages/motherboard.png"} width={70} height={70} alt=""/></figure>
      <div className="bg-white rounded-b-2xl text-center">
          <h2 className="">Motherboard</h2>
      </div>
      </Link>
      </div>

      <div className=" px-10 pt-2">
      <Link href={"/products/ram"}>
      <figure className='flex justify-center items-center'><Image className='' src={"/featuredCategoryImages/ram.png"} width={70} height={70} alt=""/></figure>
      <div className="bg-white rounded-b-2xl text-center">
          <h2 className="">Ram</h2>
      </div>
      </Link>
      </div>

      <div className=" px-10 pt-2">
      <Link href={"/products/powerSupply"}>
      <figure className='flex justify-center items-center'><Image className='' src={"/featuredCategoryImages/powerSupplyUnit.png"} width={70} height={70} alt=""/></figure>
      <div className="bg-white rounded-b-2xl text-center">
          <h2 className="">Power Supply Unit</h2>
      </div>
      </Link>
      </div>

      <div className=" px-10 pt-2">
      <Link href={"/products/storage"}>
      <figure className='flex justify-center items-center'><Image className='' src={"/featuredCategoryImages/storage.png"} width={70} height={70} alt=""/></figure>
      <div className="bg-white rounded-b-2xl text-center">
          <h2 className="">Storage Device</h2>
      </div>
      </Link>
      </div>

      <div className=" px-10 pt-2">
      <Link href={"/products/monitor"}>
      <figure className='flex justify-center items-center'><Image className='' src={"/featuredCategoryImages/monitor.png"} width={70} height={70} alt=""/></figure>
      <div className="bg-white rounded-b-2xl text-center">
          <h2 className="">Monitor</h2>
      </div>
      </Link>
      </div>
  </>

  
  );
};


export default FeaturedCategory;