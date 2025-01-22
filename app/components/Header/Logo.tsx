 'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
    return (
        <Link href="/">
            <Image 
                src="/logo.png" 
                alt="logo" 
                width={70} 
                height={90} 
            />
        </Link>
    );
}
