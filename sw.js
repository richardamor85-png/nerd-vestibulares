const CACHE_NAME = 'nerd-vest-cache-v14';
const urlsToCache = [
  './index.html',
  './metricas.html',
  './historia.js',
  './biologia.js',
  './resumo_historia.js',
  './resumo_biologia.js',
  './resumos.js',
  './questoes.js',
  './manifest.json',
  './icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', event => {
  const url = event.request.url;
  if (url.includes('firebaseio.com') || url.includes('googleapis.com')) return;

  event.respondWith(
    fetch(event.request)
      .then(networkResponse => networkResponse)
      .catch(() => caches.match(event.request))
  );
});