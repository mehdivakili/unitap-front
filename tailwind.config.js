/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        'xl1440': '1440px'
      },
      width: {
        68: '17rem',
        100: '25rem',
        104: '26rem',
      },
      fontSize: {
        '2xs': '0.625rem',
      },
      colors: {
        primary: '#EF476F',
        secondary: '#F59569',
        input: '#EFF3F8',
        label: '#565656',
        black: '#353535',
        body: '#21212C',
        chips: '#5EBAB0',
        gray: '#BFBFBF',
        yellowC: '#FFD166',
        greenC: '#7FE3CA',
        gray00: '#0C0C17',
        gray10: '#11111C',
        gray20: '#13131E',
        gray30: '#1B1B26',
        gray40: '#1E1E29',
        gray50: '#21212C',
        gray80: '#4C4C5C',
        gray90: '#67677B',
        'light-gray': '#EBECEF',
        'light-gray-2': '#EDF2F3',
        'dark-gray': '#757575',
        'gray-90': '#67677B',
        'space-green': '#4CE6A1',
        'light-space-green': '#D5EBE1',
        'light-gray': '#EBECEF',
        'light-gray-2': '#EDF2F3',
        'dark-gray': '#757575',
        'dark-grey-2': '#13131E',
        'dark-gray-3': '#0C0C17',
        'dark-gray-4': '#1B1B26',
        'dark-gray-5': '#21212C',
        'dark-gray-6': '#1e1e29',
        'gray-100': '#B5B5C6',
        'blue-gray-light': '#E9EFF6',
        'primary-light': '#FFE9EE',
        'primary-light-2': '#F8F0F4',
        'secondary-light': '#FFECE4',
        'secondary-light-2': '#F6C7B4',
        'space-green': '#4CE6A1',
        'dark-space-green': '#274641',
        'disabled-bg': '#C0C0C0',
        'disabled-text': '#939393',
      },

      borderWidth: {
        3: '3px',
      },
      backgroundImage: {
        primaryGradient: 'linear-gradient(91.35deg, #4BF2A2 -4.66%, #A89FE7 56.06%, #E1C4F4 73.07%, #DD40CD 111.44%)',
        'home-header-texture': "url('../public/assets/images/landing/home-header-texture.png')",
        'gastap-texture': "url('../public/assets/images/landing/gastap-texture.png')",
        'tokentap-texture': "url('../public/assets/images/landing/tokentap-texture.png')",
        'nft-texture': "url('../public/assets/images/landing/genesis-nft.png')",
        'donate-texture': "url('../public/assets/images/landing/donate-texture.png')",
        'stats-texture': "url('../public/assets/images/landing/stats-texture.png')",
        'g-primary': 'linear-gradient(91.35deg, #4BF2A2 -4.66%, #A89FE7 56.06%, #E1C4F4 73.07%, #DD40CD 111.44%)',
      },
      dropShadow: {
        'primary-xl': '0px 8px 18px rgba(81, 88, 246, 0.15)',
      },
      zIndex: {
        100: '100',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'rotate(-8deg)' },
          '50%': { transform: 'rotate(8deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        flip: {
          '0%, 50%': { transform: 'scaleX(-1)' },
          '25%, 75%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out, wiggle 1s ease-in-out',
        flip: 'flip 0.5s ease-in ',
      },
    },
  },
  // plugins: [require('@tailwindcss/forms'),require('@tailwindcss/aspect-ratio'),],
};
