(function(t){function e(e){for(var a,i,s=e[0],l=e[1],c=e[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd");var a=n("2b0e"),r=n("5f5b"),o=n("b1e0");n("ab8b"),n("2dd8");a["default"].use(r["a"]),a["default"].use(o["a"]);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"header"}},[n("Header")],1),n("router-view")],1)},s=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",[n("b-row",{staticClass:"pt-4",attrs:{align:"center"}},[n("b-col",{staticClass:"h2",attrs:{id:"text"}},[n("i",[t._v("Dustpancake's Valentine's Emporium")])])],1),n("b-row",{staticClass:"pb-3",attrs:{align:"center"}},[n("b-col",{attrs:{id:"text"}},[t._v(" the virtual card and figurative flower shop ")])],1),n("b-row",{attrs:{align:"center",dark:""}},[n("b-col",{staticClass:"h4"},[n("b-button-group",[n("b-button",{staticClass:"valentine",attrs:{variant:"light"},on:{click:t.onInstagram}},[n("b-icon",{attrs:{icon:"instagram"}})],1),n("b-button",{attrs:{variant:"light"},on:{click:t.onGithub}},[n("b-icon",{attrs:{icon:"github"}})],1)],1)],1)],1)],1)},c=[],u={name:"Header",methods:{onInstagram:function(){window.open("https://www.instagram.com/dustpancake","_blank")},onGithub:function(){window.open("https://www.github.com/dustpancake","_blank")}}},d=u,p=n("2877"),f=Object(p["a"])(d,l,c,!1,null,null,null),b=f.exports,h={name:"App",components:{Header:b}},g=h,m=(n("034f"),Object(p["a"])(g,i,s,!1,null,null,null)),v=m.exports,w=n("8c4f"),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("VCards")],1)},_=[],O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"allcards"}},[n("b-container",{staticStyle:{"max-width":"1000px"}},[n("b-row",{staticClass:"p-4"},t._l(t.cards,(function(t){return n("b-col",{key:t.imagepath,staticClass:"pb-4",attrs:{md:"6"}},[n("CardTile",{attrs:{title:t.title,imagepath:t.imagepath,about:t.about}})],1)})),1)],1)],1)},E=[],C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-card",{staticClass:"p-1",attrs:{align:"center"}},[n("b-img",{attrs:{fluid:"",src:t.imagepath}}),n("div",{attrs:{id:"cardtext"}},[t._v(" "+t._s(t.about)+" ")]),n("b-button-group",{staticClass:"pt-3"},[n("b-button",{staticClass:"valentine",attrs:{variant:"light"},on:{click:t.onCardDownload}},[t._v(" Card "),n("b-icon",{attrs:{icon:"download"}})],1),n("b-button",{attrs:{variant:"light"},on:{click:t.onPrintDownload}},[t._v(" Print "),n("b-icon",{attrs:{icon:"download"}})],1)],1)],1)],1)},x=[];n("baa5");function k(t,e){t.$gtag.event("select_content",{event_category:"engagement",event_label:e,value:1})}var j={name:"CardTile",props:{title:String,imagepath:String,about:String},methods:{onCardDownload:function(){k(this,"card-"+this.imagepath),window.location.href="cards/card_"+this.imagepath.substr(0,this.imagepath.lastIndexOf("."))+".pdf"},onPrintDownload:function(){k(this,"print-"+this.imagepath),window.location.href="prints/print_"+this.imagepath.substr(0,this.imagepath.lastIndexOf("."))+".pdf"}}},P=j,T=Object(p["a"])(P,C,x,!1,null,null,null),M=T.exports,S={name:"VCards",components:{CardTile:M},data:function(){return{cards:[{imagepath:"corvids.png",title:"WILL YOU EAT THE RICH WITH ME",about:"Revolt together, stay together."},{imagepath:"appleofmyeye.png",title:"APPLE OF MY EYE",about:"The sweetest stare."},{imagepath:"siteicon.png",title:"APPLE OF MY EYE ALT",about:"My code generated prints for this text-less variant and they looked decent."},{imagepath:"jamesjoyce.png",title:"JAMES JOYCE",about:"My body was like a harp and their words and gestures were like fingers running upon the wires."},{imagepath:"wholelifetoo.png",title:"TAKE MY WHOLE LIFE TOO",about:"Only fools wouldn't."},{imagepath:"bemineforalltime.png",title:"BE MINE FOR ALL TIME",about:"Sinew and bones."}]}}},I=S,A=Object(p["a"])(I,O,E,!1,null,null,null),H=A.exports,L={name:"Home",components:{VCards:H}},Y=L,$=Object(p["a"])(Y,y,_,!1,null,null,null),D=$.exports;a["default"].use(w["a"]);var F=[{path:"/",name:"Home",component:D}],J=new w["a"]({mode:"history",base:"/",routes:F}),V=J,R=n("a584");a["default"].config.productionTip=!1,a["default"].use(R["a"],{config:{id:"UA-165287410-3"}},V),new a["default"]({router:V,render:function(t){return t(v)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.cc65f4fa.js.map