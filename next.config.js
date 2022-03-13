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
nextConfig.env = {
  "MACAROON": "AgEDbG5kAvgBAwoQLSZmCbbPQ3nBaq9DwZeAxBIBMBoWCgdhZGRyZXNzEgRyZWFkEgV3cml0ZRoTCgRpbmZvEgRyZWFkEgV3cml0ZRoXCghpbnZvaWNlcxIEcmVhZBIFd3JpdGUaIQoIbWFjYXJvb24SCGdlbmVyYXRlEgRyZWFkEgV3cml0ZRoWCgdtZXNzYWdlEgRyZWFkEgV3cml0ZRoXCghvZmZjaGFpbhIEcmVhZBIFd3JpdGUaFgoHb25jaGFpbhIEcmVhZBIFd3JpdGUaFAoFcGVlcnMSBHJlYWQSBXdyaXRlGhgKBnNpZ25lchIIZ2VuZXJhdGUSBHJlYWQAAAYgnay+KalXtdDxjsMR0dMEyfBSe1Gu2QrkJ2+ecY7tfHA=",
  "SOCKET": "plebfm.m.voltageapp.io:10009"
}


module.exports = nextConfig
