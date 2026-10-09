'use client'
import React from 'react'
import Container from './Container'
import { motion } from 'motion/react'
import Image from 'next/image'
import { Phone } from 'lucide-react'
import PrimaryButton, { SecondaryButton } from './UI/Buttons'

const ProblemFixSection = () => {
    return (
        <div className='bg-hover text-light'>
            <Container>
                <section className='py-20 flex items-center justify-center gap-10 max-lg:flex-col'>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.90, delay: 0.1 }}
                        viewport={{ once: true }}
                        className='relative w-full h-100 md:w-130 md:h-130 rounded-xl overflow-hidden'>
                        <Image
                            src={'/problem-fix-sec.png'}
                            alt='Eng'
                            fill
                            sizes='1000px'
                            loading='eager'
                            className='object-cover' />
                    </motion.div>
                    <div className='flex flex-col items-start gap-5 lg:w-1/2'>
                        <motion.h2
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.50, delay: 0.1 }}
                            viewport={{ once: true }}
                            className='font-heading font-bold text-4xl lg:text-6xl lg:max-w-xl'>
                            Having a problem? We'll fixed it today!
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.50, delay: 0.2 }}
                            viewport={{ once: true }}
                        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptatibus magni voluptates illum ex sequi nihil eius possimus reprehenderit tempora.</motion.p>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.50, delay: 0.3 }}
                            viewport={{ once: true }}
                            className='flex items-center justify-start gap-7 flex-wrap'>
                            <div className='flex items-center gap-3'>
                                <span className=''><Phone strokeWidth={1.5} size={32} /></span>
                                <span className='text-2xl font-bold font-heading tracking-widest'>(234) 231 - 2123</span>
                            </div>
                            <span className='text-highlight'>OR</span>
                            <SecondaryButton text={'Get a quote'} />
                        </motion.div>
                    </div>
                </section>
            </Container>
        </div>
    )
}

export default ProblemFixSection