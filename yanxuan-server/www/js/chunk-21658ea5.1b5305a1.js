(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21658ea5","chunk-8cb3a64c"],{"176c":function(t,e,n){},"255a":function(t,e,n){"use strict";var a=n("176c"),i=n.n(a);i.a},"562f":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page subpage"},[n("app-header",{attrs:{title:t.name}}),n("home-menu-content",{staticClass:"cate-content",attrs:{id:t.id,name:t.name}})],1)},i=[],c=n("5b49"),s={components:{"home-menu-content":c["default"]},props:["id","name"]},o=s,r=(n("255a"),n("2877")),u=Object(r["a"])(o,a,i,!1,null,"0f3d0500",null);u.options.__file="category-list.vue";e["default"]=u.exports},"5b49":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("scroller",{staticClass:"menu"},[n("div",{staticClass:"banner"},[n("img",{attrs:{src:t.categoryBanner}})]),t._l(t.categoryList,function(e){return n("div",{key:e.info.title,staticClass:"category-list"},[n("h3",[t._v(t._s(e.info.title))]),n("h6",[t._v(t._s(e.info.subTitle))]),n("item-list",{attrs:{list:e.items}})],1)})],2)},i=[],c=n("cebc"),s=n("2f62"),o={props:["id","name"],computed:Object(c["a"])({},Object(s["d"])({categoryBanner:function(t){return t.home.categoryBanner},categoryList:function(t){return t.home.categoryList}})),watch:{id:{handler:function(t){t&&this.$store.dispatch("home/getCategoryList",{id:t})},immediate:!0}}},r=o,u=(n("5fea"),n("2877")),l=Object(u["a"])(r,a,i,!1,null,"3cb8f5ba",null);l.options.__file="home-menu-content.vue";e["default"]=l.exports},"5fea":function(t,e,n){"use strict";var a=n("a661"),i=n.n(a);i.a},a661:function(t,e,n){}}]);
//# sourceMappingURL=chunk-21658ea5.1b5305a1.js.map