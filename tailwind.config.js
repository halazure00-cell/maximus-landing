/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'ui-primary': 'var(--ui-primary)',
        'ui-primary-strong': 'var(--ui-primary-strong)',
        'ui-primary-soft': 'var(--ui-primary-soft)',
        'ui-background': 'var(--ui-background)',
        'ui-surface': 'var(--ui-surface)',
        'ui-surface-muted': 'var(--ui-surface-muted)',
        'ui-text': 'var(--ui-text)',
        'ui-muted': 'var(--ui-muted)',
        'ui-border': 'var(--ui-border)',
        'ui-success': 'var(--ui-success)',
        'ui-success-soft': 'var(--ui-success-soft)',
        'ui-danger': 'var(--ui-danger)',
        'ui-warning': 'var(--ui-warning)',
        'ui-info': 'var(--ui-info)',
        'ui-info-soft': 'var(--ui-info-soft)',
        'ui-inverse': 'var(--ui-inverse)',
        'ui-overlay': 'var(--ui-overlay)',
      },
      borderRadius: {
        'ui-sm': 'var(--ui-radius-sm)',
        'ui-md': 'var(--ui-radius-md)',
        'ui-lg': 'var(--ui-radius-lg)',
        'ui-xl': 'var(--ui-radius-xl)',
      },
      boxShadow: {
        'ui-sm': 'var(--ui-shadow-sm)',
        'ui-md': 'var(--ui-shadow-md)',
        'ui-lg': 'var(--ui-shadow-lg)',
      },
      fontFamily: {
        'body': 'var(--ui-font-body)',
        'display': 'var(--ui-font-display)',
      },
    },
  },
  plugins: [],
}
