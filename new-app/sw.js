const CACHE_NAME = 'blogger-pwa-cache-v1';
const urlsToCache = [
  'https://nexgenautomobiles.blogspot.com/',
  'https://nexgenautomobiles.blogspot.com/favicon.ico'
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
