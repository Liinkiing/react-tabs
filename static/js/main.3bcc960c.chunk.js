(window["webpackJsonp@liinkiing/react-tabs-example"]=window["webpackJsonp@liinkiing/react-tabs-example"]||[]).push([[0],{17:function(e,t,n){e.exports=n(28)},22:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var l=n(0),a=n.n(l),c=n(2),r=n.n(c),o=(n(22),n(8)),i=n(9),u=n(13),m=n(10),E=n(14),d=n(1),b=n(6),s=function(){return(s=Object.assign||function(e){for(var t,n=1,l=arguments.length;n<l;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function S(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(l=Object.getOwnPropertySymbols(e);a<l.length;a++)t.indexOf(l[a])<0&&Object.prototype.propertyIsEnumerable.call(e,l[a])&&(n[l[a]]=e[l[a]])}return n}function p(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var T,x,C,f,y,v,h,O,j,g,w=d.b.div(x||(x=p(["\n  color: black;\n  ","\n"],["\n  color: black;\n  ","\n"])),function(e){return e.verticalLayout&&Object(d.a)(T||(T=p(["\n    display: flex;\n    & .tabs__content {\n      flex: 1;\n    }\n  "],["\n    display: flex;\n    & .tabs__content {\n      flex: 1;\n    }\n  "])))}),F=d.b.div(h||(h=p(["\n  display: flex;\n  position: relative;\n  & > .tab:first-of-type {\n    border-top-left-radius: 3px;\n  }\n  & > .tab:last-of-type {\n    ","\n  }\n  ","\n  ","\n"],["\n  display: flex;\n  position: relative;\n  & > .tab:first-of-type {\n    border-top-left-radius: 3px;\n  }\n  & > .tab:last-of-type {\n    ","\n  }\n  ","\n  ","\n"])),function(e){return e.verticalLayout?Object(d.a)(C||(C=p(["\n      border-bottom-left-radius: 3px;\n    "],["\n      border-bottom-left-radius: 3px;\n    "]))):Object(d.a)(f||(f=p(["\n      border-top-right-radius: 3px;\n    "],["\n      border-top-right-radius: 3px;\n    "])))},function(e){return e.stretchTabsTitle&&Object(d.a)(y||(y=p(["\n    & > .tab {\n      flex: 1;\n    }\n  "],["\n    & > .tab {\n      flex: 1;\n    }\n  "])))},function(e){return e.verticalLayout&&Object(d.a)(v||(v=p(["\n    flex-direction: column;\n  "],["\n    flex-direction: column;\n  "])))}),k=d.b.div.attrs({className:"tabs__content"})(g||(g=p(["\n  padding: 20px;\n  background: whitesmoke;\n  border-bottom-right-radius: 3px;\n  ",";\n  ",";\n  box-shadow: 0 6px 30px rgba(0,0,0,0.14);\n  overflow: hidden;\n"],["\n  padding: 20px;\n  background: whitesmoke;\n  border-bottom-right-radius: 3px;\n  ",";\n  ",";\n  box-shadow: 0 6px 30px rgba(0,0,0,0.14);\n  overflow: hidden;\n"])),function(e){return!e.stretchTabsTitle&&Object(d.a)(O||(O=p(["\n    border-top-right-radius: 3px;\n  "],["\n    border-top-right-radius: 3px;\n  "])))},function(e){return!e.verticalLayout&&Object(d.a)(j||(j=p(["\n    border-bottom-left-radius: 3px;\n  "],["\n    border-bottom-left-radius: 3px;\n  "])))}),L=Object(l.createContext)({selectedTabIndex:0}),A=function(e){var t=e.children,n=e.initialTabIndex,a=e.stretchTabsTitle,c=e.initial,r=e.exit,o=e.animate,i=e.verticalLayout,u=S(e,["children","initialTabIndex","stretchTabsTitle","initial","exit","animate","verticalLayout"]),m=Object(l.useMemo)(function(){return Math.random().toString(36).replace(/[^a-z]+/g,"").substr(2,10)},[]),E=Object(l.useState)(n),d=E[0],b=E[1],p=Object(l.useMemo)(function(){return l.Children.toArray(t).map(function(e,t){return Object(l.cloneElement)(e,s({},e.props,{isActive:d===t,onClick:function(){b(t)},initial:c,exit:r,id:m,animate:o}))})},[t,d]);return Object(l.createElement)(L.Provider,{value:{selectedTabIndex:d}},Object(l.createElement)(w,s({verticalLayout:i},u),Object(l.createElement)(F,{verticalLayout:i,stretchTabsTitle:a},p),Object(l.createElement)(k,{id:m,verticalLayout:i,stretchTabsTitle:a})))};A.defaultProps={stretchTabsTitle:!1,verticalLayout:!1,initialTabIndex:0,initial:{opacity:0,x:40},animate:{opacity:1,x:0},exit:{opacity:0,x:40}};var R,P,I,N=d.b.div(R||(R=p(["\n  display: none;\n"],["\n  display: none;\n"]))),_=d.b.div(P||(P=p(["\n  padding: 10px;\n  border-radius: inherit;\n  cursor: pointer;\n  height: 100%;\n  transition: all 0.15s;\n  background: whitesmoke;\n  &:hover {\n    opacity: 0.8;\n  }\n"],["\n  padding: 10px;\n  border-radius: inherit;\n  cursor: pointer;\n  height: 100%;\n  transition: all 0.15s;\n  background: whitesmoke;\n  &:hover {\n    opacity: 0.8;\n  }\n"]))),D=d.b.div.attrs({className:"tab"})(I||(I=p(["\n  ",";\n  display: flex;\n  flex-direction: column;\n"],["\n  ",";\n  display: flex;\n  flex-direction: column;\n"])),function(e){return e.isActive?"opacity: 1;":"opacity: 0.5;"}),M=function(e){var t=e.children,n=e.isActive,a=e.id,c=e.onClick,r=e.animate,o=e.exit,i=e.initial,u=S(e,["children","isActive","id","onClick","animate","exit","initial"]),m=Object(l.useMemo)(function(){return l.Children.toArray(t).map(function(e){return Object(l.cloneElement)(e,s({},e.props,{animate:r,exit:o,id:a,initial:i,isActive:n}))})},[t,n]);return Object(l.createElement)(D,s({},u,{isActive:n,onClick:c}),m)};M.defaultProps={isActive:!1},M.Content=function(e){var t=e.children,n=e.isActive,r=e.initial,o=e.id,i=e.animate,u=e.exit,m=a.a.useRef(),E=Object(l.useState)(!1),d=E[0],s=E[1];return Object(l.useEffect)(function(){m.current=document.querySelector(".tabs__content#"+o)||void 0,s(!0)},[]),d?n&&m.current?Object(c.createPortal)(a.a.createElement(b.a,null,a.a.createElement(b.b.div,{initial:r,animate:i,exit:u},t)),m.current):a.a.createElement(N,null,t):null},M.Title=function(e){var t=e.children,n=S(e,["children"]);return a.a.createElement(_,s({},n),t)};var B=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("div",{style:{margin:"20px auto",width:"80%"}},a.a.createElement(A,{verticalLayout:!0,initial:{opacity:0,x:500},exit:{opacity:0,x:500}},a.a.createElement(M,null,a.a.createElement(M.Title,null,"First tab"),a.a.createElement(M.Content,null,"First Content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")))),a.a.createElement("div",{style:{margin:"20px auto",width:"80%"}},a.a.createElement(A,null,a.a.createElement(M,null,a.a.createElement(M.Title,null,"First tab"),a.a.createElement(M.Content,null,"First Content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"NESTED WITH STRETCHED TABS TITLE"),a.a.createElement(M.Content,null,a.a.createElement(A,{stretchTabsTitle:!0,initial:{opacity:0,x:500},exit:{opacity:0,x:500}},a.a.createElement(M,null,a.a.createElement(M.Title,null,"First tab"),a.a.createElement(M.Content,null,"First Content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"MOARRR NESTED"),a.a.createElement(M.Content,null,a.a.createElement(A,{verticalLayout:!0,initial:{opacity:0,x:500},exit:{opacity:0,x:500}},a.a.createElement(M,null,a.a.createElement(M.Title,null,"First tab"),a.a.createElement(M.Content,null,"First Content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")))))))))),a.a.createElement("div",{style:{margin:"20px auto",width:"80%",display:"flex"}},a.a.createElement(A,{style:{flex:1}},a.a.createElement(M,null,a.a.createElement(M.Title,null,"First tab"),a.a.createElement(M.Content,null,"First Content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"NESTED"),a.a.createElement(M.Content,null,a.a.createElement(A,{initial:{opacity:0,x:500},exit:{opacity:0,x:500}},a.a.createElement(M,null,a.a.createElement(M.Title,null,"First tab"),a.a.createElement(M.Content,null,"First Content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"MOARRR NESTED"),a.a.createElement(M.Content,null,a.a.createElement(A,{verticalLayout:!0,initial:{opacity:0,x:500},exit:{opacity:0,x:500}},a.a.createElement(M,null,a.a.createElement(M.Title,null,"First tab"),a.a.createElement(M.Content,null,"First Content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content"))))))))),a.a.createElement(A,{style:{flex:1},verticalLayout:!0},a.a.createElement(M,null,a.a.createElement(M.Title,null,"First tab"),a.a.createElement(M.Content,null,"First Content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"NESTED"),a.a.createElement(M.Content,null,a.a.createElement(A,{initial:{opacity:0,x:500},exit:{opacity:0,x:500}},a.a.createElement(M,null,a.a.createElement(M.Title,null,"First tab"),a.a.createElement(M.Content,null,"First Content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"MOARRR NESTED"),a.a.createElement(M.Content,null,a.a.createElement(A,{verticalLayout:!0,initial:{opacity:0,x:500},exit:{opacity:0,x:500}},a.a.createElement(M,null,a.a.createElement(M.Title,null,"First tab"),a.a.createElement(M.Content,null,"First Content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")),a.a.createElement(M,null,a.a.createElement(M.Title,null,"Second tab"),a.a.createElement(M.Content,null,"Second content")))))))))))}}]),t}(l.Component);r.a.render(a.a.createElement(B,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.3bcc960c.chunk.js.map