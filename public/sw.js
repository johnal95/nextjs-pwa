const BUILD_ID = "{{BUILD_ID}}";
const PWA_CACHE = `PWA_CACHE_${BUILD_ID}`;

const assets = ["/", "/sw-register.js"];

self.addEventListener("install", (event) => {
    console.info(`[SW-${BUILD_ID}] INSTALL`);

    event.waitUntil(
        caches
            .keys()
            .then(async (cacheKeys) => {
                console.info(`[SW-${BUILD_ID}] FOUND CACHES`, cacheKeys);

                for (const key of cacheKeys) {
                    console.info(`[SW-${BUILD_ID}] DELETING OLD CACHE`, key);
                    await caches.delete(key);
                }
            })
            .then(() =>
                caches.open(PWA_CACHE).then((cache) => {
                    console.info(`[SW-${BUILD_ID}] ADDING ALL ASSETS`, assets);
                    return cache.addAll(assets);
                }),
            ),
    );
});

self.addEventListener("activate", () => {
    console.info(`[SW-${BUILD_ID}] ACTIVATE`);
});

self.addEventListener("fetch", (event) => {
    const url = new URL(event.request.url);

    if (!assets.includes(url.pathname) && url.pathname.startsWith("/_next/static/")) {
        assets.push(url.pathname);
    }

    if (assets.includes(url.pathname)) {
        event.respondWith(
            caches.match(event.request).then((cachedResponse) => {
                const networkResponse = fetch(event.request)
                    .then((networkResponse) => {
                        if (networkResponse.ok) {
                            return caches.open(PWA_CACHE).then((cache) => {
                                console.info(`[SW-${BUILD_ID}] CACHING`, url.pathname);
                                cache.put(event.request, networkResponse.clone());
                                return networkResponse;
                            });
                        }
                        return networkResponse;
                    })
                    .catch(console.warn);

                return cachedResponse || networkResponse;
            }),
        );
    }
});
