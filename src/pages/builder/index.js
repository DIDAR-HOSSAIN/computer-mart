import PcBuilderCart from '@/components/frontend/PcBuilder/PcBuilderCart';
import RootLayout from '@/components/frontend/RootLayout/RootLayout';
import { useGetProductsQuery } from '@/redux/api/api';
import React from 'react';

const PcBuilder = () => {
  const {data, isLoading, isError, error} = useGetProductsQuery();
  console.log('from rtk query',data);
    return (
        <PcBuilderCart />
    );
};

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}

