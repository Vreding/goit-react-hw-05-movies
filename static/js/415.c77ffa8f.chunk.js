"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{687:function(e,t,r){var n=r(861),a=r(757),c=r.n(a),u=r(243),s="254171825383f2a3466dbbca546aa0a7",i="https://api.themoviedb.org/3/trending/all/day",p="https://api.themoviedb.org/3/search/movie",o="https://api.themoviedb.org/3/movie";function l(){return(l=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u.Z.defaults.params={api_key:s,language:"en-US"},e.prev=1,e.next=4,u.Z.get("".concat(i));case 4:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function f(){return(f=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u.Z.defaults.params={api_key:s,language:"en-US",query:"".concat(t)},e.prev=1,e.next=4,u.Z.get("".concat(p));case 4:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function v(){return(v=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u.Z.defaults.params={api_key:s,language:"en-US"},e.prev=1,e.next=4,u.Z.get("".concat(o,"/").concat(t));case 4:return r=e.sent,n=r.data,e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function h(){return(h=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u.Z.defaults.params={api_key:s,language:"en-US"},e.prev=1,e.next=4,u.Z.get("".concat(o,"/").concat(t,"/credits"));case 4:return r=e.sent,n=r.data,e.abrupt("return",n.cast);case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u.Z.defaults.params={api_key:s,language:"en-US",page:1},e.prev=1,e.next=4,u.Z.get("".concat(o,"/").concat(t,"/reviews"));case 4:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}var m={popular:function(){return l.apply(this,arguments)},movieById:function(e){return v.apply(this,arguments)},getReviews:function(e){return d.apply(this,arguments)},getCast:function(e){return h.apply(this,arguments)},getMovieByName:function(e){return f.apply(this,arguments)}};t.Z=m},126:function(e,t,r){r.d(t,{e:function(){return c}});var n=r(87),a=r(184),c=function(e){var t=e.movies;return(0,a.jsx)(a.Fragment,{children:t.map((function(e){return(0,a.jsx)("li",{children:(0,a.jsx)(n.rU,{to:"/movies/".concat(e.id),children:e.title||e.name})},e.id)}))})}},415:function(e,t,r){r.r(t),r.d(t,{default:function(){return l}});var n=r(861),a=r(439),c=r(757),u=r.n(c),s=r(791),i=r(687),p=r(126),o=r(184);function l(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),r=t[0],c=t[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.popular();case 3:t=e.sent,c(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{children:"Trending Movies"}),(0,o.jsx)(p.e,{movies:r})]})}}}]);
//# sourceMappingURL=415.c77ffa8f.chunk.js.map