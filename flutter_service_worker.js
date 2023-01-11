'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "5c4295a66d27b0fbf7abd0c7fd609410",
"assets/assets/fonts/joystix.ttf": "18abc72225d23f9393a4bddfe0c9351c",
"assets/assets/images/arrow.png": "f56ac4acb59ae033f2fe366f1847af2c",
"assets/assets/images/astro.png": "3a2d9c5b9b6400360316becf55a25277",
"assets/assets/images/autotx%2520name.png": "f56e6fbee35e7d7c3b6bb88cd6881e3a",
"assets/assets/images/autotx.png": "bf248a02b385e1972488fd3383c49d2c",
"assets/assets/images/back%2520to%2520level%25201.png": "7f5e82f4088d043972a9510af0e96a3a",
"assets/assets/images/back%2520to%2520level%25202.png": "e24542430764aa1a31cb8e60262fb223",
"assets/assets/images/back%2520to%2520level%25203.png": "7a3fb59497bbda638f1db644d67d528b",
"assets/assets/images/bg%2520full.png": "87c68dfffa29783ffeca27de7cc99f24",
"assets/assets/images/bg%2520rock.png": "6ceb191d734c244f72a32a386b794251",
"assets/assets/images/boss%2520battle%25201.png": "e7ccefed04dc9cf3fa730e94f77c98fd",
"assets/assets/images/boss%2520battle%25202.png": "01ec63b5b0244705c368979760a8b28d",
"assets/assets/images/boss%2520battle%25203.png": "8e0314ea7359813bd068816585874ee3",
"assets/assets/images/boss%2520battle%2520level%2520cleared.png": "d3a1fdb5e5f190cc3cbd61bafb5517e0",
"assets/assets/images/character%2520interests.png": "615744a4902f6e84bb8d49cc78df5009",
"assets/assets/images/Character%2520Skills.png": "c9e8dbaa65ebcf3d2a577df7f2437148",
"assets/assets/images/click%2520on%2520the%2520ufo%2520to%2520enter%2520next%2520level.png": "8147bdc9c866873e9aadba2ebdf6398b",
"assets/assets/images/congrats%2520text.png": "b5e8907f745174fbd3e03f7dbaf02c9a",
"assets/assets/images/congratulations.png": "a5f82aaa169a04b3cbf30218616ebb0a",
"assets/assets/images/contact%2520me%2520bg.png": "3ed7133ad4145d7f289b26007193d78b",
"assets/assets/images/contact%2520me%2520button.png": "a9df829d3b6d1654caabc82abfd3ed88",
"assets/assets/images/contact%2520me.png": "0db2f0d924755d5b199a7ba71572dd11",
"assets/assets/images/cpp.png": "54c71e7b6613d4e14cce96c899bc55ca",
"assets/assets/images/dsa.png": "8a67c30762ae7459f4a7d8cdd681702a",
"assets/assets/images/explore%2520my%2520projects.png": "8ec61852526a4be588d3ce58097ef394",
"assets/assets/images/explore%2520my%2520work%2520journey.png": "e602bbc6da0a7bb01c2edb7e671a046a",
"assets/assets/images/export%2520my%2520skills.png": "90a50d19e44379dbd0022b9ddd1a70bb",
"assets/assets/images/facebook.png": "081d35749951170f20bd6dcdd2bc2271",
"assets/assets/images/flutter.png": "2d0860d0494eb90861156866eb0622f9",
"assets/assets/images/go%2520to%2520level%25201.png": "5ea507d56d9353647a56fd98169c7774",
"assets/assets/images/go%2520to%2520level%25202.png": "ee6a6bd9c988f311c9db542ff03cbebb",
"assets/assets/images/go%2520to%2520level%25203.png": "c7ebae846fcbe3e3b17f3a27bc736de4",
"assets/assets/images/go%2520to%2520level%25204.png": "d1e15f93419220e4daf082feea29cdb1",
"assets/assets/images/hiking.png": "225f854c8d841b4aa4b0dc35f98e9dbf",
"assets/assets/images/homescreen_bg.png": "16ce8ccc211c52b4325a266c37e636e9",
"assets/assets/images/i%2520am%2520sayam.png": "43c00673cc05fa84e1495ab0ce0421c6",
"assets/assets/images/incovid%2520name.png": "aa8d9388970c50d115f5f1dc927d1dea",
"assets/assets/images/incovid.png": "9264b53b7924069b435c7fbd2768883f",
"assets/assets/images/init_bg.png": "e2a29c3f1d8a1bb6b42189b495abb0fd",
"assets/assets/images/init_world.png": "b8c2b3a2cbee3900fa47cd16c31fb21c",
"assets/assets/images/instagram.png": "1e293a1fb7edbe93998721c4aae0fa1f",
"assets/assets/images/Know%2520about%2520me.png": "534b171c1eb9cb28b977b100777f61c5",
"assets/assets/images/left%2520arrow%2520inactive.png": "1cf901f24028c43aa631f8fc8fc633a3",
"assets/assets/images/left%2520arrow.png": "be0b0fd2ad68ddcf35a01ef63455dd86",
"assets/assets/images/level%25201.png": "4a24084d0583c2cd54635b26f03a29c6",
"assets/assets/images/level%25202%2520cleared.png": "d7d40123e6717d2752b0982c0b4af25e",
"assets/assets/images/level%25202.png": "e97abd4ed38d695bfd3b3b1f0844acb0",
"assets/assets/images/level%25203.png": "1b76d8d6bb66d5bd61dc0a0a0965bf86",
"assets/assets/images/level%25204.png": "8c7863c96a6c134834a15643bcaa3068",
"assets/assets/images/level%2520cleared.png": "d7d40123e6717d2752b0982c0b4af25e",
"assets/assets/images/linkedin.png": "6ea8cac82b7f5d314d29f07a9289354a",
"assets/assets/images/long%2520drives.png": "acc2183364ea87fe123323ad0747c7e4",
"assets/assets/images/main_background.png": "645a4b0d53c72c8c6dc70dca51ba8eb5",
"assets/assets/images/moving%2520astro.png": "758a926c597ba46d285ba50ee9557ce3",
"assets/assets/images/music.png": "ac483df8bd79c4ac3fab3d4922ffa5d0",
"assets/assets/images/nodejs.png": "37377fe04c847a68509d384317e9d56e",
"assets/assets/images/photography.png": "de488536106e965d36fb689e3bbfbfed",
"assets/assets/images/Press%2520play%2520to%2520Enter%2520story%2520mode.png": "b4fea2fb186795db13750315104d5ff6",
"assets/assets/images/project%2520showcase%2520start.png": "595bba51fbd5eb2ae498df29ee473904",
"assets/assets/images/project%2520showcase.png": "ab44c42591a44573b0d65233e17da1c6",
"assets/assets/images/python.png": "b7a58da39dee8c9a5799df5715b44966",
"assets/assets/images/ratings%2520and%2520more%2520name.png": "46866672e40711a42fe572a3ef2eb3c8",
"assets/assets/images/ratings%2520and%2520more.png": "dfb288bb1739be0f0ed05478da30f5aa",
"assets/assets/images/right%2520arrow%2520inactive.png": "bb6fa10d9b76a37355627296399caafb",
"assets/assets/images/right%2520arrow.png": "8b4d36c2a4bea591ff190cc7fa4dcea1",
"assets/assets/images/sayam.png": "b6cdab4c6b241cda52faedd41b25f14d",
"assets/assets/images/showcase%2520bg.png": "3999e84cd5141d484aed1467a24d8179",
"assets/assets/images/skills%2520bg.png": "647c03732c9e6b0d8f2da86e51d1114b",
"assets/assets/images/solidity.png": "fc3822baa5a2fb79fd69580b3cf010e6",
"assets/assets/images/start%2520level%25201.png": "9042979af90ad55b6133c2437a30573d",
"assets/assets/images/start.png": "825e280b173849a4470a5bd53694b4d8",
"assets/assets/images/ufo.png": "38285cb4125f805d48ed412971aa0281",
"assets/assets/images/uni%2520doc%2520name.png": "c12d75266dcea2d8372ed8731133a4cf",
"assets/assets/images/unidoc%2520logo.png": "f44f274cfbfe2976d31728d0ace0bde4",
"assets/assets/images/welcome.png": "aec3f75af29bedf13d0b2a19651afba0",
"assets/assets/images/work%2520experience.png": "cc0591ec4f65e04d9e511412b7b83b90",
"assets/FontManifest.json": "b98e566af9ab1512e16ba0cde21fda71",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "cbc238962dbdd77f39f118df55456062",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "be73a15f7a495d311aef29bdd2805a36",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "14e0c93875f8940a80e7b22a08ba4cd9",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b6db6c7d8a46acc5de50c2a3cd4602b6",
"/": "b6db6c7d8a46acc5de50c2a3cd4602b6",
"main.dart.js": "8daa37f25840f4ac81c81d4db9723e46",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
