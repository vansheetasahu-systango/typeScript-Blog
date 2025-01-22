 'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggleButton() {
    const [theme, setTheme] = useState<string>('light');

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') || 'light';
        setTheme(storedTheme);
        document.documentElement.setAttribute('data-theme', storedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <>
            <button
                onClick={toggleTheme}
                className="flex items-center gap-2 border px-3 py-1 rounded"
            >
                {theme === 'light' ? <Sun /> : <Moon />}
                {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
            </button>

             
            <style jsx global>{`
                :root {
                    --background-color: white;
                    --text-color: black;
                }

                [data-theme='dark'] {
                    --background-color: black;
                    --text-color: white;
                }

                body {
                    background-color: var(--background-color);
                    color: var(--text-color);
                    transition: background-color 0.3s, color 0.3s;
                }
            `}</style>
        </>
    );
}
