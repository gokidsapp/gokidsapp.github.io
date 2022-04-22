/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  "precache-manifest.js?_v=870d42406272213b6d5be017dabe759a"
);

workbox.core.setCacheNameDetails({prefix: "gokidsapp"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/.*?workbox.*?\.js$/, new workbox.strategies.CacheFirst({ "cacheName":"cache", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 200 ] })] }), 'GET');
workbox.routing.registerRoute(/.*?(js|css).*/, new workbox.strategies.CacheFirst({ "cacheName":"cache", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 200 ] })] }), 'GET');
workbox.routing.registerRoute(/.*?baidu.*/, new workbox.strategies.CacheFirst({ "cacheName":"cache", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
workbox.routing.registerRoute(/games.*/, new workbox.strategies.CacheFirst({ "cacheName":"cache", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');