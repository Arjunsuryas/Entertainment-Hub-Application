import React, { useState } from 'react';
import { Search, Bell, User, Menu, X } from 'lucide-react';

interface HeaderProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  onSearch: (query: string) => void;
  onNotificationClick: () => void;
  onProfileClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  activeCategory, 
  setActiveCategory, 
  onSearch, 
  onNotificationClick, 
  onProfileClick 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (e.target.value.trim()) {
      onSearch(e.target.value);
    }
  };
  const categories = [
    { id: 'home', label: 'Home' },
    { id: 'movies', label: 'Movies' },
    { id: 'music', label: 'Music' },
    { id: 'games', label: 'Games' },
    { id: 'live', label: 'Live' },
  ];

  return (
    <header className="bg-gradient-to-r from-violet-900 via-purple-800 to-violet-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl md:text-2xl font-bold text-white bg-gradient-to-r from-teal-400 to-coral-400 bg-clip-text text-transparent">
              EntertainHub
              <span className="block text-xs font-normal text-gray-300">by SuryaVinyak</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-white/20 text-white border-b-2 border-teal-400'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {category.label}
              </button>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search entertainment..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent w-64"
              />
            </form>
            <button 
              onClick={onNotificationClick}
              className="p-2 text-gray-300 hover:text-white transition-colors relative"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-coral-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
            </button>
            <button 
              onClick={onProfileClick}
              className="p-2 text-gray-300 hover:text-white transition-colors"
            >
              <User className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setIsMenuOpen(false);
                  }}
                  className={`px-3 py-2 rounded-md text-sm font-medium text-left transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-white/20 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
            <form onSubmit={handleSearch} className="mt-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search entertainment..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                />
              </div>
            </form>
            <div className="flex space-x-4 mt-4 justify-center">
              <button 
                onClick={onNotificationClick}
                className="p-2 text-gray-300 hover:text-white transition-colors relative"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-coral-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
              </button>
              <button 
                onClick={onProfileClick}
                className="p-2 text-gray-300 hover:text-white transition-colors"
              >
                <User className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
