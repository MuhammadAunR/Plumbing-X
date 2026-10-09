'use client'
import React from 'react'
import Container from './Container'
import Image from 'next/image'
import PrimaryButton from './UI/Buttons'
import { motion } from 'motion/react'

const OurExperienceSection = () => {
    return (
        <div className='bg-dark py-25'>
            <Container>
                <section className='text-white flex justify-between items-center max-lg:flex-col gap-10 h-screen'>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.90, delay: 0.1 }}
                        viewport={{ once: true }}
                        className='relative w-full h-120 md:w-130 md:h-150 rounded-xl overflow-hidden'>
                        <Image
                            src={'/our-exp-section.png'}
                            alt='Exp'
                            fill
                            sizes='1000px'
                            className='object-cover' />
                    </motion.div>
                    <div className='flex flex-col gap-8 lg:w-1/2'>
                        <motion.span
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.90, delay: 0.1 }}
                            viewport={{ once: true }}
                            className='uppercase font-bold text-highlight max-md:text-sm'>Our experience</motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.90, delay: 0.2 }}
                            viewport={{ once: true }}
                            className='font-heading font-bold text-4xl lg:text-6xl tracking-wider leading-none'>
                            We focus on customer satisfaction and quality
                        </motion.h2>
                        <motion.span
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.90, delay: 0.3 }}
                            viewport={{ once: true }}
                            className='max-w-lg text-sm'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis qui, optio iste animi veritatis laborum?
                        </motion.span>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.90, delay: 0.4 }}
                            viewport={{ once: true }}
                            className='flex items-center justify-start flex-wrap gap-7 lg:gap-15'>
                            <div className='flex flex-col items-start gap-1'>
                                <h3 className='font-heading text-3xl font-bold'>5+</h3>
                                <span className='max-md:text-sm'>Years Experience</span>
                            </div>
                            <div className='flex flex-col items-start gap-1'>
                                <h3 className='font-heading text-3xl font-bold'>500+</h3>
                                <span className='max-md:text-sm'>Happy Clients</span>
                            </div>
                            <div className='flex flex-col items-start gap-1'>
                                <h3 className='font-heading text-3xl font-bold'>20+</h3>
                                <span className='max-md:text-sm'>Qualified Experts</span>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.90, delay: 0.5 }}
                            viewport={{ once: true }}
                            className='flex items-center gap-7'>
                            <PrimaryButton text={'Get a quote'} />
                        </motion.div>
                    </div>
                </section>
            </Container>
        </div>
    )
}

export default OurExperienceSection