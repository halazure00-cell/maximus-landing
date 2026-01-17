import { useState, useEffect } from 'react';

export default function TopNav() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Simpan ke localStorage
    try {
      const settings = localStorage.getItem('maximus_settings');
      const parsed = settings ? JSON.parse(settings) : {};
      parsed.darkMode = newDarkMode;
      localStorage.setItem('maximus_settings', JSON.stringify(parsed));
    } catch (error) {
      console.error('Error saving theme settings:', error);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-ui-surface backdrop-blur-sm border-b border-ui-border shadow-ui-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-display font-bold text-ui-primary">
              MAXIMUS
            </h1>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Toggle Dark Mode */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-ui-md hover:bg-ui-surface-muted transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg className="w-5 h-5 text-ui-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-ui-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Install Button */}
            <a
              href="#install"
              className="hidden sm:inline-flex px-4 py-2 rounded-ui-md bg-ui-surface-muted hover:bg-ui-border text-ui-text font-medium transition-colors"
            >
              Install
            </a>

            {/* Buka App Button */}
            <a
              href="https://maximus-beta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-ui-md bg-ui-primary hover:bg-ui-primary-strong text-white font-medium shadow-ui-sm transition-all hover:shadow-ui-md"
            >
              Buka App
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
