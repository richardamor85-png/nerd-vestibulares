const CACHE_NAME = 'nerd-vest-cache-v3';
const urlsToCache = [
  './index.html',
  './metricas.html',
  './questoes.js',
  './manifest.json',
  './icon.png'
];

// Instalação: Salva os arquivos essenciais e força a ativação imediata
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

// Ativação: Limpa caches antigos e assume o controle de imediato
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Limpando cache antigo obsoleto:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

// Estratégia Network-First com exclusão total das rotas do Firebase
self.addEventListener('fetch', event => {
  const url = event.request.url;

  // IGNORA requisições do Firebase para permitir comunicação em tempo real imediata
  if (url.includes('firebaseio.com') || url.includes('googleapis.com')) {
    return; // Deixa o navegador lidar diretamente com a rede sem interceptação do cache
  }

  event.respondWith(
    fetch(event.request)
      .then(networkResponse => {
        return networkResponse;
      })
      .catch(() => {
        return caches.match(event.request);
      })
  );
});