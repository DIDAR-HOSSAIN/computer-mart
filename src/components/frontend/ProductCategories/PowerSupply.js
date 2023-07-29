import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PowerSupply = ({powerSupplies}) => {
    return (
         <>
        {
         powerSupplies?.map((powerSupply)=>(
          <div key={powerSupply.id} className=" px-10 pt-8">
          <Link href={"/"}>
          <figure><Image className='w-32 h-32' src={powerSupply?.image} width={300} height={300} alt=""/></figure>
          <div className="card-body bg-white rounded-b-2xl">
              <h2 className="font-bold">{powerSupply?.name}</h2>
          </div>
          </Link>
          </div>
        ))
       }
      </>
    );
};

export default PowerSupply;