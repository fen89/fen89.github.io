(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{167:function(t,e,s){},168:function(t,e,s){"use strict";var r={props:{post:{type:Object,required:!0},featured:{type:Boolean,default:!1}},computed:{aspectRatio:function(){return featured?"2.75":"10"},postFeaturedImageHeight:function(){return this.featured?"50vh":"300px"},postFeaturedImage:function(){return this.frontmatter.image||"https://picsum.photos/g/600/400/?random"},postDescription:function(){return this.frontmatter.description},frontmatter:function(){return this.post.frontmatter},postDate:function(){var t=this.post.frontmatter.date;return new Date(t).toLocaleDateString("de-de",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}}},a=(s(169),s(10)),n=Object(a.a)(r,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{staticClass:"my-2 post-preview",attrs:{hover:"",to:t.post.path}},[s("v-img",{staticClass:"white--text",attrs:{src:t.$withBase(t.postFeaturedImage),"aspect-ratio":"2.75"}}),t._v(" "),s("v-card-title",{attrs:{"primary-title":""}},[s("CategoryIcon",{staticClass:"category-icon",attrs:{category:t.post.category}}),t._v(" "),s("div",[s("h3",{staticClass:"headline mb-0",staticStyle:{display:"inline-block"}},[t._v("\n        "+t._s(t.post.title)+"\n      ")]),t._v(" "),s("div",[t._v(t._s(t.postDescription))])])],1)],1)},[],!1,null,"1c5e3715",null);n.options.__file="PostListItem.vue";e.a=n.exports},169:function(t,e,s){"use strict";var r=s(167);s.n(r).a},174:function(t,e,s){"use strict";s(94),s(44),s(62);var r={name:"post-list",components:{PostListItem:s(168).a},props:{posts:{type:Array,required:!1,default:null}},computed:{listPosts:function(){return this.posts||this.$posts},postsByDate:function(){var t=this.listPosts.filter(function(t){return t.frontmatter.date}),e=this.listPosts.filter(function(t){return!t.frontmatter.date}),s=t.map(function(t,e){return{index:e,date:+new Date(t.frontmatter.date)}});return s.sort(function(t,e){return t.date>e.date?-1:t.date<e.date?1:0}),s.map(function(e){return t[e.index]}).concat(e)},latestPost:function(){return this.postsByDate.shift()},otherPosts:function(){return this.postsByDate.slice(0,this.listPosts.length)}},methods:{sortByDate:function(t){t.sort(function(t,e){t.date})}}},a=s(10),n=Object(a.a)(r,function(){var t,e=this,s=e.$createElement,r=e._self._c||s;return r("v-container",{attrs:{fluid:"","grid-list-md":""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",e._b({},"v-flex",(t={},t["xs12 md12 lg12"]=!0,t),!1),[r("PostListItem",{attrs:{featured:!0,post:e.latestPost}})],1)],1),e._v(" "),r("v-layout",{attrs:{row:"",wrap:""}},e._l(e.otherPosts,function(t){return r("v-flex",e._b({key:t.path},"v-flex",((s={})["xs12 md6 lg4"]=!0,s),!1),[r("PostListItem",{attrs:{post:t}})],1);var s}))],1)},[],!1,null,null,null);n.options.__file="PostList.vue";e.a=n.exports},63:function(t,e,s){"use strict";s.r(e);var r={},a=s(10),n=Object(a.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-btn",{staticClass:"white--text",attrs:{large:"",color:"red"}},[e("i",{staticClass:"fab fa-angular fa-fw fa-2x"}),this._v(" Angular\n    ")]),this._v(" "),e("v-btn",{staticClass:"white--text",attrs:{large:"",color:"teal"}},[e("i",{staticClass:"fab fa-vuejs fa-fw fa-2x"}),this._v(" Vue\n    ")])],1)},[],!1,null,null,null);n.options.__file="TheCategoryFilter.vue";var o={name:"Home",components:{TheCategoryFilter:n.exports,PostList:s(174).a}},i=Object(a.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",{attrs:{light:""}},[e("v-container",[e("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[e("Content")],1),this._v(" "),e("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[e("PostList")],1)],1)],1)},[],!1,null,null,null);i.options.__file="Home.vue";e.default=i.exports}}]);