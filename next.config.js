/** @type {import('next').NextConfig} */

const path = require('path')
const withImages = require("next-images");
const withTM = require("next-transpile-modules")(["@madzadev/audio-player"]);

let nextConfig = withImages(withTM())
nextConfig.reactStrictMode = true;
nextConfig.sassOptions = {
  includePaths: [path.join(__dirname, 'styles')],
}
nextConfig.images = {
  disableStaticImages: true
}


module.exports = nextConfig
