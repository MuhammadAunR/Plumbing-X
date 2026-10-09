'use client'
import { navOptions } from '@/data/navOptions';
import Link from 'next/link';
import React from 'react'
import Hamburger from './UI/Hamburger';
import { useNavContext } from '@/app/context/NavContext';
import useBlockYScroll from '@/hooks/useBlockYScroll';

const NavSidebar = () => {

    const { isOpen, toggleNavSidebar } = useNavContext()
    useBlockYScroll(isOpen)

    return (
        <>
            <aside className={`w-100 h-full bg-dark absolute top-0 z-99 px-5 py-10 flex flex-col gap-20
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-all ease-in-out duration-700`}>

                <div className='flex items-center justify-between'>
                    <Link
                        href={'/'}
                        className='font-heading text-3xl font-bold tracking-wider text-light'>
                        Plumbing X
                    </Link>
                    <span>
                        <Hamburger />
                    </span>
                </div>

                <ul className='flex flex-col items-center gap-10'>
                    {navOptions.map(option => {
                        return <li
                            onClick={toggleNavSidebar}
                            key={option.label}
                            className='hover:text-primary text-light transition-colors ease-linear duration-300 tracking-wider relative group'>
                            <Link
                                href={option.link}
                                className='font-heading text-3xl'>
                                {option.label}
                            </Link>
                            <span className='group-hover:w-full w-0 h-px bg-primary transition-all ease-linear duration-300 absolute bottom-0 left-1/2 -translate-x-1/2'></span>
                        </li>
                    })}
                </ul>
            </aside>
        </>
    )
}

export default NavSidebar