/* eslint-disable global-require */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                heroBg: "url('/src/assets/images/bg.png')",
                blueBg: "url('/src/assets/images/appointment.png')",
                footerBg: "url('/src/assets/images/footer.png')",
            },
        },
    },

    daisyui: {
        themes: [
            {
                myTheme: {
                    primary: '#0FCFEC',
                    secondary: '#19D3AE',
                    accent: '#3A4256',
                    neutral: '#3d4451',
                    'base-100': '#ffffff',
                },
            },
        ],
    },
    plugins: [require('daisyui')],
};
