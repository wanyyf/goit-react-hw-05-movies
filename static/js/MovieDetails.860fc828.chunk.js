"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[739],{474:function(e,n,t){t.d(n,{C5:function(){return a},Kx:function(){return c},LP:function(){return s},Wu:function(){return i},fs:function(){return o}});var r="df75de766bc216630e148042dff14934",i=function(){return fetch("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(r)).then((function(e){return e.ok?e.json():Promise.reject(new Error("!!Error!!"))}))},o=function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(r,"&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("!!Error!!"))}))},c=function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(r,"&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("!!Error!!"))}))},s=function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(r,"&language=en-US&page=1")).then((function(e){return e.ok?e.json():Promise.reject(new Error("!!Error!!"))}))},a=function(e){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(r,"&language=en-US&query=").concat(e,"&page=1&include_adult=false")).then((function(e){return e.ok?e.json():Promise.reject(new Error("!!Error!!"))}))}},89:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var r=t(861),i=t(885),o=t(757),c=t.n(o),s=t(871),a=t(474),u=t(791),h=t(501),l="movieDetails_info__w8a5S",f="movieDetails_infoAbout__MQ1-B",d="movieDetails_title__SN6Ns",m="movieDetails_buttonBack__3WwxO",p=t(184),j=function(){var e=(0,u.useState)({}),n=(0,i.Z)(e,2),t=n[0],o=n[1],j=(0,s.UO)().movieId,v=(0,s.s0)();(0,u.useEffect)((function(){function e(){return(e=(0,r.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,a.fs)(j).then((function(e){return o(e)})).catch((function(e){o([]),console.log(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[j]);var g=t.poster_path,x=t.original_title,_=t.name,k=t.genres,w=t.release_date,b=void 0===w?"":w,E=t.vote_average,y=t.tagline,U="https://image.tmdb.org/t/p/w500/".concat(g),S=b.split("").splice(0,4).join(""),N=10*E;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("button",{className:m,onClick:function(){return v(-1)},children:"Go back"}),0===t.length?(0,p.jsx)("h2",{children:" We have no info about this film "}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:l,children:[(0,p.jsx)("img",{src:U,alt:x}),(0,p.jsxs)("div",{className:f,children:[(0,p.jsxs)("h2",{className:d,children:[x||_," (",S,")"]}),(0,p.jsx)("h3",{children:"User score:"})," ",(0,p.jsxs)("span",{children:[N.toFixed(0),"%"]}),y&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h3",{children:"Overview"}),(0,p.jsx)("p",{children:y})]}),(0,p.jsx)("h3",{children:"Genges"}),(0,p.jsx)("ul",{children:k&&k.map((function(e){return(0,p.jsx)("li",{children:e.name},e.id)}))})]})]}),(0,p.jsx)("h4",{children:"Additional information"}),(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsx)(h.rU,{to:"/movies/".concat(j,"/cast"),children:" Cast"})}),(0,p.jsx)("li",{children:(0,p.jsx)(h.rU,{to:"/movies/".concat(j,"/reviews"),children:" Reviews"})})]}),(0,p.jsx)("hr",{}),(0,p.jsx)(s.j3,{})]})]})}}}]);
//# sourceMappingURL=MovieDetails.860fc828.chunk.js.map