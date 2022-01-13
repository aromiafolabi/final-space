(this["webpackJsonpblank-app"]=this["webpackJsonpblank-app"]||[]).push([[0],{37:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),r=c(21),n=c.n(r),i=(c(37),c(10)),l=c(2),d=c(0);var j=function(){return Object(d.jsx)("nav",{className:"home-navbar",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"navbar-brand",children:[Object(d.jsx)(i.b,{to:"/",className:"navbar-item",children:"Home"}),Object(d.jsx)(i.b,{to:"/character",className:"navbar-item",children:"Characters"}),Object(d.jsx)(i.b,{to:"/episode",className:"navbar-item",children:"Episodes"})]})})})};var h=function(){return Object(d.jsx)("section",{className:"hero is-fullheight-with-navbar is-dark",children:Object(d.jsx)("div",{className:"hero-body background has-text-centered",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("h1",{className:"title has-text-centered",children:["Final Space ",Object(d.jsx)("span",{children:"\ud83d\ude80\ud83c\udf6a"})]})})})})},o=c(9),b=c.n(o),m=c(13),x=c(8),u=c(15),O=c.n(u),w="https://finalspaceapi.com/api/v0";function f(e){return O.a.get("".concat(w,"/character/").concat(e))}var p=function(e){var t=e.characterId,c=e.name,a=e.image,s=e.origin;return Object(d.jsx)("div",{className:"column is-one-quarter-desktop is-one-third-tablet",children:Object(d.jsxs)(i.b,{to:"/character/".concat(t),children:[Object(d.jsx)("div",{className:"charcter-card is-dark",children:Object(d.jsx)("div",{className:"card-header is-dark",children:Object(d.jsx)("h3",{className:"card-header-title is-dark",children:c})})}),Object(d.jsx)("div",{className:"card-image",children:Object(d.jsx)("figure",{className:"image image-is-1by1",children:Object(d.jsx)("img",{src:a,alt:c})})}),Object(d.jsx)("div",{className:"character-card",children:Object(d.jsx)("h4",{className:"card-header-title",children:s})})]})})};var v=function(){return Object(d.jsx)("div",{className:"container has-text-centered",children:Object(d.jsxs)("h2",{className:"title",children:["Oh no, something went wrong ",Object(d.jsx)("span",{children:"\ud83d\udc7d"})]})})};var g=function(){return Object(d.jsxs)("p",{children:["...loading",Object(d.jsx)("span",{children:"\ud83d\ude80\ud83c\udf6a"})]})};var N=function(){var e=s.a.useState(null),t=Object(x.a)(e,2),c=t[0],a=t[1],r=s.a.useState(""),n=Object(x.a)(r,2),i=n[0],l=n[1],j=s.a.useState(!1),h=Object(x.a)(j,2),o=h[0],u=h[1],f=!c&&!o;return s.a.useEffect((function(){var e=function(){var e=Object(m.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat(w,"/character"));case 3:t=e.sent,a(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),u(!0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(d.jsxs)("section",{className:"section",children:[Object(d.jsx)("div",{className:"columns",children:Object(d.jsx)("div",{className:"column is-one-third",children:Object(d.jsx)("input",{className:"field input is-normal",placeholder:"Search...",onChange:function(e){l(e.target.value)}})})}),Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"columns is-multiline",children:[o&&Object(d.jsx)(v,{}),f&&Object(d.jsx)(g,{}),c&&function(e){return e.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())}))}(c).map((function(e){return Object(d.jsx)(p,{name:e.name,gender:e.gender,image:e.img_url,origin:e.origin,characterId:e.id,alias:e.alias,abilities:e.abilities,status:e.status},e.id)}))]})})]})},k=c(19),I=c.n(k);var S=function(){var e=Object(l.f)().characterId,t=s.a.useState(null),c=Object(x.a)(t,2),a=c[0],r=c[1],n=s.a.useState(!1),i=Object(x.a)(n,2),j=i[0],h=i[1],o=!a&&!j;return s.a.useEffect((function(){var t=function(){var t=Object(m.a)(b.a.mark((function t(){var c,a,s;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f(e);case 3:return c=t.sent,r(c.data),t.next=7,O.a.get("".concat(w,"/quote"));case 7:a=t.sent,s=a.data.filter((function(e){if(e.by===c.data.name)return e})),n=s[Math.floor(Math.random()*s.length)].quote,k.notify.show(n,"custom",3e3,{background:"#fbcb46",color:"#000"}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),h(!0);case 15:case"end":return t.stop()}var n}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),Object(d.jsx)("section",{className:"section",children:Object(d.jsx)("div",{className:"columns",children:Object(d.jsx)("div",{className:"whole-card column is-half is-offset-one-quarter",children:Object(d.jsxs)("div",{className:"container",children:[o&&Object(d.jsx)(g,{}),a&&Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"character-name",children:[Object(d.jsxs)("h2",{className:"title has-text-centered",children:[" ",a.name," "]}),Object(d.jsx)("hr",{})]}),Object(d.jsxs)("div",{className:"columns",children:[Object(d.jsx)("div",{className:"column is-half",children:Object(d.jsx)("figure",{className:"image",children:Object(d.jsx)("img",{src:a.img_url,alt:a.name})})}),Object(d.jsxs)("div",{className:"column is-half",children:[Object(d.jsxs)("h4",{className:"title is-4",children:[Object(d.jsx)("span",{role:"img","aria-label":"globe",children:"\ud83c\udf0d"})," "," ","Origin"]}),Object(d.jsx)("p",{children:a.origin}),Object(d.jsx)("hr",{}),Object(d.jsxs)("h4",{className:"title is-4",children:[Object(d.jsx)("span",{role:"img","aria-label":"alien",children:"\ud83d\udc7d"})," "," ","Species"]}),Object(d.jsx)("p",{children:a.species})]})]}),Object(d.jsx)("hr",{}),Object(d.jsxs)("h4",{className:"title is-4",children:[Object(d.jsx)("span",{role:"img","aria-label":"lightning",children:"\u26a1\ufe0f"})," "," ","Abilities"]}),Object(d.jsx)("p",{children:a.abilities[Math.floor(Math.random()*a.abilities.length)]}),Object(d.jsx)("hr",{}),Object(d.jsxs)("h4",{className:"title is-4",children:[Object(d.jsx)("span",{role:"img","aria-label":"globe",children:"@"})," "," ","Alias"]}),Object(d.jsx)("p",{children:a.alias[Math.floor(Math.random()*a.alias.length)]}),Object(d.jsx)("hr",{})]})]})})})})},C={1:"https://www.netflix.com/watch/80174386?trackId=13752289&tctx=0%2C1%2Cf7095036fa255a1577391c16edbc6249ecf0a6ec%3Ad66d80365c0697a1c9e1fca7ed06340d33145c35%2Cf7095036fa255a1577391c16edbc6249ecf0a6ec%3Ad66d80365c0697a1c9e1fca7ed06340d33145c35%2Cunknown%2C%2C",2:"https://www.netflix.com/watch/81001394?trackId=13752289",3:"https://www.netflix.com/watch/81001395?trackId=200257858",4:"https://www.netflix.com/watch/81001396?trackId=200257858",5:"https://www.netflix.com/watch/81001397?trackId=200257858",6:"https://www.netflix.com/watch/81001398?trackId=200257858",7:"https://www.netflix.com/watch/81001399?trackId=200257858",8:"https://www.netflix.com/watch/81001400?trackId=200257858",9:"https://www.netflix.com/watch/81001401?trackId=200257858",10:"https://www.netflix.com/watch/81001402?trackId=200257858",11:"https://www.netflix.com/watch/81106565?trackId=200257858",12:"https://www.netflix.com/watch/81106566?trackId=200257858",13:"https://www.netflix.com/watch/81106567?trackId=200257858",14:"https://www.netflix.com/watch/81106568?trackId=200257858",15:"https://www.netflix.com/watch/81106569?trackId=200257858",16:"https://www.netflix.com/watch/81106570?trackId=200257858",17:"https://www.netflix.com/watch/81106571?trackId=200257858",18:"https://www.netflix.com/watch/81106572?trackId=200257858",19:"https://www.netflix.com/watch/81106573?trackId=200257858",20:"https://www.netflix.com/watch/81106574?trackId=200257858"};var y=function(e){var t=e.episodeId,c=e.name,a=e.image,s=e.director,r=e.writer;return Object(d.jsxs)("div",{className:"column is one-quarter-desktop is one-third-tablet",children:[Object(d.jsx)("div",{className:"card",children:Object(d.jsx)("div",{className:"card-header",children:Object(d.jsx)("h3",{className:"card-header-title",children:c})})}),Object(d.jsx)("div",{className:"card-image",children:Object(d.jsx)("figure",{className:"image image-is-1by1",children:Object(d.jsxs)("a",{href:C[t],target:"_blank",rel:"noreferrer",children:[" ",Object(d.jsx)("img",{src:a,alt:c})," "]})})}),Object(d.jsxs)("div",{className:"character-card",children:[Object(d.jsxs)("h5",{className:"episode-writer",children:[Object(d.jsx)("strong",{className:"episode-writer",children:"Writer:"})," ",r]}),Object(d.jsxs)("h5",{className:"episode-director",children:[Object(d.jsx)("strong",{className:"episode-director",children:"Director:"})," ",s]})]})]})};var M=function(){var e=s.a.useState(null),t=Object(x.a)(e,2),c=t[0],a=t[1],r=s.a.useState("all"),n=Object(x.a)(r,2),i=n[0],l=n[1],j=s.a.useState(!1),h=Object(x.a)(j,2),o=h[0],u=h[1],f=!c&&!o;return s.a.useEffect((function(){var e=function(){var e=Object(m.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat(w,"/episode"));case 3:t=e.sent,a(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),u(!0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(d.jsxs)("section",{className:"section",children:[Object(d.jsx)("h1",{className:"watch-episode title is-1 has-text-centered",children:"Watch an episode!"}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"field select is-medium",children:Object(d.jsxs)("select",{onChange:function(e){l(e.target.value)},children:[Object(d.jsx)("option",{value:"all",children:"All Seasons"}),Object(d.jsx)("option",{value:"2018",children:"Season One"}),Object(d.jsx)("option",{value:"2019",children:"Season Two"})]})}),Object(d.jsxs)("div",{className:"column is-multiline",children:[o&&Object(d.jsx)(v,{}),f&&Object(d.jsx)(g,{}),c&&function(e){return e.filter((function(e){return e.air_date.includes(i)||"all"===i}))}(c).map((function(e){return Object(d.jsx)(y,{name:e.name,image:e.img_url,writer:e.writer,director:e.director,date:e.air_date,episodeId:e.id},e.id)}))]})]})]})};var _=function(){return Object(d.jsxs)(i.a,{children:[Object(d.jsx)(I.a,{}),Object(d.jsx)(j,{}),Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/",children:Object(d.jsx)(h,{})}),Object(d.jsx)(l.a,{path:"/character/:characterId",children:Object(d.jsx)(S,{})}),Object(d.jsx)(l.a,{path:"/character",children:Object(d.jsx)(N,{})}),Object(d.jsx)(l.a,{path:"/episode",children:Object(d.jsx)(M,{})})]})]})};n.a.render(Object(d.jsx)(_,{}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.de8c0893.chunk.js.map