'use client'
import Image from 'next/image'
import React from 'react'
import Container from './Container'
import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import PrimaryButton from './UI/Buttons'
import { motion } from 'motion/react'
import { heroContactInfo } from '@/data/heroContactInfo'

const HeroSection = () => {
    return (
        <>
            <Container>
                <section className='max-lg:flex-col flex items-center justify-between gap-10 py-10 lg:py-20'>
                    <div className='flex flex-col items-start gap-5'>
                        <motion.span
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.90, delay: 0.1 }}
                            viewport={{ once: true }}
                            className='uppercase font-bold text-primary max-md:text-sm'>Plumbers</motion.span>
                        <motion.h1
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.90, delay: 0.2 }}
                            viewport={{ once: true }}
                            className='font-heading font-bold text-4xl lg:text-6xl lg:max-w-md tracking-wider leading-none'>
                            Best plumbing & repair solutions with quality work
                        </motion.h1>
                        <motion.span
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.90, delay: 0.3 }}
                            viewport={{ once: true }}
                            className='lg:max-w-lg text-sm'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, veniam dolorum. Eligendi soluta dicta nulla. Maxime sint fugit quam corrupti fugiat aspernatur inventore, blanditiis accusamus exercitationem modi minima perferendis iusto.
                        </motion.span>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.90, delay: 0.4 }}
                            viewport={{ once: true }}
                            className='flex items-center gap-y-4 gap-x-7 flex-wrap'>
                            <PrimaryButton text={'Get a quote'} />
                            <PrimaryButton text={'Browse our services'} />
                        </motion.div>
                    </div>
                    <div className='relative'>
                        <div className='relative w-100 h-70 md:w-130 md:h-100'>
                            <Image
                                src={'/hero-section-wrapper.png'}
                                alt='Wrapper'
                                fill
                                sizes='1000px'
                                loading='eager'
                                className='object-cover' />
                        </div>
                        <div className='absolute top-0 w-90 h-110 md:w-110 md:h-130'>
                            <Image
                                src={'/hero-section-man.png'}
                                alt='man'
                                fill
                                sizes='1000px'
                                loading='eager'
                                className='' />
                        </div>
                    </div>
                </section>

                {/* Label  */}
                <div className='bg-light shadow-2xl py-10 px-7 relative z-10 lg:w-10/12 mx-auto rounded-xl mb-20'>
                    <div className='flex items-center justify-between lg:justify-evenly flex-wrap gap-7'>
                        {heroContactInfo.map((info, index) => {
                            return <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.90, delay: 0.1 * index }}
                                viewport={{ once: true }}
                                key={info.label}
                                className='flex items-center gap-3'>
                                <span className='text-primary bg-primary/10 rounded-md p-2'>
                                    {info.icon}
                                </span>
                                <div
                                    className='flex flex-col items-start'>
                                    <span
                                        className='font-semibold'>
                                        {info.label}
                                    </span>
                                    <Link
                                        href={info.href}
                                        target='_blank'
                                        className='text-sm hover:text-hover transition-colors ease-linear'>
                                        {info.value}
                                    </Link>
                                </div>
                            </motion.div>
                        })}
                    </div>
                </div>
            </Container>
        </>
    )
}

export default HeroSection