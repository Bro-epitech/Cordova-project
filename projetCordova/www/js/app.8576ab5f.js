(function(e){function t(t){for(var o,r,c=t[0],s=t[1],i=t[2],l=0,d=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);f&&f(t);while(d.length)d.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],o=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(o=!1)}o&&(u.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},a={app:0},u=[];function c(e){return s.p+"js/"+({"about~team":"about~team",about:"about",team:"team",admin:"admin",dashboard:"dashboard",report:"report",login:"login"}[e]||e)+"."+{"about~team":"0c8d139b",about:"a9057f86",team:"9c4a5b26",admin:"aea98a00","chunk-54d1cf48":"7693f76f","chunk-2d0b2535":"b9f0f0b5","chunk-7f11bcfe":"5c4e710b",dashboard:"4f200140",report:"92a02c65",login:"473a91e1"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1,team:1,login:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({"about~team":"about~team",about:"about",team:"team",admin:"admin",dashboard:"dashboard",report:"report",login:"login"}[e]||e)+"."+{"about~team":"31d6cfe0",about:"bcdb6d59",team:"6acd1f0e",admin:"31d6cfe0","chunk-54d1cf48":"31d6cfe0","chunk-2d0b2535":"31d6cfe0","chunk-7f11bcfe":"31d6cfe0",dashboard:"31d6cfe0",report:"31d6cfe0",login:"f11ec897"}[e]+".css",a=s.p+o,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var i=u[c],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===o||l===a))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){i=d[c],l=i.getAttribute("data-href");if(l===o||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=o,delete r[e],f.parentNode.removeChild(f),n(u)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var u=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=u);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var f=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"5c0b":function(e,t,n){"use strict";var o=n("9c0c"),r=n.n(o);r.a},"6c6e":function(e,t){},"9c0c":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o,r,a,u,c,s,i,l=n("2b0e"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/account"}},[e._v("Account")]),e._v(" | "),n("router-link",{attrs:{to:"/dashboard"}},[e._v("Dashboard")]),e._v(" | "),n("router-link",{attrs:{to:"/report"}},[e._v("Report")]),e._v(" | "),e.affichageA?n("router-link",{attrs:{to:"/team"}},[e._v("Team")]):e._e(),e._v(" | "),n("router-link",{attrs:{to:"/login"}},[e._v("Login")]),e._v(" | "),e.affichageB?n("router-link",{attrs:{to:"/admin"}},[e._v("Admin")]):e._e()],1),n("router-view")],1)},f=[],p=n("2f62"),b=(n("d3b7"),n("d4ec")),h=n("bee2"),g=n("262e"),m=n("2caf"),y=n("9ab4"),v=n("6fc5"),O=n("bc3a"),j=n.n(O),k="http://localhost:8080/api/auth/",A=function(){function e(){Object(b["a"])(this,e)}return Object(h["a"])(e,[{key:"login",value:function(e){return j.a.post(k+"signin",{username:e.username,password:e.hash}).then((function(e){if(e.data.accessToken)return localStorage.setItem("user",JSON.stringify(e.data)),e.data}))}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(e){return j.a.post(k+"signup",{username:e.username,email:e.email,password:e.hash})}}]),e}(),S=new A,w=n("6c6e"),R=JSON.parse(localStorage.getItem("user")||"null"),_=R?{status:{loggedIn:!0},userResponse:{accessToken:"",userId:"",userRole:""}}:{status:{loggedIn:!1},userResponse:{accessToken:"",userId:"",userRole:""}},P=function(e){Object(g["a"])(n,e);var t=Object(m["a"])(n);function n(){var e;return Object(b["a"])(this,n),e=t.apply(this,arguments),e.authState=_,e}return Object(h["a"])(n,[{key:"login",value:function(e){var t=this;return S.login(e).then((function(e){return t.context.commit("loginSuccess",e),Promise.resolve(e)}),(function(e){return t.context.commit("loginFailure"),Promise.reject(e)}))}},{key:"logout",value:function(){S.logout(),this.context.commit("logout")}},{key:"loginFailure",value:function(e){e.status.loggedIn=!1,e.userResponse={accessToken:"",userId:"",userRole:""}}},{key:"loginSuccess",value:function(e,t){e.status.loggedIn=!0,e.userResponse=t}},{key:"logoutSuccess",value:function(e){e.status.loggedIn=!1,e.userResponse={accessToken:"",userId:"",userRole:""}}},{key:"registerSuccess",value:function(e){e.status.loggedIn=!1}},{key:"registerFailure",value:function(e){e.status.loggedIn=!1}}]),n}(v["d"]);Object(y["a"])([v["a"],Object(y["b"])("design:type",Function),Object(y["b"])("design:paramtypes",["function"===typeof(o="undefined"!==typeof w["AuthRequest"]&&w["AuthRequest"])?o:Object]),Object(y["b"])("design:returntype",void 0)],P.prototype,"login",null),Object(y["a"])([v["a"],Object(y["b"])("design:type",Function),Object(y["b"])("design:paramtypes",[]),Object(y["b"])("design:returntype",void 0)],P.prototype,"logout",null),Object(y["a"])([v["c"],Object(y["b"])("design:type",Function),Object(y["b"])("design:paramtypes",["function"===typeof(r="undefined"!==typeof w["AuthState"]&&w["AuthState"])?r:Object]),Object(y["b"])("design:returntype",void 0)],P.prototype,"loginFailure",null),Object(y["a"])([v["c"],Object(y["b"])("design:type",Function),Object(y["b"])("design:paramtypes",["function"===typeof(a="undefined"!==typeof w["AuthState"]&&w["AuthState"])?a:Object,"function"===typeof(u="undefined"!==typeof w["AuthResponse"]&&w["AuthResponse"])?u:Object]),Object(y["b"])("design:returntype",void 0)],P.prototype,"loginSuccess",null),Object(y["a"])([v["c"],Object(y["b"])("design:type",Function),Object(y["b"])("design:paramtypes",["function"===typeof(c="undefined"!==typeof w["AuthState"]&&w["AuthState"])?c:Object]),Object(y["b"])("design:returntype",void 0)],P.prototype,"logoutSuccess",null),Object(y["a"])([v["c"],Object(y["b"])("design:type",Function),Object(y["b"])("design:paramtypes",["function"===typeof(s="undefined"!==typeof w["AuthState"]&&w["AuthState"])?s:Object]),Object(y["b"])("design:returntype",void 0)],P.prototype,"registerSuccess",null),Object(y["a"])([v["c"],Object(y["b"])("design:type",Function),Object(y["b"])("design:paramtypes",["function"===typeof(i="undefined"!==typeof w["AuthState"]&&w["AuthState"])?i:Object]),Object(y["b"])("design:returntype",void 0)],P.prototype,"registerFailure",null),P=Object(y["a"])([Object(v["b"])({namespaced:!0,name:"auth"})],P);var I=P;l["default"].use(p["a"]);var F=new p["a"].Store({modules:{Auth:I}}),T=F,q={name:"user",data:function(){return{affichageA:"manager"==T.state.Auth.authState.userResponse.userRole,affichageB:"admin"==T.state.Auth.authState.userResponse.userRole}}},E=q,x=(n("5c0b"),n("2877")),N=Object(x["a"])(E,d,f,!1,null,null,null),C=N.exports,B=n("9483");Object(B["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("45fc");var L=n("8c4f");l["default"].use(L["a"]);var M=[{path:"/account",name:"account",component:function(){return Promise.all([n.e("about~team"),n.e("about")]).then(n.bind(null,"77be"))},meta:{requiresAuth:!0}},{path:"/dashboard",name:"dashboard",component:function(){return Promise.all([n.e("chunk-54d1cf48"),n.e("chunk-7f11bcfe"),n.e("dashboard")]).then(n.bind(null,"7277"))},meta:{requiresAuth:!0},children:[{path:"",component:function(){return Promise.all([n.e("chunk-54d1cf48"),n.e("chunk-2d0b2535")]).then(n.bind(null,"2441"))}},{path:"chart",component:function(){return Promise.all([n.e("chunk-54d1cf48"),n.e("chunk-7f11bcfe")]).then(n.bind(null,"8a54"))}},{path:"workingtimes",component:function(){return Promise.all([n.e("chunk-54d1cf48"),n.e("chunk-2d0b2535")]).then(n.bind(null,"2441"))}}]},{path:"/report",name:"report",component:function(){return Promise.all([n.e("chunk-54d1cf48"),n.e("report")]).then(n.bind(null,"762c"))},meta:{requiresAuth:!0}},{path:"/team",name:"team",component:function(){return Promise.all([n.e("about~team"),n.e("team")]).then(n.bind(null,"20b5"))},meta:{requiresManager:!0}},{path:"/login",name:"login",component:function(){return n.e("login").then(n.bind(null,"b0f9"))}},{path:"/admin",name:"admin",component:function(){return n.e("admin").then(n.bind(null,"3530"))},meta:{requiresAdmin:!0}}],J=new L["a"]({mode:"history",routes:M});J.beforeEach((function(e,t,n){e.matched.some((function(e){return e.meta.requiresAuth}))&&(T.state.Auth.authState.status.loggedIn?n():J.push("/login")),e.matched.some((function(e){return e.meta.requiresManager}))&&(T.state.Auth.authState.status.loggedIn&&null!==T.state.Auth.authState.userResponse.userRole&&"manager"==T.state.Auth.authState.userResponse.userRole?n():J.push("/login")),e.matched.some((function(e){return e.meta.requiresAdmin}))?T.state.Auth.authState.status.loggedIn&&null!==T.state.Auth.authState.userResponse.userRole&&"admin"==T.state.Auth.authState.userResponse.userRole?n():J.push("/login"):n()}));var D=J,$=n("5f5b"),H=n("b1e0");n("f9e3"),n("2dd8");l["default"].config.productionTip=!1,l["default"].use($["a"]),l["default"].use(H["a"]),new l["default"]({router:D,store:T,render:function(e){return e(C)}}).$mount("#app")}});
//# sourceMappingURL=app.8576ab5f.js.map