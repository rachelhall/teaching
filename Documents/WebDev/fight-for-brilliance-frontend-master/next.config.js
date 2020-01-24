const withImages = require("next-images");
module.exports = withImages({
  target: "server",
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    };

    return config;
  }
});

exports.default = {
  env: {
    MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY
  }
};
