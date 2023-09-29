/** @type {import("tailwindcss").Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'yellow-green': '#CDE4A2',
                'dark-yellow-green': '#7B8B5E',
                'very-dark-yellow-green': '#3D462F',
                'modal-overlay': 'rgba(0,0,0,0.4)',
                main: '#F9F9F9'
            },
            fontFamily: {
                cabin: ['Cabin', 'serif']
            },
            boxShadow: {
                'all-sides-light': '0 0 4px rgba(0, 0, 0, 0.2)'
            },
            spacing: {
                previewHeight: '43.3rem'
            }
        }
    },
    plugins: []
};
