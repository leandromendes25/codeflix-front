"use client"; 

import React from 'react';
import { UserProfile } from "./UserProfile";
import { Logo } from "./Logo";
import { NavLinks } from './NavLinks';
import { useScroll } from '@/app/hooks/useScroll';

export default function Header(){
const isScrolled = useScroll();

return (
    
    <header className={`
        ${isScrolled  ? 'bg-black' : '' } fixed justify-between items-center px-4 transition-all  py-4 lg:px-10 lg:py-6 top-0 z-50 flex w-full`}>
        <div className="flex items-center space-x-2 md:space-x-8">
        <Logo/>
        <NavLinks/>
        </div>
        <UserProfile/>
    </header>
)
}