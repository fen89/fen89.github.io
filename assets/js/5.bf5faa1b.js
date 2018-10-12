(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{156:function(t,e,n){},157:function(t,e,n){"use strict";var a={props:{post:{type:Object,required:!0},featured:{type:Boolean,default:!1}},computed:{aspectRatio:function(){return featured?"2.75":"10"},postFeaturedImageHeight:function(){return this.featured?"50vh":"300px"},postFeaturedImage:function(){return this.frontmatter.image||"https://picsum.photos/g/600/400/?random"},postDescription:function(){return this.frontmatter.description},frontmatter:function(){return this.post.frontmatter},postDate:function(){var t=this.post.frontmatter.date;return new Date(t).toLocaleDateString("de-de",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}}},s=(n(158),n(29)),r=Object(s.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"my-2 post-preview",attrs:{hover:"",to:t.post.path}},[n("v-img",{staticClass:"white--text",attrs:{src:t.$withBase(t.postFeaturedImage),"aspect-ratio":"2.75"}}),t._v(" "),n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("h3",{staticClass:"headline mb-0"},[t._v(t._s(t.post.title))]),t._v(" "),n("div",[t._v(t._s(t.postDescription))])])])],1)},[],!1,null,null,null);r.options.__file="PostListItem.vue";e.a=r.exports},158:function(t,e,n){"use strict";var a=n(156);n.n(a).a},160:function(t,e,n){},161:function(t,e,n){},163:function(t,e,n){"use strict";n(59);var a=n(38);n(150),n(153),n(40),n(30),n(31),n(60);function s(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}n(154);var r={props:{item:{required:!0}},computed:{link:function(){return this.item.link},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some(function(e){return e===t.link}):"/"===this.link}}},i=n(29),o=Object(i.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("v-btn",{attrs:{to:this.link,flat:""}},[this._v("\n        "+this._s(this.item.text)+"\n")])},[],!1,null,null,null);o.options.__file="TheHeaderNavLink.vue";var l={components:{TheHeaderNavLink:o.exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,s=this.$router.options.routes,r=this.$site.themeConfig.locales||{},i={text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(e).map(function(a){var i,o=e[a],l=r[a]&&r[a].label||o.lang;return o.lang===t.$lang?i=n:(i=n.replace(t.$localeConfig.path,a),s.some(function(t){return t.path===i})||(i=a)),{text:l,link:i}})};return Object(a.a)(this.userNav).concat([i])}return this.userNav},userLinks:function(){return(this.nav||[]).map(function(t){return Object.assign(s(t),{items:(t.items||[]).map(s)})})}}},c=Object(i.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return e("v-toolbar-items",{staticClass:"hidden-sm-and-down"},this._l(this.userLinks,function(t,n){return e("TheHeaderNavLink",{key:"link-"+n,attrs:{item:t}})}))},[],!1,null,null,null);c.options.__file="TheHeaderNavLinks.vue";var u=c.exports,h={props:{heading:{default:"92 % chaos"},subheading:{default:"just another dev blog"}},data:function(){return{portraitImage:"assets/img/avatar.jpg",backgroundImage:"assets/img/header.jpeg"}},mounted:function(){}},p=(n(167),Object(i.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"hero main-hero slanted"},[n("v-parallax",{attrs:{src:t.backgroundImage,height:"600"}},[n("v-layout",{attrs:{column:"","align-center":"","justify-center":""}},[n("v-avatar",{attrs:{size:"200px"}},[n("img",{attrs:{src:t.portraitImage,alt:"Me, myself and I"}})]),t._v(" "),n("h1",{staticClass:"white--text p-2 display-1 text-xs-center"},[t._v(t._s(t.heading))]),t._v(" "),n("div",{staticClass:"subheading"},[t._v(t._s(t.subheading))])],1)],1)],1)},[],!1,null,null,null));p.options.__file="TheHeaderBanner.vue";var v={components:{TheHeaderNavLinks:u,TheHeaderBanner:p.exports},data:function(){return{drawer:null,title:"92 % chaos",links:[{title:"Home"}]}},computed:{isHome:function(){return"/"===this.$page.path}}},d=(n(169),Object(i.a)(v,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-toolbar",{attrs:{"clipped-left":t.$vuetify.breakpoint.lgAndUp,dark:"",app:"",fixed:"",color:"teal darken-3"}},[n("v-toolbar-title",{staticClass:"navigation-title ml-0 pl-3"},[n("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),n("span",{staticClass:"hidden-sm-and-down",domProps:{textContent:t._s(t.title)}})],1),t._v(" "),n("v-spacer"),t._v(" "),n("TheHeaderNavLinks",{attrs:{links:t.links}})],1),t._v(" "),t.isHome?n("TheHeaderBanner"):t._e()],1)},[],!1,null,"2d6aa468",null));d.options.__file="TheHeader.vue";e.a=d.exports},164:function(t,e,n){"use strict";var a={name:"Footer",computed:{copyright:function(){return"92-prozent-chaos.de"},year:function(){return(new Date).getFullYear()}}},s=n(29),r=Object(s.a)(a,function(){var t=this.$createElement,e=this._self._c||t;return e("v-footer",{attrs:{dark:"",height:"auto"}},[e("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[e("v-card-actions",{staticClass:"grey darken-3 justify-center"},[this._v("\n        © "+this._s(this.year)+" — "),e("span",{staticClass:"pl-1 font-weight-bold"},[this._v(this._s(this.copyright))])])],1)],1)},[],!1,null,null,null);r.options.__file="TheFooter.vue";e.a=r.exports},167:function(t,e,n){"use strict";var a=n(160);n.n(a).a},169:function(t,e,n){"use strict";var a=n(161);n.n(a).a},64:function(t,e,n){"use strict";n.r(e);var a=n(56),s=n.n(a),r=n(152),i=n.n(r),o=n(163),l=n(164),c=n(157),u={components:{TheHeader:o.a,TheFooter:l.a,PostListItem:c.a},computed:{title:function(){return this.$page.title},content:function(){return this.$page},frontmatter:function(){return this.$page.frontmatter},postFeaturedImage:function(){return this.frontmatter.image||"https://picsum.photos/g/600/400/?random"}},filters:{formatDate:function(t){return s()(t,"dddd, DD.MM.YYYY",{locale:i.a})}}},h=n(29),p=Object(h.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{light:""}},[n("v-container",[n("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[n("v-flex",[n("v-card",{staticClass:"my-1",attrs:{height:"100%"}},[n("v-img",{staticClass:"white--text",attrs:{height:"50vh",src:t.$withBase(t.postFeaturedImage)}}),t._v(" "),n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("h3",{staticClass:"headline mb-0"},[t._v(t._s(t.frontmatter.title))]),t._v(" "),n("span",{staticClass:"grey--text"},[t._v(t._s(t._f("formatDate")(t.frontmatter.date)))])])]),t._v(" "),n("v-card-text",[n("v-chip",{attrs:{label:"",color:"red","text-color":"white"}},[t._v(t._s(t.content.category))]),t._v(" "),n("Content")],1)],1)],1)],1)],1)],1)},[],!1,null,null,null);p.options.__file="Post.vue";e.default=p.exports}}]);