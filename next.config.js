module.exports = {
  i18n: {
    locales: ["en-US", "pt-BR"],
    defaultLocale: "pt-BR",
  },
  trailingSlash: true,
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    config.resolve.alias = {
      ...config.resolve.alias,
      "~": __dirname,
    };
    return config;
  },
};
