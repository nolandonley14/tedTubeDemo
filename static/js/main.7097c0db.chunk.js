(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},102:function(e,t,a){},106:function(e,t,a){},110:function(e,t,a){},129:function(e,t,a){},132:function(e,t,a){},144:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(62),r=a.n(c),i=(a(78),a(63)),m=a(64),o=a(71),s=a(65),u=a(72),d=a(66),f=a.n(d),E=a(148),p=(a(100),a(150));a(102);function h(){return l.a.createElement("div",{className:"headerWithBar"},l.a.createElement("div",{className:"logo"},l.a.createElement("img",{src:"favicon.png",width:"30px",height:"30px",alt:""}),l.a.createElement("h2",null,"TedTube")),l.a.createElement(p.a,null),l.a.createElement("div",null))}var v=a(33),b=a(151),g=a(147),w=a(149),N=(a(106),a(39)),k=a.n(N),y=a(69),O=(a(110),a(70)),j=a.n(O).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResults:1,key:"AIzaSyBkm8P1hOnBu8vivBoL42-BU--uXXsDiH4"},headers:{}}),x=(a(129),function(e){var t=e.videoID;return""===t?l.a.createElement("p",{style:{textAlign:"center",fontSize:"18px",fontWeight:"bold"}},"Search for a video"):l.a.createElement("div",{className:"video-player"},l.a.createElement("iframe",{title:t,className:"video-iframe",src:"https://www.youtube.com/embed/".concat(t),allowFullScreen:!0}))}),C=function(e){var t=e.showPopup,a=e.setShowPopup,c=e.info,r=Object(n.useState)(""),i=Object(v.a)(r,2),m=i[0],o=i[1],s=function(){var e=Object(y.a)(k.a.mark(function e(t){var a;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.get("/search",{params:{q:t}});case 2:a=e.sent,o(a.data.items[0].id.videoId);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),u=t?"modal display-block":"modal display-none";return l.a.createElement("div",{className:u},l.a.createElement("section",{className:"modal-main"},""===m?l.a.createElement("img",{src:c.image_url,align:"left",alt:c.name}):null,""===m?null:l.a.createElement(x,{videoID:m}),l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-info"},l.a.createElement("div",{className:"modal-info-left"},l.a.createElement("div",{className:"modal-name"},l.a.createElement(w.a,{attribute:"name",hit:c})),l.a.createElement("div",{className:"modal-stats"},l.a.createElement(w.a,{attribute:"speakers",hit:c})," \u2022\xa0",l.a.createElement(w.a,{attribute:"event_name",hit:c})," \u2022\xa0",c.viewed_count," views"),l.a.createElement("p",{className:"modal-description"},l.a.createElement(w.a,{attribute:"description",hit:c})))),l.a.createElement("ul",{className:"modal-tag-list"},c.tags.slice(0,5).map(function(e,t){return l.a.createElement("li",{key:t},e)})),l.a.createElement("div",{className:"buttonContainer"},l.a.createElement("button",{className:"watchBtn",type:"button",onClick:function(){return s(c.name)}},"Watch"),l.a.createElement("button",{className:"closeBtn",type:"button",onClick:function(){return a(function(e){return!e})}},"Close")))))},S=a(40),B=a.n(S);function I(){return l.a.createElement("div",{className:"right-panel"},l.a.createElement(b.a,{hitComponent:M}),l.a.createElement(g.a,null))}function M(e){B.a.locale("en");var t=B.a.unix(e.hit.date),a=Object(n.useState)(!1),c=Object(v.a)(a,2),r=c[0],i=c[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(C,{showPopup:r,setShowPopup:i,info:e.hit}),l.a.createElement("div",{className:"card"},l.a.createElement("img",{src:e.hit.image_url,align:"left",alt:e.hit.name,onClick:function(){i(function(e){return!e})}}),l.a.createElement("div",{className:"hit-name"},l.a.createElement(w.a,{attribute:"name",hit:e.hit})),l.a.createElement("div",{className:"hit-speakers"},l.a.createElement(w.a,{attribute:"speakers",hit:e.hit}),l.a.createElement("div",null,t.format("MMMM YYYY")))))}var P=a(146),R=a(152),L=(a(132),Object(P.a)(function(e){var t=e.items,a=e.isFromSearch,n=e.refine;e.searchForItems,e.createURL;return l.a.createElement("ul",{className:"tagsList"},t.map(function(e){return l.a.createElement("li",{className:"toggleItem",key:e.label},l.a.createElement("div",{className:"toggleBack",style:{backgroundColor:e.isRefined?"white":"#3c3d3c",color:e.isRefined?"black":"white"},onClick:function(t){t.preventDefault(),n(e.value)}},a?l.a.createElement(w.a,{attribute:"label",hit:e}):e.label))}))}));function _(){return l.a.createElement("div",{className:"left-panel"},l.a.createElement(L,{attribute:"tags",showMore:!0,showMoreLimit:15}),l.a.createElement(R.a,{hitsPerPage:8}))}var D=f()("400W842MTR","0c5a876f20a08700f8382eeda6cdbd6f"),F=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"ais-InstantSearch"},l.a.createElement(E.a,{indexName:"nolandonley_demo",searchClient:D},l.a.createElement(h,null),l.a.createElement(_,null),l.a.createElement(I,null)))}}]),t}(n.Component);r.a.render(l.a.createElement(F,null),document.getElementById("root"))},73:function(e,t,a){e.exports=a(144)},78:function(e,t,a){}},[[73,2,1]]]);
//# sourceMappingURL=main.7097c0db.chunk.js.map