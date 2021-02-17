const withImages = require("next-images");

module.exports = withImages({
    i18n: {
        locales: ["en", "es"],
        defaultLocale: "en",
    },
    webpack: (config, options) => {
        // Load .html files as string
        config.module.rules.push({
            test: /\.html/,
            use: ["raw-loader"]
        });

        return config;
    }
});