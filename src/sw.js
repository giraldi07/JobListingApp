// sw.js

const CACHE_NAME = 'job-listing-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/src/assets/hero.svg',
  '/src/assets/logo.png', // Add other essential assets here
  '/src/index.css', // Add other essential CSS or JS files here
];

// Install event - cache the necessary files
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching essential files');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            console.log('Deleting old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event - serve files from the cache or fetch from network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse; // Return cached version if exists
        }
        return fetch(event.request); // Otherwise fetch from the network
      })
  );
});
