(this.webpackJsonpsmartprueba=this.webpackJsonpsmartprueba||[]).push([[0],{207:function(e,t,a){e.exports=a(456)},444:function(e,t,a){},445:function(e,t,a){},456:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(10),c=a.n(r),o=a(54),i=a.n(o),s=a(88),m=a(89),u=a(64),d=a(193),p=a(194),E=a(204),h=a(201),f=a(462),g=a(458),b=a(195).initializeApp({apiKey:"AIzaSyDrAMBM5XOMxN8mLN2RNO178mU61ojS6p0",authDomain:"prueba-f2573.firebaseapp.com",databaseURL:"https://prueba-f2573.firebaseio.com",projectId:"prueba-f2573",storageBucket:"prueba-f2573.appspot.com",messagingSenderId:"267994731550",appId:"1:267994731550:web:949986287efe8b25c60a0f",measurementId:"G-2W9JBNEY19"}).database().ref(),v=a(459),x=a(460),y=a(92),C=(Object(y.withScriptjs)(Object(y.withGoogleMap)((function(e){return l.a.createElement(y.GoogleMap,{defaultZoom:11,defualtCenter:{lat:-34.397,lng:150.644}})}))),a(34)),w=a(62),O=a(42),N=a.n(O),j=a(203),S=a(96),k=a(8),M=a(91);var I=function(){var e=Object(n.useState)([]),t=Object(C.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),o=Object(C.a)(c,2),i=o[0],s=o[1],m=Object(n.useState)("Colombia"),u=Object(C.a)(m,2),d=u[0];u[1],Object(n.useEffect)((function(){N.a.all([N.a.get("https://disease.sh/v3/covid-19/jhucsse"),N.a.get("https://disease.sh/v3/covid-19/jhucsse")]).then((function(e){r(e[0].data),s(e[1].data)})).catch((function(e){console.log(e)}))}),[]);var p=i.filter((function(e){return""!==d?e.country===d:e.country.toLowerCase().includes(d)})).map((function(e,t){return l.a.createElement(k.a,{key:t,bg:"light",text:"dark",className:"text-center",style:{margin:"10px"}},l.a.createElement(k.a.Body,null,l.a.createElement(k.a.Title,null,e.country),l.a.createElement(k.a.Text,null,l.a.createElement("h2",null,l.a.createElement("b",null,e.province))),l.a.createElement(k.a.Text,null,l.a.createElement("b",null,"Casos:"),e.stats.confirmed),l.a.createElement(k.a.Text,null,l.a.createElement("b",null,"Deaths:"),e.stats.deaths),l.a.createElement(k.a.Text,null,l.a.createElement("b",null,"Recovered:"),e.stats.recovered),l.a.createElement(k.a.Text,null,e.cases)))})),E=new Date(parseInt(a.updated)).toString(),h=i.map((function(e,t){return l.a.createElement("div",{lat:e.coordinates.latitude,lng:e.coordinates.longitude,style:{color:"red",backgroundColor:"#FFF",height:"25px",width:"35px",textAlign:"center",borderRadius:"30px",border:"1px solid red"}},e.province,l.a.createElement("br",null),e.stats.confirmed)}));return l.a.createElement("div",null,l.a.createElement(M.a,null,l.a.createElement(k.a,{bg:"secondary",text:"white",className:"text-center",style:{margin:"10px"}},l.a.createElement(k.a.Body,null,l.a.createElement("div",{style:{height:"30vh",width:"100%"}},l.a.createElement(w.a,{bootstrapURLKeys:{key:"AIzaSyAbatDd69Mms_f72t_ZMOsq0dJC0r-pTNw"},defaultCenter:{lat:4,lng:-72},defaultZoom:7},h))),l.a.createElement(k.a.Footer,null,l.a.createElement("small",{text:"white"},"Last updated ",E)))),l.a.createElement(S.a,null,l.a.createElement(S.a.Group,{controlId:"formGroupSearch"},l.a.createElement(S.a.Label,null,l.a.createElement("h1",null)))),l.a.createElement(j.a,{queries:[{columns:2,query:"min-width: 500px"},{columns:3,query:"min-width: 1000px"}]},p))};a(437);var T=function(){var e=Object(n.useState)([]),t=Object(C.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),o=Object(C.a)(c,2),i=o[0],s=o[1];Object(n.useEffect)((function(){N.a.all([N.a.get("https://disease.sh/v3/covid-19/all"),N.a.get("https://corona.lmao.ninja/v2/countries")]).then((function(e){r(e[0].data),s(e[1].data)})).catch((function(e){console.log(e)}))}),[]);var m=new Date(parseInt(a.updated)).toString(),u=i.map((function(e,t){return l.a.createElement("div",{lat:e.countryInfo.lat,lng:e.countryInfo.long,style:{color:"red",backgroundColor:"#FFF",height:"25px",width:"35px",textAlign:"center",borderRadius:"30px"}},l.a.createElement("img",{height:"10px",src:e.countryInfo.flag}),l.a.createElement("br",null),e.cases)}));return l.a.createElement("div",null,l.a.createElement(M.a,null,l.a.createElement(k.a,{bg:"secondary",text:"white",className:"text-center",style:{margin:"10px"}},l.a.createElement(k.a.Body,null,l.a.createElement(k.a.Title,null,"Casos"),l.a.createElement(k.a.Text,null,a.active)),l.a.createElement(k.a.Footer,null,l.a.createElement("small",{text:"white"},"Last updated ",m))),l.a.createElement(k.a,{bg:"danger",text:"white",className:"text-center",style:{margin:"10px"}},l.a.createElement(k.a.Body,null,l.a.createElement(k.a.Title,null,"Muertos"),l.a.createElement(k.a.Text,null,a.deaths)),l.a.createElement(k.a.Footer,null,l.a.createElement("small",{text:"white"},"Last updated  ",m))),l.a.createElement(k.a,{bg:"success",text:"white",className:"text-center",style:{margin:"10px"}},l.a.createElement(k.a.Body,null,l.a.createElement(k.a.Title,null,"Recuperados"),l.a.createElement(k.a.Text,null,a.recovered)),l.a.createElement(k.a.Footer,null,l.a.createElement("small",{text:"white"},"Last updated  ",m)))),l.a.createElement("br",null),l.a.createElement("div",{style:{height:"100vh",width:"100%"}},l.a.createElement(w.a,{bootstrapURLKeys:{key:"AIzaSyAbatDd69Mms_f72t_ZMOsq0dJC0r-pTNw"},defaultCenter:{lat:4,lng:-72},defaultZoom:3},u)))},A=a(40),D=function(){var e=Object(A.b)(),t=e.loginWithRedirect;return!e.isAuthenticated&&l.a.createElement("button",{onClick:function(){return t()}},"Log In")},L=function(){var e=Object(A.b)(),t=e.logout;return e.isAuthenticated&&l.a.createElement("button",{onClick:function(){return t({returnTo:window.location.origin})}},"Log Out")},R=a(33),U=a(12),F=a(202),q=a(65),z=a(461),B=a(94),G=a(56);a(444);var Z=function(){var e=l.a.useState([]),t=Object(C.a)(e,2),a=t[0],n=t[1],r=l.a.useState(null),c=Object(C.a)(r,2),o=c[0],i=c[1],s=l.a.useCallback((function(e){n((function(t){return[].concat(Object(F.a)(t),[{lat:e.latLng.lat(),lng:e.latLng.lng(),time:new Date}])}))}),[]),m=l.a.useCallback((function(e){var t=e.lat,a=e.lng;E.current.panTo({lat:t,lng:a}),E.current.setZoom(14)}),[]),u=Object(q.d)({googleMapsApiKey:"AIzaSyAbatDd69Mms_f72t_ZMOsq0dJC0r-pTNw",libraries:["places"]}),d=u.isLoaded,p=u.loadError,E=l.a.useRef(),h=l.a.useCallback((function(e){E.current=e}),[]);return p?"Error loading maps":d?l.a.createElement("div",null,l.a.createElement(J,{panTo:m}),l.a.createElement(q.a,{mapContainerStyle:{width:"100vw",height:"90vh"},zoom:7,center:{lat:4.570868,lng:-74.297333},onClick:s,onMapLoad:h},a.map((function(e){return l.a.createElement(q.c,{key:e.time.toISOString(),position:{lat:e.lat,lng:e.lng},onclick:function(){i(e)},icon:{origin:new window.google.maps.Point(0,0),anchor:new window.google.maps.Point(15,15),scaledSize:new window.google.maps.Size(30,30)}})})),o?l.a.createElement(q.b,{position:{lat:o.lat,lng:o.lng},onCloseClick:function(){i(null)}},l.a.createElement("div",null,l.a.createElement("h2",null,l.a.createElement("span",{role:"img","aria-label":"bear"},"\ud83d\udc3b")," ","Alert"),l.a.createElement("p",null,"Spotted ",Object(z.a)(o.time,new Date)))):null)):"Loading Maps"};function J(e){var t=e.panTo,a=Object(B.a)({requestOptions:{location:{lat:function(){return 4.570868},lng:function(){return-74.297333}},radius:1e5}}),n=a.ready,r=a.value,c=a.suggestions,o=c.status,m=c.data,u=a.setValue,d=a.clearSuggestions,p=function(){var e=Object(s.a)(i.a.mark((function e(a){var n,l,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(a,!1),d(),e.prev=2,e.next=5,Object(B.b)({address:a});case 5:return n=e.sent,e.next=8,Object(B.c)(n[0]);case 8:l=e.sent,r=l.lat,c=l.lng,t({lat:r,lng:c}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),console.log("\ud83d\ude31 Error: ",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement("div",{className:"search"},l.a.createElement(G.a,{onSelect:p},l.a.createElement(G.b,{value:r,onChange:function(e){u(e.target.value)},disabled:!n,placeholder:"Search your location"}),l.a.createElement(G.e,null,l.a.createElement(G.c,null,"OK"===o&&m.map((function(e){var t=e.id,a=e.description;return l.a.createElement(G.d,{key:t,value:a})}))))))}a(445);var P=function(){return l.a.createElement("nav",null,l.a.createElement(R.b,{style:{color:"white",textDecoration:"none"},to:"/"},l.a.createElement("div",{style:{fontSize:"30px"}})),l.a.createElement("ul",{className:"nav-links"},l.a.createElement(R.b,{style:{color:"white",textDecoration:"none",marginTop:"10px",marginRight:"40px"},to:"/App"},l.a.createElement("li",null,"Crear Usuario")),l.a.createElement(R.b,{style:{color:"white",textDecoration:"none",marginTop:"10px",marginRight:"50px"},to:"/Covid19"},l.a.createElement("li",null,"Mapa y Datos Globales")),l.a.createElement(R.b,{style:{color:"white",textDecoration:"none",marginTop:"10px",marginRight:"50px"},to:"/Map2"},l.a.createElement("li",null,"Colombia")),l.a.createElement(R.b,{style:{color:"white",textDecoration:"none",marginTop:"10px",marginRight:"50px"},to:"/Map3"},l.a.createElement("li",null,"Mapa Dinamico"))))};var K=function(){return l.a.createElement("div",null,l.a.createElement(R.a,null,l.a.createElement("div",null,l.a.createElement(P,null),l.a.createElement(U.c,null,l.a.createElement(U.a,{exact:!0,path:"/",component:V}),l.a.createElement(U.a,{path:"/App",component:V}),l.a.createElement(U.a,{path:"/Covid19",component:T}),l.a.createElement(U.a,{path:"/Map2",component:I}),l.a.createElement(U.a,{path:"/Map3",component:Z})))))},_=function(){var e=Object(A.b)(),t=e.user,a=e.isAuthenticated;return e.isLoading?l.a.createElement("div",null,"Loading ..."):a&&l.a.createElement("div",null,l.a.createElement("h2",null,t.name),l.a.createElement("p",null,t.email),l.a.createElement(K,null))};var X=function(){return l.a.createElement("div",null,l.a.createElement(D,null),l.a.createElement(L,null),l.a.createElement(_,null))},V=function(e){Object(E.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={data:[],modalInsertar:!1,ModalEditar:!1,modalMapa:!1,form:{cedula:"",nombre:"",apellido:"",direccion:"",email:""},id:0},e.peticionGet=function(){b.child("usuarios").on("value",(function(t){null!==t.val()?e.setState(Object(u.a)(Object(u.a)({},e.state.data),{},{data:t.val()})):e.setState({data:[]})}))},e.peticionPost=function(){b.child("usuarios").push(e.state.form,(function(e){e&&console.log(e)})),e.setState({modalInsertar:!1})},e.peticionPut=function(){b.child("usuarios/".concat(e.state.id)).set(e.state.form,(function(e){e&&console.log(e)})),e.setState({ModalEditar:!1})},e.peticionDelete=function(){window.confirm("Estas seguro que deseas elimianr el usuarios ".concat(e.state.form.usuario,"?"))&&b.child("usuarios/".concat(e.state.id)).remove((function(e){e&&console.log(e)}))},e.handleChange=function(t){e.setState({form:Object(u.a)(Object(u.a)({},e.state.form),{},Object(m.a)({},t.target.name,t.target.value))}),console.log(e.state.form)},e.seleccionarUsuario=function(){var t=Object(s.a)(i.a.mark((function t(a,n,l){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({form:a,id:n});case 2:"Editar"===l?e.setState({ModalEditar:!0}):e.peticionDelete();case 3:case"end":return t.stop()}}),t)})));return function(e,a,n){return t.apply(this,arguments)}}(),e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.peticionGet()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement("br",null),l.a.createElement("button",{className:"btn btn-success",onClick:function(){return e.setState({modalInsertar:!0})}},"Insertar"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("table",{className:"table table-bordered"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Cedula"),l.a.createElement("th",null,"Nombre"),l.a.createElement("th",null,"Apellido"),l.a.createElement("th",null,"Direccion"),l.a.createElement("th",null,"Correo"))),l.a.createElement("tbody",null,Object.keys(this.state.data).map((function(t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e.state.data[t].cedula),l.a.createElement("td",null,e.state.data[t].nombre),l.a.createElement("td",null,e.state.data[t].apellido),l.a.createElement("td",null,e.state.data[t].direccion),l.a.createElement("td",null,e.state.data[t].email),l.a.createElement("td",null,l.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.seleccionarUsuario(e.state.data[t],t,"Editar")}},"Editar")," ","  ",l.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.seleccionarUsuario(e.state.data[t],t,"Eliminar")}},"Eliminar")))})))),l.a.createElement(f.a,{isOpen:this.state.modalInsertar},l.a.createElement(g.a,null,"Fomulario de Usuario"),l.a.createElement(v.a,null,l.a.createElement("div",{className:"container"},l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Cedula",name:"cedula",onChange:this.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"nombre",onChange:this.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"apellido",name:"apellido",onChange:this.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"direccion",name:"direccion",onChange:this.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"email",className:"form-control",placeholder:"email",name:"email",onChange:this.handleChange}))))),l.a.createElement(x.a,null,l.a.createElement("button",{className:"form-control btn-success",onClick:function(){return e.peticionPost()}},"Insertar"),l.a.createElement("button",{className:"form-control btn-danger",onClick:function(){return e.setState({modalInsertar:!1})}},"Cancelar"))),l.a.createElement(f.a,{isOpen:this.state.ModalEditar},l.a.createElement(g.a,null,"Editar Registro"),l.a.createElement(v.a,null,l.a.createElement("div",{className:"form-group"},l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Cedula",name:"cedula",onChange:this.handleChange,value:this.state.form&&this.state.form.cedula})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"nombre",onChange:this.handleChange,value:this.state.form&&this.state.form.nombre})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"apellido",name:"apellido",onChange:this.handleChange,value:this.state.form&&this.state.form.apellido})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"direccion",name:"direccion",onChange:this.handleChange,value:this.state.form&&this.state.form.direccion})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"email",className:"form-control",placeholder:"email",name:"email",onChange:this.handleChange,value:this.state.form&&this.state.form.email}))))),l.a.createElement(x.a,null,l.a.createElement("button",{className:"btn btn-success",onClick:function(){return e.peticionPut()}},"Editar"),"  ",l.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.setState({ModalEditar:!1})}},"Cancelar"))),l.a.createElement(f.a,{isOpen:this.state.modalMapa},l.a.createElement(g.a,null,"Mapa Paises"),l.a.createElement(v.a,null,l.a.createElement("div",null,l.a.createElement(I,null)))),l.a.createElement(R.a,null))}}]),a}(l.a.Component);a(455);c.a.render(l.a.createElement(A.a,{domain:"dev-mol4tkif.us.auth0.com",clientId:"KHqtvX0XgIGA6JztVCsbqXfrfEUUyDxZ",redirectUri:window.location.origin},l.a.createElement(X,null)),document.getElementById("root"))}},[[207,1,2]]]);
//# sourceMappingURL=main.1e416be3.chunk.js.map