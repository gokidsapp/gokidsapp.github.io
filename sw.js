const cacheName = "v6"; // Cahce Stroage 白名单
const offlineUrl = "index.html";
const cacheList = [
  // "js/chunk-common.js",
  //"css/chunk-common.css",
  "js/index.js",
  "css/index.css",
  //"css/chunk-vendors.css",
  "js/chunk-vendors.js",
];
this.addEventListener("install", function (event) {
  console.log("install");
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      // 更换 Cache Stroage
      return cache.addAll(cacheList.concat([offlineUrl]));
    })
  );
});

this.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all[
        keys.map((key) => {
          if (cacheName != key) {
            console.log(key);
            return caches.delete(key); // 删除不在白名单中的 Cache Stroage
          }
        })
      ];
    })
  );
});

this.addEventListener("fetch", (event) => {
  let matchCaches = cacheList.filter((e) => event.request.url.indexOf(e) > -1);
  if (matchCaches.length > 0) {
    event.respondWith(caches.match(matchCaches[0]));
  } else if (
    event.request.mode === "navigate" &&
    event.request.method === "GET" &&
    event.request.headers.get("accept").includes("text/html")
  ) {
    event.respondWith(
      fetch(event.request.url).catch((error) => {
        // Return the offline page
        console.error(error);
        return caches.match(offlineUrl);
      })
    );
  } else if (
    event.request.url.indexOf("/games/") > -1
    // event.request.url.length - 4
  ) {
    event.respondWith(
      caches.open(cacheName).then(function (cache) {
        return cache
          .match(event.request, { ignoreVary: true /*, ignoreSearch: true*/ })
          .then(function (response) {
            if (response) return response;
            else {
              var corsRequest = event.request;

              return fetch(corsRequest)
                .then(function (response) {
                  // Cache for offline access
                  var copy = response.clone();
                  if (copy.ok && copy.status == 200) {
                    //  event.waitUntil(
                    //   caches.open(cacheName).then(function (cache) {
                    var headers = new Headers(copy.headers);
                    headers.append("sw-fetched-on", new Date().getTime());
                    return copy.blob().then(function (body) {
                      cache.put(
                        event.request,
                        new Response(body, {
                          status: copy.status,
                          statusText: copy.statusText,
                          headers: headers,
                        })
                      );
                      return response;
                    });
                    //  })
                    //);
                  } else if (copy.type == "opaque") {
                    cache.put(event.request, copy);
                  }

                  // Return the requested file
                  return response;
                })
                .catch(() => {
                  return fetch(event.request);
                });
            }
          });
      })
    );
  } else if (
    event.request.url.match(/cache=(\d+)/)
    // event.request.url.length - 4
  ) {
    event.respondWith(
      caches.open(cacheName).then(function (cache) {
        return cache
          .match(event.request, { ignoreVary: true /*, ignoreSearch: true*/ })
          .then(function (response) {
            if (isValid(response, event.request.url.match(/cache=(\d+)/)[1])) {
              return response;
            } else {
              var corsRequest = event.request;
              //  corsRequest = new Request(event.request.url, { mode: "cors" });
              // corsRequest.mode = "cors";

              if (
                event.request.url.indexOf("fanyi") == -1 &&
                event.request.url.match(/cache=0/)
              ) {
                corsRequest = new Request(event.request.url, {
                  cache: "force-cache",
                });
              }

              return fetch(corsRequest)
                .then(function (response) {
                  // Cache for offline access
                  var copy = response.clone();
                  if (copy.ok && copy.status == 200) {
                    //  event.waitUntil(
                    //   caches.open(cacheName).then(function (cache) {
                    var headers = new Headers(copy.headers);
                    headers.append("sw-fetched-on", new Date().getTime());
                    return copy.blob().then(function (body) {
                      cache.put(
                        event.request,
                        new Response(body, {
                          status: copy.status,
                          statusText: copy.statusText,
                          headers: headers,
                        })
                      );
                      return response;
                    });
                    //  })
                    //);
                  } else if (copy.type == "opaque") {
                    cache.put(event.request, copy);
                  }

                  // Return the requested file
                  return response;
                })
                .catch(() => {
                  return fetch(event.request);
                });
            }
          });
      })
    );
  }
  /* else {
    event.respondWith(
      caches.open(cacheName).then(function (cache) {
        return cache
          .match(event.request, { ignoreVary: true, ignoreSearch: true })
          .then(function (response) {
            return response || fetch(event.request);
          });
      })
    );
  }*/
});

function isValid(response, time) {
  if (!response) return false;
  if (time === "0") return true;
  var fetched = response.headers.get("sw-fetched-on");
  if (fetched && parseInt(fetched) + parseInt(time) > new Date().getTime())
    return true;
  return false;
}
