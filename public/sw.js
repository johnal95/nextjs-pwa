const assets = ["sw-register.js"];

self.addEventListener("install", (event) => {
    event.waitUntil(caches.open("assets").then((cache) => cache.addAll(assets)));
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            // even if the response is in the cache, we fetch it
            // and update the cache for future usage
            const fetchPromise = fetch(event.request).then((networkResponse) => {
                caches.open("assets").then((cache) => {
                    cache.put(event.request, networkResponse.clone());
                    return networkResponse;
                });
            });
            // we use the currently cached version if it's there
            return cachedResponse || fetchPromise;
        })
    );
});
