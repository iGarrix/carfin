if(!self.define){let e,s={};const t=(t,a)=>(t=new URL(t+".js",a).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(a,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let c={};const r=e=>t(e,n),o={module:{uri:n},exports:c,require:r};s[n]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-2e6be583"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"dc5459a34b91016ef9503cef1817e38b"},{url:"/_next/static/QQU2pe5lj8optSQ3JTqzq/_buildManifest.js",revision:"3587976b398beffd1f09ff5f21231a59"},{url:"/_next/static/QQU2pe5lj8optSQ3JTqzq/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/200-2e0bd35bcf804342.js",revision:"QQU2pe5lj8optSQ3JTqzq"},{url:"/_next/static/chunks/20a5cac7-1d2ffc5d8ce9f178.js",revision:"QQU2pe5lj8optSQ3JTqzq"},{url:"/_next/static/chunks/220-c4848f21ff112ce0.js",revision:"QQU2pe5lj8optSQ3JTqzq"},{url:"/_next/static/chunks/442-4a1ac9e82336caa1.js",revision:"QQU2pe5lj8optSQ3JTqzq"},{url:"/_next/static/chunks/474-a2fc5f881e29d804.js",revision:"QQU2pe5lj8optSQ3JTqzq"},{url:"/_next/static/chunks/579-63aa948febe7ad00.js",revision:"QQU2pe5lj8optSQ3JTqzq"},{url:"/_next/static/chunks/692-420d50dca945c926.js",revision:"QQU2pe5lj8optSQ3JTqzq"},{url:"/_next/static/chunks/766-d6e819ee7c057c34.js",revision:"QQU2pe5lj8optSQ3JTqzq"},{url:"/_next/static/chunks/786-35f77a97cd553775.js",revision:"QQU2pe5lj8optSQ3JTqzq"},{url:"/_next/static/chunks/882-225612b9027d37a5.js",revision:"QQU2pe5lj8optSQ3JTqzq"},{url:"/_next/static/chunks/app/(multipage)/investor/layout-ef9912d740d6e7ff.js",revision:"QQU2pe5lj8optSQ3JTqzq"},{url:"/_next/static/chunks/app/(multipage)/investor/page-84257d82cb4c9f2f.js",revision:"QQU2pe5lj8optSQ3JTqzq"},{url:"/_next/static/chunks/app/(multipage)/layout-81b473aaa3d05a7d.js",revision:"QQU2pe5lj8optSQ3JTqzq"},{url:"/_next/static/chunks/app/(multipage)/loan_under_car/layout-205019ec13a4796e.js",revision:"QQU2pe5lj8optSQ3JTqzq"},{url:"/_next/static/chunks/app/(multipage)/loan_under_car/page-dc8eee5696dc9e94.js",revision:"QQU2pe5lj8optSQ3JTqzq"},{url:"/_next/static/chunks/app/(multipage)/page-3429f80af7093748.js",revision:"QQU2pe5lj8optSQ3JTqzq"},{url:"/_next/static/chunks/app/(multipage)/rental/layout-f95d5cb8f166de5f.js",revision:"QQU2pe5lj8optSQ3JTqzq"},{url:"/_next/static/chunks/app/(multipage)/rental/page-8cbfa36663a89670.js",revision:"QQU2pe5lj8optSQ3JTqzq"},{url:"/_next/static/chunks/app/_not-found/page-708d28339b784473.js",revision:"QQU2pe5lj8optSQ3JTqzq"},{url:"/_next/static/chunks/app/error-d39aa3212da2883a.js",revision:"QQU2pe5lj8optSQ3JTqzq"},{url:"/_next/static/chunks/app/layout-7327dca8aebfe00f.js",revision:"QQU2pe5lj8optSQ3JTqzq"},{url:"/_next/static/chunks/app/not-found-52678bb863e72897.js",revision:"QQU2pe5lj8optSQ3JTqzq"},{url:"/_next/static/chunks/framework-6e06c675866dc992.js",revision:"QQU2pe5lj8optSQ3JTqzq"},{url:"/_next/static/chunks/main-9e58fb936ba6d3dd.js",revision:"QQU2pe5lj8optSQ3JTqzq"},{url:"/_next/static/chunks/main-app-464c12fd95e1f0ef.js",revision:"QQU2pe5lj8optSQ3JTqzq"},{url:"/_next/static/chunks/pages/_app-fd9a6cf83eb033da.js",revision:"QQU2pe5lj8optSQ3JTqzq"},{url:"/_next/static/chunks/pages/_error-7c3577e7bbf9d9ae.js",revision:"QQU2pe5lj8optSQ3JTqzq"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-e3f7db266713a48e.js",revision:"QQU2pe5lj8optSQ3JTqzq"},{url:"/_next/static/css/192f7eb8d0a904d3.css",revision:"192f7eb8d0a904d3"},{url:"/_next/static/css/2ef887fd8556f1e7.css",revision:"2ef887fd8556f1e7"},{url:"/_next/static/css/9bc7f308413e5124.css",revision:"9bc7f308413e5124"},{url:"/_next/static/css/b43b9e91fd656e19.css",revision:"b43b9e91fd656e19"},{url:"/_next/static/css/bb2db9a250034e6b.css",revision:"bb2db9a250034e6b"},{url:"/_next/static/css/c43863443779e280.css",revision:"c43863443779e280"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/1446655bf1b30d9b-s.p.ttf",revision:"3cf0ee273a0b3f022234b6572c3b78f9"},{url:"/_next/static/media/41c61de72f90ed3e-s.p.otf",revision:"73b9994bb505da43a387d107849baf95"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/65cf196fb2a38431-s.p.ttf",revision:"ae5e7255973ffe09b53f07a2805232a8"},{url:"/_next/static/media/6ed5cf34b1618c0b-s.p.ttf",revision:"05bdf30b8aaa10683c19e73dd0c428da"},{url:"/_next/static/media/b33587e5b2ea6d2b-s.p.otf",revision:"3b24078346a6ae8b9caeca47834fcea9"},{url:"/_next/static/media/b80b2845982b9b26-s.p.ttf",revision:"6444f14adcdee041b62184f13139a56d"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/e0e336c52dc55924-s.p.ttf",revision:"d59719bcf2c0c2e0db325ecf56c1d257"},{url:"/_next/static/media/e5d6c0b56ed9f207-s.p.ttf",revision:"73bfa12b55452a65a0253c511856d6c2"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/pwa-image-192.png",revision:"5f29c3aa656a5bda98d9c3dbf3695e0e"},{url:"/pwa-image-512.png",revision:"bde20d4ca803bf95b5984288bbcc5da0"},{url:"/twitter_main.png",revision:"916dfb2381fa2c4e3b6584e0e0caf71a"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:t,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
