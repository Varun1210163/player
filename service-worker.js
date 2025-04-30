const CACHE_NAME = "media-player-cache-v1";
const urlsToCache = [
  "./",
  "./index.html",
  // Add your CSS, JS, and media files here if external
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
