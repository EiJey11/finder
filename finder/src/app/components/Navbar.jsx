import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="flex flex-row w-full h-24 items-center justify-between px-16">
            <h3 className="flex font-extrabold text-xl">Finder</h3>
            <div>
                <Link className="px-4 hover:opacity-70" href="/">
                    Home
                </Link>
                <Link className="px-4 hover:opacity-70" href="/advertisements">
                    Advertisements
                </Link>
                <Link className="px-4 hover:opacity-70" href="/services">
                    Services
                </Link>
                <Link className="px-4 hover:opacity-70" href="/contacts">
                    Contacts
                </Link>
            </div>
        </nav>
    )
}
