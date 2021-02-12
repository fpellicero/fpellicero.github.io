const withImages = require("next-images");

module.exports = withImages({
    webpack: (config, options) => {
        // Load .html files as string
        config.module.rules.push({
            test: /\.html/,
            use: ["raw-loader"]
        });

        return config;
    }
});