import Logo from './Logo';
import NavigationMenu from './NavigationMenu';
import SearchButton from './SearchButton';
import ThemeToggleButton from './ThemeToggleButton';
import LoginButton from './LoginButton';
import AuthContextProvider from '@/app/lib/contexts/AuthContext';
import LoginButtonadmin from './LoginButtonadmin';

export default function Header() {
    return (
        <nav className="flex justify-between items-center px-7 py-3 border-b">
            <Logo />
            <LoginButtonadmin />
            <NavigationMenu />
            <div className="flex items-center gap-4">
                <SearchButton />
                <ThemeToggleButton />
                <AuthContextProvider>
                    <LoginButton />
                </AuthContextProvider>
            </div>
        </nav>
    );
}
