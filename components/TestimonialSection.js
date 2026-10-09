'use client'
import React, { useState } from 'react'
import Container from './Container'
import { motion } from 'motion/react'
import { testimonials } from '@/data/testimonials'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const TestimonialSection = () => {

    const [currentTestimonial, setCurrentTestimonial] = useState(1)

    const handleNext = () => {
        if (currentTestimonial < testimonials.length - 1) {
            setCurrentTestimonial(prev => prev + 1)
        }
    }

    const handlePrev = () => {
        if (currentTestimonial > 1) {
            setCurrentTestimonial(prev => prev - 1)
        }
    }


    return (
        <div className='pb-10'>
            <Container>
                <section className='py-20 flex flex-col items-center justify-center gap-10'>
                    <div className='flex flex-col items-center justify-center gap-5'>
                        <motion.span
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.90, delay: 0.1 }}
                            viewport={{ once: true }}
                            className='uppercase font-bold text-highlight max-md:text-sm'>Testimonials</motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.90, delay: 0.2 }}
                            viewport={{ once: true }}
                            className='font-heading font-bold text-4xl lg:text-6xl tracking-wider leading-none text-center'>
                            What our clients say
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
                    <div className='relative'>
                        <div key={currentTestimonial} className='flex items-center justify-center gap-5 relative flex-wrap'>
                            {testimonials.slice(currentTestimonial - 1, currentTestimonial + 1).map((item, index) => {
                                return <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, x: index % 2 == 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.90, delay: 0.1 * index }}
                                    viewport={{ once: true }}
                                    className='w-full md:w-120 h-60 flex flex-col items-start justify-center gap-5 p-5 border border-dark/20 rounded-lg shadow-lg hover:shadow-2xl transition-shadow ease-linear duration-300'>
                                    <div className='flex flex-col gap-2'>
                                        <h3 className='font-bold'>"{item.title}"</h3>
                                        <p className='text-dark/80'>{item.review}</p>
                                    </div>
                                    <div className='flex items-center gap-5'>
                                        <span className='font-heading font-bold w-10 h-10 flex items-center justify-center bg-dark text-light rounded-full'>{item.name.charAt(0)}</span>
                                        <div>
                                            <h4 className='font-bold text-primary'>{item.name}</h4>
                                            <span className='text-sm'>{item.location}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            })}
                        </div>
                        <motion.button
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.90, delay: 0.1 }}
                            viewport={{ once: true }}
                            disabled={currentTestimonial === testimonials.length - 1}
                            onClick={handleNext}
                            className='bg-primary text-light py-3 px-4 rounded-md hover:bg-hover transition-colors ease-linear duration-300 cursor-pointer absolute right-0 -bottom-15 group disabled:cursor-not-allowed'>
                            <ArrowRight className='group-hover:translate-x-0.5 transition-transform ease-linear' />
                        </motion.button>
                        <motion.button
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.90, delay: 0.1 }}
                            viewport={{ once: true }}
                            disabled={currentTestimonial === 1}
                            onClick={handlePrev}
                            className='bg-primary text-light py-3 px-4 rounded-md hover:bg-hover transition-colors ease-linear duration-300 cursor-pointer absolute right-18 -bottom-15 group disabled:cursor-not-allowed'>
                            <ArrowLeft className='group-hover:-translate-x-0.5 transition-transform ease-linear' />
                        </motion.button>
                    </div>
                </section>
            </Container>
        </div >
    )
}

export default TestimonialSection