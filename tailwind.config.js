/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      mobileXXS: '300px',
      mobileXS: '340px',
      mobileS: '365px',
      mobile: '414px',
      mobileM: '500px',
      mobileL: '600px',
      tablet: '768px',
      tabletM: '900px',
      tabletL: '1040px',
      desktop: '1440px'
    },
    container: {
      padding: {
        mobileS: '10px',
        mobile: '16px',
        tablet: '24px',
        desktop: '70px'
      },
      center: true
    },
    colors: {
      black: '#2F2F2F',
      blue: '#00BDFF',
      white: '#FFFFFF',
      red: '#ff0000'
    },
    borderRadius: {
      full: '624rem',
      8: '8px'
    },
    borderWidth: {
      DEFAULT: '1px'
    },
    spacing: {
      0: '0px',
      1: '1px',
      2: '2px',
      10: '10px',
      14: '14px',
      16: '16px',
      20: '20px',
      24: '24px',
      26: '26px',
      28: '28px',
      32: '32px',
      30: '30px',
      50: '50px',
      84: '84px',
      90: '90px',
      100: '100px',
      122: '122px',
      170: '170px',
      288: '288px',
      340: '340px',
      356: '356px',
      420: '420px',
      860: '860px'
    },
    extend: {
      translate: {
        '100vw': '100vw'
      },
      rotate: {
        150: '9.413deg',
        '120-negative': '-5.817deg'
      },
      scale: {
        175: '1.75'
      },
      zIndex: {
        max: 9999
      }
    }
  },
  plugins: []
};
