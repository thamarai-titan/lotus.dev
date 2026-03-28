"use client"

import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ThemeToggle } from "../ui/ThemeToggle"


const navItems = [
  { label: "HOME",      num: "01" },
  { label: "PROJECTS",  num: "02" },
  { label: "SKILLS",   num: "03" },
  { label: "ABOUT", num: "04" },
]



export const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
    <>
        <nav className="w-full flex items-center text-md font-medium p-6 px-2 md:px-20">
            <div className="w-full flex items-center justify-between">
                <div>
                    {/* empty div */}
                </div>
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <ThemeToggle />
                    </div>
                    <motion.button 
                    transition={{ duration: 0.2 }}
                    onClick={() => setIsOpen(true)}
                    className="border border-(--color-border-strong) p-2 rounded-lg hover:border-(--color-accent) transition-all">
                        <Menu className="text-(--color-text)"/>
                    </motion.button>
                </div>
            </div>
        </nav>
        <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-100 bg-(--color-bg) flex flex-col p-10"
          >
            {/* top row */}
            <div className="flex justify-between items-center mb-16">
            <div>

            </div>
              <motion.button
                onClick={() => setIsOpen(false)}
                className="p-2 flex items-center justify-center border border-(--color-border-strong) rounded bg-transparent cursor-pointer"
              >
                <X className="text-(--color-text)" />
              </motion.button>
            </div>

            {/* nav items */}
            <ul className="flex-1 flex flex-col justify-center gap-0">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.35, delay: i * 0.07, ease: "easeOut" }}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-baseline gap-4 py-4 border-b border-(--color-border-strong) cursor-pointer hover:pl-3 transition-all duration-300"
                >
                  <span className="font-mono text-[10px] tracking-[1.5px] text-(--color-muted)">
                    {item.num}
                  </span>
                  <span className="font-syne text-5xl font-extrabold tracking-[-2px] text-(--color-text) group-hover:text-(--color-accent) transition-colors duration-200 leading-none">
                    {item.label}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* footer */}
            <div className="flex justify-between items-end mt-10">
              <span className="font-mono text-[9px] tracking-[2px] uppercase text-(--color-muted)">
                Portfolio Website
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </>
    )
}