const PWA_CACHE = "PWA_CACHE_{{BUILD_ID}}";

const assets = ["/", "/sw-register.js"];

self.addEventListener("install", (event) => {
    console.info("[SW] INSTALL");

    event.waitUntil(
        caches
            .keys()
            .then(async (cacheKeys) => {
                console.info("[SW] FOUND CACHES", cacheKeys);

                for (const key of cacheKeys) {
                    console.info("[SW] DELETING OLD CACHE", key);
                    await caches.delete(key);
                }
            })
            .then(() =>
                caches.open(PWA_CACHE).then((cache) => {
                    console.info("[SW] CACHING AT", PWA_CACHE);
                    return cache.addAll(assets);
                })
            )
    );
});

self.addEventListener("fetch", (event) => {
    const url = new URL(event.request.url);

    if (assets.includes(url.pathname) || url.pathname.startsWith("/_next/static/")) {
        event.respondWith(
            caches.match(event.request).then((cachedResponse) => {
                const networkResponse = fetch(event.request)
                    .then((networkResponse) => {
                        if (networkResponse.ok) {
                            return caches.open(PWA_CACHE).then((cache) => {
                                console.info("[SW] PWA_CACHE", PWA_CACHE);
                                console.info("[SW] CACHING", url.pathname);
                                cache.put(event.request, networkResponse.clone());
                                return networkResponse;
                            });
                        }
                    })
                    .catch(console.warn);

                return cachedResponse || networkResponse;
            })
        );
    }
});
