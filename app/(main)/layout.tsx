import Navbar from '@/components/Navbar';
import { URL } from 'node:url';

import React from 'react';




export const metadata = {
    title: 'AYSAB Official Store',
    description: 'Official store for AYSAB merchandise and gear.',
    icons: {
    icon: '/Logo.png',    
  },
};

const layout = ({
    children,
    }: Readonly<{
        children: React.ReactNode;

    }>) => {
    return (
        <div className=''>
            <Navbar/>
            <div className='py-20'>{children}</div>
        </div>
    );

};

export default layout;


