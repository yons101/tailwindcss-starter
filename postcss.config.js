const plugins = {
    tailwindcss: {},
    autoprefixer: {}
};

plugins["@fullhuman/postcss-purgecss"] = {
    content: [
        "public/index.html"
        // "pages/**/*.tsx",
        // "components/**/*.tsx",
        // "pages/**/*.js",
        // "components/**/*.js"
    ],

    defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || []
};

plugins["cssnano"] = {
    preset: [
        "default",
        {
            discardComments: {
                removeAll: true
            }
        }
    ]
};
module.exports = {
    plugins
};
