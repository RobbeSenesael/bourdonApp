const CACHE = "BOURDON_V1";
const FILES_TO_CACHE = [
    "/app.js",
    "/views/bourdon.ejs",
    "/views/index.ejs",
    "/public/assets/js/bourdon.js",
    "/public/assets/js/script.js",
    "/public/assets/js/utils.js",
    "/public/assets/css/components.css",
    "/public/assets/css/master.css",
    "/public/assets/css/modal.css",
    "/public/assets/css/reset.css",
    "/public/assets/css/bootstrap.min.css"
];

self.addEventListener("install", (e) => {
    log("The service worker is being installed!");
    e.waitUntil(
        caches.open(CACHE)
            .then((cache) => cache.addAll(FILES_TO_CACHE))
    )
})

// self.addEventListener("fetch", (e) => {
//     e.respondWith(
//         caches.match(e.request)
//             .then(res => {
//                 res ? res : fetch(e.request);
//             })
//     )
// })