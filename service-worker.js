const CACHE_NAME = 'sportlife-v2';
const urlsToCache = [
  '/sportlife-pwa/',
  '/sportlife-pwa/index.html',
  '/sportlife-pwa/style.css',
  '/sportlife-pwa/images/hero-bg.jpg',
  '/sportlife-pwa/images/icon-192.png',
  '/sportlife-pwa/images/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
