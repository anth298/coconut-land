/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f9f7f1',
                    100: '#f3eee3',
                    200: '#e6dcc6',
                    300: '#d9c9a8',
                    400: '#ccb78b',
                    500: '#c0a46d',
                    600: '#b3915f',
                    700: '#a67e51',
                    800: '#996b43',
                    900: '#8d5835',
                },
                secondary: {
                    50: '#f2f7fc',
                    100: '#e6eff9',
                    200: '#c7dff2',
                    300: '#a9ceed',
                    400: '#8bbee7',
                    500: '#6dade0',
                    600: '#4f9cda',
                    700: '#3c8bd2',
                    800: '#2e7ac5',
                    900: '#1f69b7',
                },
                accent: {
                    50: '#f0f4f8',
                    100: '#e1e9f2',
                    200: '#c3d3e5',
                    300: '#a5bdd8',
                    400: '#87a7ca',
                    500: '#6991bd',
                    600: '#4b7ab0',
                    700: '#3d689d',
                    800: '#2f578a',
                    900: '#214577',
                },
            },
            backgroundImage: {
                'gradient-gold': 'linear-gradient(to right, #c0a46d, #e6dcc6)',
                'gradient-gold-vertical': 'linear-gradient(to bottom, #c0a46d, #e6dcc6)',
                'gradient-navy': 'linear-gradient(to right, #214577, #3d689d)',
                'gradient-navy-vertical': 'linear-gradient(to bottom, #214577, #3d689d)',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-in-out',
                'slide-down': 'slideDown 0.5s ease-in-out',
                'slide-left': 'slideLeft 0.5s ease-in-out',
                'slide-right': 'slideRight 0.5s ease-in-out',
                'bounce-slow': 'bounce 3s infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
                'zoom-in': 'zoomIn 0.5s ease-in-out',
                'zoom-out': 'zoomOut 0.5s ease-in-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideLeft: {
                    '0%': { transform: 'translateX(20px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                slideRight: {
                    '0%': { transform: 'translateX(-20px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                zoomIn: {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                zoomOut: {
                    '0%': { transform: 'scale(1.05)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
    ],
} 