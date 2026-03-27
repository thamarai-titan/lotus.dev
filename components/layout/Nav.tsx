import Link from "next/link"

export const Nav = () => {
    return (
        <nav className="w-full flex items-center justify-end gap-4 text-md font-medium">
            <Link href="#about">ABOUT</Link>
            <Link href="#projects">PROJECTS</Link>
            <Link href="#contact" >BLOGS</Link>
        </nav>
    )
}