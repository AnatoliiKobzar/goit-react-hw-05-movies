"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[840],{3874:function(n,e,t){t.d(e,{W2:function(){return s},h4:function(){return p},rU:function(){return l}});var r,a,o,c=t(168),i=t(6444),u=t(1087),s=i.default.div(r||(r=(0,c.Z)(["\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 12px 24px 24px 24px;\n  background-color: #e0e0e0;\n"]))),p=i.default.header(a||(a=(0,c.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 8px 0;\n  margin-bottom: 16px;\n  border-bottom: 1px solid black;\n\n  > nav {\n    display: flex;\n  }\n"]))),l=(0,i.default)(u.OL)(o||(o=(0,c.Z)(["\n  padding: 8px 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n\n  &.active {\n    color: white;\n    background-color: orangered;\n  }\n"])))},8840:function(n,e,t){t.r(e),t.d(e,{default:function(){return b}});var r,a,o,c=t(9439),i=t(3874),u=t(2791),s=t(7689),p=t(3527),l=t(9093),d=t(168),f=t(6444),v=f.default.button(r||(r=(0,d.Z)(["\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  margin-bottom: 20px;\n  padding: 8px 16px;\n  border-radius: 4px;\n  color: black;\n  font-weight: 500;\n  background-color: orangered;\n"]))),x=f.default.div(a||(a=(0,d.Z)(["\n  display: flex;\n  gap: 16px;\n  margin: 16px;\n"]))),h=f.default.div(o||(o=(0,d.Z)(["\n  display: flex;\n  gap: 16px;\n"]))),m=t(9135),g=t(184),b=function(){var n,e,t,r,a=(0,u.useState)(null),o=(0,c.Z)(a,2),d=o[0],f=o[1],b=(0,s.UO)().movieId,w=(0,s.TH)(),k=(0,s.s0)();(0,u.useEffect)((function(){(0,p.fh)(b).then(f)}),[b]);return d?(0,g.jsxs)("div",{children:[(0,g.jsxs)(v,{type:"button",onClick:function(){var n,e;k(null!==(n=null===w||void 0===w||null===(e=w.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/")},children:[(0,g.jsx)(m.x_l,{}),"Go back"]}),(0,g.jsxs)(h,{children:[(0,g.jsx)("img",{src:d.poster_path?"https://image.tmdb.org/t/p/w300/"+d.poster_path:l,alt:d.title}),(0,g.jsxs)("div",{children:[(0,g.jsx)("h1",{children:d.title}),(0,g.jsx)("p",{children:d.overview}),(0,g.jsxs)(x,{children:[(0,g.jsx)(i.rU,{state:{from:null!==(n=null===w||void 0===w||null===(e=w.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/"},to:"cast",children:"Cast"}),(0,g.jsx)(i.rU,{state:{from:null!==(t=null===w||void 0===w||null===(r=w.state)||void 0===r?void 0:r.from)&&void 0!==t?t:"/"},to:"reviews",children:"Reviews"})]})]})]}),(0,g.jsx)(u.Suspense,{fallback:(0,g.jsx)("p",{children:"Loading..."}),children:(0,g.jsx)(s.j3,{})})]}):(0,g.jsx)("p",{children:"Loading..."})}},3527:function(n,e,t){t.d(e,{Df:function(){return i},Wf:function(){return s},au:function(){return f},fh:function(){return l},q5:function(){return x}});var r=t(5861),a=t(7757),o=t.n(a),c=t(1243).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"80c3b79aa997143da0fce24113ded47b"}});function i(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.get("trending/movie/day");case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function s(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.get("search/movie",{params:{query:e}});case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.get("movie/".concat(e));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function f(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.get("movie/".concat(e,"/credits"));case 3:return t=n.sent,n.abrupt("return",t.data.cast);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function x(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.get("movie/".concat(e,"/reviews"));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}},9093:function(n,e,t){n.exports=t.p+"static/media/movie-pic.a6cacd9a63a2acf7a0e9.jpg"}}]);
//# sourceMappingURL=840.ab552ec9.chunk.js.map