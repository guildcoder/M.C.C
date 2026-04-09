const CACHE_NAME = 'mcnabb-cc-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/page1.png',
  './assets/page3.png',
  './assets/page4.png',
  './assets/page5.png',
  './assets/page6.png',
  './assets/page7.png',
  './assets/page8.png',
  './assets/page9.png',
  './assets/page10.png',
  './assets/page11.png'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)));
});
