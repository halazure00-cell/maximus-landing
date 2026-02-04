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
        'ui-primary-hover': 'var(--ui-primary-hover)',
        'ui-background': 'var(--ui-background)',
        'ui-surface': 'var(--ui-surface)',
        'ui-surface-muted': 'var(--ui-surface-muted)',
        'ui-text': 'var(--ui-text)',
        'ui-text-muted': 'var(--ui-text-muted)',
        'ui-border': 'var(--ui-border)',
        'ui-success': 'var(--ui-success)',
        'ui-success-soft': 'var(--ui-success-soft)',
        'ui-danger': 'var(--ui-danger)',
        'ui-danger-soft': 'var(--ui-danger-soft)',
        'ui-warning': 'var(--ui-warning)',
        'ui-warning-soft': 'var(--ui-warning-soft)',
        'ui-info': 'var(--ui-info)',
        'ui-info-soft': 'var(--ui-info-soft)',
        'ui-overlay': 'var(--ui-overlay)',
      },
      borderRadius: {
        'ui-sm': 'var(--ui-radius-sm)',
        'ui-md': 'var(--ui-radius-md)',
        'ui-lg': 'var(--ui-radius-lg)',
        'ui-xl': 'var(--ui-radius-xl)',
        'ui-2xl': 'var(--ui-radius-2xl)',
      },
      boxShadow: {
        'ui-sm': 'var(--ui-shadow-sm)',
        'ui-md': 'var(--ui-shadow-md)',
        'ui-lg': 'var(--ui-shadow-lg)',
        'ui-xl': 'var(--ui-shadow-xl)',
      },
      fontFamily: {
        'body': 'var(--ui-font-body)',
        'display': 'var(--ui-font-display)',
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-up': 'slide-up 0.6s ease-out',
        'slide-down': 'slide-down 0.6s ease-out',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
      },
      keyframes: {
        'fade-in': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        'slide-up': {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-down': {
          'from': { opacity: '0', transform: 'translateY(-20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
}
