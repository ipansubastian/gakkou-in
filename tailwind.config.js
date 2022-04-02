module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        homeSlide1: 'url("~@/assets/images/pexels-ivan-samkov-5676744.jpg")',
        homeSlide2: 'url("~@/assets/images/pexels-周-康-710743.jpg")'
      },
      colors: {
        'sky-50': 'rgb(240 249 255)',
        'sky-100': 'rgb(224 242 254)',
        'sky-200': 'rgb(186 230 253)',
        'sky-300': 'rgb(125 211 252)',
        'sky-400': 'rgb(56 189 248)',
        'sky-500': 'rgb(14 165 233)',
        'sky-600': 'rgb(2 132 199)',
        'sky-700': 'rgb(3 105 161)',
        'sky-800': 'rgb(7 89 133)',
        'sky-900': 'rgb(12 74 110)',
        'blue-50': 'rgb(239 246 255)',
        'blue-100': 'rgb(219 234 254)',
        'blue-200': 'rgb(191 219 254)',
        'blue-300': 'rgb(147 197 253)',
        'blue-400': 'rgb(96 165 250)',
        'blue-500': 'rgb(59 130 246)',
        'blue-600': 'rgb(37 99 235)',
        'blue-700': 'rgb(29 78 216)',
        'blue-800': 'rgb(30 64 175)',
        'blue-900': 'rgb(30 58 138)'
      }
    }
  },
  plugins: []
};
