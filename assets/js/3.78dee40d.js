(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{127:function(t,e,s){},129:function(t,e,s){"use strict";var r={props:{post:{type:Object,required:!0},featured:{type:Boolean,default:!1}},computed:{postFeaturedImageHeight:function(){return this.featured?"50vh":"300px"},postFeaturedImage:function(){return this.frontmatter.image||"https://picsum.photos/g/600/400/?random"},postDescription:function(){return this.frontmatter.description},frontmatter:function(){return this.post.frontmatter},postDate:function(){var t=this.post.frontmatter.date;return new Date(t).toLocaleDateString("de-de",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}}},a=(s(130),s(24)),n=Object(a.a)(r,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{staticClass:"my-2 post-preview",attrs:{hover:"",to:t.post.path,height:"100%"}},[s("v-img",{staticClass:"white--text",attrs:{height:t.postFeaturedImageHeight,src:t.$withBase(t.postFeaturedImage)}}),t._v(" "),s("v-card-title",{attrs:{"primary-title":""}},[s("h2",{staticClass:"headline"},[t._v(t._s(t.post.title))])]),t._v(" "),s("v-card-text",[s("span",{staticClass:"grey--text"},[t._v(t._s(t.postDate))])]),t._v(" "),s("v-card-text",[s("p",[t._v(t._s(t.postDescription))])]),t._v(" "),s("v-card-actions",{staticClass:"card-actions"},[s("v-btn",{staticClass:"red--text",attrs:{icon:""}},[s("v-icon",{attrs:{medium:""}},[t._v("fa-reddit")])],1),t._v(" "),s("v-btn",{staticClass:"light-blue--text",attrs:{icon:""}},[s("v-icon",{attrs:{medium:""}},[t._v("fa-twitter")])],1),t._v(" "),s("v-btn",{staticClass:"blue--text text--darken-4",attrs:{icon:""}},[s("v-icon",{attrs:{medium:""}},[t._v("fa-facebook")])],1),t._v(" "),s("v-spacer"),t._v(" "),s("v-btn",{staticClass:"blue--text",attrs:{to:t.post.path,flat:""}},[t._v("Weiterlesen")])],1)],1)},[],!1,null,null,null);n.options.__file="PostListItem.vue";e.a=n.exports},130:function(t,e,s){"use strict";var r=s(127);s.n(r).a},132:function(t,e,s){"use strict";s(71),s(72),s(78);var r={name:"post-list",components:{PostListItem:s(129).a},props:{posts:{type:Array,required:!1,default:null}},computed:{listPosts:function(){return this.posts||this.$posts},postsByDate:function(){var t=this.listPosts.filter(function(t){return t.frontmatter.date}),e=this.listPosts.filter(function(t){return!t.frontmatter.date}),s=t.map(function(t,e){return{index:e,date:+new Date(t.frontmatter.date)}});return s.sort(function(t,e){return t.date>e.date?-1:t.date<e.date?1:0}),s.map(function(e){return t[e.index]}).concat(e)},latestPost:function(){return this.postsByDate.shift()},otherPosts:function(){return this.postsByDate.slice(0,this.listPosts.length)}},methods:{sortByDate:function(t){t.sort(function(t,e){t.date})}}},a=s(24),n=Object(a.a)(r,function(){var t,e=this,s=e.$createElement,r=e._self._c||s;return r("v-container",{attrs:{fluid:"","grid-list-md":""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",e._b({},"v-flex",(t={},t["xs-12"]=!0,t),!1),[r("PostListItem",{attrs:{featured:!0,post:e.latestPost}})],1)],1),e._v(" "),r("v-layout",{attrs:{row:"",wrap:""}},e._l(e.otherPosts,function(t){return r("v-flex",e._b({key:t.path},"v-flex",((s={})["xs12 md6 lg4"]=!0,s),!1),[r("PostListItem",{attrs:{post:t}})],1);var s}))],1)},[],!1,null,null,null);n.options.__file="PostList.vue";e.a=n.exports},53:function(t,e,s){"use strict";s.r(e);var r={name:"Home",components:{PostList:s(132).a}},a=s(24),n=Object(a.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",{attrs:{light:""}},[e("v-container",[e("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[e("Content")],1),this._v(" "),e("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[e("PostList")],1)],1)],1)},[],!1,null,null,null);n.options.__file="Home.vue";e.default=n.exports}}]);