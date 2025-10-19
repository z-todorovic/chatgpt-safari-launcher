// Minimal SW so iOS treats this as a PWA. No cross-origin caching.
self.addEventListener("install", e => self.skipWaiting());
self.addEventListener("activate", e => self.clients.claim());
