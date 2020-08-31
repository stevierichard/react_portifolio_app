(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{128:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(16),c=t.n(o),i=(t(86),t(87),t(152)),l=t(153),m=t(31),s=t(154),d=t(130),p=t(20),u=Object(d.a)((function(e){return{root:{flexGrow:1,backgroundColor:"black"},title:{flexGrow:1},navlink:{color:"#fff"}}})),g=function(){var e=u();return r.a.createElement("div",null,r.a.createElement(i.a,{position:"static"},r.a.createElement(l.a,null,r.a.createElement(m.a,{className:e.title},"Steven Simon"),r.a.createElement(p.b,{to:"/about",className:"navlinkcss"},r.a.createElement(s.a,{className:e.navlink},"About")),r.a.createElement(p.b,{to:"/portfolio",className:"navlinkcss"},r.a.createElement(s.a,{className:e.navlink},"Portfolio")),r.a.createElement(p.b,{to:"/contact",className:"navlinkcss"},r.a.createElement(s.a,{className:e.navlink},"Contact")))))},h=t(7),f=t(155),E=t(157),v=t(158),b=t(160),x=t(159),y=t(156),k=t(63),S=t.n(k);function w(){return r.a.createElement(m.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",(new Date).getFullYear(),".")}var C=Object(f.a)((function(e){return{root:{maxWidth:"default"},media:{height:"70vh",maxWidth:"500px",maxHeight:"500px"},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)},icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},container:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh"}}})),j=function(){var e=C();return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{className:e.container},r.a.createElement(E.a,{className:e.root},r.a.createElement(v.a,null,r.a.createElement(x.a,{className:e.media,image:S.a,title:"steven image"}),r.a.createElement(b.a,null,r.a.createElement(m.a,{gutterBottom:!0,variant:"h5",component:"h2"},"About"),r.a.createElement(m.a,{variant:"body2",color:"textSecondary",component:"p"},"My name is Steven Simon, a Tanzania native born and raised, live in California. I'm a graduate of College of Business Education my major is business administration and management.I have a vast experience in IT sales and management. My passion in solving business problems and my love for programming have led me to take this bootcamp course."))))),r.a.createElement("footer",{className:e.footer},r.a.createElement(m.a,{variant:"h6",align:"center",gutterBottom:!0},"Developed By"),r.a.createElement(m.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p"},"Steven Richard Simon!"),r.a.createElement(w,null)))},N=t(30),B=t(71),P=t(165),T=t(73),W=t(46),D=t.n(W),G=t(47),O=t.n(G),I=t(64),M=t.n(I),R=t(65),F=t(161),A=t(66),H=t.n(A),z=t(67),Y=t.n(z),J=t(68),L=t.n(J),_=t(69),q=t.n(_),$=t(70),K=t.n($);function Q(){return r.a.createElement(m.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",(new Date).getFullYear(),".")}var U=Object(R.autoPlay)(M.a),V=[{label:"Stock Tracker App",imgPath:H.a},{label:"Weather App",imgPath:Y.a},{label:"Password Generator App",imgPath:L.a},{label:"Calender App",imgPath:q.a},{label:"Readme Code",imgPath:K.a}],X=Object(f.a)((function(e){return{root:{maxWidth:400,flexGrow:1},header:{display:"flex",alignItems:"center",height:50,paddingLeft:e.spacing(4),backgroundColor:e.palette.background.default},img:{height:"50vh",display:"block",maxWidth:400,overflow:"hidden",width:"100%"},container:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh"}}})),Z=function(){var e=X(),a=Object(B.a)(),t=r.a.useState(0),n=Object(N.a)(t,2),o=n[0],c=n[1],i=V.length;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{className:e.container},r.a.createElement("div",{className:e.root},r.a.createElement(T.a,{square:!0,elevation:0,className:e.header},r.a.createElement(m.a,null,V[o].label)),r.a.createElement(U,{axis:"rtl"===a.direction?"x-reverse":"x",index:o,onChangeIndex:function(e){c(e)},enableMouseEvents:!0},V.map((function(a,t){return r.a.createElement("div",{key:a.label},Math.abs(o-t)<=2?r.a.createElement("img",{className:e.img,src:a.imgPath,alt:a.label}):null)}))),r.a.createElement(P.a,{steps:i,position:"static",variant:"text",activeStep:o,nextButton:r.a.createElement(s.a,{size:"small",onClick:function(){c((function(e){return e+1}))},disabled:o===i-1},"Next","rtl"===a.direction?r.a.createElement(D.a,null):r.a.createElement(O.a,null)),backButton:r.a.createElement(s.a,{size:"small",onClick:function(){c((function(e){return e-1}))},disabled:0===o},"rtl"===a.direction?r.a.createElement(O.a,null):r.a.createElement(D.a,null),"Back")}),r.a.createElement(F.a,null,r.a.createElement(s.a,{variant:"contained",color:"primary",href:"https://github.com/stevierichard/StockTracker"},"StockTracker"),r.a.createElement(s.a,{variant:"contained",color:"primary",href:"https://github.com/stevierichard/WeatherDashboard"},"Weather"),r.a.createElement(s.a,{variant:"contained",color:"primary",href:"https://github.com/stevierichard/PasswordGenerator"},"Password")),r.a.createElement(F.a,null,r.a.createElement(s.a,{variant:"contained",color:"primary",href:"https://github.com/stevierichard/-DayPlanner"},"Calender"),r.a.createElement(s.a,{variant:"contained",color:"primary",href:"https://github.com/stevierichard/readMeGenerator"},"ReadMe"),r.a.createElement(s.a,{variant:"contained",color:"primary",href:"https://github.com/stevierichard/fitness_tracker"},"fitnessTracker")))),r.a.createElement("footer",{className:e.footer},r.a.createElement(m.a,{variant:"h6",align:"center",gutterBottom:!0},"Developed By"),r.a.createElement(m.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p"},"Steven Richard Simon!"),r.a.createElement(Q,null)))},ee=t(48),ae=t(162),te=t(166),ne=t(163),re=t(164),oe=t(72),ce=t.n(oe);function ie(){return r.a.createElement(m.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",(new Date).getFullYear(),".")}var le=Object(f.a)((function(e){var a;return{root:(a={maxWidth:"default",width:"100%"},Object(ee.a)(a,"maxWidth",360),Object(ee.a)(a,"backgroundColor",e.palette.background.paper),a),bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:25,marginBottom:".75rem"},pos:{marginBottom:12},media:{height:"70vh",maxWidth:"500px",maxHeight:"500px"},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)},icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},container:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh"}}})),me=function(){var e=le(),a=Object(n.useState)(!0),t=Object(N.a)(a,2);t[0],t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{className:e.container},r.a.createElement(E.a,{className:e.root},r.a.createElement(b.a,null,r.a.createElement(ae.a,{component:"nav",className:e.root,"aria-label":"mailbox folders"},r.a.createElement(te.a,null,r.a.createElement(ne.a,{primary:"Contact Info",align:"center"})),r.a.createElement(re.a,null),r.a.createElement(te.a,{divider:!0},r.a.createElement(ne.a,{primary:"Steven Simon",align:"center"})),r.a.createElement(te.a,null,r.a.createElement(ne.a,{primary:"Email: stevierichard1@gmail.com",align:"center"})),r.a.createElement(re.a,{light:!0}),r.a.createElement(te.a,null,r.a.createElement(ne.a,{primary:"Phone #: (415) 3084769",align:"center"})))),r.a.createElement(F.a,null,r.a.createElement(s.a,{variant:"contained",color:"primary",href:"https://www.linkedin.com/in/steven-richard-b2a42563"},"Linkedin"),r.a.createElement(s.a,{variant:"contained",color:"primary",href:"https://github.com/stevierichard"},"Github"),r.a.createElement(s.a,{variant:"contained",color:"primary",href:ce.a},"My Resume")))),r.a.createElement("footer",{className:e.footer},r.a.createElement(m.a,{variant:"h6",align:"center",gutterBottom:!0},"Developed By"),r.a.createElement(m.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p"},"Steven Richard Simon!"),r.a.createElement(ie,null)))};var se=function(){return r.a.createElement(p.a,null,r.a.createElement(g,null),r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:j}),r.a.createElement(h.a,{exact:!0,path:"/about",component:j}),r.a.createElement(h.a,{exact:!0,path:"/portfolio",component:Z}),r.a.createElement(h.a,{exact:!0,path:"/contact",component:me})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},63:function(e,a,t){e.exports=t.p+"static/media/office img.7cb93476.jpg"},66:function(e,a,t){e.exports=t.p+"static/media/StockTracker.36fe5fea.jpg"},67:function(e,a,t){e.exports=t.p+"static/media/weather.f8eeaf87.jpg"},68:function(e,a,t){e.exports=t.p+"static/media/password_generator.0bf442e5.jpg"},69:function(e,a,t){e.exports=t.p+"static/media/calender.856d2151.jpg"},70:function(e,a,t){e.exports=t.p+"static/media/readme.4ad6f4e2.jpg"},72:function(e,a,t){e.exports=t.p+"static/media/resume.bf4e1767.PDF"},81:function(e,a,t){e.exports=t(128)},86:function(e,a,t){},87:function(e,a,t){}},[[81,1,2]]]);
//# sourceMappingURL=main.c3ba8ea1.chunk.js.map