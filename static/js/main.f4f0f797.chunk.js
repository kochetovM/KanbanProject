(this.webpackJsonpkanban=this.webpackJsonpkanban||[]).push([[0],{14:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(7),i=n.n(l),o=(n(14),n(4),n(2)),c=n(1);var s=function(e){return r.a.createElement("div",{className:""},r.a.createElement("li",{key:e.id},e.el.name," ",r.a.createElement("br",null),"Priority: ",e.el.priority,r.a.createElement("br",null),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.delete_post(e.el.id,e.currentlist,e.setList)}},"Del"),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.move_up(e.el.id,e.currentlist,e.setList)}},r.a.createElement("i",{className:"glyphicon glyphicon-arrow-up"})),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.move_down(e.el.id,e.currentlist,e.setList)}},r.a.createElement("i",{className:"glyphicon glyphicon-arrow-down"})),e.move_left&&r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.move_left(e.el.id,e.currentlist,e.leftlist,e.setList,e.setLeftList)}},r.a.createElement("i",{className:"glyphicon glyphicon-arrow-left"})),e.move_right&&r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.move_right(e.el.id,e.currentlist,e.rightlist,e.setList,e.setRightList)}},r.a.createElement("i",{className:"glyphicon glyphicon-arrow-right"}))))},u=n(8),m=n.n(u);var p=function(e){var t=Object(a.useState)(!1),n=Object(c.a)(t,2),l=n[0],i=n[1],o=Object(a.useState)(""),s=Object(c.a)(o,2),u=s[0],p=s[1],b=Object(a.useState)(""),f=Object(c.a)(b,2),d=f[0],v=f[1],h=Object(a.useState)(!1),E=Object(c.a)(h,2),g=E[0],y=E[1],N=function(){p(""),i(!1),y(!1),v("")};return r.a.createElement("div",{className:""},!l&&r.a.createElement("button",{className:"btn btn-primary",onClick:function(){i(!0)}},"Create Task"),l&&r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter a new task...",value:u,onChange:function(e){y(e.target.value.length>4),p(e.target.value)}}),r.a.createElement("input",{type:"text",className:"",placeholder:"Priority of task",value:d,onChange:function(e){var t=/^\d+$/.test(e.target.value);v(t?e.target.value:d)}})),r.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:function(t){t.preventDefault(),console.log(u),console.log(d);var n={id:m.a.random(),name:u,priority:parseInt(d)};e.addnewtask(n),N()},disabled:!g},"Submit"),r.a.createElement("button",{className:"btn btn-secondary",onClick:N},"Cancel")))};var b=function(e){var t=Object(a.useState)([{id:11,name:"Create F1",priority:10},{id:12,name:"Create F2",priority:23},{id:13,name:"Create F3",priority:25}]),n=Object(c.a)(t,2),l=n[0],i=n[1],u=Object(a.useState)([{id:15,name:"Create F4",priority:16},{id:14,name:"Create F5",priority:20}]),m=Object(c.a)(u,2),b=m[0],f=m[1],d=Object(a.useState)([{id:17,name:"Create F6",priority:15},{id:16,name:"Create F7",priority:9}]),v=Object(c.a)(d,2),h=v[0],E=v[1],g=Object(a.useState)([{id:19,name:"Create F8",priority:40}]),y=Object(c.a)(g,2),N=y[0],_=y[1],k=function(e,t,n){console.log(e);var a=null,r=0;if(t.map((function(t,n){t.id===e&&(a=t,r=n)})),0!==r){var l=Object(o.a)(t);l.splice(r,1),l.splice(r-1,0,a),n(l)}},C=function(e,t,n){console.log(e);var a=null,r=0;if(t.map((function(t,n){t.id===e&&(a=t,r=n)})),r!==t.length-1){var l=Object(o.a)(t);l.splice(r,1),l.splice(r+1,0,a),n(l)}},w=function(e,t,n){console.log(e),n(t.filter((function(t){return t.id!==e})))},j=function(e,t,n,a,r){console.log(e);var l=[],i=null;t.forEach((function(t){t.id===e?i=t:l.push(t)})),a(l),(l=Object(o.a)(n)).push(i),r(l)},L=function(e,t,n,a,r){console.log(e);var l=[],i=null;t.forEach((function(t){t.id===e?i=t:l.push(t)})),a(l),(l=Object(o.a)(n)).push(i),r(l)},O=function(e,t){for(var n=Object(o.a)(e),a=[],r=function(){var e=-1,t=0;n.forEach((function(n,a){n.priority>e&&(e=n.priority,t=a)})),a.push(n[t]),n.splice(t,1)};0!==n.length;)r();t(a)};return r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,"Kanban"),r.a.createElement("h1",null,"-------------------------"),r.a.createElement(p,{addnewtask:function(e){console.log("newtaskid",e),i((function(t){return[].concat(Object(o.a)(t),[e])})),console.log("WholeList",l)}}),r.a.createElement("h1",null,"-------------------------"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},"To do ---",r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return O(l,i)}},"Sort by priority "),r.a.createElement("ul",null,l.map((function(e){return r.a.createElement(s,{el:e,currentlist:l,rightlist:b,leftlist:null,setList:i,setRightList:f,delete_post:w,move_up:k,move_down:C,move_right:j,move_left:!1})})))),r.a.createElement("div",{className:"col"},"In progress---",r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return O(b,f)}},"Sort by priority "),r.a.createElement("ul",null,b.map((function(e){return r.a.createElement(s,{el:e,currentlist:b,rightlist:h,leftlist:l,setList:f,setLeftList:i,setRightList:E,delete_post:w,move_up:k,move_down:C,move_right:j,move_left:L})})))),r.a.createElement("div",{className:"col"},"Review---",r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return O(h,E)}},"Sort by priority "),r.a.createElement("ul",null,h.map((function(e){return r.a.createElement(s,{el:e,currentlist:h,rightlist:N,leftlist:b,setList:E,setLeftList:f,setRightList:_,delete_post:w,move_up:k,move_down:C,move_right:j,move_left:L})})))),r.a.createElement("div",{className:"col"},"Done---",r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return O(N,_)}},"Sort by priority "),r.a.createElement("ul",null,N.map((function(e){return r.a.createElement(s,{el:e,currentlist:N,rightlist:null,leftlist:h,setList:_,setLeftList:E,delete_post:w,move_up:k,move_down:C,move_right:!1,move_left:L})}))))))};n(16);var f=function(){return r.a.createElement("div",{className:"Content"},r.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,n){},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.f4f0f797.chunk.js.map