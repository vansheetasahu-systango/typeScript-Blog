 'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function LoginButtonadmin() {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const adminStatus = localStorage.getItem('isAdmin') === 'true';
      setIsAdmin(adminStatus);
    }
  }, []);

  return (
    <>
      {!isAdmin && (
        <Link
          href="/login"
          className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          Login
        </Link>
      )}
    </>
  );
}
