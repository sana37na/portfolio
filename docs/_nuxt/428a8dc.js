(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{288:function(t,e,n){"use strict";n.r(e);var r=n(9),c=(n(57),n(244)),o=n.n(c),l={router:{base:"/portfolio/"},data:function(){return{category:[]}},asyncData:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){var e,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("https://portfolio37.microcms.io/api/v1/category",{headers:{"X-API-KEY":"95daf368-6440-40f6-b481-9563a241e518"}});case 2:return e=t.sent,data=e.data,t.abrupt("return",{category:data.contents});case 6:case"end":return t.stop()}}),t)})))()}},_=n(17),component=Object(_.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"category"},[n("nav",{staticClass:"select_navigation"},[n("ul",{staticClass:"select_navigation__list"},t._l(t.category,(function(select,e){return n("li",{key:e,staticClass:"select_navigation__item"},[n("span",{staticClass:"select_navigation__button"},[t._v(t._s(select.name))])])})),0)])])}),[],!1,null,null,null);e.default=component.exports}}]);