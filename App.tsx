import React, { useState } from 'react';
import Header from './components/Header';
import FeaturedCarousel from './components/FeaturedCarousel';
import CategorySection from './components/CategorySection';
import StatsBar from './components/StatsBar';
import NotificationModal from './components/NotificationModal';
import ProfileModal from './components/ProfileModal';
import SearchResults from './components/SearchResults';
import {
  trendingContent,
  movieContent,
  musicContent,
  gameContent,
  liveContent,
  ContentItem,
} from './data/contentData';

function App() {
  const [activeCategory, setActiveCategory] = useState('home');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<ContentItem[]>([]);
  const [favorites, setFavorites] = useState<string[]>(['1', '5', '9']); // Some default favorites

  // Combine all content for search
  const allContent = [
    ...trendingContent,
    ...movieContent,
    ...musicContent,
    ...gameContent,
    ...liveContent,
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      const results = allContent.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.subtitle.toLowerCase().includes(query.toLowerCase()) ||
          item.genre.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handlePlay = (id: string) => {
    console.log(`Playing content with ID: ${id}`);
    // Here you would implement the actual play functionality
    alert(`Playing content: ${allContent.find(item => item.id === id)?.title}`);
  };

  const handlePlayFeatured = (id: number) => {
    console.log(`Playing featured content with ID: ${id}`);
    alert(`Playing featured content with ID: ${id}`);
  };

  const handleInfoFeatured = (id: number) => {
    console.log(`Showing info for featured content with ID: ${id}`);
    alert(`Showing more info for featured content with ID: ${id}`);
  };

  const handleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
    const item = allContent.find(item => item.id === id);
    const action = favorites.includes(id) ? 'Removed from' : 'Added to';
    alert(`${action} favorites: ${item?.title}`);
  };

  const handleShare = (id: string) => {
    const item = allContent.find(item => item.id === id);
    if (navigator.share) {
      navigator.share({
        title: item?.title,
        text: item?.subtitle,
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert(`Link copied to clipboard: ${item?.title}`);
    }
  };

  const handleViewAll = (category: string) => {
    console.log(`Viewing all for category: ${category}`);
    alert(`Showing all content for: ${category}`);
  };

  const handleNotificationClick = () => {
    setShowNotifications(true);
  };

  const handleProfileClick = () => {
    setShowProfile(true);
  };

  const closeSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
  };

  const renderContent = () => {
    switch (activeCategory) {
      case 'movies':
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <CategorySection
              title="Blockbuster Movies"
              subtitle="Latest releases and timeless classics"
              items={movieContent}
              onViewAll={handleViewAll}
              onPlay={handlePlay}
              onFavorite={handleFavorite}
              onShare={handleShare}
              favorites={favorites}
            />
            <CategorySection
              title="Trending Now"
              subtitle="What everyone's watching"
              items={trendingContent.filter(item => item.type === 'movie')}
              onViewAll={handleViewAll}
              onPlay={handlePlay}
              onFavorite={handleFavorite}
              onShare={handleShare}
              favorites={favorites}
            />
          </div>
        );
      
      case 'music':
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <CategorySection
              title="Top Charts"
              subtitle="Most popular tracks and albums"
              items={musicContent}
              onViewAll={handleViewAll}
              onPlay={handlePlay}
              onFavorite={handleFavorite}
              onShare={handleShare}
              favorites={favorites}
            />
            <CategorySection
              title="New Releases"
              subtitle="Fresh music from your favorite artists"
              items={trendingContent.filter(item => item.type === 'music')}
              onViewAll={handleViewAll}
              onPlay={handlePlay}
              onFavorite={handleFavorite}
              onShare={handleShare}
              favorites={favorites}
            />
          </div>
        );
      
      case 'games':
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <CategorySection
              title="Featured Games"
              subtitle="Best gaming experiences of the year"
              items={gameContent}
              onViewAll={handleViewAll}
              onPlay={handlePlay}
              onFavorite={handleFavorite}
              onShare={handleShare}
              favorites={favorites}
            />
            <CategorySection
              title="Trending Games"
              subtitle="What gamers are playing now"
              items={trendingContent.filter(item => item.type === 'game')}
              onViewAll={handleViewAll}
              onPlay={handlePlay}
              onFavorite={handleFavorite}
              onShare={handleShare}
              favorites={favorites}
            />
          </div>
        );
      
      case 'live':
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <CategorySection
              title="Live Events"
              subtitle="Happening right now"
              items={liveContent}
              onViewAll={handleViewAll}
              onPlay={handlePlay}
              onFavorite={handleFavorite}
              onShare={handleShare}
              favorites={favorites}
            />
            <CategorySection
              title="Upcoming Events"
              subtitle="Don't miss out on these"
              items={trendingContent.filter(item => item.type === 'live')}
              onViewAll={handleViewAll}
              onPlay={handlePlay}
              onFavorite={handleFavorite}
              onShare={handleShare}
              favorites={favorites}
            />
          </div>
        );
      
      default:
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <FeaturedCarousel 
              onPlayFeatured={handlePlayFeatured}
              onInfoFeatured={handleInfoFeatured}
            />
            <StatsBar />
            <CategorySection
              title="Trending Now"
              subtitle="Popular across all categories"
              items={trendingContent}
              onViewAll={handleViewAll}
              onPlay={handlePlay}
              onFavorite={handleFavorite}
              onShare={handleShare}
              favorites={favorites}
            />
            <CategorySection
              title="Recommended Movies"
              subtitle="Handpicked for you"
              items={movieContent}
              onViewAll={handleViewAll}
              onPlay={handlePlay}
              onFavorite={handleFavorite}
              onShare={handleShare}
              favorites={favorites}
            />
            <CategorySection
              title="Top Music"
              subtitle="Chart-topping hits"
              items={musicContent}
              onViewAll={handleViewAll}
              onPlay={handlePlay}
              onFavorite={handleFavorite}
              onShare={handleShare}
              favorites={favorites}
            />
            <CategorySection
              title="Popular Games"
              subtitle="Gaming community favorites"
              items={gameContent}
              onViewAll={handleViewAll}
              onPlay={handlePlay}
              onFavorite={handleFavorite}
              onShare={handleShare}
              favorites={favorites}
            />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-violet-50">
      <Header 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory}
        onSearch={handleSearch}
        onNotificationClick={handleNotificationClick}
        onProfileClick={handleProfileClick}
      />
      <main>
        {renderContent()}
      </main>
      
      {/* Footer */}
      <footer className="bg-gradient-to-r from-violet-900 via-purple-800 to-violet-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                EntertainHub
              </h3>
              <p className="text-sm text-gray-400 mb-4">by SuryaVinyak</p>
              <p className="text-gray-300">
                Your ultimate destination for movies, music, games, and live entertainment.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={() => setActiveCategory('movies')} className="hover:text-teal-400 transition-colors">Movies</button></li>
                <li><button onClick={() => setActiveCategory('music')} className="hover:text-teal-400 transition-colors">Music</button></li>
                <li><button onClick={() => setActiveCategory('games')} className="hover:text-teal-400 transition-colors">Games</button></li>
                <li><button onClick={() => setActiveCategory('live')} className="hover:text-teal-400 transition-colors">Live Events</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={() => alert('Help Center opened')} className="hover:text-teal-400 transition-colors">Help Center</button></li>
                <li><button onClick={() => alert('Contact form opened')} className="hover:text-teal-400 transition-colors">Contact Us</button></li>
                <li><button onClick={() => alert('Privacy Policy opened')} className="hover:text-teal-400 transition-colors">Privacy Policy</button></li>
                <li><button onClick={() => alert('Terms of Service opened')} className="hover:text-teal-400 transition-colors">Terms of Service</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={() => window.open('https://twitter.com', '_blank')} className="hover:text-teal-400 transition-colors">Twitter</button></li>
                <li><button onClick={() => window.open('https://instagram.com', '_blank')} className="hover:text-teal-400 transition-colors">Instagram</button></li>
                <li><button onClick={() => window.open('https://youtube.com', '_blank')} className="hover:text-teal-400 transition-colors">YouTube</button></li>
                <li><button onClick={() => window.open('https://discord.com', '_blank')} className="hover:text-teal-400 transition-colors">Discord</button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 EntertainHub by SuryaVinyak. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <NotificationModal 
        isOpen={showNotifications} 
        onClose={() => setShowNotifications(false)} 
      />
      <ProfileModal 
        isOpen={showProfile} 
        onClose={() => setShowProfile(false)} 
      />
      <SearchResults
        query={searchQuery}
        results={searchResults}
        onClose={closeSearch}
        onPlay={handlePlay}
        onFavorite={handleFavorite}
        onShare={handleShare}
        favorites={favorites}
      />
    </div>
  );
}

export default App;
