(this["webpackJsonpresume-builder"]=this["webpackJsonpresume-builder"]||[]).push([[6],{100:function(e,n,a){},107:function(e,n,a){},108:function(e,n,a){var t={"./Achievements/Achievement":[87,9,3],"./Achievements/Achievement.css":[116,7,9],"./Achievements/Achievement.js":[87,9,3],"./App/App":[55,9],"./App/App.css":[74,7],"./App/App.js":[55,9],"./BasicInfo/BasicInfo":[88,9,0],"./BasicInfo/BasicInfo.css":[117,7,10],"./BasicInfo/BasicInfo.js":[88,9,0],"./Education/Education":[89,9,2],"./Education/Education.css":[118,7,11],"./Education/Education.js":[89,9,2],"./Experience/Experience":[90,9,1],"./Experience/Experience.css":[119,7,12],"./Experience/Experience.js":[90,9,1],"./GlobalHeader/GlobalHeader":[52,9],"./GlobalHeader/GlobalHeader.css":[76,7],"./GlobalHeader/GlobalHeader.js":[52,9],"./Languages/Languages":[92,9,4],"./Languages/Languages.css":[120,7,13],"./Languages/Languages.js":[92,9,4],"./Login/GoogleLogin":[53,9],"./Login/GoogleLogin.js":[53,9],"./Skills/Skills":[91,9,5],"./Skills/Skills.css":[121,7,14],"./Skills/Skills.js":[91,9,5]};function c(e){if(!a.o(t,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=t[e],c=n[0];return Promise.all(n.slice(2).map(a.e)).then((function(){return a.t(c,n[1])}))}c.keys=function(){return Object.keys(t)},c.id=108,e.exports=c},110:function(e,n,a){"use strict";a.r(n);a(0);var t=a(35),c=a.n(t),r=(a(100),a(55)),i=a(27),s=a(144),l=a(82),o=Object(l.a)({palette:{primary:{main:"#09915A"}},components:{MuiButton:{variants:[{props:{variant:"space-40",color:"primary"},style:{paddingLeft:"40px",paddingRight:"40px"}}]}}}),d=a(60),u=a(47),j=Object(d.a)({reducer:{authReduce:u.a}}),b=a(2);c.a.render(Object(b.jsx)(i.a,{store:j,children:Object(b.jsx)(s.a,{theme:o,children:Object(b.jsx)(r.default,{})})}),document.getElementById("root"))},47:function(e,n,a){"use strict";a.d(n,"b",(function(){return s})),a.d(n,"c",(function(){return l}));var t=a(60),c={isSignedIn:null!=localStorage.getItem("token")},r=Object(t.b)({name:"auth",initialState:c,reducers:{signInAction:function(e,n){e.isSignedIn=!0},signOutAction:function(e){e.isSignedIn=!1}}}),i=r.actions,s=i.signInAction,l=i.signOutAction;n.a=r.reducer},52:function(e,n,a){"use strict";a.r(n);a(0);var t=a(115),c=a(113),r=a(112),i=a(49),s=a(56),l=a(12),o=a(33),d=a(53),u=(a(76),a(2));n.default=function(){return"/builder"!==Object(l.g)().pathname?Object(u.jsx)(t.a,{sx:{flexGrow:1},children:Object(u.jsx)(c.a,{elevation:0,className:"global-header",color:"transparent",position:"static",children:Object(u.jsxs)(r.a,{children:[Object(u.jsx)("img",{src:s.a,className:"header-logo",alt:"Resume Builder"}),Object(u.jsx)("div",{className:"header-logo-text",children:Object(u.jsx)("span",{children:"Resume Builder"})}),Object(u.jsxs)("nav",{children:[Object(u.jsx)(i.a,{component:o.b,to:"/",exact:!0,variant:"text",color:"primary",disableElevation:!0,className:"mobile-d-none header-menu-link",children:"Home"}),Object(u.jsx)(i.a,{component:o.b,to:"/about",variant:"text",color:"primary",disableElevation:!0,className:"mobile-d-none header-menu-link",children:"About"}),Object(u.jsx)(i.a,{component:o.b,to:"/contact",variant:"text",color:"primary",disableElevation:!0,className:"mobile-d-none header-menu-link",children:"Contact"}),Object(u.jsx)(d.default,{})]})]})})}):Object(u.jsx)("span",{})}},53:function(e,n,a){"use strict";a.r(n);var t=a(37),c=a(38),r=a(41),i=a(39),s=a(0),l=a(49),o=a(114),d=a(27),u=a(47),j=a(12),b=a(2),p=function(e){Object(r.a)(a,e);var n=Object(i.a)(a);function a(){var e;Object(t.a)(this,a);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).onAuthChange=function(n){n?e.props.signInAction("somedata"):e.props.signOutAction()},e.onSignInClick=function(){e.auth.signIn().then((function(){e.props.signInAction("somedata"),localStorage.setItem("token",e.auth.currentUser.get().getAuthResponse().id_token),e.props.history.replace("builder")}))},e.onSignOutClick=function(){e.auth.signOut().then((function(){localStorage.removeItem("token"),e.props.signOutAction()}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",(function(){window.gapi.client.init({clientId:"1051932499833-smce802vivdpiijmo5bg4donrr6n40fg.apps.googleusercontent.com",scope:"email profile"}).then((function(){e.auth=window.gapi.auth2.getAuthInstance(),e.onAuthChange(e.auth.isSignedIn.get()),e.auth.isSignedIn.listen(e.onAuthChange)}))}))}},{key:"renderAuthButton",value:function(){return null===this.props.isSignedIn?Object(b.jsx)("div",{className:"header-login-button-wrap",children:Object(b.jsx)(o.a,{className:"login-loader",size:18})}):this.props.isSignedIn?Object(b.jsx)(l.a,{onClick:this.onSignOutClick,variant:"contained",color:"primary",disableElevation:!0,className:"header-login-button",children:"Logout"}):Object(b.jsx)(l.a,{onClick:this.onSignInClick,variant:"contained",color:"primary",disableElevation:!0,className:"header-login-button",children:"Create Resume"})}},{key:"render",value:function(){return this.renderAuthButton()}}]),a}(s.Component),h={signInAction:u.b,signOutAction:u.c};n.default=Object(d.b)((function(e){return{isSignedIn:e.authReduce.isSignedIn}}),h)(Object(j.h)(p))},55:function(e,n,a){"use strict";a.r(n);a(74);var t=a(33),c=a(12),r=a(27),i=a(146),s=a(115),l=a(52),o=a(37),d=a(38),u=a(41),j=a(39),b=a(0),p=a(2),h=function(e){Object(u.a)(a,e);var n=Object(j.a)(a);function a(){return Object(o.a)(this,a),n.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(p.jsx)(i.a,{maxWidth:"sm",children:Object(p.jsx)(s.a,{m:"auto",textAlign:"center",children:Object(p.jsx)("h1",{children:"About"})})})}}]),a}(b.Component),g=h,m=function(e){Object(u.a)(a,e);var n=Object(j.a)(a);function a(){return Object(o.a)(this,a),n.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(p.jsx)(i.a,{maxWidth:"sm",children:Object(p.jsx)(s.a,{m:"auto",textAlign:"center",children:Object(p.jsx)("h1",{children:"Contact"})})})}}]),a}(b.Component),O=m,x=a(5),f=a(13),v=a(17),I=a(56),k=(a(107),a(113)),A=a(112),S=a(143),N=a(145),E=a(147),y=a(62),L=a.n(y),w=a(31);var B=function(){var e=Object(b.useState)({header:[{name:"BasicInfo",path:"BasicInfo/BasicInfo"}],main:[{name:"Education",path:"Education/Education"},{name:"Experience",path:"Experience/Experience"}],sidebar:[{name:"Languages",path:"Languages/Languages"},{name:"Skills",path:"Skills/Skills"}],full:[{name:"Languages2",path:"Languages/Languages"}]}),n=Object(v.a)(e,2),t=n[0],c=n[1];function r(e){return Object(b.lazy)((function(){return a(108)("./".concat(e))}))}return Object(p.jsxs)("div",{className:"builder-wrap",children:[Object(p.jsx)(s.a,{sx:{flexGrow:1},children:Object(p.jsx)(k.a,{elevation:0,className:"global-header",color:"inherit",position:"fixed",children:Object(p.jsxs)(A.a,{children:[Object(p.jsx)("img",{src:I.a,className:"header-logo",alt:"Resume Builder"}),Object(p.jsxs)("div",{children:[Object(p.jsx)(S.a,{underline:"none",className:"builder-header-menu-link active",href:"#",children:"About"}),Object(p.jsx)(S.a,{underline:"none",className:"builder-header-menu-link",href:"#",children:"Experience"}),Object(p.jsx)(S.a,{underline:"none",className:"builder-header-menu-link",href:"#",children:"Education"}),Object(p.jsx)(S.a,{underline:"none",className:"builder-header-menu-link",href:"#",children:"Skills"}),Object(p.jsx)(S.a,{underline:"none",className:"builder-header-menu-link",href:"#",children:"Languages"}),Object(p.jsx)(S.a,{underline:"none",className:"builder-header-menu-link",href:"#",children:"Achievement"}),Object(p.jsx)(S.a,{underline:"none",className:"builder-header-menu-link",href:"#",children:"Languages"})]})]})})}),Object(p.jsx)(w.a,{onDragEnd:function(e){var n=e.destination,a=e.source,r=e.draggableId;if(n&&(n.droppableId!==a.droppableId||n.index!==a.index))if(n.droppableId===a.droppableId){var i=Array.from(t[a.droppableId]);i.splice(a.index,1),i.splice(n.index,0,t[n.droppableId].filter((function(e){return e.name===r}))[0]);var s=n.droppableId,l=Object(f.a)(Object(f.a)({},t),{},Object(x.a)({},s,i));console.log(l),c(l)}else{var o,d=a.droppableId,u=n.droppableId,j=Array.from(t[a.droppableId]),b=Array.from(t[n.droppableId]);j.splice(a.index,1),b.splice(n.index,0,t[a.droppableId].filter((function(n){return n.name===e.draggableId}))[0]);var p=Object(f.a)(Object(f.a)({},t),{},(o={},Object(x.a)(o,d,j),Object(x.a)(o,u,b),o));c(p)}},children:Object(p.jsx)("div",{className:"resume-paper-wrap",children:Object(p.jsxs)(N.a,{container:!0,spacing:2,children:[Object(p.jsx)(N.a,{item:!0,xs:8,children:Object(p.jsxs)(E.a,{className:"resume-paper",elevation:3,children:[Object(p.jsx)(b.Suspense,{fallback:Object(p.jsx)("div",{children:"Loading"}),children:t.header.map((function(e,n){var a=r("".concat(e.path));return Object(p.jsx)(a,{},e.name)}))}),Object(p.jsxs)(N.a,{container:!0,spacing:1,children:[Object(p.jsx)(N.a,{item:!0,xs:t.sidebar.length?7:12,children:Object(p.jsx)(w.c,{droppableId:"main",children:function(e,n){return Object(p.jsx)("div",Object(f.a)(Object(f.a)({ref:e.innerRef},e.droppableProps),{},{className:n.isDraggingOver?"resume-paper-content-draggin-over":"resume-paper-content",children:Object(p.jsxs)(b.Suspense,{fallback:Object(p.jsx)("div",{children:"Loading"}),children:[t.main.map((function(e,n){var a=r("".concat(e.path));return Object(p.jsx)(w.b,{draggableId:e.name,index:n,children:function(n,t){return Object(b.createElement)("div",Object(f.a)(Object(f.a)({className:t.isDragging?"component-dragging":"resume-section-wrap",ref:n.innerRef},n.draggableProps),{},{key:e.name}),Object(p.jsx)("span",Object(f.a)(Object(f.a)({className:"drag-handle"},n.dragHandleProps),{},{children:Object(p.jsx)(L.a,{})})),Object(p.jsx)(a,{}))}},e.name)})),e.placeholder]})}))}})}),t.sidebar.length?Object(p.jsx)(N.a,{item:!0,xs:5,children:Object(p.jsx)(w.c,{droppableId:"sidebar",children:function(e,n){return Object(p.jsxs)("div",Object(f.a)(Object(f.a)({ref:e.innerRef},e.droppableProps),{},{className:n.isDraggingOver?"resume-paper-content-draggin-over":"resume-paper-content",children:[e.isDragging,Object(p.jsxs)(b.Suspense,{fallback:Object(p.jsx)("div",{children:"Loading"}),children:[t.sidebar.map((function(e,n){var a=r("".concat(e.path));return Object(p.jsx)(w.b,{draggableId:e.name,index:n,children:function(n,t){return Object(b.createElement)("div",Object(f.a)(Object(f.a)({className:t.isDragging?"component-dragging":"resume-section-wrap",ref:n.innerRef},n.draggableProps),{},{key:e.name}),Object(p.jsx)("span",Object(f.a)(Object(f.a)({className:"drag-handle"},n.dragHandleProps),{},{children:Object(p.jsx)(L.a,{})})),Object(p.jsx)(a,{}))}},e.name)})),e.placeholder]})]}))}})}):null]})]})}),Object(p.jsx)(N.a,{item:!0,xs:4,children:Object(p.jsx)(E.a,{style:{padding:"20px"},className:"widget-library",elevation:0,children:Object(p.jsx)(w.c,{droppableId:"full",children:function(e,n){return Object(p.jsxs)("div",Object(f.a)(Object(f.a)({ref:e.innerRef},e.droppableProps),{},{className:n.isDraggingOver?"resume-paper-content-draggin-over":"resume-paper-content",children:[e.isDragging,Object(p.jsxs)(b.Suspense,{fallback:Object(p.jsx)("div",{children:"Loading"}),children:[t.full.map((function(e,n){var a=r("".concat(e.path));return Object(p.jsx)(w.b,{draggableId:e.name,index:n,children:function(n,t){return Object(b.createElement)("div",Object(f.a)(Object(f.a)({className:t.isDragging?"component-dragging":"resume-section-wrap",ref:n.innerRef},n.draggableProps),{},{key:e.name}),Object(p.jsx)("span",Object(f.a)(Object(f.a)({className:"drag-handle"},n.dragHandleProps),{},{children:Object(p.jsx)(L.a,{})})),Object(p.jsx)(a,{}))}},e.name)})),e.placeholder]})]}))}})})})]})})})]})};n.default=function(){var e=Object(r.c)((function(e){return e.authReduce.isSignedIn}));return Object(p.jsxs)(t.a,{children:[Object(p.jsx)(l.default,{}),Object(p.jsx)("div",{children:Object(p.jsxs)(c.d,{children:[Object(p.jsxs)(c.b,{path:"/builder",children:[(e||null!==localStorage.getItem("token"))&&Object(p.jsx)(B,{}),!e&&null==localStorage.getItem("token")&&Object(p.jsx)(c.a,{to:"/"})]}),Object(p.jsx)(c.b,{path:"/contact",children:Object(p.jsx)(O,{})}),Object(p.jsx)(c.b,{path:"/about",children:Object(p.jsx)(g,{})}),Object(p.jsx)(c.b,{exact:!0,path:"/",children:Object(p.jsx)(i.a,{maxWidth:"sm",children:Object(p.jsx)(s.a,{m:"auto",textAlign:"center",children:Object(p.jsx)("h1",{children:"Home Page"})})})})]})})]})}},56:function(e,n,a){"use strict";n.a=a.p+"static/media/logo.6ce24c58.svg"},74:function(e,n,a){},76:function(e,n,a){}},[[110,7,8]]]);
//# sourceMappingURL=main.b1fd0af4.chunk.js.map