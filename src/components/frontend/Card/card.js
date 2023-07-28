import Image from 'next/image';
// import processor from "@/assets/processor.png";
// import motherboard from "@/assets/motherboard.png";
// import ram from "@/assets/ram.png";
// import powerSupply from "@/assets/Power-Supply-Unit.png";
// import storage from "@/assets/storage.png";
// import monitor from "@/assets/monitor.png";

const Card = ({featuredCategory}) => {
  return (
  <div className="">
     <div className="card glass px-10 pt-8">
            <figure><Image className='w-32 h-32' src={processor} alt=""/></figure>
            <div className="card-body bg-white rounded-b-2xl">
                <h2 className="font-bold text-xl text-center">test</h2>
                {/* {
                description.length >60 ? <p className='text-center text-lg'>{description.slice(0, 60) + '...'} <Link className='btn bg-blue-600' to={`/serviceDetail/${service._id}`}>Read More</Link></p>
                :
                <p>{description}</p>
                } */}
            </div>
            </div>
  </div>
  
  );
};

export default Card;