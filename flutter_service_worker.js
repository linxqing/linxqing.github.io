'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets\AssetManifest.json": "ff7c0242f390f23dd69d5b85720dfb25",
"/assets\FontManifest.json": "f7161631e25fbd47f3180eae84053a51",
"/assets\fonts\MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets\images\app_logo.png": "0074862d117ea6654be94eeb216cf928",
"/assets\images\bg_header.png": "73e63a420e1ddfd0d19f0053a9e4f89f",
"/assets\images\ic_community.png": "97228069eb9c4f4d846b929b10ebd21d",
"/assets\images\ic_default_avatar.png": "536d0c720f9c2648ad15aa6f9d32043d",
"/assets\images\ic_delete.png": "411c7080fe7a421b457b6605195096f1",
"/assets\images\ic_doctor.png": "2d695f445bd53ffd59910f4a1600dbe9",
"/assets\images\ic_error.png": "7227559863b3024352a83f90a1605014",
"/assets\images\ic_invite_friend.png": "772a39012e9ff55052f6611368b010d6",
"/assets\images\ic_my_invite.png": "fce00be056a65b5cc9c409e3cf289c66",
"/assets\images\ic_robot.png": "58738030c3674814af3f0f73d9873b24",
"/assets\images\ic_score.png": "e1ecf0811333fc8e080b5700687ac8e0",
"/assets\images\ic_search.png": "017667ded6d78c2eae77bb8467f2aa6f",
"/assets\images\ic_send.png": "07a1b4f1057f32993f7efdb242c94e65",
"/assets\images\ic_shouye_nl.png": "c675776389935299a6b0037badbd8f80",
"/assets\images\ic_shouye_xz.png": "3f359bd91ef5992a0837856815fb4386",
"/assets\images\ic_user.png": "fe801f9b2dcee2a63d82615e56f74c60",
"/assets\images\ic_user_nl.png": "4546ec4abc7bec8edaa23d3e365663d6",
"/assets\images\ic_user_xz.png": "ca48eef0823d88d356dee4e5491562f2",
"/assets\images\ic_voice.png": "67efcf864b19f40b348b3390eeb3a00a",
"/assets\images\ic_zixun_nl.png": "36bcffbb6f9a79a726d2c16d5471c85c",
"/assets\images\ic_zixun_xz.png": "86c23a4f176355329b66a37620186e36",
"/assets\images\image_splash.png": "af2586b14cc34382266f1787f372def6",
"/assets\images\score_introduce.jpg": "6fbc87b702369ef7ae2cda095c1aabbd",
"/assets\LICENSE": "eca21132678100b3a3f43abe408280f5",
"/assets\packages\cupertino_icons\assets\CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/index.html": "231af2419ea0d2c9c3ee5e1f2196c46d",
"/main.dart.js": "d1f8ab2cc4881d3b2ca5944ffaf46af8"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
