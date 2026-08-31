// src/components/GoogleSearch.jsx
import { useState } from 'react';
import { InAppBrowser } from '@capacitor/inappbrowser';

const GoogleSearch = () => {
  const [query, setQuery] = useState('');

  const searchGoogle = async () => {
    await InAppBrowser.open({
      url: `https://www.google.com/search?q=${encodeURIComponent(query)}`,
      options: {
        hardwareBack: true,
        zoom: true,
        location: true,
        toolbarColor: '#4285f4',
        // Android specific
        android: {
          mode: 'customTabs'  // Chrome Custom Tabs
          // mode: 'system'   // System WebView
        }
      }
    });
  };

  return (
    <div className="p-4">
      <input 
        value={query} 
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Google..."
        className="w-full p-3 border rounded-lg"
      />
      <button 
        onClick={searchGoogle}
        className="mt-2 w-full bg-blue-500 text-white p-3 rounded-lg"
      >
        🔍 Search
      </button>
    </div>
  );
};