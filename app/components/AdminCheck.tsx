 'use client';

import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AdminCheck() {
  const [isAdmin, setIsAdmin] = useState<boolean>(true);

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('isAdmin') !== 'true') {
      setIsAdmin(false); // Admin not logged in
    }
  }, []);

  if (!isAdmin) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="p-6 bg-white rounded shadow-md text-center">
          <h2 className="text-lg font-bold mb-4">You are not logged in as Admin</h2>
          <p className="mb-4">Please log in to access the admin dashboard.</p>
          <button
            onClick={() => redirect('/login')}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Go to Login Page
          </button>
        </div>
      </div>
    );
  }

  return null;
}
