!function(t){function e(e){for(var n,a,u=e[0],i=e[1],c=e[2],l=0,d=[];l<u.length;l++)a=u[l],o[a]&&d.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);for(f&&f(e);d.length;)d.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,a=1;a<r.length;a++){var i=r[a];0!==o[i]&&(n=!1)}n&&(s.splice(e--,1),t=u(u.s=r[0]))}return t}var n={},a={1:0},o={1:0},s=[];function u(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(t){var e=[];a[t]?e.push(a[t]):0!==a[t]&&{2:1,3:1,5:1,6:1,7:1}[t]&&e.push(a[t]=new Promise(function(e,r){for(var n="assets/css/"+t+".styles."+{2:"91ecf293",3:"edb15ea3",4:"7dc42060",5:"6d1135da",6:"a54e7979",7:"35a53a2b",8:"73c367d2",9:"edcc371d",10:"ddbb22eb"}[t]+".css",a=u.p+n,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var i=(l=o[s]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(i===n||i===a))return e()}var c=document.getElementsByTagName("style");for(s=0;s<c.length;s++){var l;if((i=(l=c[s]).getAttribute("data-href"))===n||i===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||a,o=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");o.request=n,r(o)},f.href=a,document.getElementsByTagName("head")[0].appendChild(f)}).then(function(){a[t]=0}));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise(function(e,n){r=o[t]=[e,n]});e.push(r[2]=n);var s,i=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=function(t){return u.p+"assets/js/"+({}[t]||t)+"."+{2:"91ecf293",3:"edb15ea3",4:"7dc42060",5:"6d1135da",6:"a54e7979",7:"35a53a2b",8:"73c367d2",9:"edcc371d",10:"ddbb22eb"}[t]+".js"}(t),s=function(e){c.onerror=c.onload=null,clearTimeout(l);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+n+": "+a+")");s.type=n,s.request=a,r[1](s)}o[t]=void 0}};var l=setTimeout(function(){s({type:"timeout",target:c})},12e4);c.onerror=c.onload=s,i.appendChild(c)}return Promise.all(e)},u.m=t,u.c=n,u.d=function(t,e,r){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},u.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(r,n,function(e){return t[e]}.bind(null,n));return r},u.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var f=c;s.push([82,11,0]),r()}({81:function(t,e,r){"use strict";r(144),r(154),r(163),r(164),r(31),r(32),r(79),r(78),r(167),r(63),r(153),r(44),r(155);var n=r(150),a=r.n(n),o=r(58),s=r.n(o),u=r(151),i=r(30),c={props:{category:{type:String,default:""}},computed:{isAngular:function(){return"angular"===this.category.toLowerCase()},isVue:function(){return"vue"===this.category.toLowerCase()},isCode:function(){return"code"===this.category.toLowerCase()}}},l=r(10),f=Object(l.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return this.isAngular?e("i",{staticClass:"fab fa-angular fa-fw fa-2x",attrs:{color:"red"}}):this.isVue?e("i",{staticClass:"fab fa-vuejs fa-fw fa-2x",attrs:{color:"teal"}}):this.isCode?e("i",{staticClass:"fa fa-code fa-fw fa-2x",attrs:{color:"gray"}}):this._e()},[],!1,null,null,null);f.options.__file="CategoryIcon.vue";var d=f.exports,p={computed:{$posts:function(){return this.$site.pages.filter(function(t){return!new RegExp("^/posts/$").test(t.regularPath)&&(!!new RegExp("^/posts/").test(t.regularPath)||void 0)}).sort(function(t,e){return t.frontmatter.date<e.frontmatter.date}).map(function(t){return t.createdAt=s()(t.frontmatter.date,"DD.MM.YYYY"),t.updatedAt=t.lastUpdated?s()(t.lastUpdated,"DD.MM.YYYY"):null,t.tags=t.frontmatter.tags||[],t.category=t.frontmatter.category||null,t})},$postCategories:function(){var t=[],e=!0,r=!1,n=void 0;try{for(var a,o=this.$posts[Symbol.iterator]();!(e=(a=o.next()).done);e=!0){var s=a.value;s.category&&(t=t.concat(s.category))}}catch(t){r=!0,n=t}finally{try{e||null==o.return||o.return()}finally{if(r)throw n}}return Array.from(new Set(t))},$postTags:function(){var t=[],e=!0,r=!1,n=void 0;try{for(var a,o=this.$posts[Symbol.iterator]();!(e=(a=o.next()).done);e=!0){var s=a.value;t=t.concat(s.tags)}}catch(t){r=!0,n=t}finally{try{e||null==o.return||o.return()}finally{if(r)throw n}}return Array.from(new Set(t))}}};e.a=function(t){var e=t.Vue;t.options,t.router,t.siteData;e.mixin(p),e.component("CategoryIcon",d),e.use(a.a),u.a.library.add(i.d,i.a,i.c,i.b)}},82:function(t,e,r){t.exports=r(116)}});