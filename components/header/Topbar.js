import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Container from '../Container'
import { socialMediaIcons } from '@/data/socilaMediaIcons'

const Topbar = () => {

    return (
        <Container>
            <div className='max-lg:hidden'>
                <div className='flex items-center justify-between gap-5 border-b border-dark/20 py-5'>
                    <div className='flex items-center gap-7'>
                        <div className='flex items-center gap-3'>
                            <span className='text-primary'><Mail strokeWidth={1.5} size={22} /></span>
                            <Link href={'/'} className='text-sm hover:text-hover transition-colors ease-linear'>contact@plumbing.com</Link>
                        </div>
                        <div className='flex items-center gap-3'>
                            <span className='text-primary'><Phone strokeWidth={1.5} size={22} /></span>
                            <span className='text-sm'>(234) 231 - 2123</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <span className='text-primary'><MapPin strokeWidth={1.5} size={22} /></span>
                            <span className='text-sm'>149W 70th St, 9000 Los Angeles, CA</span>
                        </div>
                    </div>
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
            </div>
        </Container>
    )
}

export default Topbar