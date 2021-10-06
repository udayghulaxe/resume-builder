(this["webpackJsonpresume-builder"]=this["webpackJsonpresume-builder"]||[]).push([[0],{100:function(e,n,t){"use strict";t.r(n);var c=t(0),i=t(49),a=t.n(i),s=(t(87),t(88),t(29)),r=t(13),l=t(37),o=t(128),j=t(129),d=t(126),u=t(127),h=t(121),b=t.p+"static/media/logo.6ce24c58.svg",x=t(35),m=t(36),O=t(39),p=t(38),g=t(130),f=t(55),v={isSignedIn:null!=localStorage.getItem("token")},y=Object(f.b)({name:"auth",initialState:v,reducers:{signInAction:function(e,n){console.log("coming here singIN"),e.isSignedIn=!0},signOutAction:function(e){console.log("coming here singOut"),e.isSignedIn=!1}}}),N=y.actions,S=N.signInAction,A=N.signOutAction,I=y.reducer,k=t(1),w=function(e){Object(O.a)(t,e);var n=Object(p.a)(t);function t(){var e;Object(x.a)(this,t);for(var c=arguments.length,i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];return(e=n.call.apply(n,[this].concat(i))).onAuthChange=function(n){n?e.props.signInAction("somedata"):e.props.signOutAction()},e.onSignInClick=function(){e.auth.signIn().then((function(){e.props.signInAction("somedata"),localStorage.setItem("token",e.auth.currentUser.get().getAuthResponse().id_token),e.props.history.replace("builder")}))},e.onSignOutClick=function(){e.auth.signOut().then((function(){localStorage.removeItem("token"),e.props.signOutAction()}))},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",(function(){window.gapi.client.init({clientId:"1051932499833-smce802vivdpiijmo5bg4donrr6n40fg.apps.googleusercontent.com",scope:"email profile"}).then((function(){e.auth=window.gapi.auth2.getAuthInstance(),e.onAuthChange(e.auth.isSignedIn.get()),e.auth.isSignedIn.listen(e.onAuthChange)}))}))}},{key:"renderAuthButton",value:function(){return null===this.props.isSignedIn?Object(k.jsx)("div",{className:"header-login-button-wrap",children:Object(k.jsx)(g.a,{className:"login-loader",size:18})}):this.props.isSignedIn?Object(k.jsx)(h.a,{onClick:this.onSignOutClick,variant:"contained",color:"primary",disableElevation:!0,className:"header-login-button",children:"Logout"}):Object(k.jsx)(h.a,{onClick:this.onSignInClick,variant:"contained",color:"primary",disableElevation:!0,className:"header-login-button",children:"Create Resume"})}},{key:"render",value:function(){return this.renderAuthButton()}}]),t}(c.Component),C={signInAction:S,signOutAction:A},E=Object(l.b)((function(e){return{isSignedIn:e.authReduce.isSignedIn}}),C)(Object(r.h)(w)),z=(t(95),function(){return"/builder"!==Object(r.g)().pathname?Object(k.jsx)(j.a,{sx:{flexGrow:1},children:Object(k.jsx)(d.a,{elevation:0,className:"global-header",color:"transparent",position:"static",children:Object(k.jsxs)(u.a,{children:[Object(k.jsx)("img",{src:b,className:"header-logo",alt:"Resume Builder"}),Object(k.jsx)("div",{className:"header-logo-text",children:Object(k.jsx)("span",{children:"Resume Builder"})}),Object(k.jsxs)("nav",{children:[Object(k.jsx)(h.a,{component:s.b,to:"/",exact:!0,variant:"text",color:"primary",disableElevation:!0,className:"mobile-d-none header-menu-link",children:"Home"}),Object(k.jsx)(h.a,{component:s.b,to:"/about",variant:"text",color:"primary",disableElevation:!0,className:"mobile-d-none header-menu-link",children:"About"}),Object(k.jsx)(h.a,{component:s.b,to:"/contact",variant:"text",color:"primary",disableElevation:!0,className:"mobile-d-none header-menu-link",children:"Contact"}),Object(k.jsx)(E,{})]})]})})}):Object(k.jsx)("span",{})}),B=function(e){Object(O.a)(t,e);var n=Object(p.a)(t);function t(){return Object(x.a)(this,t),n.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return Object(k.jsx)(o.a,{maxWidth:"sm",children:Object(k.jsx)(j.a,{m:"auto",textAlign:"center",children:Object(k.jsx)("h1",{children:"About"})})})}}]),t}(c.Component),R=B,M=function(e){Object(O.a)(t,e);var n=Object(p.a)(t);function t(){return Object(x.a)(this,t),n.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return Object(k.jsx)(o.a,{maxWidth:"sm",children:Object(k.jsx)(j.a,{m:"auto",textAlign:"center",children:Object(k.jsx)("h1",{children:"Contact"})})})}}]),t}(c.Component),G=M,U=(t(96),t(122)),H=t(131),L=t(41),W=t(124),D=t(9),J=t(73),P=t.n(J),T=t(74),F=t.n(T),_=t(75),q=t.n(_),K=t(76),Q=t.n(K),V=(t(97),Object(D.a)(j.a)((function(e){var n=e.theme;return Object(L.a)(Object(L.a)({},n.typography.caption),{},{textAlign:"left",display:"flex",alignItems:"center",color:n.palette.text.secondary})}))),X=function(){return Object(k.jsxs)("div",{className:"resume-section resume-section-basic-info",children:[Object(k.jsx)("h1",{className:"basic-info name",children:"Uday Ghulaxe"}),Object(k.jsx)("p",{className:"basic-info current-role",children:"Front-end Developer"}),Object(k.jsx)("div",{children:Object(k.jsxs)(W.a,{mt:1,container:!0,justifyContent:"center",alignItems:"center",rowSpacing:.5,columnSpacing:{xs:.5,sm:.5,md:.5},children:[Object(k.jsx)(W.a,{item:!0,xs:6,children:Object(k.jsxs)(V,{children:[Object(k.jsx)(P.a,{fontSize:"15"}),Object(k.jsx)(j.a,{component:"span",sx:{pl:1},children:"8794567161"})]})}),Object(k.jsx)(W.a,{item:!0,xs:6,children:Object(k.jsxs)(V,{children:[Object(k.jsx)(F.a,{fontSize:"15"}),Object(k.jsx)(j.a,{component:"span",sx:{pl:1},children:"hello@gmail.com"})]})}),Object(k.jsx)(W.a,{item:!0,xs:6,children:Object(k.jsxs)(V,{children:[Object(k.jsx)(q.a,{fontSize:"15"}),Object(k.jsx)(j.a,{component:"span",sx:{pl:1},children:"www.resume-builder.me"})]})}),Object(k.jsx)(W.a,{item:!0,xs:6,children:Object(k.jsxs)(V,{children:[Object(k.jsx)(Q.a,{fontSize:"15"}),Object(k.jsx)(j.a,{component:"span",sx:{pl:1},children:"Cleverland, OH"})]})})]})})]})},Y=t(65),Z=t.n(Y),$=t(66),ee=t.n($),ne=(t(98),Object(D.a)(j.a)((function(e){var n=e.theme;return Object(L.a)(Object(L.a)({},n.typography.caption),{},{textAlign:"left",display:"flex",alignItems:"center",color:n.palette.text.secondary})}))),te=function(){return Object(k.jsxs)("div",{className:"resume-section resume-section-education",children:[Object(k.jsx)("span",{className:"resume-section-title",children:"Education"}),Object(k.jsxs)("div",{className:"education-item-wrap",children:[Object(k.jsxs)("div",{className:"education-item",children:[Object(k.jsx)("span",{className:"education-title full-width-field",children:"Executive MBA, Engineering Management"}),Object(k.jsx)("span",{className:"education-university full-width-field",children:"The University of Arizona"}),Object(k.jsxs)(W.a,{container:!0,justifyContent:"center",alignItems:"center",rowSpacing:.5,columnSpacing:{xs:.5,sm:.5,md:.5},children:[Object(k.jsx)(W.a,{item:!0,xs:6,children:Object(k.jsxs)(ne,{children:[Object(k.jsx)(Z.a,{fontSize:"15"}),Object(k.jsx)(j.a,{component:"span",sx:{pl:1},children:"2010 - 2014"})]})}),Object(k.jsx)(W.a,{item:!0,xs:6,children:Object(k.jsxs)(ne,{children:[Object(k.jsx)(ee.a,{fontSize:"15"}),Object(k.jsx)(j.a,{component:"span",sx:{pl:1},children:"CGPA 09/10"})]})})]})]}),Object(k.jsxs)("div",{className:"education-item",children:[Object(k.jsx)("span",{className:"education-title full-width-field",children:"Executive MBA, Engineering Management"}),Object(k.jsx)("span",{className:"education-university full-width-field",children:"The University of Arizona"}),Object(k.jsxs)(W.a,{container:!0,justifyContent:"center",alignItems:"center",rowSpacing:.5,columnSpacing:{xs:.5,sm:.5,md:.5},children:[Object(k.jsx)(W.a,{item:!0,xs:6,children:Object(k.jsxs)(ne,{children:[Object(k.jsx)(Z.a,{fontSize:"15"}),Object(k.jsx)(j.a,{component:"span",sx:{pl:1},children:"2010 - 2014"})]})}),Object(k.jsx)(W.a,{item:!0,xs:6,children:Object(k.jsxs)(ne,{children:[Object(k.jsx)(ee.a,{fontSize:"15"}),Object(k.jsx)(j.a,{component:"span",sx:{pl:1},children:"CGPA 09/10"})]})})]})]})]})]})};var ce=function(){return Object(k.jsxs)("div",{className:"builder-wrap",children:[Object(k.jsx)(j.a,{sx:{flexGrow:1},children:Object(k.jsx)(d.a,{elevation:0,className:"global-header",color:"inherit",position:"fixed",children:Object(k.jsxs)(u.a,{children:[Object(k.jsx)("img",{src:b,className:"header-logo",alt:"Resume Builder"}),Object(k.jsxs)("div",{children:[Object(k.jsx)(U.a,{underline:"none",className:"builder-header-menu-link active",href:"#",children:"About"}),Object(k.jsx)(U.a,{underline:"none",className:"builder-header-menu-link",href:"#",children:"Experience"}),Object(k.jsx)(U.a,{underline:"none",className:"builder-header-menu-link",href:"#",children:"Education"}),Object(k.jsx)(U.a,{underline:"none",className:"builder-header-menu-link",href:"#",children:"Skills"}),Object(k.jsx)(U.a,{underline:"none",className:"builder-header-menu-link",href:"#",children:"Languages"}),Object(k.jsx)(U.a,{underline:"none",className:"builder-header-menu-link",href:"#",children:"Awards"})]})]})})}),Object(k.jsx)("div",{className:"resume-paper-wrap",children:Object(k.jsx)(H.a,{className:"resume-paper",elevation:3,children:Object(k.jsxs)("div",{className:"resume-paper-content",children:[Object(k.jsx)(X,{}),Object(k.jsx)(te,{}),Object(k.jsx)(te,{}),Object(k.jsx)(te,{})]})})})]})};var ie=function(){var e=Object(l.c)((function(e){return e.authReduce.isSignedIn}));return Object(k.jsxs)(s.a,{children:[Object(k.jsx)(z,{}),Object(k.jsx)("div",{children:Object(k.jsxs)(r.d,{children:[Object(k.jsxs)(r.b,{path:"/builder",children:[(e||null!==localStorage.getItem("token"))&&Object(k.jsx)(ce,{}),!e&&null==localStorage.getItem("token")&&Object(k.jsx)(r.a,{to:"/"})]}),Object(k.jsx)(r.b,{path:"/contact",children:Object(k.jsx)(G,{})}),Object(k.jsx)(r.b,{path:"/about",children:Object(k.jsx)(R,{})}),Object(k.jsx)(r.b,{exact:!0,path:"/",children:Object(k.jsx)(o.a,{maxWidth:"sm",children:Object(k.jsx)(j.a,{m:"auto",textAlign:"center",children:Object(k.jsx)("h1",{children:"Home"})})})})]})})]})},ae=t(125),se=t(77),re=Object(se.a)({palette:{primary:{main:"#09915A"}},components:{MuiButton:{variants:[{props:{variant:"space-40",color:"primary"},style:{paddingLeft:"40px",paddingRight:"40px"}}]}}}),le=Object(f.a)({reducer:{authReduce:I}});a.a.render(Object(k.jsx)(l.a,{store:le,children:Object(k.jsx)(ae.a,{theme:re,children:Object(k.jsx)(ie,{})})}),document.getElementById("root"))},87:function(e,n,t){},88:function(e,n,t){},95:function(e,n,t){},96:function(e,n,t){},97:function(e,n,t){},98:function(e,n,t){}},[[100,1,2]]]);
//# sourceMappingURL=main.7944a776.chunk.js.map