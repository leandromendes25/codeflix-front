import Image from "next/image";
import React from 'react';

export const Logo = () => (
    <Image
        src='/logo.svg'
        width={120} height={120} alt="netflix" />
);
