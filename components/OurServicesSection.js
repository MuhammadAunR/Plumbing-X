'use client'
import React from 'react'
import Container from './Container'
import Image from 'next/image'
import { services } from '@/data/services'
import PrimaryButton from './UI/Buttons'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'

const OurServicesSection = () => {
    return (
        <div className='min-h-screen'>
            <Container>
                <section className='py-20 flex  flex-col items-center justify-center gap-15'>

                    <div className='flex flex-col items-center justify-center gap-5'>
                        <motion.span
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.90, delay: 0.1 }}
                            viewport={{ once: true }}
                            className='uppercase font-bold text-primary max-md:text-sm'>Our Services</motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.90, delay: 0.2 }}
                            viewport={{ once: true }}
                            className='font-heading font-bold text-4xl lg:text-6xl tracking-wider leading-none text-center'>
                            A wide range of services
                        </motion.h2>
                        <motion.span
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.90, delay: 0.3 }}
                            viewport={{ once: true }}
                            className='lg:max-w-lg text-sm text-center'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, veniam dolorum. Eligendi soluta dicta nulla. Maxime sint fugit quam corrupti fugiat aspernatur.
                        </motion.span>
                    </div>

                    <div className='flex items-center justify-center flex-wrap gap-7'>
                        {services.map((service, index) => {
                            return <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.50, delay: 0.2 * index }}
                                viewport={{ once: true }}
                                key={service.title}>
                                <div
                                    className='w-full sm:w-70 h-120 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all ease-linear duration-300 rounded-xl bg-dark/5 group relative'>
                                    <span className='absolute z-10 left-1/2 top-[46%] -translate-y-1/2 -translate-x-1/2 bg-light p-3 text-hover rounded-full'>
                                        {service.icon}
                                    </span>
                                    <div className='relative w-full h-55 rounded-t-xl overflow-hidden'>
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            sizes='280px'
                                            className='object-cover'
                                        />
                                    </div>
                                    <div className='flex flex-col items-center justify-center gap-3 py-15 px-3'>
                                        <h3 className='font-heading text-xl font-bold'>
                                            {service.title}
                                        </h3>
                                        <p className='text-center text-dark/80'>
                                            {service.description}
                                        </p>
                                        <Link
                                            href={'/'}
                                            className='flex items-center justify-center gap-2 text-primary group-hover:text-hover transition-all ease-linear duration-300 py-2'
                                        >
                                            <span className='font-bold'>View Service</span>
                                            <span className='-rotate-45 group-hover:-rotate-0 transition-all ease-linear duration-300'><ArrowRight /></span>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        })}
                    </div>

                    <motion.span
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.50, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <PrimaryButton text={'Browse our Services'} />
                    </motion.span>

                </section>
            </Container>
        </div>
    )
}

export default OurServicesSection