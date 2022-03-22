(this["webpackJsonpresume-builder"]=this["webpackJsonpresume-builder"]||[]).push([[1],{256:function(e,t,a){"use strict";var r=a(74);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a(75)),o=a(2),n=(0,i.default)((0,o.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"}),"AddCircle");t.default=n},259:function(e,t,a){"use strict";var r=a(6),i=a(8),o=a(1),n=a(0),l=(a(20),a(13)),c=a(231),d=a(237),s=a(11),p=a(245),u=a(240),b=a(78),v=a(252),h=a(18),f=a(9),m=a(178),g=a(232);function j(e){return Object(m.a)("MuiDialog",e)}var x=Object(g.a)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]);var O=Object(n.createContext)({}),w=a(249),S=a(2),W=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],k=Object(f.a)(w.a,{name:"MuiDialog",slot:"Backdrop",overrides:function(e,t){return t.backdrop}})({zIndex:-1}),C=Object(f.a)(p.a,{name:"MuiDialog",slot:"Root",overridesResolver:function(e,t){return t.root}})({"@media print":{position:"absolute !important"}}),D=Object(f.a)("div",{name:"MuiDialog",slot:"Container",overridesResolver:function(e,t){var a=e.ownerState;return[t.container,t["scroll".concat(Object(s.a)(a.scroll))]]}})((function(e){var t=e.ownerState;return Object(o.a)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===t.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===t.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})})),y=Object(f.a)(v.a,{name:"MuiDialog",slot:"Paper",overridesResolver:function(e,t){var a=e.ownerState;return[t.paper,t["scrollPaper".concat(Object(s.a)(a.scroll))],t["paperWidth".concat(Object(s.a)(String(a.maxWidth)))],a.fullWidth&&t.paperFullWidth,a.fullScreen&&t.paperFullScreen]}})((function(e){var t=e.theme,a=e.ownerState;return Object(o.a)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===a.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===a.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!a.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===a.maxWidth&&Object(r.a)({maxWidth:"px"===t.breakpoints.unit?Math.max(t.breakpoints.values.xs,444):"".concat(t.breakpoints.values.xs).concat(t.breakpoints.unit)},"&.".concat(x.paperScrollBody),Object(r.a)({},t.breakpoints.down(Math.max(t.breakpoints.values.xs,444)+64),{maxWidth:"calc(100% - 64px)"})),"xs"!==a.maxWidth&&Object(r.a)({maxWidth:"".concat(t.breakpoints.values[a.maxWidth]).concat(t.breakpoints.unit)},"&.".concat(x.paperScrollBody),Object(r.a)({},t.breakpoints.down(t.breakpoints.values[a.maxWidth]+64),{maxWidth:"calc(100% - 64px)"})),a.fullWidth&&{width:"calc(100% - 64px)"},a.fullScreen&&Object(r.a)({margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0},"&.".concat(x.paperScrollBody),{margin:0,maxWidth:"100%"}))})),M={enter:b.b.enteringScreen,exit:b.b.leavingScreen},A=n.forwardRef((function(e,t){var a=Object(h.a)({props:e,name:"MuiDialog"}),r=a["aria-describedby"],p=a["aria-labelledby"],b=a.BackdropComponent,f=a.BackdropProps,m=a.children,g=a.className,x=a.disableEscapeKeyDown,w=void 0!==x&&x,A=a.fullScreen,R=void 0!==A&&A,B=a.fullWidth,P=void 0!==B&&B,N=a.maxWidth,I=void 0===N?"sm":N,T=a.onBackdropClick,L=a.onClose,F=a.open,V=a.PaperComponent,z=void 0===V?v.a:V,Y=a.PaperProps,E=void 0===Y?{}:Y,K=a.scroll,X=void 0===K?"paper":K,H=a.TransitionComponent,J=void 0===H?u.a:H,_=a.transitionDuration,q=void 0===_?M:_,G=a.TransitionProps,Q=Object(i.a)(a,W),U=Object(o.a)({},a,{disableEscapeKeyDown:w,fullScreen:R,fullWidth:P,maxWidth:I,scroll:X}),Z=function(e){var t=e.classes,a=e.scroll,r=e.maxWidth,i=e.fullWidth,o=e.fullScreen,n={root:["root"],container:["container","scroll".concat(Object(s.a)(a))],paper:["paper","paperScroll".concat(Object(s.a)(a)),"paperWidth".concat(Object(s.a)(String(r))),i&&"paperFullWidth",o&&"paperFullScreen"]};return Object(c.a)(n,j,t)}(U),$=n.useRef(),ee=Object(d.a)(p),te=n.useMemo((function(){return{titleId:ee}}),[ee]);return Object(S.jsx)(C,Object(o.a)({className:Object(l.a)(Z.root,g),BackdropProps:Object(o.a)({transitionDuration:q,as:b},f),closeAfterTransition:!0,BackdropComponent:k,disableEscapeKeyDown:w,onClose:L,open:F,ref:t,onClick:function(e){$.current&&($.current=null,T&&T(e),L&&L(e,"backdropClick"))},ownerState:U},Q,{children:Object(S.jsx)(J,Object(o.a)({appear:!0,in:F,timeout:q,role:"presentation"},G,{children:Object(S.jsx)(D,{className:Object(l.a)(Z.container),onMouseDown:function(e){$.current=e.target===e.currentTarget},ownerState:U,children:Object(S.jsx)(y,Object(o.a)({as:z,elevation:24,role:"dialog","aria-describedby":r,"aria-labelledby":ee},E,{className:Object(l.a)(Z.paper,E.className),ownerState:U,children:Object(S.jsx)(O.Provider,{value:te,children:m})}))})}))}))}));t.a=A},260:function(e,t,a){"use strict";var r=a(8),i=a(1),o=a(0),n=(a(20),a(13)),l=a(231),c=a(9),d=a(18),s=a(178),p=a(232);function u(e){return Object(s.a)("MuiDialogContent",e)}Object(p.a)("MuiDialogContent",["root","dividers"]);var b=a(2),v=["className","dividers"],h=Object(c.a)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.dividers&&t.dividers]}})((function(e){var t=e.theme,a=e.ownerState;return Object(i.a)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},a.dividers?{padding:"16px 24px",borderTop:"1px solid ".concat(t.palette.divider),borderBottom:"1px solid ".concat(t.palette.divider)}:{".MuiDialogTitle-root + &":{paddingTop:0}})})),f=o.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiDialogContent"}),o=a.className,c=a.dividers,s=void 0!==c&&c,p=Object(r.a)(a,v),f=Object(i.a)({},a,{dividers:s}),m=function(e){var t=e.classes,a={root:["root",e.dividers&&"dividers"]};return Object(l.a)(a,u,t)}(f);return Object(b.jsx)(h,Object(i.a)({className:Object(n.a)(m.root,o),ownerState:f,ref:t},p))}));t.a=f},261:function(e,t,a){"use strict";var r=a(8),i=a(1),o=a(0),n=(a(20),a(13)),l=a(231),c=a(9),d=a(18),s=a(178),p=a(232);function u(e){return Object(s.a)("MuiDialogActions",e)}Object(p.a)("MuiDialogActions",["root","spacing"]);var b=a(2),v=["className","disableSpacing"],h=Object(c.a)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,!a.disableSpacing&&t.spacing]}})((function(e){var t=e.ownerState;return Object(i.a)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),f=o.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiDialogActions"}),o=a.className,c=a.disableSpacing,s=void 0!==c&&c,p=Object(r.a)(a,v),f=Object(i.a)({},a,{disableSpacing:s}),m=function(e){var t=e.classes,a={root:["root",!e.disableSpacing&&"spacing"]};return Object(l.a)(a,u,t)}(f);return Object(b.jsx)(h,Object(i.a)({className:Object(n.a)(m.root,o),ownerState:f,ref:t},p))}));t.a=f},275:function(e,t,a){"use strict";var r=a(8),i=a(1),o=a(0),n=(a(20),a(13)),l=a(231),c=a(234),d=a(9),s=a(18),p=a(178),u=a(232);function b(e){return Object(p.a)("MuiDivider",e)}Object(u.a)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var v=a(2),h=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],f=Object(d.a)("div",{name:"MuiDivider",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.absolute&&t.absolute,t[a.variant],a.light&&t.light,"vertical"===a.orientation&&t.vertical,a.flexItem&&t.flexItem,a.children&&t.withChildren,a.children&&"vertical"===a.orientation&&t.withChildrenVertical,"right"===a.textAlign&&"vertical"!==a.orientation&&t.textAlignRight,"left"===a.textAlign&&"vertical"!==a.orientation&&t.textAlignLeft]}})((function(e){var t=e.theme,a=e.ownerState;return Object(i.a)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:t.palette.divider,borderBottomWidth:"thin"},a.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},a.light&&{borderColor:Object(c.a)(t.palette.divider,.08)},"inset"===a.variant&&{marginLeft:72},"middle"===a.variant&&"horizontal"===a.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===a.variant&&"vertical"===a.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===a.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},a.flexItem&&{alignSelf:"stretch",height:"auto"})}),(function(e){var t=e.theme,a=e.ownerState;return Object(i.a)({},a.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:"thin solid ".concat(t.palette.divider),top:"50%",content:'""',transform:"translateY(50%)"}})}),(function(e){var t=e.theme,a=e.ownerState;return Object(i.a)({},a.children&&"vertical"===a.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:"thin solid ".concat(t.palette.divider),transform:"translateX(0%)"}})}),(function(e){var t=e.ownerState;return Object(i.a)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),m=Object(d.a)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:function(e,t){var a=e.ownerState;return[t.wrapper,"vertical"===a.orientation&&t.wrapperVertical]}})((function(e){var t=e.theme,a=e.ownerState;return Object(i.a)({display:"inline-block",paddingLeft:t.spacing(1.2),paddingRight:t.spacing(1.2)},"vertical"===a.orientation&&{paddingTop:t.spacing(1.2),paddingBottom:t.spacing(1.2)})})),g=o.forwardRef((function(e,t){var a=Object(s.a)({props:e,name:"MuiDivider"}),o=a.absolute,c=void 0!==o&&o,d=a.children,p=a.className,u=a.component,g=void 0===u?d?"div":"hr":u,j=a.flexItem,x=void 0!==j&&j,O=a.light,w=void 0!==O&&O,S=a.orientation,W=void 0===S?"horizontal":S,k=a.role,C=void 0===k?"hr"!==g?"separator":void 0:k,D=a.textAlign,y=void 0===D?"center":D,M=a.variant,A=void 0===M?"fullWidth":M,R=Object(r.a)(a,h),B=Object(i.a)({},a,{absolute:c,component:g,flexItem:x,light:w,orientation:W,role:C,textAlign:y,variant:A}),P=function(e){var t=e.absolute,a=e.children,r=e.classes,i=e.flexItem,o=e.light,n=e.orientation,c=e.textAlign,d={root:["root",t&&"absolute",e.variant,o&&"light","vertical"===n&&"vertical",i&&"flexItem",a&&"withChildren",a&&"vertical"===n&&"withChildrenVertical","right"===c&&"vertical"!==n&&"textAlignRight","left"===c&&"vertical"!==n&&"textAlignLeft"],wrapper:["wrapper","vertical"===n&&"wrapperVertical"]};return Object(l.a)(d,b,r)}(B);return Object(v.jsx)(f,Object(i.a)({as:g,className:Object(n.a)(P.root,p),role:C,ref:t,ownerState:B},R,{children:d?Object(v.jsx)(m,{className:P.wrapper,ownerState:B,children:d}):null}))}));t.a=g}}]);
//# sourceMappingURL=1.c8b25adf.chunk.js.map