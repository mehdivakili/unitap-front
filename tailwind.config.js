/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xl1440: '1440px',
      },
      width: {
        68: '17rem',
        88: '22rem',
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
        gray: '#4C4C64',
        gray00: '#0C0C17',
        gray10: '#11111C',
        gray20: '#161621',
        gray30: '#1B1B26',
        gray40: '#1E1E29',
        gray50: '#21212C',
        gray60: '#24242F',
        gray70: '#303043',
        gray80: '#4C4C5C',
        gray90: '#67677B',
        gray100: '#B5B5C6',
        orange: '#F5841F',
        error: '#EA5365',
        'light-gray': '#EBECEF',
        'light-gray-2': '#EDF2F3',
        'dark-gray': '#757575',
        'space-green': '#4CE6A1',
        'light-space-green': '#D5EBE1',
        'light-gray': '#EBECEF',
        'light-gray-2': '#EDF2F3',
        'dark-gray': '#757575',
        'dark-grey-2': '#13131E',
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
        'what-is-unitap-header': "url('../public/assets/images/about/what-is-unitap-header.png')",
        'gastap-texture': "url('../public/assets/images/landing/gastap-texture.png')",
        'tokentap-texture': "url('../public/assets/images/landing/tokentap-texture.png')",
        'prizetap-texture': "url('../public/assets/images/landing/prizetap-texture.png')",
        'launchtap-texture': "url('../public/assets/images/landing/launchtap-texture.png')",
        'staketap-texture': "url('../public/assets/images/landing/staketap-texture.png')",
        'what-is-unitap': "url('../public/assets/images/landing/what-is-unitap.png')",
        'nft-texture': "url('../public/assets/images/landing/genesis-nft.png')",
        'donate-texture': "url('../public/assets/images/landing/donate-texture.png')",
        'donate-texture-s': "url('../public/assets/images/donate/donate-texture.svg')",
        'donate-texture-p': "url('../public/assets/images/donate/donate-texture.png')",
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
        rocket: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-15px)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out, wiggle 1s ease-in-out',
        flip: 'flip 0.5s ease-in ',
        rocket: 'rocket 1500ms infinite  alternate;',
      },
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
      },
      transitionDuration: {
        0: '0ms',
        250: '250ms',
      },
    },
  },
  // plugins: [require('@tailwindcss/forms'),require('@tailwindcss/aspect-ratio'),],
};
