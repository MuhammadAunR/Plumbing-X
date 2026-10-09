'use client'
import { motion } from 'motion/react'
import React from 'react'

const PrimaryButton = ({ text, className = "" }) => {
    return (
        <motion.button
            whileTap={{ scale: 0.96 }}
            className={`bg-primary px-7 py-4 rounded-md text-light hover:bg-hover transition-colors ease-linear duration-300 cursor-pointer uppercase font-bold tracking-wider ${className}`}>
            {text}
        </motion.button>
    )
}

export default PrimaryButton

export const SecondaryButton = ({ text, className = "" }) => {
    return (
        <motion.button
            whileTap={{ scale: 0.96 }}
            className={`bg-light border-2 border-primary hover:border-light px-7 py-4 rounded-md text-hover hover:text-light hover:bg-hover transition-colors ease-linear duration-300 cursor-pointer uppercase font-bold tracking-wider ${className}`}>
            {text}
        </motion.button>
    )
}

