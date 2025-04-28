const CACHE_NAME = 'kwetu-tours-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/public/KWETU TOURS.png',
  '/public/KWETU TOURS.png',
  '/public/KWETU TOURS.png',
  '/public/travel-highlights.mp4'
];

// Install Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch from cache first
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
