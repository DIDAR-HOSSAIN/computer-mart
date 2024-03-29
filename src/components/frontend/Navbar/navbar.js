import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
            <div className="navbar bg-green-500 sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Desktop</a></li>
                    <li><a>Laptop</a></li>
                    <li>
                    <a>Products</a>
                    <ul className="p-2">
                        <li><a>CPU / Processor</a></li>
                        <li><a>Motherboard</a></li>
                        <li><a>RAM</a></li>
                        <li><a>Power Supply Unit</a></li>
                        <li><a>Storage Device</a></li>
                        <li><a>Monitor</a></li>
                        <li><a>Others</a></li>
                    </ul>
                    </li>
                    <li><a>Tablet</a></li>
                    <li><a>Camera</a></li>
                </ul>
                </div>
                <Link href={"/"}>
                <Image
                src="/computer-mart-logo.png"
                width={500}
                height={500}
                alt="Picture of the author"
                />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-lg px-1">
                <li><a>Desktop</a></li>
                <li><a>Laptop</a></li>
                <li tabIndex={0}>
                    <details>
                    <summary>Products</summary>
                    <ul className="p-2">
                        <li><a>CPU / Processor</a></li>
                        <li><a>Motherboard</a></li>
                        <li><a>RAM</a></li>
                        <li><a>Power Supply Unit</a></li>
                        <li><a>Storage Device</a></li>
                        <li><a>Monitor</a></li>
                        <li><a>Others</a></li>
                    </ul>
                    </details>
                </li>
                <li><a>Tablet</a></li>
                <li><a>Camera</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link href={'/builder'} className="btn">PC Builder</Link>
            </div>
            </div>
    );
};

export default Navbar;