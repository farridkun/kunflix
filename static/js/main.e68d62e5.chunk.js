(this.webpackJsonpkunflix=this.webpackJsonpkunflix||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(2),o=c.n(i),r=c(13),a=c.n(r),s=(c(22),c(23),c(4)),h=c.n(s),f=c(14),l=c(16),u=c(15),d=c.n(u).a.create({baseURL:"https://api.themoviedb.org/3"});c(42);var p=function(e){var t=e.title,c=e.fetchUrl,o=Object(i.useState)([]),r=Object(l.a)(o,2),a=r[0],s=r[1];return Object(i.useEffect)((function(){function e(){return(e=Object(f.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get(c);case 2:return t=e.sent,s(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]),console.log(a),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("h2",{children:t}),Object(n.jsx)("div",{className:"row__posters",children:a.map((function(e){return Object(n.jsx)("img",{className:"row__poster",src:"".concat("https://image.tmdb.org/t/p/original/").concat(e.poster_path),alt:e.name},e.id)}))})]})},j="7a68d1874406e1660913a7449f445303",v={fetchTrending:"/trending/all/week?api_key=".concat(j,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(j,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(j,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(j,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(j,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(j,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(j,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(j,"&with_genres=99")};var g=function(){return Object(n.jsxs)("div",{className:"app",children:[Object(n.jsx)("h1",{children:"\ud83d\udcfa KUNFLIX \ud83c\udfa5"}),Object(n.jsx)(p,{title:"BEST AWARDS",fetchUrl:v.fetchNetflixOriginals}),Object(n.jsx)(p,{title:"Trending Now",fetchUrl:v.fetchTrending}),Object(n.jsx)(p,{title:"Top Rated",fetchUrl:v.fetchTopRated}),Object(n.jsx)(p,{title:"Action Movies",fetchUrl:v.fetchActionMovies}),Object(n.jsx)(p,{title:"Comedy Movies",fetchUrl:v.fetchComedyMovies}),Object(n.jsx)(p,{title:"Romance Movies",fetchUrl:v.fetchRomanceMovies}),Object(n.jsx)(p,{title:"Documentaries",fetchUrl:v.fetchDocumentaries})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,44)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;c(e),n(e),i(e),o(e),r(e)}))};a.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(g,{})}),document.getElementById("root")),m()}},[[43,1,2]]]);
//# sourceMappingURL=main.e68d62e5.chunk.js.map