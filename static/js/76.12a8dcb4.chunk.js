"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{687:function(A,e,t){var a=t(861),r=t(757),n=t.n(r),c=t(243),s="254171825383f2a3466dbbca546aa0a7",u="https://api.themoviedb.org/3/trending/all/day",p="https://api.themoviedb.org/3/search/movie",i="https://api.themoviedb.org/3/movie";function o(){return(o=(0,a.Z)(n().mark((function A(){var e,t;return n().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return c.Z.defaults.params={api_key:s,language:"en-US"},A.prev=1,A.next=4,c.Z.get("".concat(u));case 4:return e=A.sent,t=e.data,A.abrupt("return",t.results);case 9:A.prev=9,A.t0=A.catch(1);case 11:case"end":return A.stop()}}),A,null,[[1,9]])})))).apply(this,arguments)}function l(){return(l=(0,a.Z)(n().mark((function A(e){var t,a;return n().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return c.Z.defaults.params={api_key:s,language:"en-US",query:"".concat(e)},A.prev=1,A.next=4,c.Z.get("".concat(p));case 4:return t=A.sent,a=t.data,A.abrupt("return",a.results);case 9:A.prev=9,A.t0=A.catch(1);case 11:case"end":return A.stop()}}),A,null,[[1,9]])})))).apply(this,arguments)}function f(){return(f=(0,a.Z)(n().mark((function A(e){var t,a;return n().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return c.Z.defaults.params={api_key:s,language:"en-US"},A.prev=1,A.next=4,c.Z.get("".concat(i,"/").concat(e));case 4:return t=A.sent,a=t.data,A.abrupt("return",a);case 9:A.prev=9,A.t0=A.catch(1);case 11:case"end":return A.stop()}}),A,null,[[1,9]])})))).apply(this,arguments)}function h(){return(h=(0,a.Z)(n().mark((function A(e){var t,a;return n().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return c.Z.defaults.params={api_key:s,language:"en-US"},A.prev=1,A.next=4,c.Z.get("".concat(i,"/").concat(e,"/credits"));case 4:return t=A.sent,a=t.data,A.abrupt("return",a.cast);case 9:A.prev=9,A.t0=A.catch(1);case 11:case"end":return A.stop()}}),A,null,[[1,9]])})))).apply(this,arguments)}function v(){return(v=(0,a.Z)(n().mark((function A(e){var t,a;return n().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return c.Z.defaults.params={api_key:s,language:"en-US",page:1},A.prev=1,A.next=4,c.Z.get("".concat(i,"/").concat(e,"/reviews"));case 4:return t=A.sent,a=t.data,A.abrupt("return",a.results);case 9:A.prev=9,A.t0=A.catch(1);case 11:case"end":return A.stop()}}),A,null,[[1,9]])})))).apply(this,arguments)}var m={popular:function(){return o.apply(this,arguments)},movieById:function(A){return f.apply(this,arguments)},getReviews:function(A){return v.apply(this,arguments)},getCast:function(A){return h.apply(this,arguments)},getMovieByName:function(A){return l.apply(this,arguments)}};e.Z=m},76:function(A,e,t){t.r(e),t.d(e,{default:function(){return g}});var a=t(861),r=t(439),n=t(757),c=t.n(n),s=t(791),u=t(689),p=t(687),i="Cast_Cast_container__TLSlV",o="Cast_Cast_title__HvTvp",l="Cast_Cast_list__M6Kz+",f="Cast_Cast_item__GI-Mr",h="Cast_Cast_info__pmLyx",v=t(805),m=t(184);function g(){var A=(0,u.UO)().movieId,e=(0,s.useState)(null),t=(0,r.Z)(e,2),n=t[0],g=t[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,a.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.Z.getCast(A);case 3:t=e.sent,g(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[A]),(0,m.jsx)("div",{className:i,children:n&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("h1",{className:o,children:"Cast"}),(0,m.jsx)("ul",{className:l,children:n.map((function(A){return(0,m.jsxs)("li",{className:f,children:[(0,m.jsxs)("p",{className:h,children:["Actor: ",A.name]}),(0,m.jsxs)("p",{className:h,children:["Role: ",A.character]}),(0,m.jsx)("img",{src:A.profile_path?"https://image.tmdb.org/t/p/w500".concat(A.profile_path):v,alt:"",width:200,height:300})]},A.id)}))})]})})}},805:function(A){A.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIIAggMBIgACEQEDEQH/xAAbAAEBAQADAQEAAAAAAAAAAAAABAMCBQYBB//EADMQAAICAQEFBAgGAwAAAAAAAAABAgMEEQUSITFREzJBcQYUQmGBobHwInORksHRJDM1/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD9kAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA42TjXBym9EgOR8lOEe9KMfNkalfmcYPsquviznDAoXeUpvrJhG8ba5d2yD8pI5k8sHHfsaeTZm6cjG40TdkPGEgLAZY+RDIjrHg1zi/A1CgAAAAAAAAAAAAARTXrmU4P/VVz08WV2S3K5S6Jsn2bHTGUnzk22EZ/jwZvnLHk/wBpyy9qYeG4LIu3d9axe62pL9DpvSDaeRgbXrUJOdLpW/TJ/hlq3r8feWxVNuNVZZT22FdpOMbI6uD+/wBQNo7e2Y2kspceHdf9HZHlcrEovylhX4lOPZam8bJx1pCz3NGODmyjHHqszsz1yOVGuVTm9zd3kmgPSZcHTZHJqXFPSa6orjJTipReqa1Qsip1yg+TWhNs2TljJP2W0BUAAoAAAAAAAAAAOF0d6mcesX9DLZ8tcSHu1XzKCLHfq2VOiXCE3rBsI816Yf8AUh+RH6yKMLIvvx8a7ASttor7HJxW+/Bcmvmd5nbIw8+5XZMJSmo7uqm1w+2YQ9HdnQkpQhbGS5ONsk0AioxjVZbTN47kpxjZFqVUl9/E87fi3Y236Z26ON2TGcJx5STlr/J6yjZ1NE5TjO+bkt1qy6U018TC+iNEoxth2mPvqcesJJ8GgOybSTb5Ik2Yv8dt+1JsZtydUa6WpTt4LToUU19lVGC8EBzAAUAAAAAAAAAAAyyaI317r4NcYvoagCOGVOiXZ5cWuli5MqhOE1rCSkvcz7KMZxcZpNPwaJp4FEnqk4+TAqbUVq2kiS/LretVUe2nLhouQWz6NeLnLzZTXVXUtK4KIRNhYipW/Yl2j+RWAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/2Q=="}}]);
//# sourceMappingURL=76.12a8dcb4.chunk.js.map