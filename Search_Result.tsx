import React from 'react';
import { Search, X } from 'lucide-react';
import ContentCard from './ContentCard';
import { ContentItem } from '../data/contentData';

interface SearchResultsProps {
  query: string;
  results: ContentItem[];
  onClose: () => void;
  onPlay: (id: string) => void;
  onFavorite: (id: string) => void;
  onShare: (id: string) => void;
  favorites: string[];
}

const SearchResults: React.FC<SearchResultsProps> = ({
  query,
  results,
  onClose,
  onPlay,
  onFavorite,
  onShare,
  favorites,
}) => {
  if (!query) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 overflow-y-auto">
      <div className="min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <Search className="w-6 h-6 text-teal-600" />
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Search Results for "{query}"
                  </h2>
                  <p className="text-sm text-gray-600">
                    {results.length} results found
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            <div className="p-6">
              {results.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {results.map((item) => (
                    <ContentCard
                      key={item.id}
                      {...item}
                      onPlay={onPlay}
                      onFavorite={onFavorite}
                      onShare={onShare}
                      isFavorited={favorites.includes(item.id)}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No results found
                  </h3>
                  <p className="text-gray-600">
                    Try searching with different keywords
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
