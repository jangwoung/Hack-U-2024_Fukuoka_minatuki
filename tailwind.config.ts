import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'main-blue': '#2196F3',
        'deep-blue': '#0072B0',
        'custom_light-blue': '#BBDEFB',
        'custom_dark-blue': '#0D47A1',
        'base-black': '#030303',
      },
    },
  },
  plugins: [],
}
export default config
