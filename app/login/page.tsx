 "use client";
import { redirect } from "next/navigation";
import { useState, FormEvent } from "react";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();

    if (username.trim() === "admin" && password.trim() === "admin123") {
      localStorage.setItem("isAdmin", "true");
      setError(null);
      redirect("/admin");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="p-6 bg-white rounded shadow w-80">
        <h2 className="mb-4 text-xl font-bold text-center">Admin Login</h2>
        {error && <p className="text-red-500">{error}</p>} {/* Show error message */}
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 mb-4 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
