/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/service-worker.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/node_modules/@sapper/service-worker.js":
/*!****************************************************!*\
  !*** ./src/node_modules/@sapper/service-worker.js ***!
  \****************************************************/
/*! exports provided: timestamp, files, assets, shell, routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"timestamp\", function() { return timestamp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"files\", function() { return files; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"assets\", function() { return files; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shell\", function() { return shell; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"routes\", function() { return routes; });\n// This file is generated by Sapper — do not edit it!\nconst timestamp = 1627348111825;\n\nconst files = [\n\t\"/service-worker-index.html\",\n\t\"/.DS_Store\",\n\t\"/css/responsive.css\",\n\t\"/css/style.css\",\n\t\"/css/w3.css\",\n\t\"/favicon.png\",\n\t\"/fonts/.DS_Store\",\n\t\"/fonts/font-awesome/css/font-awesome.min.css\",\n\t\"/fonts/font-awesome/fonts/fontawesome-webfont.eot\",\n\t\"/fonts/font-awesome/fonts/fontawesome-webfont.svg\",\n\t\"/fonts/font-awesome/fonts/fontawesome-webfont.ttf\",\n\t\"/fonts/font-awesome/fonts/fontawesome-webfont.woff\",\n\t\"/fonts/font-awesome/fonts/fontawesome-webfont.woff2\",\n\t\"/fonts/font-awesome/fonts/fontawesome-webfont914c.eot\",\n\t\"/fonts/font-awesome/fonts/fontawesome-webfont914c.svg\",\n\t\"/fonts/font-awesome/fonts/fontawesome-webfont914c.ttf\",\n\t\"/fonts/font-awesome/fonts/fontawesome-webfont914c.woff\",\n\t\"/fonts/font-awesome/fonts/fontawesome-webfont914c.woff2\",\n\t\"/fonts/font-awesome/fonts/fontawesome-webfontd41d.eot\",\n\t\"/fonts/icon/font/Flaticon.eot\",\n\t\"/fonts/icon/font/Flaticon.svg\",\n\t\"/fonts/icon/font/Flaticon.ttf\",\n\t\"/fonts/icon/font/Flaticon.woff\",\n\t\"/fonts/icon/font/Flaticond41d.eot\",\n\t\"/fonts/icon/font/flaticon.css\",\n\t\"/fonts/mark/MARKPRO.woff\",\n\t\"/fonts/mark/MARKPROBLACK.woff\",\n\t\"/fonts/mark/MARKPROBOLD.woff\",\n\t\"/fonts/mark/MARKPROBOOK.woff\",\n\t\"/fonts/mark/MARKPROEXTRALIGHT.woff\",\n\t\"/fonts/mark/MARKPROHEAVY.woff\",\n\t\"/fonts/mark/MARKPROLIGHT.woff\",\n\t\"/fonts/mark/MARKPROMEDIUM.woff\",\n\t\"/global.css\",\n\t\"/images/.DS_Store\",\n\t\"/images/1.svg\",\n\t\"/images/blog/1.jpg\",\n\t\"/images/blog/10.jpg\",\n\t\"/images/blog/11.jpg\",\n\t\"/images/blog/12.jpg\",\n\t\"/images/blog/13.jpg\",\n\t\"/images/blog/14.jpg\",\n\t\"/images/blog/15.jpg\",\n\t\"/images/blog/16.jpg\",\n\t\"/images/blog/17.jpg\",\n\t\"/images/blog/18.jpg\",\n\t\"/images/blog/2.jpg\",\n\t\"/images/blog/3.jpg\",\n\t\"/images/blog/4.jpg\",\n\t\"/images/blog/5.jpg\",\n\t\"/images/blog/6.jpg\",\n\t\"/images/blog/7.jpg\",\n\t\"/images/blog/8.jpg\",\n\t\"/images/blog/9.jpg\",\n\t\"/images/course/1.jpg\",\n\t\"/images/course/10.jpg\",\n\t\"/images/course/11.jpg\",\n\t\"/images/course/12.jpg\",\n\t\"/images/course/13.jpg\",\n\t\"/images/course/14.jpg\",\n\t\"/images/course/15.jpg\",\n\t\"/images/course/16.jpg\",\n\t\"/images/course/17.jpg\",\n\t\"/images/course/18.jpg\",\n\t\"/images/course/19.jpg\",\n\t\"/images/course/2.jpg\",\n\t\"/images/course/20.jpg\",\n\t\"/images/course/21.jpg\",\n\t\"/images/course/22.jpg\",\n\t\"/images/course/23.jpg\",\n\t\"/images/course/24.jpg\",\n\t\"/images/course/25.jpg\",\n\t\"/images/course/26.jpg\",\n\t\"/images/course/27.jpg\",\n\t\"/images/course/28.jpg\",\n\t\"/images/course/29.jpg\",\n\t\"/images/course/3.jpg\",\n\t\"/images/course/30.jpg\",\n\t\"/images/course/31.jpg\",\n\t\"/images/course/32.jpg\",\n\t\"/images/course/4.jpg\",\n\t\"/images/course/5.jpg\",\n\t\"/images/course/6.jpg\",\n\t\"/images/course/7.jpg\",\n\t\"/images/course/8.jpg\",\n\t\"/images/course/9.jpg\",\n\t\"/images/event/1.jpg\",\n\t\"/images/event/10.jpg\",\n\t\"/images/event/11.jpg\",\n\t\"/images/event/12.jpg\",\n\t\"/images/event/13.jpg\",\n\t\"/images/event/2.jpg\",\n\t\"/images/event/3.jpg\",\n\t\"/images/event/4.jpg\",\n\t\"/images/event/5.jpg\",\n\t\"/images/event/6.jpg\",\n\t\"/images/event/7.jpg\",\n\t\"/images/event/8.jpg\",\n\t\"/images/event/9.jpg\",\n\t\"/images/fav-icon/icon.png\",\n\t\"/images/home/1.jpg\",\n\t\"/images/home/10.jpg\",\n\t\"/images/home/11.jpg\",\n\t\"/images/home/12.jpg\",\n\t\"/images/home/13.jpg\",\n\t\"/images/home/14.jpg\",\n\t\"/images/home/2.jpg\",\n\t\"/images/home/3.jpg\",\n\t\"/images/home/4.jpg\",\n\t\"/images/home/5.jpg\",\n\t\"/images/home/6.jpg\",\n\t\"/images/home/7.jpg\",\n\t\"/images/home/8.jpg\",\n\t\"/images/home/9.jpg\",\n\t\"/images/home/shape.png\",\n\t\"/images/home/slide-1.jpg\",\n\t\"/images/home/slide-2.jpg\",\n\t\"/images/inner-page/1.jpg\",\n\t\"/images/inner-page/2.jpg\",\n\t\"/images/inner-page/banner.jpg\",\n\t\"/images/logo/.DS_Store\",\n\t\"/images/logo/logo.png\",\n\t\"/images/logo/logo2.png\",\n\t\"/images/logo/logo3.png\",\n\t\"/images/logo/logo4.png\",\n\t\"/images/logo/p-1.png\",\n\t\"/images/logo/p-2.png\",\n\t\"/images/logo/p-3.png\",\n\t\"/images/logo/p-4.png\",\n\t\"/images/logo/p-5.png\",\n\t\"/images/logo/p-6.png\",\n\t\"/images/logo/p-7.png\",\n\t\"/images/logo/p-8.png\",\n\t\"/images/portfolio/1.jpg\",\n\t\"/images/portfolio/10.jpg\",\n\t\"/images/portfolio/11.jpg\",\n\t\"/images/portfolio/12.jpg\",\n\t\"/images/portfolio/13.jpg\",\n\t\"/images/portfolio/14.jpg\",\n\t\"/images/portfolio/2.jpg\",\n\t\"/images/portfolio/3.jpg\",\n\t\"/images/portfolio/4.jpg\",\n\t\"/images/portfolio/5.jpg\",\n\t\"/images/portfolio/6.jpg\",\n\t\"/images/portfolio/7.jpg\",\n\t\"/images/portfolio/8.jpg\",\n\t\"/images/portfolio/9.jpg\",\n\t\"/images/shop/1.jpg\",\n\t\"/images/shop/10.jpg\",\n\t\"/images/shop/11.jpg\",\n\t\"/images/shop/12.jpg\",\n\t\"/images/shop/13.jpg\",\n\t\"/images/shop/14.jpg\",\n\t\"/images/shop/15.jpg\",\n\t\"/images/shop/16.jpg\",\n\t\"/images/shop/2.jpg\",\n\t\"/images/shop/3.jpg\",\n\t\"/images/shop/4.jpg\",\n\t\"/images/shop/5.jpg\",\n\t\"/images/shop/6.jpg\",\n\t\"/images/shop/7.jpg\",\n\t\"/images/shop/8.jpg\",\n\t\"/images/shop/9.jpg\",\n\t\"/images/team/1.jpg\",\n\t\"/images/team/10.jpg\",\n\t\"/images/team/11.jpg\",\n\t\"/images/team/12.jpg\",\n\t\"/images/team/2.jpg\",\n\t\"/images/team/3.jpg\",\n\t\"/images/team/4.jpg\",\n\t\"/images/team/5.jpg\",\n\t\"/images/team/6.jpg\",\n\t\"/images/team/7.jpg\",\n\t\"/images/team/8.jpg\",\n\t\"/images/team/9.jpg\",\n\t\"/js/theme.js\",\n\t\"/logo-192.png\",\n\t\"/logo-512.png\",\n\t\"/manifest.json\",\n\t\"/modal/modal.css\",\n\t\"/modal/modal.js\",\n\t\"/toast/toast.css\",\n\t\"/toast/toast.js\",\n\t\"/vendor/BootstrapFormHelpers-master/dist/css/bootstrap-formhelpers.min.css\",\n\t\"/vendor/BootstrapFormHelpers-master/dist/img/bootstrap-formhelpers-countries.flags.png\",\n\t\"/vendor/BootstrapFormHelpers-master/dist/img/bootstrap-formhelpers-currencies.flags.png\",\n\t\"/vendor/BootstrapFormHelpers-master/dist/img/bootstrap-formhelpers-googlefonts.png\",\n\t\"/vendor/BootstrapFormHelpers-master/dist/img/eu.html\",\n\t\"/vendor/BootstrapFormHelpers-master/dist/img/xcd.html\",\n\t\"/vendor/BootstrapFormHelpers-master/dist/js/bootstrap-formhelpers.min.js\",\n\t\"/vendor/Camera-master/css/camera.css\",\n\t\"/vendor/Camera-master/images/blank.gif\",\n\t\"/vendor/Camera-master/images/camera-loader.gif\",\n\t\"/vendor/Camera-master/images/camera_skins.png\",\n\t\"/vendor/Camera-master/images/patterns/overlay1.html\",\n\t\"/vendor/Camera-master/images/patterns/overlay10.html\",\n\t\"/vendor/Camera-master/images/patterns/overlay2.html\",\n\t\"/vendor/Camera-master/images/patterns/overlay3.html\",\n\t\"/vendor/Camera-master/images/patterns/overlay4.html\",\n\t\"/vendor/Camera-master/images/patterns/overlay5.html\",\n\t\"/vendor/Camera-master/images/patterns/overlay6.html\",\n\t\"/vendor/Camera-master/images/patterns/overlay7.html\",\n\t\"/vendor/Camera-master/images/patterns/overlay8.html\",\n\t\"/vendor/Camera-master/images/patterns/overlay9.html\",\n\t\"/vendor/Camera-master/scripts/camera.min.js\",\n\t\"/vendor/Camera-master/scripts/jquery.easing.1.3.js\",\n\t\"/vendor/Camera-master/scripts/jquery.mobile.customized.min.js\",\n\t\"/vendor/Counter/jquery.counterup.min.js\",\n\t\"/vendor/Counter/jquery.waypoints.min.js\",\n\t\"/vendor/WOW-master/css/libs/animate.css\",\n\t\"/vendor/WOW-master/dist/wow.min.js\",\n\t\"/vendor/bootstrap/bootstrap.css\",\n\t\"/vendor/bootstrap/bootstrap.min.js\",\n\t\"/vendor/bootstrap-mega-menu/css/animate.css\",\n\t\"/vendor/bootstrap-mega-menu/css/menu.css\",\n\t\"/vendor/bootstrap-mega-menu/js/menu.js\",\n\t\"/vendor/bootstrap-select/dist/css/bootstrap-select.css\",\n\t\"/vendor/bootstrap-select/dist/js/bootstrap-select.js\",\n\t\"/vendor/countdown-2.2.0/jquery.countdown.min.js\",\n\t\"/vendor/fancybox/dist/jquery.fancybox.min.css\",\n\t\"/vendor/fancybox/dist/jquery.fancybox.min.js\",\n\t\"/vendor/fonts/glyphicons-halflings-regular.eot\",\n\t\"/vendor/fonts/glyphicons-halflings-regular.svg\",\n\t\"/vendor/fonts/glyphicons-halflings-regular.ttf\",\n\t\"/vendor/fonts/glyphicons-halflings-regular.woff\",\n\t\"/vendor/fonts/glyphicons-halflings-regular.woff2\",\n\t\"/vendor/fonts/glyphicons-halflings-regulard41d.eot\",\n\t\"/vendor/hover.css\",\n\t\"/vendor/jquery-ui/images/ui-icons_444444_256x240.png\",\n\t\"/vendor/jquery-ui/images/ui-icons_555555_256x240.png\",\n\t\"/vendor/jquery-ui/images/ui-icons_777620_256x240.png\",\n\t\"/vendor/jquery-ui/images/ui-icons_777777_256x240.png\",\n\t\"/vendor/jquery-ui/images/ui-icons_cc0000_256x240.png\",\n\t\"/vendor/jquery-ui/images/ui-icons_ffffff_256x240.png\",\n\t\"/vendor/jquery-ui/jquery-ui.min.css\",\n\t\"/vendor/jquery-ui/jquery-ui.min.js\",\n\t\"/vendor/jquery.2.2.3.min.js\",\n\t\"/vendor/jquery.mixitup.min.js\",\n\t\"/vendor/owl-carousel/owl.carousel.css\",\n\t\"/vendor/owl-carousel/owl.carousel.min.js\",\n\t\"/vendor/owl-carousel/owl.theme.css\",\n\t\"/vendor/owl-carousel/owl.video.play.html\",\n\t\"/vendor/particles.js-master/demo/js/app.js\",\n\t\"/vendor/particles.js-master/demo/js/lib/stats.js\",\n\t\"/vendor/particles.js-master/particles.min.js\",\n\t\"/videos/binary_classfication_01.mp4\",\n\t\"/videos/logistic_regression_02.mp4\",\n\t\"/videos/logistic_regression_cost-function_03.mp4\"\n];\n // legacy\n\nconst shell = [\n\t\"/client/7dc3fc40c04ef7f4057b/0.0.js\",\n\t\"/client/7dc3fc40c04ef7f4057b/about.about.js\",\n\t\"/client/7dc3fc40c04ef7f4057b/blog.blog.js\",\n\t\"/client/7dc3fc40c04ef7f4057b/blog_$slug.blog_$slug.js\",\n\t\"/client/7dc3fc40c04ef7f4057b/blog_top.blog_top.js\",\n\t\"/client/7dc3fc40c04ef7f4057b/courses_$slug.courses_$slug.js\",\n\t\"/client/7dc3fc40c04ef7f4057b/courses_all.courses_all.js\",\n\t\"/client/7dc3fc40c04ef7f4057b/courses_content.courses_content.js\",\n\t\"/client/7dc3fc40c04ef7f4057b/courses_progress.courses_progress.js\",\n\t\"/client/7dc3fc40c04ef7f4057b/event_$slug.event_$slug.js\",\n\t\"/client/7dc3fc40c04ef7f4057b/event_create.event_create.js\",\n\t\"/client/7dc3fc40c04ef7f4057b/event_top.event_top.js\",\n\t\"/client/7dc3fc40c04ef7f4057b/index.index.js\",\n\t\"/client/7dc3fc40c04ef7f4057b/login.login.js\",\n\t\"/client/7dc3fc40c04ef7f4057b/main.js\",\n\t\"/client/7dc3fc40c04ef7f4057b/projects.projects.js\",\n\t\"/client/7dc3fc40c04ef7f4057b/signup.signup.js\",\n\t\"/client/7dc3fc40c04ef7f4057b/vendors~courses_$slug.vendors~courses_$slug.js\",\n\t\"/client/7dc3fc40c04ef7f4057b/vendors~courses_$slug~courses_content~courses_progress~event_create~login.vendors~courses_$slug~courses_content~courses_progress~event_create~login.js\"\n];\n\nconst routes = [\n\t{ pattern: /^\\/$/ },\n\t{ pattern: /^\\/projects\\/?$/ },\n\t{ pattern: /^\\/courses\\/progress\\/?$/ },\n\t{ pattern: /^\\/courses\\/content\\/?$/ },\n\t{ pattern: /^\\/courses\\/all\\/?$/ },\n\t{ pattern: /^\\/courses\\/([^/]+?)\\/?$/ },\n\t{ pattern: /^\\/signup\\/?$/ },\n\t{ pattern: /^\\/about\\/?$/ },\n\t{ pattern: /^\\/event\\/create\\/?$/ },\n\t{ pattern: /^\\/event\\/top\\/?$/ },\n\t{ pattern: /^\\/event\\/([^/]+?)\\/?$/ },\n\t{ pattern: /^\\/login\\/?$/ },\n\t{ pattern: /^\\/blog\\/?$/ },\n\t{ pattern: /^\\/blog\\/top\\/?$/ },\n\t{ pattern: /^\\/blog\\/([^/]+?)\\/?$/ }\n];\n\n//# sourceURL=webpack:///./src/node_modules/@sapper/service-worker.js?");

/***/ }),

/***/ "./src/service-worker.ts":
/*!*******************************!*\
  !*** ./src/service-worker.ts ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sapper_service_worker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sapper/service-worker */ \"./src/node_modules/@sapper/service-worker.js\");\n\nconst ASSETS = `cache${_sapper_service_worker__WEBPACK_IMPORTED_MODULE_0__[\"timestamp\"]}`;\n// `shell` is an array of all the files generated by the bundler,\n// `files` is an array of everything in the `static` directory\nconst to_cache = _sapper_service_worker__WEBPACK_IMPORTED_MODULE_0__[\"shell\"].concat(_sapper_service_worker__WEBPACK_IMPORTED_MODULE_0__[\"files\"]);\nconst staticAssets = new Set(to_cache);\nself.addEventListener('install', (event) => {\n    event.waitUntil(caches\n        .open(ASSETS)\n        .then(cache => cache.addAll(to_cache))\n        .then(() => {\n        self.skipWaiting();\n    }));\n});\nself.addEventListener('activate', (event) => {\n    event.waitUntil(caches.keys().then(async (keys) => {\n        // delete old caches\n        for (const key of keys) {\n            if (key !== ASSETS)\n                await caches.delete(key);\n        }\n        self.clients.claim();\n    }));\n});\n/**\n * Fetch the asset from the network and store it in the cache.\n * Fall back to the cache if the user is offline.\n */\nasync function fetchAndCache(request) {\n    const cache = await caches.open(`offline${_sapper_service_worker__WEBPACK_IMPORTED_MODULE_0__[\"timestamp\"]}`);\n    try {\n        const response = await fetch(request);\n        cache.put(request, response.clone());\n        return response;\n    }\n    catch (err) {\n        const response = await cache.match(request);\n        if (response)\n            return response;\n        throw err;\n    }\n}\nself.addEventListener('fetch', (event) => {\n    if (event.request.method !== 'GET' || event.request.headers.has('range'))\n        return;\n    const url = new URL(event.request.url);\n    // don't try to handle e.g. data: URIs\n    const isHttp = url.protocol.startsWith('http');\n    const isDevServerRequest = url.hostname === self.location.hostname && url.port !== self.location.port;\n    const isStaticAsset = url.host === self.location.host && staticAssets.has(url.pathname);\n    const skipBecauseUncached = event.request.cache === 'only-if-cached' && !isStaticAsset;\n    if (isHttp && !isDevServerRequest && !skipBecauseUncached) {\n        event.respondWith((async () => {\n            // always serve static files and bundler-generated assets from cache.\n            // if your application has other URLs with data that will never change,\n            // set this variable to true for them and they will only be fetched once.\n            const cachedAsset = isStaticAsset && await caches.match(event.request);\n            // for pages, you might want to serve a shell `service-worker-index.html` file,\n            // which Sapper has generated for you. It's not right for every\n            // app, but if it's right for yours then uncomment this section\n            /*\n            if (!cachedAsset && url.origin === self.origin && routes.find(route => route.pattern.test(url.pathname))) {\n                return caches.match('/service-worker-index.html');\n            }\n            */\n            return cachedAsset || fetchAndCache(event.request);\n        })());\n    }\n});\n\n\n//# sourceURL=webpack:///./src/service-worker.ts?");

/***/ })

/******/ });