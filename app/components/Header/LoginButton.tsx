 "use client";
import { useAuth } from '@/app/lib/contexts/AuthContext';
import Link from 'next/link';
import Image from 'next/image';

export default function LoginButton() {
    const {
        user,
        isLoading,
        handleSignInWithGoogle,
        handleLogout,
    } = useAuth();

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (user) {
        return (
            <div className="flex justify-end items-center">
                <div className="flex gap-4 items-center">
                    <button
                        onClick={() => {
                            handleLogout();
                        }}
                        className="flex items-center gap-3 bg-black text-white px-4 py-2 rounded-full"
                    >
                        Logout
                    </button>
                    <Link href='/'>
                        <div className="flex gap-4 rounded-xl bg-blue-100 px-3 py-2">
                            <Image 
                                className="object-cover h-12 w-12 rounded-full"
                                src={user?.photoURL || '/default-avatar.png'}
                                alt="User Avatar"
                                width={48}
                                height={48}
                            />
                            <div>
                                <h1 className="font-bold">{user?.displayName}</h1>
                                <h1 className="text-sm text-gray-500">{user?.email}</h1>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <section className="flex justify-end">
            <button
                onClick={() => {
                    handleSignInWithGoogle();
                }}
                className="flex gap-3 bg-black text-white px-4 py-2 rounded-full">
                <Image className='h-7' src="/google.png" alt="Google" width={28} height={28} />
                Login With Google
            </button>
        </section>
    );
}
