import { useState } from 'react';
import { Browser } from '@capacitor/browser';

const GoogleSearch = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const searchGoogle = async () => {
    if (!query.trim()) {
      alert('Please enter a search query!');
      return;
    }

    setLoading(true);
    
    try {
      await Browser.open({
        url: `https://www.google.com/search?q=${encodeURIComponent(query)}`,
        presentationStyle: 'popover',
        toolbarColor: '#4285f4',
      });
    } catch (error) {
      console.error('Error opening browser:', error);
      alert('Failed to open browser!');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchGoogle();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            🔍 Google Search
          </h1>
          <p className="text-gray-500 mt-2">
            Search anything on Google
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex gap-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your search..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              autoFocus
            />
            <button
              onClick={searchGoogle}
              disabled={loading}
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {loading ? '⏳' : '🔍'}
              <span className="hidden sm:inline">Search</span>
            </button>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2 justify-center">
          {['React', 'Capacitor', 'Google', 'Android', 'JavaScript'].map((suggestion) => (
            <button
              key={suggestion}
              onClick={() => {
                setQuery(suggestion);
                setTimeout(searchGoogle, 100);
              }}
              className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm hover:bg-gray-100 transition-colors"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// ⚠️ YEH LINE IMPORTANT HAI - DEFAULT EXPORT
export default GoogleSearch;