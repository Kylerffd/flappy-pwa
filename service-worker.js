// Simple service worker for offline caching

const cacheName = 'flappy-cache-v1';
const filesToCache = [
  './',
  './index.html',
  './manifest.json',
  './service-worker.js'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});