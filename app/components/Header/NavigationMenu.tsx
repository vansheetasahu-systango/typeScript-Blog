 'use client';

import { Home, List, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function NavigationMenu() {
    return (
        <ul className="flex gap-6 items-center">
            <Link href="/">
                <li className="flex items-center gap-2">
                    <Home />
                    Home
                </li>
            </Link>
            <Link href="/about">
                <li className="flex items-center gap-2">
                    <List />
                    About Us
                </li>
            </Link>
            <Link href="/contact">
                <li className="flex items-center gap-2">
                    <MessageCircle />
                    Contact Us 
                </li>
            </Link>
        </ul>
    );
}
