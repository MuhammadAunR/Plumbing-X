import Link from 'next/link'
import React from 'react'
import Hamburger from '../UI/Hamburger';
import { navOptions } from '@/data/navOptions';
import Container from '../Container';
import PrimaryButton from '../UI/Buttons';

const Navbar = () => {

    return (
        <Container>
            <nav className='flex items-center justify-between py-7 border-b border-dark/20'>
                <Link
                    href={'/'}
                    className='font-heading text-3xl font-bold tracking-wider'>
                    Plumbing X
                </Link>
                <ul className='flex items-center gap-10 max-lg:hidden'>
                    {navOptions.map(option => {
                        return <li
                            key={option.label}
                            className='hover:text-hover transition-colors ease-linear duration-300 tracking-wider relative group'>
                            <Link
                                href={option.link}
                                className='font-heading text-lg'>
                                {option.label}
                            </Link>
                            <span className='group-hover:w-full w-0 h-px bg-hover transition-all ease-linear duration-300 absolute bottom-0 left-1/2 -translate-x-1/2'></span>
                        </li>
                    })}
                </ul>
                <PrimaryButton text={'Get a quote'} className={'max-lg:hidden'} />
                <span className='lg:hidden'>
                    <Hamburger />
                </span>
            </nav>
        </Container>
    )
}

export default Navbar