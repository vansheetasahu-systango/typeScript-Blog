 /* Modified file: app/components/Header/SearchButton.tsx */
import { Search } from 'lucide-react';

export default function SearchButton() {
    return (
        <form action="/" method="GET" className="flex-1 max-w-lg">
            <div className="relative">
                <input
                    type="text"
                    name="query" // Search query passed via URL parameters
                    placeholder="Search..."
                    className="w-full px-3 py-3 ml-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <button 
                    type="submit" 
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600 hover:text-black"
                >
                    <Search />
                </button>
            </div>
        </form>
    );
}
