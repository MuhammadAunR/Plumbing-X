'use client'

import { createContext, useContext, useState } from "react"

const ContextProvider = createContext()
export const useNavContext = () => useContext(ContextProvider)

import React from 'react'

const NavContext = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleNavSidebar = () => {
        setIsOpen(prev => !prev)
    }

    return (
        <ContextProvider.Provider value={{ isOpen, toggleNavSidebar }}>
            {children}
        </ContextProvider.Provider>
    )
}

export default NavContext