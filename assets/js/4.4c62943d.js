(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{157:function(t,e,r){},160:function(t,e,r){"use strict";var a={props:{article:Object,highlightEveryThird:Boolean},computed:{tags:function(){return this.article.frontmatter.tags.join(", ")},backgroundImage:function(){return this.article.frontmatter.image||"/covers/header.jpeg"},backgroundImageStyle:function(){return{backgroundImage:"url('".concat(this.$withBase(this.backgroundImage),"')")}}}},s=(r(161),r(7)),i=Object(s.a)(a,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("router-link",{staticClass:"article-card relative flex flex-col rounded-lg shadow-xl hover:shadow-2xl min-h-article-card border-0 z-article-card",class:{"highlight-every-third":t.highlightEveryThird},attrs:{to:t.article.path}},[r("figure",[r("div",{staticClass:"h-48 rounded-t-lg bg-no-repeat bg-cover bg-center",style:t.backgroundImageStyle})]),t._v(" "),r("main",{staticClass:"flex flex-1 flex-col bg-white rounded-b-lg p-6"},[r("header",[r("div",{staticClass:"uppercase tracking-wide text-gray-600 text-sm font-semibold",domProps:{textContent:t._s(t.tags)}}),t._v(" "),r("div",{staticClass:"font-sans text-2xl",domProps:{textContent:t._s(t.article.title)}})]),t._v(" "),r("section",{staticClass:"font-content text-lg text-gray-600",domProps:{textContent:t._s(t.article.frontmatter.description)}})])])},[],!1,null,null,null);e.a=i.exports},161:function(t,e,r){"use strict";var a=r(157);r.n(a).a},170:function(t,e,r){"use strict";r.r(e);var a=r(160),s={props:{articles:Array}},i=r(7),n=Object(i.a)(s,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",t._l(t.articles,function(e){return r("router-link",{key:e.key,staticClass:"block py-5 hover:bg-gray-100 border-b border-t border-transparent hover:border-gray-400 hover:text-black",attrs:{to:e.path}},[r("div",{staticClass:"container"},[r("div",{staticClass:"font-sans text-2xl mb-1",domProps:{textContent:t._s(e.title)}}),t._v(" "),r("div",{staticClass:"font-content text-lg text-gray-600",domProps:{textContent:t._s(e.frontmatter.description)}})])])}),1)},[],!1,null,null,null).exports,l={components:{ArticleCard:a.a,ArticleList:n},computed:{hasArticles:function(){return this.$articles.length>0},hasMoreArticles:function(){return this.$otherArticles.length>0}}},c=Object(i.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container lg:max-w-lg xl:max-w-xl mb-16 mb-16"},[t.hasArticles?r("div",{staticClass:"flex flex-wrap -mx-5"},t._l(t.$featuredArticles,function(t){return r("ArticleCard",{key:t.key,staticClass:"mx-5 mb-6 sm:mb-10",attrs:{article:t,"highlight-every-third":""}})}),1):r("div",{staticClass:"flex-grow-0"},[t._v("\n     Empty in here! Come back later...\n    ")])]),t._v(" "),t.hasMoreArticles?r("div",{staticClass:"container"},[r("h2",[t._v("More Articles")])]):t._e(),t._v(" "),r("ArticleList",{staticClass:"mb-12",attrs:{articles:t.$otherArticles}})],1)},[],!1,null,null,null);e.default=c.exports}}]);