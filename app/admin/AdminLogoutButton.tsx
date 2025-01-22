 'use client';

import { redirect } from "next/navigation";
import { useState, useEffect } from "react";

export default function AdminLogoutButton() {
  const [isAdmin, setIsAdmin] = useState<boolean>(false); // Define state as boolean

  useEffect(() => {
    setIsAdmin(localStorage.getItem("isAdmin") === "true");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    setIsAdmin(false);
    redirect("/login");
  };

  return (
    <>
      {isAdmin ? (
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => redirect("/login")}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Go to Login
        </button>
      )}
    </>
  );
}
