const CACHE_NAME = 'ai-assistant-v1';
const urlsToCache = [
  './',
  './index.html',
  './css/styles.css',
  './js/main.js',
  './icons/favicon.ico',
  './icons/favicon-16x16.png',
  './icons/favicon-32x32.png',
  './icons/apple-touch-icon.png',
  './icons/android-chrome-192x192.png',
  './icons/android-chrome-512x512.png',
  './site.webmanifest',
  './offline.html'
];

self.addEventListener('install', event => {
  console.log('Service Worker 正在安装...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('缓存打开');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('资源缓存完成');
      })
      .catch(error => {
        console.error('预缓存失败:', error);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // 如果有缓存返回缓存
        if (response) {
          return response;
        }
        return fetch(event.request)
          .then(response => {
            // 缓存不存在的请求
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          });
      }).catch(() => {
        // 如果都失败了，返回离线页面
        return caches.match('./offline.html');
      })
  );
});

self.addEventListener('activate', event => {
  console.log('Service Worker 已激活');
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('删除旧缓存:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
}); 