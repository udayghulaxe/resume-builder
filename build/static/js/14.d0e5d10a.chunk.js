(this["webpackJsonpresume-builder"]=this["webpackJsonpresume-builder"]||[]).push([[14],{140:function(e,t,a){"use strict";a.r(t);var c=a(24),n=a(23),i=a(15),r=a(0),s=a(243),o=a(274),l=a(273),u=a(89),j=a(256),b=a.n(j),d=a(77),f=a.n(d),g=a(39),O=a(76),h=a(259),m=a(261),p=a(260),v=a(2);t.default=function(e){var t=Object(r.useState)(e.editorData),a=Object(i.a)(t,2),j=a[0],d=a[1],x=Object(r.useState)(!1),k=Object(i.a)(x,2),y=k[0],w=k[1],P=Object(r.useState)(j.title),C=Object(i.a)(P,2),N=C[0],S=C[1],W=Object(r.useState)(j.items),B=Object(i.a)(W,2),I=B[0],J=B[1],z=Object(r.useState)(j.showProficiency),D=Object(i.a)(z,2),E=D[0],q=D[1],A=Object(r.useState)(j.showProficiencyProgress),F=Object(i.a)(A,2),G=F[0],H=F[1],K=Object(g.c)(),L=function(){e.setOpen(!1)};Object(r.useEffect)((function(){y&&(K(Object(O.d)({name:e.componentName,column:e.componentColumn,data:j})),w(!0))}),[j]);var M=function(e){var t=25;switch(e){default:t=25;break;case"Intermediate":t=50;break;case"Proficient":t=75;break;case"Native":t=100}return t};return Object(v.jsxs)(h.a,{maxWidth:"sm",fullWidth:!0,open:e.open,onClose:L,children:[Object(v.jsx)(p.a,{children:Object(v.jsxs)("div",{className:"editor-wrap",children:[Object(v.jsx)("div",{className:"editor-heading-wrap",children:Object(v.jsx)(s.a,{fullWidth:!0,autoComplete:"off",onChange:function(e){var t=e.target.value;S(t)},value:N,variant:"standard"})}),Object(v.jsxs)("div",{className:"editor-options-wrap",children:[Object(v.jsxs)("div",{children:["Show Proficiency: ",Object(v.jsx)(o.a,{label:"Proficiency",onChange:function(e){return function(e){q(e.target.checked)}(e)},checked:E})]}),Object(v.jsxs)("div",{children:["Show Proficiency Progress: ",Object(v.jsx)(o.a,{label:"Proficiency Progress",onChange:function(e){return function(e){H(e.target.checked)}(e)},checked:G})]})]}),Object(v.jsx)("div",{className:"editor-items-wrap",children:I.map((function(e,t){return Object(v.jsxs)("div",{className:"editor-item",children:[Object(v.jsx)(s.a,{label:"Option "+(t+1),sx:{mb:1,mt:1,mr:1},onChange:function(e){return function(e,t){var a=Object(n.a)(I);a[t]={language:e.target.value,proficiency:"Beginner"},J(a)}(e,t)},value:e.language,"data-key":t,size:"small"}),Object(v.jsxs)("div",{className:"progress-wrap",children:[e.proficiency,Object(v.jsx)(l.a,{"aria-label":"Proficiency",value:M(e.proficiency),step:25,marks:!0,min:25,max:100,onChange:function(e){return function(e,t){var a=Object(n.a)(I);switch(e.target.value){default:a[t]={language:a[t].language,proficiency:"Beginner"};break;case 50:a[t]={language:a[t].language,proficiency:"Intermediate"};break;case 75:a[t]={language:a[t].language,proficiency:"Proficient"};break;case 100:a[t]={language:a[t].language,proficiency:"Native"}}J(a)}(e,t)}})]}),Object(v.jsx)(b.a,{onClick:function(e){return function(e,t){var a=Object(n.a)(I);a.splice(t+1,0,{language:""}),J(a)}(0,t)},className:"add-item-icon"}),Object(v.jsx)(f.a,{onClick:function(e){return function(e,t){var a=Object(n.a)(I);a.splice(t,1),J(a)}(0,t)},className:"delete-item-icon ".concat(0===t?"d-none":"")})]},t)}))})]})}),Object(v.jsxs)(m.a,{children:[Object(v.jsx)(u.a,{onClick:L,children:"Cancel"}),Object(v.jsx)(u.a,{onClick:function(e){d(Object(c.a)(Object(c.a)({},j),{},{title:N,showProficiency:E,showProficiencyProgress:G,items:I.filter((function(e,t){return e.language.length>0}))})),w(!0)},disabled:!I.filter((function(e){return e.language.length>0})).length,children:"Save"})]})]})}}}]);
//# sourceMappingURL=14.d0e5d10a.chunk.js.map