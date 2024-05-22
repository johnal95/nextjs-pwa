if ("serviceWorker" in navigator) {
    window.addEventListener("load", function ospServiceWorker() {
        navigator.serviceWorker.register("/sw.js").catch(console.warn);
    });
}
