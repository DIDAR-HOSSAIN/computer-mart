import Navbar from '@/components/frontend/Navbar/navbar';
import Image from 'next/image';
import React from 'react';

const Error404 = () => {
    return (
        <div className=''>
            <div className="">
                <Navbar  />
            </div>
             <div className="flex justify-center items-center">
                <Image
                src="https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/2016/12/22/ae36c0d0-52ea-4a4a-a691-bec9b2458f5b.png"
                width={500}
                height={500}
                alt="Picture of the author"
            />
             </div>
        </div>
    );
};

export default Error404;


//SSG:Static Site Generation (SSG) all ssg
//SSR:server-side rendering pc builder