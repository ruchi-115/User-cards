(this["webpackJsonpuser-card"]=this["webpackJsonpuser-card"]||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(5),s=n.n(r),i=(n(12),n(3)),j=n.n(i),d=n(6),l=n(7),u=(n(4),n(0)),h=function(e){var t=e.first_name,n=e.last_name,a=e.email,c=e.avatar;return Object(u.jsx)("div",{className:"Card",children:Object(u.jsxs)("div",{className:"upper-container",children:[Object(u.jsx)("div",{className:"layer"}),Object(u.jsx)("div",{className:"image-container",children:Object(u.jsx)("img",{src:c,alt:"dp",height:"100px",width:"100px"})}),Object(u.jsxs)("div",{className:"lower-container",children:[Object(u.jsxs)("h3",{className:"name",children:[t," ",n]}),Object(u.jsx)("h4",{children:a})]})]})})};var o=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],r=function(){var e=Object(d.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://reqres.in/api/users?page=1");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n.data);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"header",children:Object(u.jsxs)("header",{children:[Object(u.jsx)("h2",{children:"Social Cards "}),Object(u.jsx)("button",{onClick:r,children:"Get Users"})]})}),Object(u.jsx)("div",{className:"grid",children:n.map((function(e){return Object(u.jsx)(h,{first_name:e.first_name,last_name:e.last_name,email:e.email,avatar:e.avatar},e.id)}))})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(o,{})}),document.getElementById("root")),m()},4:function(e,t,n){}},[[15,1,2]]]);
//# sourceMappingURL=main.be51c2dd.chunk.js.map