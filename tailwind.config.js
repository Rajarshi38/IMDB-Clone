module.exports = {
    mode: "jit",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                body: ["Poppins", "Roboto"],
            },
            backgroundImage: (theme) => ({
                "hero-img": "url('./banner.jpg')",
            }),
        },
    },
    plugins: [],
};
