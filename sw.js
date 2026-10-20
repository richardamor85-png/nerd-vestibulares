const CACHE_NAME = 'nerd-vest-cache-v2';
const urlsToCache = [
  './index.html',
  './metricas.html',
  './questoes.js',
  './manifest.json',
  './icon.png'
];

// Instalação: Salva os arquivos e força a ativação imediata
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting(); // Força o SW a pular a etapa de espera
});

// Ativação: Limpa caches antigos (ex: v1) e assume o controle de imediato
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
  return self.clients.claim(); // Assume o controle das páginas abertas instantaneamente
});

// Estratégia Network-First (Busca na rede primeiro, se falhar usa o cache)
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(networkResponse => {
        // Se obteve sucesso na rede, retorna o arquivo atualizado
        return networkResponse;
      })
      .catch(() => {
        // Se estiver offline, recorre ao cache local
        return caches.match(event.request);
      })
  );
});