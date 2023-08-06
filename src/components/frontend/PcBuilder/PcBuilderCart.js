import { useGetProductsQuery } from '@/redux/api/api';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PcBuilderCart = () => {

    const {data, isLoading, isError, error} = useGetProductsQuery();
    console.log('from redux rtk qurey', data);

    return (
    <div className="overflow-x-auto">
        <h1 className='text-center'>PC Builder Cart</h1>
        <table className="table">
            {/* head */}
            <tbody>
            {/* row 1 */}
            <tr>
                <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <Image src={"/featuredCategoryImages/processor.png"} width={70} height={70} alt=""/>
                    </div>
                    </div>
                    <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                    </div>
                </div>
                </td>
                <td>
                Zemlak, Daniel and Leannon
                <br/>
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                </td>
                <td>Amount</td>
                <th>
                <Link href={"/products/processor"}>Choose</Link>
                </th>
            </tr>
            {/* row 2 */}
            <tr>
                <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <Image className='' src={"/featuredCategoryImages/motherboard.png"} width={70} height={70} alt=""/>
                    </div>
                    </div>
                    <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                    </div>
                </div>
                </td>
                <td>
                Zemlak, Daniel and Leannon
                <br/>
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                </td>
                <td>Amount</td>
                <th>
                <Link href={"/products/motherboard"}>Choose</Link>
                </th>
            </tr>
            {/* row 3 */}
            <tr>
                <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <Image className='' src={"/featuredCategoryImages/ram.png"} width={70} height={70} alt=""/>
                    </div>
                    </div>
                    <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                    </div>
                </div>
                </td>
                <td>
                Zemlak, Daniel and Leannon
                <br/>
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                </td>
                <td>Amount</td>
                <th>
                    <Link href={"/products/ram"}>Choose</Link>
                </th>
            </tr>
            {/* row 4 */}
            <tr>
                <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <Image className='' src={"/featuredCategoryImages/powerSupplyUnit.png"} width={70} height={70} alt=""/>
                    </div>
                    </div>
                    <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                    </div>
                </div>
                </td>
                <td>
                Zemlak, Daniel and Leannon
                <br/>
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                </td>
                <td>Amount</td>
                <th>
                <Link href={"/products/powerSupply"}>Choose</Link>
                </th>
            </tr>
            {/* row 5 */}
            <tr>
                <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <Image className='' src={"/featuredCategoryImages/storage.png"} width={70} height={70} alt=""/>
                    </div>
                    </div>
                    <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                    </div>
                </div>
                </td>
                <td>
                Zemlak, Daniel and Leannon
                <br/>
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                </td>
                <td>Amount</td>
                <th>
                <Link href={"/products/storage"}>Choose</Link>
                </th>
            </tr>
            {/* row 6 */}
            <tr>
                <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <Image className='' src={"/featuredCategoryImages/monitor.png"} width={70} height={70} alt=""/>
                    </div>
                    </div>
                    <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                    </div>
                </div>
                </td>
                <td>
                Zemlak, Daniel and Leannon
                <br/>
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                </td>
                <td>Amount</td>
                <th>
                <Link href={"/products/monitor"}>Choose</Link>
                </th>
            </tr>
            
            
            </tbody>
            
        </table>
        </div>
    );
};

export default PcBuilderCart;