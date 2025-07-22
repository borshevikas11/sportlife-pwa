const CACHE_NAME = 'sportlife-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/nutrition.html',
  '/sports.html',
  '/style.css',
  '/images/about.jpg',
  '/images/food1.jpg',
  '/images/food2.jpg',
  '/images/food3.jpg',
  '/images/food4.jpg',
  '/images/hero-bg.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});