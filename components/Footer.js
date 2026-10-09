'use client'
import React from 'react'
import Container from './Container'
import Link from 'next/link'
import { socialMediaIcons } from '@/data/socilaMediaIcons'
import { navOptions } from '@/data/navOptions'
import PrimaryButton from './UI/Buttons'

const Footer = () => {
    return (
        <div className='border-t border-dark/30'>
            <Container>
                <section className='py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-y-15 gap-x-7 lg:justify-items-center'>

                    <div className='flex flex-col items-start gap-7'>
                        <Link
                            href={'/'}
                            className='font-heading text-3xl lg:text-4xl font-bold tracking-wider'>
                            Plumbing X
                        </Link>
                        <span className='lg:max-w-md text-dark/80'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus distinctio odio quia magnam molestiae aliquid</span>
                        <div className='flex items-center gap-5'>
                            {socialMediaIcons.map(item => {
                                return <Link
                                    href={'/'}
                                    key={item.name}
                                    className='hover:text-hover hover:-translate-y-0.5 transition-all ease-linear duration-300 cursor-pointer'>
                                    {item.icon}
                                </Link>
                            })}
                        </div>
                    </div>

                    <div className='flex flex-col gap-7 lg:gap-10'>
                        <h2 className='text-xl font-heading text-primary font-bold'>Menu</h2>
                        <div className='flex gap-20'>
                            <ul className='flex flex-col items-start gap-5'>
                                {navOptions.map(option => {
                                    return <li
                                        key={option.label}
                                        className='hover:text-primary text-dark transition-colors ease-linear duration-300 tracking-wider relative group'>
                                        <Link
                                            href={option.link}
                                            className='text-'>
                                            {option.label}
                                        </Link>
                                        <span className='group-hover:w-full w-0 h-px bg-primary transition-all ease-linear duration-300 absolute bottom-0 left-1/2 -translate-x-1/2'></span>
                                    </li>
                                })}
                            </ul>
                            <ul className='flex flex-col items-start gap-5'>
                                {navOptions.map(option => {
                                    return <li
                                        key={option.label}
                                        className='hover:text-primary text-dark transition-colors ease-linear duration-300 tracking-wider relative group'>
                                        <Link
                                            href={option.link}
                                            className='text-'>
                                            {option.label}
                                        </Link>
                                        <span className='group-hover:w-full w-0 h-px bg-primary transition-all ease-linear duration-300 absolute bottom-0 left-1/2 -translate-x-1/2'></span>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </div>

                    <div className='flex flex-col gap-7 lg:gap-10'>
                        <h2 className='text-primary text-2xl font-bold font-heading'>Subscribe to our newsletter</h2>
                        <div className='flex flex-col items-start gap-3'>
                            <input
                                required={true}
                                type="email"
                                placeholder='Enter your email'
                                className='outline-none bg-dark/5 text-dark/70 px-5 py-2 rounded-lg w-full hover:border-primary/30 border border-transparent focus:border-primary transition-colors ease-linear' />
                            <PrimaryButton text={'Subscribe'} />
                        </div>
                    </div>

                </section>
            </Container>
            <div className='border-t border-dark/30 py-7 max-sm:text-sm flex items-center justify-center text-center flex-wrap'>
                Copyright &copy; <Link href={'/'} className='text-primary font-bold px-2'>Plumbing X</Link> | By Muhammad Aun
            </div>
        </div >
    )
}

export default Footer