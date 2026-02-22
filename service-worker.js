const CACHE_NAME = "performance-cache-v2";

const urlsToCache = [
  "./",
  "index.html",
  "manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

self.addEventListener("message", event => {
  if (event.data === "showNotification") {
    self.registration.showNotification("🌿 Hora do Mix!", {
      body: "07:30 — Tome sua dose para máxima performance 💪",
      icon: "icon-192.png",
      badge: "icon-192.png"
    });
  }
});
