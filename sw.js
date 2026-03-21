const CACHE_NAME = 'we-tod-cache';

// Files to cache immediately
const PRE_CACHE = [
  './',
  './index.html',
  './stylesheet.css',
  './script.js'
  // Add your CSS or JS filenames here, e.g., './style.css'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRE_CACHE))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // If we are online, save the result into the cache dynamically
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
      .catch(() => {
        // If offline, look for the file in the cache
        return caches.match(event.request);
      })
  );
});
