(window.webpackJsonp=window.webpackJsonp||[]).push([[4],[function(e,n,t){e.exports=t(21)},,function(e,n){function t(e,n,t,r,o,i,a){try{var u=e[i](a),c=u.value}catch(e){return void t(e)}u.done?n(c):Promise.resolve(c).then(r,o)}e.exports=function(e){return function(){var n=this,r=arguments;return new Promise((function(o,i){var a=e.apply(n,r);function u(e){t(a,o,i,u,c,"next",e)}function c(e){t(a,o,i,u,c,"throw",e)}u(void 0)}))}}},function(e,n){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(n)}e.exports=t},,function(e,n){e.exports=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}},function(e,n){function t(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}},function(e,n,t){var r=t(14);e.exports=function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&r(e,n)}},function(e,n,t){var r=t(22),o=t(23);e.exports=function(e,n){return!n||"object"!==r(n)&&"function"!=typeof n?o(e):n}},function(e,n,t){var r=t(3),o=t(14),i=t(24),a=t(25);function u(n){var t="function"==typeof Map?new Map:void 0;return e.exports=u=function(e){if(null===e||!i(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return a(e,arguments,r(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),o(n,e)},u(n)}e.exports=u},,function(e,n,t){var r=t(27),o=t(28),i=t(29),a=t(30);e.exports=function(e){return r(e)||o(e)||i(e)||a()}},,,function(e,n){function t(n,r){return e.exports=t=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},t(n,r)}e.exports=t},,function(e,n,t){(function(n){e.exports=function e(n,t,r){function o(a,u){if(!t[a]){if(!n[a]){if(i)return i(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var f=t[a]={exports:{}};n[a][0].call(f.exports,(function(e){var t=n[a][1][e];return o(t||e)}),f,f.exports,e,n,t,r)}return t[a].exports}for(var i=!1,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,r){(function(e){"use strict";var n,r,o=e.MutationObserver||e.WebKitMutationObserver;if(o){var i=0,a=new o(s),u=e.document.createTextNode("");a.observe(u,{characterData:!0}),n=function(){u.data=i=++i%2}}else if(e.setImmediate||void 0===e.MessageChannel)n="document"in e&&"onreadystatechange"in e.document.createElement("script")?function(){var n=e.document.createElement("script");n.onreadystatechange=function(){s(),n.onreadystatechange=null,n.parentNode.removeChild(n),n=null},e.document.documentElement.appendChild(n)}:function(){setTimeout(s,0)};else{var c=new e.MessageChannel;c.port1.onmessage=s,n=function(){c.port2.postMessage(0)}}var f=[];function s(){var e,n;r=!0;for(var t=f.length;t;){for(n=f,f=[],e=-1;++e<t;)n[e]();t=f.length}r=!1}function l(e){1!==f.push(e)||r||n()}t.exports=l}).call(this,void 0!==n?n:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(e,n,t){"use strict";var r=e(1);function o(){}var i={},a=["REJECTED"],u=["FULFILLED"],c=["PENDING"];function f(e){if("function"!=typeof e)throw new TypeError("resolver must be a function");this.state=c,this.queue=[],this.outcome=void 0,e!==o&&v(this,e)}function s(e,n,t){this.promise=e,"function"==typeof n&&(this.onFulfilled=n,this.callFulfilled=this.otherCallFulfilled),"function"==typeof t&&(this.onRejected=t,this.callRejected=this.otherCallRejected)}function l(e,n,t){r((function(){var r;try{r=n(t)}catch(n){return i.reject(e,n)}r===e?i.reject(e,new TypeError("Cannot resolve promise with itself")):i.resolve(e,r)}))}function d(e){var n=e&&e.then;if(e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof n)return function(){n.apply(e,arguments)}}function v(e,n){var t=!1;function r(n){t||(t=!0,i.reject(e,n))}function o(n){t||(t=!0,i.resolve(e,n))}function a(){n(o,r)}var u=h(a);"error"===u.status&&r(u.value)}function h(e,n){var t={};try{t.value=e(n),t.status="success"}catch(e){t.status="error",t.value=e}return t}function p(e){return e instanceof this?e:i.resolve(new this(o),e)}function y(e){var n=new this(o);return i.reject(n,e)}function b(e){var n=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var t=e.length,r=!1;if(!t)return this.resolve([]);for(var a=new Array(t),u=0,c=-1,f=new this(o);++c<t;)s(e[c],c);return f;function s(e,o){function c(e){a[o]=e,++u!==t||r||(r=!0,i.resolve(f,a))}n.resolve(e).then(c,(function(e){r||(r=!0,i.reject(f,e))}))}}function m(e){var n=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var t=e.length,r=!1;if(!t)return this.resolve([]);for(var a=-1,u=new this(o);++a<t;)c(e[a]);return u;function c(e){n.resolve(e).then((function(e){r||(r=!0,i.resolve(u,e))}),(function(e){r||(r=!0,i.reject(u,e))}))}}n.exports=f,f.prototype.catch=function(e){return this.then(null,e)},f.prototype.then=function(e,n){if("function"!=typeof e&&this.state===u||"function"!=typeof n&&this.state===a)return this;var t=new this.constructor(o);return this.state!==c?l(t,this.state===u?e:n,this.outcome):this.queue.push(new s(t,e,n)),t},s.prototype.callFulfilled=function(e){i.resolve(this.promise,e)},s.prototype.otherCallFulfilled=function(e){l(this.promise,this.onFulfilled,e)},s.prototype.callRejected=function(e){i.reject(this.promise,e)},s.prototype.otherCallRejected=function(e){l(this.promise,this.onRejected,e)},i.resolve=function(e,n){var t=h(d,n);if("error"===t.status)return i.reject(e,t.value);var r=t.value;if(r)v(e,r);else{e.state=u,e.outcome=n;for(var o=-1,a=e.queue.length;++o<a;)e.queue[o].callFulfilled(n)}return e},i.reject=function(e,n){e.state=a,e.outcome=n;for(var t=-1,r=e.queue.length;++t<r;)e.queue[t].callRejected(n);return e},f.resolve=p,f.reject=y,f.all=b,f.race=m},{1:1}],3:[function(e,t,r){(function(n){"use strict";"function"!=typeof n.Promise&&(n.Promise=e(2))}).call(this,void 0!==n?n:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{2:2}],4:[function(e,n,t){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(){try{if("undefined"!=typeof indexedDB)return indexedDB;if("undefined"!=typeof webkitIndexedDB)return webkitIndexedDB;if("undefined"!=typeof mozIndexedDB)return mozIndexedDB;if("undefined"!=typeof OIndexedDB)return OIndexedDB;if("undefined"!=typeof msIndexedDB)return msIndexedDB}catch(e){return}}var a=i();function u(){try{if(!a||!a.open)return!1;var e="undefined"!=typeof openDatabase&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),n="function"==typeof fetch&&-1!==fetch.toString().indexOf("[native code");return(!e||n)&&"undefined"!=typeof indexedDB&&"undefined"!=typeof IDBKeyRange}catch(e){return!1}}function c(e,n){e=e||[],n=n||{};try{return new Blob(e,n)}catch(o){if("TypeError"!==o.name)throw o;for(var t=new("undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:WebKitBlobBuilder),r=0;r<e.length;r+=1)t.append(e[r]);return t.getBlob(n.type)}}"undefined"==typeof Promise&&e(3);var f=Promise;function s(e,n){n&&e.then((function(e){n(null,e)}),(function(e){n(e)}))}function l(e,n,t){"function"==typeof n&&e.then(n),"function"==typeof t&&e.catch(t)}function d(e){return"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e=String(e)),e}function v(){if(arguments.length&&"function"==typeof arguments[arguments.length-1])return arguments[arguments.length-1]}var h="local-forage-detect-blob-support",p=void 0,y={},b=Object.prototype.toString,m="readonly",g="readwrite";function _(e){for(var n=e.length,t=new ArrayBuffer(n),r=new Uint8Array(t),o=0;o<n;o++)r[o]=e.charCodeAt(o);return t}function w(e){return new f((function(n){var t=e.transaction(h,g),r=c([""]);t.objectStore(h).put(r,"key"),t.onabort=function(e){e.preventDefault(),e.stopPropagation(),n(!1)},t.oncomplete=function(){var e=navigator.userAgent.match(/Chrome\/(\d+)/),t=navigator.userAgent.match(/Edge\//);n(t||!e||parseInt(e[1],10)>=43)}})).catch((function(){return!1}))}function I(e){return"boolean"==typeof p?f.resolve(p):w(e).then((function(e){return p=e}))}function S(e){var n=y[e.name],t={};t.promise=new f((function(e,n){t.resolve=e,t.reject=n})),n.deferredOperations.push(t),n.dbReady?n.dbReady=n.dbReady.then((function(){return t.promise})):n.dbReady=t.promise}function E(e){var n=y[e.name].deferredOperations.pop();if(n)return n.resolve(),n.promise}function x(e,n){var t=y[e.name].deferredOperations.pop();if(t)return t.reject(n),t.promise}function j(e,n){return new f((function(t,r){if(y[e.name]=y[e.name]||F(),e.db){if(!n)return t(e.db);S(e),e.db.close()}var o=[e.name];n&&o.push(e.version);var i=a.open.apply(a,o);n&&(i.onupgradeneeded=function(n){var t=i.result;try{t.createObjectStore(e.storeName),n.oldVersion<=1&&t.createObjectStore(h)}catch(t){if("ConstraintError"!==t.name)throw t;console.warn('The database "'+e.name+'" has been upgraded from version '+n.oldVersion+" to version "+n.newVersion+', but the storage "'+e.storeName+'" already exists.')}}),i.onerror=function(e){e.preventDefault(),r(i.error)},i.onsuccess=function(){t(i.result),E(e)}}))}function N(e){return j(e,!1)}function O(e){return j(e,!0)}function A(e,n){if(!e.db)return!0;var t=!e.db.objectStoreNames.contains(e.storeName),r=e.version<e.db.version,o=e.version>e.db.version;if(r&&(e.version!==n&&console.warn('The database "'+e.name+"\" can't be downgraded from version "+e.db.version+" to version "+e.version+"."),e.version=e.db.version),o||t){if(t){var i=e.db.version+1;i>e.version&&(e.version=i)}return!0}return!1}function R(e){return new f((function(n,t){var r=new FileReader;r.onerror=t,r.onloadend=function(t){var r=btoa(t.target.result||"");n({__local_forage_encoded_blob:!0,data:r,type:e.type})},r.readAsBinaryString(e)}))}function D(e){return c([_(atob(e.data))],{type:e.type})}function k(e){return e&&e.__local_forage_encoded_blob}function B(e){var n=this,t=n._initReady().then((function(){var e=y[n._dbInfo.name];if(e&&e.dbReady)return e.dbReady}));return l(t,e,e),t}function T(e){S(e);for(var n=y[e.name],t=n.forages,r=0;r<t.length;r++){var o=t[r];o._dbInfo.db&&(o._dbInfo.db.close(),o._dbInfo.db=null)}return e.db=null,N(e).then((function(n){return e.db=n,A(e)?O(e):n})).then((function(r){e.db=n.db=r;for(var o=0;o<t.length;o++)t[o]._dbInfo.db=r})).catch((function(n){throw x(e,n),n}))}function C(e,n,t,r){void 0===r&&(r=1);try{var o=e.db.transaction(e.storeName,n);t(null,o)}catch(o){if(r>0&&(!e.db||"InvalidStateError"===o.name||"NotFoundError"===o.name))return f.resolve().then((function(){if(!e.db||"NotFoundError"===o.name&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),O(e)})).then((function(){return T(e).then((function(){C(e,n,t,r-1)}))})).catch(t);t(o)}}function F(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function P(e){var n=this,t={db:null};if(e)for(var r in e)t[r]=e[r];var o=y[t.name];o||(o=F(),y[t.name]=o),o.forages.push(n),n._initReady||(n._initReady=n.ready,n.ready=B);var i=[];function a(){return f.resolve()}for(var u=0;u<o.forages.length;u++){var c=o.forages[u];c!==n&&i.push(c._initReady().catch(a))}var s=o.forages.slice(0);return f.all(i).then((function(){return t.db=o.db,N(t)})).then((function(e){return t.db=e,A(t,n._defaultConfig.version)?O(t):e})).then((function(e){t.db=o.db=e,n._dbInfo=t;for(var r=0;r<s.length;r++){var i=s[r];i!==n&&(i._dbInfo.db=t.db,i._dbInfo.version=t.version)}}))}function L(e,n){var t=this;e=d(e);var r=new f((function(n,r){t.ready().then((function(){C(t._dbInfo,m,(function(o,i){if(o)return r(o);try{var a=i.objectStore(t._dbInfo.storeName).get(e);a.onsuccess=function(){var e=a.result;void 0===e&&(e=null),k(e)&&(e=D(e)),n(e)},a.onerror=function(){r(a.error)}}catch(e){r(e)}}))})).catch(r)}));return s(r,n),r}function M(e,n){var t=this,r=new f((function(n,r){t.ready().then((function(){C(t._dbInfo,m,(function(o,i){if(o)return r(o);try{var a=i.objectStore(t._dbInfo.storeName).openCursor(),u=1;a.onsuccess=function(){var t=a.result;if(t){var r=t.value;k(r)&&(r=D(r));var o=e(r,t.key,u++);void 0!==o?n(o):t.continue()}else n()},a.onerror=function(){r(a.error)}}catch(e){r(e)}}))})).catch(r)}));return s(r,n),r}function z(e,n,t){var r=this;e=d(e);var o=new f((function(t,o){var i;r.ready().then((function(){return i=r._dbInfo,"[object Blob]"===b.call(n)?I(i.db).then((function(e){return e?n:R(n)})):n})).then((function(n){C(r._dbInfo,g,(function(i,a){if(i)return o(i);try{var u=a.objectStore(r._dbInfo.storeName);null===n&&(n=void 0);var c=u.put(n,e);a.oncomplete=function(){void 0===n&&(n=null),t(n)},a.onabort=a.onerror=function(){var e=c.error?c.error:c.transaction.error;o(e)}}catch(e){o(e)}}))})).catch(o)}));return s(o,t),o}function U(e,n){var t=this;e=d(e);var r=new f((function(n,r){t.ready().then((function(){C(t._dbInfo,g,(function(o,i){if(o)return r(o);try{var a=i.objectStore(t._dbInfo.storeName).delete(e);i.oncomplete=function(){n()},i.onerror=function(){r(a.error)},i.onabort=function(){var e=a.error?a.error:a.transaction.error;r(e)}}catch(e){r(e)}}))})).catch(r)}));return s(r,n),r}function q(e){var n=this,t=new f((function(e,t){n.ready().then((function(){C(n._dbInfo,g,(function(r,o){if(r)return t(r);try{var i=o.objectStore(n._dbInfo.storeName).clear();o.oncomplete=function(){e()},o.onabort=o.onerror=function(){var e=i.error?i.error:i.transaction.error;t(e)}}catch(e){t(e)}}))})).catch(t)}));return s(t,e),t}function W(e){var n=this,t=new f((function(e,t){n.ready().then((function(){C(n._dbInfo,m,(function(r,o){if(r)return t(r);try{var i=o.objectStore(n._dbInfo.storeName).count();i.onsuccess=function(){e(i.result)},i.onerror=function(){t(i.error)}}catch(e){t(e)}}))})).catch(t)}));return s(t,e),t}function K(e,n){var t=this,r=new f((function(n,r){e<0?n(null):t.ready().then((function(){C(t._dbInfo,m,(function(o,i){if(o)return r(o);try{var a=i.objectStore(t._dbInfo.storeName),u=!1,c=a.openKeyCursor();c.onsuccess=function(){var t=c.result;t?0===e||u?n(t.key):(u=!0,t.advance(e)):n(null)},c.onerror=function(){r(c.error)}}catch(e){r(e)}}))})).catch(r)}));return s(r,n),r}function H(e){var n=this,t=new f((function(e,t){n.ready().then((function(){C(n._dbInfo,m,(function(r,o){if(r)return t(r);try{var i=o.objectStore(n._dbInfo.storeName).openKeyCursor(),a=[];i.onsuccess=function(){var n=i.result;n?(a.push(n.key),n.continue()):e(a)},i.onerror=function(){t(i.error)}}catch(e){t(e)}}))})).catch(t)}));return s(t,e),t}function J(e,n){n=v.apply(this,arguments);var t=this.config();(e="function"!=typeof e&&e||{}).name||(e.name=e.name||t.name,e.storeName=e.storeName||t.storeName);var r,o=this;if(e.name){var i=e.name===t.name&&o._dbInfo.db?f.resolve(o._dbInfo.db):N(e).then((function(n){var t=y[e.name],r=t.forages;t.db=n;for(var o=0;o<r.length;o++)r[o]._dbInfo.db=n;return n}));r=e.storeName?i.then((function(n){if(n.objectStoreNames.contains(e.storeName)){var t=n.version+1;S(e);var r=y[e.name],o=r.forages;n.close();for(var i=0;i<o.length;i++){var u=o[i];u._dbInfo.db=null,u._dbInfo.version=t}return new f((function(n,r){var o=a.open(e.name,t);o.onerror=function(e){o.result.close(),r(e)},o.onupgradeneeded=function(){o.result.deleteObjectStore(e.storeName)},o.onsuccess=function(){var e=o.result;e.close(),n(e)}})).then((function(e){r.db=e;for(var n=0;n<o.length;n++){var t=o[n];t._dbInfo.db=e,E(t._dbInfo)}})).catch((function(n){throw(x(e,n)||f.resolve()).catch((function(){})),n}))}})):i.then((function(n){S(e);var t=y[e.name],r=t.forages;n.close();for(var o=0;o<r.length;o++)r[o]._dbInfo.db=null;return new f((function(n,t){var r=a.deleteDatabase(e.name);r.onerror=r.onblocked=function(e){var n=r.result;n&&n.close(),t(e)},r.onsuccess=function(){var e=r.result;e&&e.close(),n(e)}})).then((function(e){t.db=e;for(var n=0;n<r.length;n++)E(r[n]._dbInfo)})).catch((function(n){throw(x(e,n)||f.resolve()).catch((function(){})),n}))}))}else r=f.reject("Invalid arguments");return s(r,n),r}var Q={_driver:"asyncStorage",_initStorage:P,_support:u(),iterate:M,getItem:L,setItem:z,removeItem:U,clear:q,length:W,key:K,keys:H,dropInstance:J};function X(){return"function"==typeof openDatabase}var G="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",V="~~local_forage_type~",Y=/^~~local_forage_type~([^~]+)~/,Z="__lfsc__:",$=Z.length,ee="arbf",ne="blob",te="si08",re="ui08",oe="uic8",ie="si16",ae="si32",ue="ur16",ce="ui32",fe="fl32",se="fl64",le=$+ee.length,de=Object.prototype.toString;function ve(e){var n,t,r,o,i,a=.75*e.length,u=e.length,c=0;"="===e[e.length-1]&&(a--,"="===e[e.length-2]&&a--);var f=new ArrayBuffer(a),s=new Uint8Array(f);for(n=0;n<u;n+=4)t=G.indexOf(e[n]),r=G.indexOf(e[n+1]),o=G.indexOf(e[n+2]),i=G.indexOf(e[n+3]),s[c++]=t<<2|r>>4,s[c++]=(15&r)<<4|o>>2,s[c++]=(3&o)<<6|63&i;return f}function he(e){var n,t=new Uint8Array(e),r="";for(n=0;n<t.length;n+=3)r+=G[t[n]>>2],r+=G[(3&t[n])<<4|t[n+1]>>4],r+=G[(15&t[n+1])<<2|t[n+2]>>6],r+=G[63&t[n+2]];return t.length%3==2?r=r.substring(0,r.length-1)+"=":t.length%3==1&&(r=r.substring(0,r.length-2)+"=="),r}function pe(e,n){var t="";if(e&&(t=de.call(e)),e&&("[object ArrayBuffer]"===t||e.buffer&&"[object ArrayBuffer]"===de.call(e.buffer))){var r,o=Z;e instanceof ArrayBuffer?(r=e,o+=ee):(r=e.buffer,"[object Int8Array]"===t?o+=te:"[object Uint8Array]"===t?o+=re:"[object Uint8ClampedArray]"===t?o+=oe:"[object Int16Array]"===t?o+=ie:"[object Uint16Array]"===t?o+=ue:"[object Int32Array]"===t?o+=ae:"[object Uint32Array]"===t?o+=ce:"[object Float32Array]"===t?o+=fe:"[object Float64Array]"===t?o+=se:n(new Error("Failed to get type for BinaryArray"))),n(o+he(r))}else if("[object Blob]"===t){var i=new FileReader;i.onload=function(){var t=V+e.type+"~"+he(this.result);n(Z+ne+t)},i.readAsArrayBuffer(e)}else try{n(JSON.stringify(e))}catch(t){console.error("Couldn't convert value into a JSON string: ",e),n(null,t)}}function ye(e){if(e.substring(0,$)!==Z)return JSON.parse(e);var n,t=e.substring(le),r=e.substring($,le);if(r===ne&&Y.test(t)){var o=t.match(Y);n=o[1],t=t.substring(o[0].length)}var i=ve(t);switch(r){case ee:return i;case ne:return c([i],{type:n});case te:return new Int8Array(i);case re:return new Uint8Array(i);case oe:return new Uint8ClampedArray(i);case ie:return new Int16Array(i);case ue:return new Uint16Array(i);case ae:return new Int32Array(i);case ce:return new Uint32Array(i);case fe:return new Float32Array(i);case se:return new Float64Array(i);default:throw new Error("Unkown type: "+r)}}var be={serialize:pe,deserialize:ye,stringToBuffer:ve,bufferToString:he};function me(e,n,t,r){e.executeSql("CREATE TABLE IF NOT EXISTS "+n.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],t,r)}function ge(e){var n=this,t={db:null};if(e)for(var r in e)t[r]="string"!=typeof e[r]?e[r].toString():e[r];var o=new f((function(e,r){try{t.db=openDatabase(t.name,String(t.version),t.description,t.size)}catch(e){return r(e)}t.db.transaction((function(o){me(o,t,(function(){n._dbInfo=t,e()}),(function(e,n){r(n)}))}),r)}));return t.serializer=be,o}function _e(e,n,t,r,o,i){e.executeSql(t,r,o,(function(e,a){a.code===a.SYNTAX_ERR?e.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[n.storeName],(function(e,u){u.rows.length?i(e,a):me(e,n,(function(){e.executeSql(t,r,o,i)}),i)}),i):i(e,a)}),i)}function we(e,n){var t=this;e=d(e);var r=new f((function(n,r){t.ready().then((function(){var o=t._dbInfo;o.db.transaction((function(t){_e(t,o,"SELECT * FROM "+o.storeName+" WHERE key = ? LIMIT 1",[e],(function(e,t){var r=t.rows.length?t.rows.item(0).value:null;r&&(r=o.serializer.deserialize(r)),n(r)}),(function(e,n){r(n)}))}))})).catch(r)}));return s(r,n),r}function Ie(e,n){var t=this,r=new f((function(n,r){t.ready().then((function(){var o=t._dbInfo;o.db.transaction((function(t){_e(t,o,"SELECT * FROM "+o.storeName,[],(function(t,r){for(var i=r.rows,a=i.length,u=0;u<a;u++){var c=i.item(u),f=c.value;if(f&&(f=o.serializer.deserialize(f)),void 0!==(f=e(f,c.key,u+1)))return void n(f)}n()}),(function(e,n){r(n)}))}))})).catch(r)}));return s(r,n),r}function Se(e,n,t,r){var o=this;e=d(e);var i=new f((function(i,a){o.ready().then((function(){void 0===n&&(n=null);var u=n,c=o._dbInfo;c.serializer.serialize(n,(function(n,f){f?a(f):c.db.transaction((function(t){_e(t,c,"INSERT OR REPLACE INTO "+c.storeName+" (key, value) VALUES (?, ?)",[e,n],(function(){i(u)}),(function(e,n){a(n)}))}),(function(n){if(n.code===n.QUOTA_ERR){if(r>0)return void i(Se.apply(o,[e,u,t,r-1]));a(n)}}))}))})).catch(a)}));return s(i,t),i}function Ee(e,n,t){return Se.apply(this,[e,n,t,1])}function xe(e,n){var t=this;e=d(e);var r=new f((function(n,r){t.ready().then((function(){var o=t._dbInfo;o.db.transaction((function(t){_e(t,o,"DELETE FROM "+o.storeName+" WHERE key = ?",[e],(function(){n()}),(function(e,n){r(n)}))}))})).catch(r)}));return s(r,n),r}function je(e){var n=this,t=new f((function(e,t){n.ready().then((function(){var r=n._dbInfo;r.db.transaction((function(n){_e(n,r,"DELETE FROM "+r.storeName,[],(function(){e()}),(function(e,n){t(n)}))}))})).catch(t)}));return s(t,e),t}function Ne(e){var n=this,t=new f((function(e,t){n.ready().then((function(){var r=n._dbInfo;r.db.transaction((function(n){_e(n,r,"SELECT COUNT(key) as c FROM "+r.storeName,[],(function(n,t){var r=t.rows.item(0).c;e(r)}),(function(e,n){t(n)}))}))})).catch(t)}));return s(t,e),t}function Oe(e,n){var t=this,r=new f((function(n,r){t.ready().then((function(){var o=t._dbInfo;o.db.transaction((function(t){_e(t,o,"SELECT key FROM "+o.storeName+" WHERE id = ? LIMIT 1",[e+1],(function(e,t){var r=t.rows.length?t.rows.item(0).key:null;n(r)}),(function(e,n){r(n)}))}))})).catch(r)}));return s(r,n),r}function Ae(e){var n=this,t=new f((function(e,t){n.ready().then((function(){var r=n._dbInfo;r.db.transaction((function(n){_e(n,r,"SELECT key FROM "+r.storeName,[],(function(n,t){for(var r=[],o=0;o<t.rows.length;o++)r.push(t.rows.item(o).key);e(r)}),(function(e,n){t(n)}))}))})).catch(t)}));return s(t,e),t}function Re(e){return new f((function(n,t){e.transaction((function(r){r.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],(function(t,r){for(var o=[],i=0;i<r.rows.length;i++)o.push(r.rows.item(i).name);n({db:e,storeNames:o})}),(function(e,n){t(n)}))}),(function(e){t(e)}))}))}function De(e,n){n=v.apply(this,arguments);var t=this.config();(e="function"!=typeof e&&e||{}).name||(e.name=e.name||t.name,e.storeName=e.storeName||t.storeName);var r,o=this;return s(r=e.name?new f((function(n){var r;r=e.name===t.name?o._dbInfo.db:openDatabase(e.name,"","",0),e.storeName?n({db:r,storeNames:[e.storeName]}):n(Re(r))})).then((function(e){return new f((function(n,t){e.db.transaction((function(r){function o(e){return new f((function(n,t){r.executeSql("DROP TABLE IF EXISTS "+e,[],(function(){n()}),(function(e,n){t(n)}))}))}for(var i=[],a=0,u=e.storeNames.length;a<u;a++)i.push(o(e.storeNames[a]));f.all(i).then((function(){n()})).catch((function(e){t(e)}))}),(function(e){t(e)}))}))})):f.reject("Invalid arguments"),n),r}var ke={_driver:"webSQLStorage",_initStorage:ge,_support:X(),iterate:Ie,getItem:we,setItem:Ee,removeItem:xe,clear:je,length:Ne,key:Oe,keys:Ae,dropInstance:De};function Be(){try{return"undefined"!=typeof localStorage&&"setItem"in localStorage&&!!localStorage.setItem}catch(e){return!1}}function Te(e,n){var t=e.name+"/";return e.storeName!==n.storeName&&(t+=e.storeName+"/"),t}function Ce(){var e="_localforage_support_test";try{return localStorage.setItem(e,!0),localStorage.removeItem(e),!1}catch(e){return!0}}function Fe(){return!Ce()||localStorage.length>0}function Pe(e){var n=this,t={};if(e)for(var r in e)t[r]=e[r];return t.keyPrefix=Te(e,n._defaultConfig),Fe()?(n._dbInfo=t,t.serializer=be,f.resolve()):f.reject()}function Le(e){var n=this,t=n.ready().then((function(){for(var e=n._dbInfo.keyPrefix,t=localStorage.length-1;t>=0;t--){var r=localStorage.key(t);0===r.indexOf(e)&&localStorage.removeItem(r)}}));return s(t,e),t}function Me(e,n){var t=this;e=d(e);var r=t.ready().then((function(){var n=t._dbInfo,r=localStorage.getItem(n.keyPrefix+e);return r&&(r=n.serializer.deserialize(r)),r}));return s(r,n),r}function ze(e,n){var t=this,r=t.ready().then((function(){for(var n=t._dbInfo,r=n.keyPrefix,o=r.length,i=localStorage.length,a=1,u=0;u<i;u++){var c=localStorage.key(u);if(0===c.indexOf(r)){var f=localStorage.getItem(c);if(f&&(f=n.serializer.deserialize(f)),void 0!==(f=e(f,c.substring(o),a++)))return f}}}));return s(r,n),r}function Ue(e,n){var t=this,r=t.ready().then((function(){var n,r=t._dbInfo;try{n=localStorage.key(e)}catch(e){n=null}return n&&(n=n.substring(r.keyPrefix.length)),n}));return s(r,n),r}function qe(e){var n=this,t=n.ready().then((function(){for(var e=n._dbInfo,t=localStorage.length,r=[],o=0;o<t;o++){var i=localStorage.key(o);0===i.indexOf(e.keyPrefix)&&r.push(i.substring(e.keyPrefix.length))}return r}));return s(t,e),t}function We(e){var n=this.keys().then((function(e){return e.length}));return s(n,e),n}function Ke(e,n){var t=this;e=d(e);var r=t.ready().then((function(){var n=t._dbInfo;localStorage.removeItem(n.keyPrefix+e)}));return s(r,n),r}function He(e,n,t){var r=this;e=d(e);var o=r.ready().then((function(){void 0===n&&(n=null);var t=n;return new f((function(o,i){var a=r._dbInfo;a.serializer.serialize(n,(function(n,r){if(r)i(r);else try{localStorage.setItem(a.keyPrefix+e,n),o(t)}catch(e){"QuotaExceededError"!==e.name&&"NS_ERROR_DOM_QUOTA_REACHED"!==e.name||i(e),i(e)}}))}))}));return s(o,t),o}function Je(e,n){if(n=v.apply(this,arguments),!(e="function"!=typeof e&&e||{}).name){var t=this.config();e.name=e.name||t.name,e.storeName=e.storeName||t.storeName}var r,o=this;return s(r=e.name?new f((function(n){e.storeName?n(Te(e,o._defaultConfig)):n(e.name+"/")})).then((function(e){for(var n=localStorage.length-1;n>=0;n--){var t=localStorage.key(n);0===t.indexOf(e)&&localStorage.removeItem(t)}})):f.reject("Invalid arguments"),n),r}var Qe={_driver:"localStorageWrapper",_initStorage:Pe,_support:Be(),iterate:ze,getItem:Me,setItem:He,removeItem:Ke,clear:Le,length:We,key:Ue,keys:qe,dropInstance:Je},Xe=function(e,n){return e===n||"number"==typeof e&&"number"==typeof n&&isNaN(e)&&isNaN(n)},Ge=function(e,n){for(var t=e.length,r=0;r<t;){if(Xe(e[r],n))return!0;r++}return!1},Ve=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},Ye={},Ze={},$e={INDEXEDDB:Q,WEBSQL:ke,LOCALSTORAGE:Qe},en=[$e.INDEXEDDB._driver,$e.WEBSQL._driver,$e.LOCALSTORAGE._driver],nn=["dropInstance"],tn=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(nn),rn={description:"",driver:en.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function on(e,n){e[n]=function(){var t=arguments;return e.ready().then((function(){return e[n].apply(e,t)}))}}function an(){for(var e=1;e<arguments.length;e++){var n=arguments[e];if(n)for(var t in n)n.hasOwnProperty(t)&&(Ve(n[t])?arguments[0][t]=n[t].slice():arguments[0][t]=n[t])}return arguments[0]}var un=new(function(){function e(n){for(var t in o(this,e),$e)if($e.hasOwnProperty(t)){var r=$e[t],i=r._driver;this[t]=i,Ye[i]||this.defineDriver(r)}this._defaultConfig=an({},rn),this._config=an({},this._defaultConfig,n),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch((function(){}))}return e.prototype.config=function(e){if("object"===(void 0===e?"undefined":r(e))){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var n in e){if("storeName"===n&&(e[n]=e[n].replace(/\W/g,"_")),"version"===n&&"number"!=typeof e[n])return new Error("Database version must be a number.");this._config[n]=e[n]}return!("driver"in e)||!e.driver||this.setDriver(this._config.driver)}return"string"==typeof e?this._config[e]:this._config},e.prototype.defineDriver=function(e,n,t){var r=new f((function(n,t){try{var r=e._driver,o=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!e._driver)return void t(o);for(var i=tn.concat("_initStorage"),a=0,u=i.length;a<u;a++){var c=i[a];if((!Ge(nn,c)||e[c])&&"function"!=typeof e[c])return void t(o)}!function(){for(var n=function(e){return function(){var n=new Error("Method "+e+" is not implemented by the current driver"),t=f.reject(n);return s(t,arguments[arguments.length-1]),t}},t=0,r=nn.length;t<r;t++){var o=nn[t];e[o]||(e[o]=n(o))}}();var l=function(t){Ye[r]&&console.info("Redefining LocalForage driver: "+r),Ye[r]=e,Ze[r]=t,n()};"_support"in e?e._support&&"function"==typeof e._support?e._support().then(l,t):l(!!e._support):l(!0)}catch(e){t(e)}}));return l(r,n,t),r},e.prototype.driver=function(){return this._driver||null},e.prototype.getDriver=function(e,n,t){var r=Ye[e]?f.resolve(Ye[e]):f.reject(new Error("Driver not found."));return l(r,n,t),r},e.prototype.getSerializer=function(e){var n=f.resolve(be);return l(n,e),n},e.prototype.ready=function(e){var n=this,t=n._driverSet.then((function(){return null===n._ready&&(n._ready=n._initDriver()),n._ready}));return l(t,e,e),t},e.prototype.setDriver=function(e,n,t){var r=this;Ve(e)||(e=[e]);var o=this._getSupportedDrivers(e);function i(){r._config.driver=r.driver()}function a(e){return r._extend(e),i(),r._ready=r._initStorage(r._config),r._ready}function u(e){return function(){var n=0;function t(){for(;n<e.length;){var o=e[n];return n++,r._dbInfo=null,r._ready=null,r.getDriver(o).then(a).catch(t)}i();var u=new Error("No available storage method found.");return r._driverSet=f.reject(u),r._driverSet}return t()}}var c=null!==this._driverSet?this._driverSet.catch((function(){return f.resolve()})):f.resolve();return this._driverSet=c.then((function(){var e=o[0];return r._dbInfo=null,r._ready=null,r.getDriver(e).then((function(e){r._driver=e._driver,i(),r._wrapLibraryMethodsWithReady(),r._initDriver=u(o)}))})).catch((function(){i();var e=new Error("No available storage method found.");return r._driverSet=f.reject(e),r._driverSet})),l(this._driverSet,n,t),this._driverSet},e.prototype.supports=function(e){return!!Ze[e]},e.prototype._extend=function(e){an(this,e)},e.prototype._getSupportedDrivers=function(e){for(var n=[],t=0,r=e.length;t<r;t++){var o=e[t];this.supports(o)&&n.push(o)}return n},e.prototype._wrapLibraryMethodsWithReady=function(){for(var e=0,n=tn.length;e<n;e++)on(this,tn[e])},e.prototype.createInstance=function(n){return new e(n)},e}());n.exports=un},{3:3}]},{},[4])(4)}).call(this,t(18))},function(e,n){e.exports=function(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}},,,,,function(e,n){function t(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(n)}e.exports=t},function(e,n){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,n){e.exports=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}},function(e,n,t){var r=t(14),o=t(26);function i(n,t,a){return o()?e.exports=i=Reflect.construct:e.exports=i=function(e,n,t){var o=[null];o.push.apply(o,n);var i=new(Function.bind.apply(e,o));return t&&r(i,t.prototype),i},i.apply(null,arguments)}e.exports=i},function(e,n){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},function(e,n,t){var r=t(17);e.exports=function(e){if(Array.isArray(e))return r(e)}},function(e,n){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},function(e,n,t){var r=t(17);e.exports=function(e,n){if(e){if("string"==typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}},function(e,n){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}}]]);