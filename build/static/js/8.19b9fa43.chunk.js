(this["webpackJsonpresume-builder"]=this["webpackJsonpresume-builder"]||[]).push([[8,12,21],{135:function(e,t,n){"use strict";n.r(t);var c=n(25),a=n(23),i=n(15),l=n(0),o=n(234),s=n(265),d=n(85),r=n(244),u=n.n(r),j=n(245),m=n.n(j),b=n(39),O=n(74),p=n(259),f=n(261),h=n(260),v=n(2);t.default=function(e){var t=Object(l.useState)(e.editorData),n=Object(i.a)(t,2),r=n[0],j=n[1],x=Object(l.useState)(!1),k=Object(i.a)(x,2),g=k[0],C=k[1],N=Object(l.useState)(r.title),S=Object(i.a)(N,2),w=S[0],D=S[1],I=Object(l.useState)(r.items),z=Object(i.a)(I,2),M=z[0],W=z[1],y=Object(l.useState)(r.rounded),E=Object(i.a)(y,2),F=E[0],J=E[1],L=Object(l.useState)(r.filled),R=Object(i.a)(L,2),_=R[0],P=R[1],V=Object(b.c)(),q=function(){e.setOpen(!1)};return Object(l.useEffect)((function(){g&&(V(Object(O.d)({name:e.componentName,column:e.componentColumn,data:r})),C(!0))}),[r]),Object(v.jsxs)(p.a,{maxWidth:"sm",fullWidth:!0,open:e.open,onClose:q,children:[Object(v.jsx)(h.a,{children:Object(v.jsxs)("div",{className:"editor-wrap",children:[Object(v.jsx)("div",{className:"editor-heading-wrap",children:Object(v.jsx)(o.a,{fullWidth:!0,autoComplete:"off",onChange:function(e){var t=e.target.value;D(t)},value:w,variant:"standard"})}),Object(v.jsxs)("div",{className:"editor-options-wrap",children:[Object(v.jsxs)("div",{children:["Rounded: ",Object(v.jsx)(s.a,{label:"Rounded",onChange:function(e){J(e.target.checked)},checked:F})]}),Object(v.jsxs)("div",{children:["Filled: ",Object(v.jsx)(s.a,{label:"Filled",onChange:function(e){P(e.target.checked)},checked:_})]})]}),Object(v.jsx)("div",{className:"editor-items-wrap",children:M.map((function(e,t){return Object(v.jsxs)("div",{className:"editor-item",children:[Object(v.jsx)(o.a,{label:"Option "+(t+1),sx:{mb:1,mt:1,mr:1},onChange:function(e){return function(e,t){var n=Object(a.a)(M);n[t]={title:e.target.value},W(n)}(e,t)},value:e.title,"data-key":t,size:"small"}),Object(v.jsx)(u.a,{onClick:function(e){return function(e,t){var n=Object(a.a)(M);n.splice(t+1,0,{title:""}),W(n)}(0,t)},className:"add-item-icon"}),Object(v.jsx)(m.a,{onClick:function(e){return function(e,t){var n=Object(a.a)(M);n.splice(t,1),W(n)}(0,t)},className:"delete-item-icon ".concat(0===t?"d-none":"")})]},t)}))})]})}),Object(v.jsxs)(f.a,{children:[Object(v.jsx)(d.a,{onClick:q,children:"Cancel"}),Object(v.jsx)(d.a,{onClick:function(e){j(Object(c.a)(Object(c.a)({},r),{},{rounded:F,filled:_,title:w,items:M.filter((function(e,t){return e.title.length>0}))})),C(!0),console.log(r)},disabled:!M.filter((function(e){return e.title.length>0})).length,children:"Save"})]})]})}},141:function(e,t,n){"use strict";n.r(t);var c=n(15),a=n(0),i=n.n(a),l=n(241),o=n(246),s=n.n(o),d=n(135),r=(n(187),n(2)),u=function(e){var t=Object(a.useState)(!1),n=Object(c.a)(t,2),i=n[0],o=n[1];console.log("calling skills",i);return Object(r.jsxs)("div",{className:"resume-section resume-section-skills",children:[Object(r.jsxs)("div",{className:"resume-section-title",children:[Object(r.jsx)("span",{children:e.componentItem.componentData.title}),Object(r.jsx)("span",{className:"edit-component-icon",children:Object(r.jsx)(s.a,{onClick:function(){o(!0)}})})]}),Object(r.jsx)("div",{className:"skills-item-wrap",children:e.componentItem.componentData.items.map((function(t,n){return Object(r.jsx)(l.a,{label:t.title,className:"skills-chip ".concat(e.componentItem.componentData.rounded?"":"no-rounded"),variant:e.componentItem.componentData.filled?"filled":"outlined"},n)}))}),Object(r.jsx)(d.default,{open:i,setOpen:o,componentColumn:e.componentColumn,componentName:e.componentItem.name,editorData:e.componentItem.componentData})]})};t.default=i.a.memo(u)},187:function(e,t,n){},246:function(e,t,n){"use strict";var c=n(130);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(131)),i=n(2),l=(0,a.default)((0,i.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.default=l}}]);
//# sourceMappingURL=8.19b9fa43.chunk.js.map