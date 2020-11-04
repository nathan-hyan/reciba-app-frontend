(this["webpackJsonpreciba-app-frontend"]=this["webpackJsonpreciba-app-frontend"]||[]).push([[0],{196:function(e,t,a){},222:function(e,t){},228:function(e,t,a){},229:function(e,t,a){},230:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(0),r=a.n(n),s=a(26),i=a.n(s),o=a(14),j=a(22),l=a(13),d=a(12),b=a(15),u=a.n(b),h=a(11),m=a.n(h),O=Object(n.createContext)({}),x=function(e){var t=Object(j.g)(),a=localStorage.getItem("bill-token"),r=Object(n.useState)({isLoggedIn:!1,level:9,token:"",name:""}),s=Object(d.a)(r,2),i=s[0],o=s[1];return a&&!i.isLoggedIn&&u.a.post("https://reciba-api.herokuapp.com/api/user/loggedInUser",{storedToken:a},{headers:{auth:localStorage.getItem("bill-token")}}).then((function(e){localStorage.setItem("bill-token",e.data.data.token),o({isLoggedIn:!0,level:9,token:e.data.data.token,name:e.data.data.name})})).catch((function(e){localStorage.removeItem("bill-token"),h.notify.show(e.response.data.message,"error"),o({isLoggedIn:!1,level:9,token:"",name:""}),t.push("/")})),Object(c.jsx)(O.Provider,{value:Object(l.a)(Object(l.a)({},i),{},{setUserData:o}),children:e.children})},p=a(237),g=a(238),f=a(147),v=a(148),y=a(9),N=a(10);function w(){return Object(c.jsx)(p.a,{children:Object(c.jsxs)(g.a,{className:"h-100-minus align-items-center",children:[Object(c.jsxs)(f.a,{children:[Object(c.jsxs)("h1",{children:["Basta de usar papel para tus comprobantes",Object(c.jsx)("span",{role:"img","aria-label":"Page",children:"\ud83d\udcc3"})]}),Object(c.jsx)("p",{className:"lead",children:"\xa1Ahora pod\xe9s hacer todo digital! Cre\xe1, guard\xe1, envi\xe1 comprobantes desde tu casa sin necesidad de contacto f\xedsico."}),Object(c.jsx)(o.c,{to:"/invoice/generate",children:Object(c.jsxs)(v.a,{children:[Object(c.jsx)(y.a,{icon:N.i})," Comenz\xe1 ahora"]})})]}),Object(c.jsx)(f.a,{className:"text-right",children:Object(c.jsx)("h3",{children:"..."})})]})})}var k=a(43),C=a(247);function I(){var e=Object(j.g)(),t=Object(n.useContext)(O),a=Object(n.useState)({name:"",email:"",password:"",repeatPassword:""}),r=Object(d.a)(a,2),s=r[0],i=r[1],o=Object(n.useState)(!1),b=Object(d.a)(o,2),m=b[0],x=b[1],w=function(e){var t=e.target,a=t.name,c=t.value;i(Object(l.a)(Object(l.a)({},s),{},Object(k.a)({},a,c)))};return Object(c.jsx)(p.a,{children:Object(c.jsxs)(g.a,{className:"h-100-minus align-items-center",children:[Object(c.jsxs)(f.a,{children:[Object(c.jsx)("h1",{children:"Inicie sesi\xf3n para tener m\xe1s beneficios"}),Object(c.jsx)("p",{className:"lead",children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, nisi. Provident ipsum praesentium numquam sapiente."})]}),Object(c.jsx)(f.a,{className:"bg-light shadow p-3 rounded",children:Object(c.jsxs)(C.a,{noValidate:!0,validated:m,onSubmit:function(a){a.preventDefault(),!1===a.currentTarget.checkValidity()?(a.stopPropagation(),h.notify.show("Por favor, verifique los datos antes de continuar","error")):(a.stopPropagation(),u.a.post("https://reciba-api.herokuapp.com/api/user/register",{email:s.email,password:s.password,name:s.name}).then((function(a){a.data.success?u.a.post("https://reciba-api.herokuapp.com/api/user/login",{email:s.email,password:s.password}).then((function(a){var c=a.data;c.success?(t.setUserData({isLoggedIn:!0,token:c.data.token,name:c.data.name}),localStorage.setItem("bill-token",c.data.token),h.notify.show("".concat(c.message),"success"),e.push("/")):h.notify.show("Ocurri\xf3 un error, reintente por favor","error")})).catch((function(e){h.notify.show("".concat(e.response.data.message),"error")})):h.notify.show("Error: ".concat(a.data.message),"error")})).catch((function(e){try{h.notify.show("".concat(e.response.data.message),"error")}catch(e){h.notify.show("".concat(e.message),"error")}}))),x(!0)},children:[Object(c.jsxs)(C.a.Group,{children:[Object(c.jsx)(C.a.Label,{children:"Nombre"}),Object(c.jsx)(C.a.Control,{type:"text",name:"name",onChange:w,value:s.name,required:!0}),Object(c.jsxs)(C.a.Control.Feedback,{type:"invalid",children:["Por favor ingrese su nombre"," "]})]}),Object(c.jsxs)(C.a.Group,{children:[Object(c.jsx)(C.a.Label,{children:"Direcci\xf3n de correo"}),Object(c.jsx)(C.a.Control,{type:"email",name:"email",onChange:w,value:s.email,required:!0}),Object(c.jsx)(C.a.Control.Feedback,{type:"invalid",children:"Ingrese un e-mail v\xe1lido"})]}),Object(c.jsxs)(g.a,{children:[Object(c.jsx)(f.a,{children:Object(c.jsxs)(C.a.Group,{children:[Object(c.jsx)(C.a.Label,{children:"Contrase\xf1a"}),Object(c.jsx)(C.a.Control,{type:"password",name:"password",onChange:w,value:s.password,required:!0}),Object(c.jsx)(C.a.Control.Feedback,{type:"invalid",children:"Por favor, ingrese una contrase\xf1a"})]})}),Object(c.jsx)(f.a,{children:Object(c.jsxs)(C.a.Group,{children:[Object(c.jsx)(C.a.Label,{children:"Repita la contrase\xf1a"}),Object(c.jsx)(C.a.Control,{type:"password",name:"repeatPassword",onChange:w,value:s.repeatPassword,required:!0}),Object(c.jsx)(C.a.Control.Feedback,{type:"invalid",children:"Verifique que la contrase\xf1a sea igual en ambos casos"})]})})]}),Object(c.jsxs)(v.a,{variant:"primary",type:"submit",children:[Object(c.jsx)(y.a,{icon:N.a})," Guardar datos"]})]})})]})})}function S(){var e=Object(n.useContext)(O),t=Object(n.useState)({email:"",password:""}),a=Object(d.a)(t,2),r=a[0],s=a[1],i=Object(n.useState)(!1),o=Object(d.a)(i,2),b=o[0],m=o[1],x=Object(j.g)(),w=function(e){var t=e.target,a=t.name,c=t.value;s(Object(l.a)(Object(l.a)({},r),{},Object(k.a)({},a,c)))};return Object(c.jsx)(p.a,{children:Object(c.jsxs)(g.a,{className:"h-100-minus align-items-center",children:[Object(c.jsx)(f.a,{}),Object(c.jsx)(f.a,{md:6,sm:12,className:"shadow rounded bg-light p-3",children:Object(c.jsxs)(C.a,{onSubmit:function(t){var a=t.currentTarget;t.preventDefault(),!1===a.checkValidity()?(t.stopPropagation(),h.notify.show("Por favor verifique los datos antes de continuar","error")):(t.stopPropagation(),u.a.post("https://reciba-api.herokuapp.com/api/user/login",r).then((function(t){var a=t.data;a.success?(e.setUserData({isLoggedIn:!0,token:a.data.token,name:a.data.name}),localStorage.setItem("bill-token",a.data.token),h.notify.show("".concat(a.message),"success"),x.push("/")):h.notify.show("Ocurri\xf3 un error, por favor reintente","error")})).catch((function(e){var t=e.response?e.response.data.message:e.message;h.notify.show("".concat(t),"error")}))),m(!0)},noValidate:!0,validated:b,children:[Object(c.jsxs)(C.a.Group,{children:[Object(c.jsx)(C.a.Label,{children:"Direcci\xf3n de correo"}),Object(c.jsx)(C.a.Control,{type:"email",name:"email",value:r.email,onChange:w,required:!0}),Object(c.jsx)(C.a.Control.Feedback,{type:"invalid",children:"Por favor ingrese un e-mail v\xe1lido"})]}),Object(c.jsxs)(C.a.Group,{children:[Object(c.jsx)(C.a.Label,{children:"Contrase\xf1a"}),Object(c.jsx)(C.a.Control,{type:"password",name:"password",value:r.password,onChange:w,required:!0}),Object(c.jsx)(C.a.Control.Feedback,{type:"invalid",children:"Ingrese su contrase\xf1a"})]}),Object(c.jsxs)(v.a,{variant:"primary",type:"submit",children:[Object(c.jsx)(y.a,{icon:N.b})," Iniciar sesi\xf3n"]})]})}),Object(c.jsx)(f.a,{})]})})}function D(){var e=Object(n.useContext)(O),t=Object(j.g)();return Object(n.useEffect)((function(){localStorage.removeItem("bill-token"),e.setUserData({isLoggedIn:!1,level:9,token:"",name:""})}),[]),Object(c.jsx)(p.a,{children:Object(c.jsx)(g.a,{className:"h-100-minus align-items-center",children:Object(c.jsxs)(f.a,{className:"text-center",children:[Object(c.jsxs)("h1",{children:["Que l\xe1stima verte partir"," ",Object(c.jsx)("span",{role:"img","aria-label":"sad",children:"\ud83d\ude22"})]}),Object(c.jsx)("p",{children:"\xa1Ojal\xe1 podamos volverte a ver!"}),Object(c.jsx)(v.a,{className:"mt-5",onClick:function(){return t.push("/")},children:"Ir a la p\xe1gina principal"})]})})})}var F=a(252),T=a(239),L=a(250);function P(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(L.a.Item,{children:Object(c.jsxs)(o.c,{className:"text-dark text-decoration-none",to:"/profile",children:[Object(c.jsx)(y.a,{icon:N.w,className:"mr-1"})," Perfil"]})}),Object(c.jsx)(L.a.Item,{children:Object(c.jsxs)(o.c,{className:"text-dark text-decoration-none",to:"/logout",children:[Object(c.jsx)(y.a,{icon:N.d,className:"mr-1"})," Cerrar sesi\xf3n"]})})]})}function E(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(L.a.Item,{children:Object(c.jsxs)(o.c,{className:"text-dark text-decoration-none",to:"/login",children:[Object(c.jsx)(y.a,{icon:N.v,className:"mr-1"})," Iniciar sesi\xf3n"]})}),Object(c.jsx)(L.a.Item,{children:Object(c.jsxs)(o.c,{className:"text-dark text-decoration-none",to:"/signup",children:[Object(c.jsx)(y.a,{icon:N.x,className:"mr-1"})," Crear usuario"]})})]})}function q(){return Object(c.jsxs)(T.a,{className:"mr-auto",children:[Object(c.jsxs)(o.c,{className:"text-light mr-3 text-decoration-none",to:"/",children:[Object(c.jsx)(y.a,{icon:N.h})," Principal"]}),Object(c.jsxs)(o.c,{className:"text-light mr-3 text-decoration-none",to:"/invoice/generate",children:[Object(c.jsx)(y.a,{icon:N.m})," Crear nueva boleta"]}),Object(c.jsxs)(o.c,{className:"text-light mr-3 text-decoration-none",to:"/dashboard",children:[Object(c.jsx)(y.a,{icon:N.c})," Dashboard"]})]})}function R(){return Object(c.jsx)(T.a,{className:"mr-auto",children:Object(c.jsxs)(o.c,{className:"text-light mr-3 text-decoration-none",to:"/",children:[Object(c.jsx)(y.a,{icon:N.h})," Principal"]})})}function B(){var e=Object(n.useContext)(O);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(F.a,{fixed:"top",style:{zIndex:999},bg:"primary",variant:"dark",expand:"lg",children:[Object(c.jsx)(o.c,{to:"/",children:Object(c.jsx)(F.a.Brand,{children:"reciba.app"})}),Object(c.jsx)(F.a.Toggle,{}),Object(c.jsxs)(F.a.Collapse,{children:[e.isLoggedIn?Object(c.jsx)(q,{}):Object(c.jsx)(R,{}),Object(c.jsx)(T.a,{className:"ml-auto",children:Object(c.jsx)(L.a,{title:"Usuario actual: ".concat(e.isLoggedIn?e.name:"invitado"),id:"collasible-nav-dropdown",children:e.isLoggedIn?Object(c.jsx)(P,{}):Object(c.jsx)(E,{})})})]})]}),Object(c.jsx)("div",{style:{height:35}})]})}var G=a(149),A=a.n(G),U=a(246),H=(a(196),a(251)),z=Object(n.createContext)({generateId:function(){return null},currentId:""});function V(e){var t=Object(n.useState)(""),a=Object(d.a)(t,2),r=a[0],s=a[1];return Object(c.jsx)(z.Provider,{value:{generateId:function(){var e=Object(H.a)();s(e)},currentId:r},children:e.children})}function _(e){var t=e.show,a=void 0===t||t,r=e.onHide,s=void 0===r?function(){return a=!a}:r,i=Object(n.useContext)(z),o=i.generateId,j=i.currentId;return Object(n.useEffect)((function(){o()}),[]),Object(c.jsx)(U.a,{size:"xl",show:a,onHide:s,children:Object(c.jsxs)(U.a.Body,{children:[Object(c.jsx)(g.a,{children:Object(c.jsx)(f.a,{children:Object(c.jsx)("p",{className:"lead text-center",children:"Escanee el c\xf3digo con el celular para poder firmar en este comprobante"})})}),Object(c.jsxs)(g.a,{className:"my-5",children:[Object(c.jsx)(f.a,{}),Object(c.jsx)(f.a,{className:"bg-white shadow rounded p-3",md:3,children:Object(c.jsx)(A.a,{size:200,value:"".concat("https://reciba.app/#","/signature/").concat(j)})}),Object(c.jsx)(f.a,{})]}),Object(c.jsx)(g.a,{children:Object(c.jsxs)(f.a,{className:"text-center",children:[Object(c.jsx)("p",{className:"lead",children:"Al finalizar la firma, presionar para continuar"}),Object(c.jsxs)(v.a,{onClick:s,children:[Object(c.jsx)(y.a,{icon:N.t})," Cerrar"]})]})})]})})}function M(){return Object(c.jsx)(p.a,{children:Object(c.jsxs)(g.a,{style:{height:"65vh"},children:[Object(c.jsx)(f.a,{}),Object(c.jsxs)(f.a,{md:2,className:"my-auto shadow bg-light rounded py-4",children:[Object(c.jsx)("div",{className:"m-auto",style:{width:"4rem",height:"4rem"},children:Object(c.jsx)("div",{className:"spinner"})}),Object(c.jsx)("h1",{className:"mt-3 lead text-gray text-center",children:"cargando datos..."})]}),Object(c.jsx)(f.a,{})]})})}var J=a(253),K=a(257);function Q(e){var t=e.submitFilter,a=Object(n.useState)({from:"",to:""}),r=Object(d.a)(a,2),s=r[0],i=r[1],o=function(e){var t=e.target,a=t.name,c=t.value;i(Object(l.a)(Object(l.a)({},s),{},Object(k.a)({},a,c)))};return Object(c.jsx)(f.a,{className:"bg-white rounded shadow p-3 mb-3",children:Object(c.jsx)(J.a,{children:Object(c.jsxs)(K.a,{children:[Object(c.jsx)(J.a.Toggle,{as:K.a.Header,eventKey:"0",children:"Filtros"}),Object(c.jsx)(J.a.Collapse,{eventKey:"0",children:Object(c.jsx)(K.a.Body,{children:Object(c.jsxs)(C.a,{onSubmit:function(e){e.preventDefault();var a=Object(l.a)({},s);s.to&&(a.to=new Date(s.to).setUTCHours(27).toString()),t(a)},children:[Object(c.jsxs)(g.a,{children:[Object(c.jsx)(f.a,{children:Object(c.jsxs)(C.a.Group,{children:[Object(c.jsx)(C.a.Label,{children:"Desde"}),Object(c.jsx)(C.a.Control,{type:"date",onChange:o,name:"from",value:s.from})]})}),Object(c.jsx)(f.a,{children:Object(c.jsxs)(C.a.Group,{children:[Object(c.jsx)(C.a.Label,{children:"Email address"}),Object(c.jsx)(C.a.Control,{type:"date",onChange:o,name:"to",value:s.to})]})})]}),Object(c.jsx)(g.a,{children:Object(c.jsxs)(f.a,{className:"d-flex justify-content-end w-100",children:[Object(c.jsxs)(v.a,{className:"mr-3",variant:"success",type:"submit",children:[Object(c.jsx)(y.a,{icon:N.q})," Buscar"]}),Object(c.jsxs)(v.a,{onClick:function(){t({}),i({from:"",to:""})},variant:"danger",children:[Object(c.jsx)(y.a,{icon:N.t})," Limpiar b\xfasqueda"]})]})})]})})})]})})})}var Y=a(97),$=a(258),W=a(240),X=a(254),Z=a(241),ee=a(150);function te(e){var t=e.show,a=e.handleClose,r=e.invoiceId,s=e.prevTags,i=e.refreshData,o=Object(n.useState)(""),j=Object(d.a)(o,2),l=j[0],b=j[1];Object(n.useEffect)((function(){s!==[]&&b(s?s.toString():"")}),[r]);return Object(c.jsx)(U.a,{show:t,onHide:a,children:Object(c.jsxs)(C.a,{onSubmit:function(e){e.preventDefault();var t,c=l.split(","),n=[],s=Object(ee.a)(c);try{for(s.s();!(t=s.n()).done;){var o=t.value;n.push(o.trim())}}catch(j){s.e(j)}finally{s.f()}!function(e){if(""===r)throw Error("No hay invoice id especificado");u.a.put("https://reciba-api.herokuapp.com/api/invoice/edit/".concat(r),{tags:e},{headers:{auth:localStorage.getItem("bill-token")}}).then((function(e){e.data,h.notify.show("Datos guardados","success"),i(),a()})).catch((function(e){h.notify.show(e.message,"error")}))}(n)},children:[Object(c.jsx)(U.a.Header,{closeButton:!0,children:Object(c.jsx)(U.a.Title,{children:"Agregar etiquetas"})}),Object(c.jsx)(U.a.Body,{children:Object(c.jsxs)(C.a.Group,{controlId:"formBasicEmail",children:[Object(c.jsx)(C.a.Label,{children:"Etiquetas separadas por comas"}),Object(c.jsx)(C.a.Control,{type:"text",value:l,onChange:function(e){return b(e.target.value)},placeholder:"pendiente, seguimiento"})]})}),Object(c.jsxs)(U.a.Footer,{children:[Object(c.jsx)(v.a,{variant:"secondary",onClick:a,children:"Cancelar"}),Object(c.jsx)(v.a,{variant:"primary",type:"submit",children:"Guardar"})]})]})})}function ae(e){var t=e.completed,a=e.pending,r=e.deleteBill,s=e.refreshData,i=Object(j.g)(),o=Object(n.useState)(!1),l=Object(d.a)(o,2),b=l[0],m=l[1],O=Object(n.useState)({id:"",prevTags:[]}),x=Object(d.a)(O,2),p=x[0],v=x[1],w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];v({id:e,prevTags:t}),m((function(e){return!e}))};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(te,{show:b,handleClose:function(){return w()},invoiceId:p.id,prevTags:p.prevTags,refreshData:function(){return s({})}}),Object(c.jsxs)(f.a,{className:"bg-white rounded shadow p-3 mb-3",children:[Object(c.jsxs)("small",{className:"text-muted",children:["Boletas pendientes - ",a.length]}),Object(c.jsx)($.a,{children:a.map((function(e,t){var a,n,o;return Object(c.jsx)($.a.Item,{children:Object(c.jsxs)(g.a,{children:[Object(c.jsxs)(f.a,{md:"1",children:[Intl.DateTimeFormat(navigator.language,{day:"numeric",month:"numeric",year:"numeric"}).format(new Date(e.date).setUTCHours(3))," "]}),Object(c.jsxs)(f.a,{children:[e.from," ",null===(a=e.tags)||void 0===a?void 0:a.map((function(e,t){return Object(c.jsx)(W.a,{variant:"info",className:"ml-1",children:e},t)}))," ",(null===(n=e.alreadySent)||void 0===n?void 0:n.isAlreadySent)?Object(c.jsx)(X.a,{placement:"top",overlay:Object(c.jsxs)(Z.a,{id:"mail-already-sent",children:["Mail ya enviado a:"," ",null===(o=e.alreadySent)||void 0===o?void 0:o.emailAddress]}),children:Object(c.jsx)(y.a,{icon:Y.a,style:{color:"#6DB65B"}})}):null]}),Object(c.jsxs)(f.a,{md:"2",className:"text-right text-primary",children:[Object(c.jsx)(y.a,{icon:N.s,onClick:function(){return w(e._id,e.tags)}}),Object(c.jsx)(y.a,{onClick:function(){return i.push("/invoice/edit/".concat(e._id,"/"))},className:"pointer mx-3",icon:N.k}),Object(c.jsx)(y.a,{onClick:function(){return r(e._id)},className:"pointer mr-3",icon:N.u}),Object(c.jsx)(y.a,{className:"pointer",onClick:function(){return function(e,t){if(void 0===e||void 0===t)h.notify.show("Ocurri\xf3 un error enviando el mail. Recargue la p\xe1gina y reintente","error");else{var a,c=null===(a=window.prompt("Escriba la direcci\xf3n donde quiere enviar el mail"))||void 0===a?void 0:a.trim();""!==c?u.a.post("https://reciba-api.herokuapp.com/api/mail/send/signaturePetition/",{invoiceId:e,from:t,to:c}).then((function(e){e.data.success?(h.notify.show(e.data.message,"success"),s({})):h.notify.show(e.data.message,"warning")})).catch((function(e){console.log(e),h.notify.show("Ocurri\xf3 un error enviando el mail, reintente","error")})):h.notify.show("Debe especificar un mail v\xe1lido","error")}}(e._id,e.from)},icon:N.j})]})]})},t)}))}),Object(c.jsx)("hr",{}),Object(c.jsxs)("small",{className:"text-muted",children:["Boletas finalizadas - ",t.length]}),Object(c.jsx)($.a,{children:t.map((function(e,t){var a;return Object(c.jsxs)($.a.Item,{children:[Object(c.jsxs)(g.a,{children:[Object(c.jsxs)(f.a,{md:"1",children:[Intl.DateTimeFormat(navigator.language,{month:"numeric",day:"numeric",year:"numeric"}).format(new Date(e.date).setUTCHours(3))," "]}),Object(c.jsxs)(f.a,{children:[e.from," ",null===(a=e.tags)||void 0===a?void 0:a.map((function(e,t){return Object(c.jsx)(W.a,{variant:"info",className:"ml-1",children:e})}))," "]}),Object(c.jsxs)(f.a,{md:"2",className:"text-right text-primary",children:[Object(c.jsx)(y.a,{className:"pointer",icon:N.s,onClick:function(){return w(e._id,e.tags)}}),Object(c.jsx)(y.a,{onClick:function(){return i.push("/invoice/edit/".concat(e._id,"/"))},className:"ml-3 pointer",icon:N.k}),Object(c.jsx)(y.a,{onClick:function(){return i.push("/invoice/display/".concat(e._id,"/no"))},icon:N.n,className:"mx-3 pointer"}),Object(c.jsx)(y.a,{onClick:function(){return r(e._id)},className:"pointer",icon:N.u})]})]})," "]},t)}))})]})]})}function ce(){var e=Object(j.g)(),t=Object(n.useState)([]),a=Object(d.a)(t,2),r=a[0],s=a[1],i=Object(n.useState)([]),o=Object(d.a)(i,2),l=o[0],b=o[1],m=Object(n.useState)(!0),O=Object(d.a)(m,2),x=O[0],v=O[1],y={headers:{auth:localStorage.getItem("bill-token")}},N=function(t){var a=u.a.get("https://reciba-api.herokuapp.com/api/invoice/completed?from=".concat(t.from,"&to=").concat(t.to),y),c=u.a.get("https://reciba-api.herokuapp.com/api/invoice/pending?from=".concat(t.from,"&to=").concat(t.to),y);u.a.all([a,c]).then(u.a.spread((function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];b(t[0].data.data),s(t[1].data.data),v(!1)}))).catch((function(t){h.notify.show("Ocurri\xf3 un error trayendo los datos","error"),e.push("/")}))};return Object(n.useEffect)((function(){v(!0),N({})}),[]),x?Object(c.jsx)(M,{}):Object(c.jsx)(p.a,{className:"my-5",children:Object(c.jsx)(g.a,{className:"h-100-minus",children:Object(c.jsxs)(f.a,{children:[Object(c.jsx)(Q,{submitFilter:function(e){return N(e)}}),Object(c.jsx)(ae,{refreshData:function(e){return N(e)},deleteBill:function(e){return function(e){void 0!==e&&window.confirm("Advertencia, se borrar\xe1 la boleta. \xbfDesea Confirmar?")&&u.a.delete("https://reciba-api.herokuapp.com/api/invoice/".concat(e),y).then((function(e){e.data.success?(h.notify.show("Boleta eliminada","success"),N({})):h.notify.show(e.data.message,"warning")})).catch((function(e){h.notify.show(e.response.data.message,"error")}))}(e)},completed:l,pending:r})]})})})}var ne=a(151),re=function(e){var t=e.render,a=Object(ne.a)(e,["render"]),r=Object(n.useContext)(O);return Object(c.jsx)(j.b,Object(l.a)(Object(l.a)({},a),{},{render:function(e){return r.isLoggedIn||localStorage.getItem("bill-token")?Object(c.jsx)(t,Object(l.a)({},e)):Object(c.jsx)(j.a,{to:"/"})}}))},se=a(65),ie=a.n(se);function oe(e){var t=e.show,a=e.handleClose,n=e.PDFFile;return Object(c.jsxs)(U.a,{show:t,onHide:a,children:[Object(c.jsx)(U.a.Header,{closeButton:!0,children:Object(c.jsx)(U.a.Title,{children:"\xa1Boleta lista!"})}),Object(c.jsx)(U.a.Body,{children:"Su boleta ha sido generada con \xe9xito. \xbfDesea descargar una copia?"}),Object(c.jsxs)(U.a.Footer,{children:[Object(c.jsxs)(v.a,{variant:"secondary",onClick:a,children:[Object(c.jsx)(y.a,{icon:Y.b})," Ignorar"]}),Object(c.jsx)("a",{download:"Comprobante.pdf",href:n,children:Object(c.jsxs)(v.a,{children:[Object(c.jsx)(y.a,{icon:N.e})," Descargar comprobante"]})})]})]})}var je=a(225),le=ie.a.connect("https://reciba-api.herokuapp.com/",{transports:["websocket"]});function de(){var e=Object(n.useRef)(),t=Object(j.h)(),a=t.socketId,r=t.invoiceId,s=Object(n.useState)(!1),i=Object(d.a)(s,2),o=i[0],b=i[1],m=Object(n.useState)(""),O=Object(d.a)(m,2),x=O[0],w=O[1],k=Object(n.useState)({}),C=Object(d.a)(k,2),I=C[0],S=C[1];Object(n.useEffect)((function(){a?(le.emit("join",a),le.emit("close",!1)):r&&u.a.get("https://reciba-api.herokuapp.com/api/invoice/single/".concat(r)).then((function(e){var t=e.data;t.success&&S(t.data)})).catch((function(e){return alert(e.response.data.message)}))}),[]),Object(n.useEffect)((function(){le.on("pdf",(function(e){w(e),F()}))}));var D=function(){le.emit("sign",e.current.toDataURL())},F=function(){b(!o)};return console.log("Socket id:",a),console.log("Invoice Id:",r),Object(c.jsxs)(p.a,{className:"h-100-minus mt-5",children:[Object(c.jsx)(oe,{PDFFile:x,show:o,handleClose:F}),Object(c.jsx)(g.a,{className:r?"d-block":"d-none",children:Object(c.jsxs)(f.a,{className:"text-center",children:[Object(c.jsx)("h1",{children:"\xa1Hola!"}),Object(c.jsxs)("p",{children:["Recibi\xf3 esta boleta de ",Object(c.jsx)("strong",{children:I.from})," con el concepto de ",Object(c.jsx)("strong",{children:I.concept})," por el monto total de"," ",Object(c.jsxs)("strong",{children:[I.currency," ",I.amount]})]}),Object(c.jsx)("hr",{})]})}),Object(c.jsx)(g.a,{children:Object(c.jsxs)(f.a,{className:"text-center",children:[Object(c.jsx)("p",{className:"lead m-0",children:"Firme en el campo en blanco para continuar"}),Object(c.jsx)("small",{className:"text-muted",children:"Coloque el tel\xe9fono en modo horizontal para mejor resultado"})]})}),Object(c.jsx)(g.a,{className:"my-5",children:Object(c.jsx)(f.a,{onTouchEnd:D,onMouseUp:D,className:"bg-white shadow rounded",children:Object(c.jsx)(je,{ref:e})})}),Object(c.jsxs)(g.a,{children:[Object(c.jsx)(f.a,{children:Object(c.jsxs)(v.a,{className:"w-100",variant:"danger",onClick:function(){e.current.clear(),D()},children:[Object(c.jsx)(y.a,{icon:N.t})," Reiniciar Firma"]})}),Object(c.jsx)(f.a,{className:r?"d-block":"d-none",children:Object(c.jsxs)(v.a,{className:"w-100",variant:"success",onClick:function(){window.confirm("\xbfConfirma el envio de la firma a ".concat(I.from,"?"))?u.a.put("https://reciba-api.herokuapp.com/api/invoice/addSignature/".concat(r),Object(l.a)(Object(l.a)({},I),{},{sign:e.current.toDataURL()})).then((function(e){h.notify.show("Se ha firmado correctamente. Ya puede salir de esta app.","success")})).catch((function(e){h.notify.show("Ocurri\xf3 un error enviando la firma. Reintente por favor.","error")})):console.log(!1)},children:[Object(c.jsx)(y.a,{icon:N.r})," Enviar firma"]})})]}),Object(c.jsx)(g.a,{className:a?"d-block my-5 text-center":"d-none",children:Object(c.jsxs)(f.a,{children:[Object(c.jsx)("p",{className:"lead",children:"\xa1No cierre esta p\xe1gina!"}),Object(c.jsx)("p",{children:"Cuando se genere el comprobante, debajo aparecer\xe1 un bot\xf3n para descargarlo"})]})})]})}var be=a(54),ue=a.n(be),he=a(77),me=a(154),Oe=a(248),xe=a(255);function pe(e){var t=e.isOriginal,a=void 0!==t&&t,n=e.data;return Object(c.jsxs)(g.a,{className:"pdf-font my-5 py-5 bg-white",children:[Object(c.jsx)(f.a,{md:1,children:Object(c.jsx)("p",{className:"text-muted p-0 mb-0 text-center",style:{height:64,marginTop:150,width:109,paddingLeft:0},children:a?"Recibo Original":"Recibo Duplicado"})}),Object(c.jsxs)(f.a,{className:"px-5",children:[Object(c.jsxs)(g.a,{className:"border-bottom mt-3 pb-3",children:[Object(c.jsx)(f.a,{children:n.logo?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("img",{src:n.logo,alt:"RollingCode School",height:"50"}),Object(c.jsxs)("p",{className:"text-monospace",children:["Recibo N\xb0: ",n.invoiceNumber]})]}):Object(c.jsxs)("p",{className:"text-monospace",children:["Recibo N\xb0: ",n.invoiceNumber]})}),Object(c.jsx)(f.a,{md:"2"}),Object(c.jsx)(f.a,{className:"text-center",children:Object(c.jsxs)("p",{className:"my-0",children:[Object(c.jsx)("strong",{children:"Fecha: "}),Intl.DateTimeFormat(navigator.language,{weekday:"long",month:"long",day:"numeric",year:"numeric"}).format(new Date(n.date))]})})]}),Object(c.jsx)(g.a,{children:Object(c.jsxs)(f.a,{children:[Object(c.jsxs)(g.a,{className:"bg-light my-3",children:[Object(c.jsx)(f.a,{md:3,children:Object(c.jsx)("p",{className:"text-center my-2",children:Object(c.jsx)("strong",{children:"Recib\xed"})})}),Object(c.jsx)(f.a,{children:Object(c.jsxs)("p",{className:"my-2",children:[Object(c.jsx)("strong",{children:"De: "}),n.from]})})]}),Object(c.jsx)(g.a,{className:"bg-light my-3",children:Object(c.jsx)(f.a,{children:Object(c.jsxs)("p",{className:"my-2",children:[Object(c.jsx)("strong",{children:"La cantidad de: "}),n.amountText]})})}),Object(c.jsx)(g.a,{className:"bg-light my-3",children:Object(c.jsx)(f.a,{children:Object(c.jsxs)("p",{className:"my-2",children:[Object(c.jsx)("strong",{children:"En concepto de: "})," ",n.concept]})})})]})}),Object(c.jsxs)(g.a,{children:[Object(c.jsx)(f.a,{md:2,className:"bg-light",children:Object(c.jsxs)("p",{className:"my-2",children:[Object(c.jsx)("strong",{children:"Son: "})," ",n.currency," $",n.amount]})}),Object(c.jsx)(f.a,{}),Object(c.jsx)(f.a,{md:6,className:"bg-light",children:Object(c.jsxs)("p",{className:"my-2",children:[Object(c.jsx)("strong",{children:"Recibo por: "}),Object(c.jsx)("img",{src:n.sign,height:"120",alt:"signature"})]})})]})]})]})}function ge(e){var t=e.exportPDFToFile,a=e.transformPDFToBase64,n=e.toggleEmailInput,r=e.hasSocketId;return Object(c.jsxs)(f.a,{className:"p-3 bg-light text-center shadow rounded",children:[Object(c.jsxs)(v.a,{className:"mx-2",onClick:t,children:[Object(c.jsx)(y.a,{icon:N.g})," Descargar PDF"]}),Object(c.jsxs)(v.a,{disabled:r,className:"mx-2",onClick:a,children:[Object(c.jsx)(y.a,{icon:N.l})," Enviar PDF al Tel\xe9fono"]}),Object(c.jsxs)(v.a,{onClick:n,className:"mx-2",children:[Object(c.jsx)(y.a,{icon:N.f})," Enviar copia por email"]})]})}function fe(e){var t=e.sendEmail,a=e.setRecipient,n=e.recipient,r=e.validated;return Object(c.jsx)(f.a,{className:"px-5 py-3 bg-white shadow rounded",children:Object(c.jsxs)(C.a,{noValidate:!0,onSubmit:t,validated:r,children:[Object(c.jsxs)(C.a.Group,{children:[Object(c.jsx)(C.a.Label,{children:"Direcci\xf3n de e-mail"}),Object(c.jsx)(C.a.Control,{type:"email",value:n,onChange:a,placeholder:"correo@server.com",required:!0}),Object(c.jsx)(C.a.Control.Feedback,{type:"invalid",children:"Se necesita un E-mail v\xe1lido"})]}),Object(c.jsxs)(v.a,{variant:"primary",type:"submit",children:[Object(c.jsx)(y.a,{icon:N.j})," Enviar"]})]})})}var ve=ie.a.connect("https://reciba-api.herokuapp.com/",{transports:["websocket"]});function ye(){var e=Object(n.useRef)(Object(c.jsx)("div",{})),t=Object(j.h)(),a=t.id,r=t.socketId,s=Object(n.useState)({invoiceNumber:1,logo:"",date:new Date,from:"",amountText:"",amount:0,concept:"",sign:"",currency:"ARS",pending:!1}),i=Object(d.a)(s,2),o=i[0],b=i[1],m=Object(n.useState)(!1),O=Object(d.a)(m,2),x=O[0],f=O[1],v=Object(n.useState)(""),y=Object(d.a)(v,2),N=y[0],w=y[1],k=Object(n.useState)(!1),C=Object(d.a)(k,2),I=C[0],S=C[1];Object(n.useEffect)((function(){u.a.get("https://reciba-api.herokuapp.com/api/invoice/single/".concat(a)).then((function(e){var t=e.data,a=D(t.data.date),c=a.year,n=a.month,r=a.date;b(Object(l.a)(Object(l.a)({},t.data),{},{date:new Date(c,n,r)}))}))}),[]);var D=function(e){var t=e.slice(0,10).split("-");return{year:parseInt(t[0]),month:parseInt(t[1],10)-1,date:parseInt(t[2])}},F=function(){return Object(Oe.a)(e.current,{paperSize:"A4",landscape:!0,scale:.75}).then((function(e){return Object(xe.a)(e)}))},T=function(){var e=Object(he.a)(ue.a.mark((function e(){return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=ve,e.next=3,F();case 3:e.t1=e.sent,e.t0.emit.call(e.t0,"pdf",e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(he.a)(ue.a.mark((function e(t){var a,c;return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=t.currentTarget,e.next=4,F();case 4:c=e.sent,!0===a.checkValidity()&&u.a.post("https://reciba-api.herokuapp.com/api/mail/send/invoice",{file:c,date:o.date,email:N}).then((function(e){var t=e.data,a=t.success,c=t.message;a?h.notify.show(c,"success"):h.notify.show(c,"error")})).catch((function(e){console.log(e.response.data)})),S(!0);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){""!==r&&ve.emit("join",r)}),[r]),Object(c.jsxs)(p.a,{children:[Object(c.jsx)(g.a,{className:"my-5",children:Object(c.jsx)(ge,{exportPDFToFile:function(){Object(me.a)(e.current,{paperSize:"A4",fileName:"Invoice - ".concat(Intl.DateTimeFormat(navigator.language,{month:"numeric",day:"numeric",year:"numeric"}).format(new Date(o.date))," - ").concat(a),landscape:!0,scale:.75})},transformPDFToBase64:T,toggleEmailInput:function(){return f(!x)},hasSocketId:"no"===r})}),Object(c.jsx)(g.a,{className:x?"d-block":"d-none",children:Object(c.jsx)(fe,{recipient:N,sendEmail:function(e){return L(e)},setRecipient:function(e){return w(e.target.value)},validated:I})}),Object(c.jsxs)("div",{ref:e,children:[Object(c.jsx)(pe,{data:o,isOriginal:!0}),Object(c.jsx)(pe,{data:o})]})]})}var Ne=a(245),we=ie.a.connect("https://reciba-api.herokuapp.com/",{transports:["websocket"]});function ke(){var e=(new Date).toISOString().substr(0,10),t=localStorage.getItem("bill-token")?{headers:{auth:localStorage.getItem("bill-token")}}:void 0,a=Object(j.h)().id,r=Object(n.useContext)(z),s=r.currentId,i=r.generateId,o=Object(n.useState)({invoiceNumber:1,date:e,from:"",amountText:"",amount:0,concept:"",currency:"ARS",pending:!1}),b=Object(d.a)(o,2),m=b[0],O=b[1],x=Object(n.useState)(!1),w=Object(d.a)(x,2),I=w[0],S=w[1],D=Object(n.useState)(!1),F=Object(d.a)(D,2),T=F[0],L=F[1],P=Object(j.g)(),E=function(){var e=Object(he.a)(ue.a.mark((function e(){return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i();case 2:we.emit("join",s),L((function(e){return!e}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(e){var t=e.target,a=t.name,c=t.value,n=t.type,r=t.checked,s="checkbox"===n?r:c;O(Object(l.a)(Object(l.a)({},m),{},Object(k.a)({},a,s)))};return Object(n.useEffect)((function(){we.on("sign",(function(e){O(Object(l.a)(Object(l.a)({},m),{},{sign:e,pending:!1}))})),T&&we.on("close",(function(){h.notify.show("Tel\xe9fono conectado","success"),L(!1)}))})),Object(n.useEffect)((function(){""!==s&&we.emit("join",s),a&&u.a.get("https://reciba-api.herokuapp.com/api/invoice/single/".concat(a)).then((function(e){var t=e.data,a=t.data.date.substr(0,10);O(Object(l.a)(Object(l.a)({},t.data),{},{date:a}))}))}),[s]),Object(c.jsxs)(p.a,{children:[Object(c.jsx)(_,{show:T,onHide:function(){L((function(e){return!e}))}}),Object(c.jsx)(g.a,{className:"h-100-minus align-items-center",children:Object(c.jsx)(f.a,{className:"bg-light p-3 shadow rounded",children:Object(c.jsxs)(C.a,{noValidate:!0,validated:I,onSubmit:function(e){e.preventDefault(),e.stopPropagation();var c=e.currentTarget;if(!m.sign&&!m.pending)return h.notify.show("Se necesita la firma para continuar","error"),null;!1===c.checkValidity()?h.notify.show("Please verify the form and try again","error"):a?u.a.put("https://reciba-api.herokuapp.com/api/invoice/edit/".concat(a),Object(l.a)({},m),{headers:{auth:localStorage.getItem("bill-token")}}).then((function(e){var t=e.data;t.success&&P.push("/invoice/display/".concat(t.data._id,"/").concat(s)),h.notify.show(t.message,"success")})).catch((function(e){h.notify.show("Ocurri\xf3 un error creando el comprobante, por favor reintente","error")})):u.a.post("https://reciba-api.herokuapp.com/api/invoice/",Object(l.a)({},m),t).then((function(e){var t=e.data;t.id&&P.push(m.pending?"/dashboard":"/invoice/display/".concat(t.id,"/").concat(s)),h.notify.show(t.message,"success")})).catch((function(e){h.notify.show("Ocurri\xf3 un error creando el comprobante, por favor reintente","error")})),S(!0)},children:[Object(c.jsx)(g.a,{children:Object(c.jsx)(f.a,{children:Object(c.jsxs)(C.a.Group,{children:[Object(c.jsx)(C.a.Label,{children:"Fecha"}),Object(c.jsx)(C.a.Control,{required:!0,name:"date",onChange:q,value:m.date.toString(),type:"date"}),Object(c.jsx)(C.a.Control.Feedback,{type:"invalid",children:"La fecha es necesaria"})]})})}),Object(c.jsxs)(g.a,{children:[Object(c.jsx)(f.a,{md:"3",children:Object(c.jsx)("p",{className:"text-center",children:"Recibo"})}),Object(c.jsx)(f.a,{children:Object(c.jsxs)(C.a.Group,{children:[Object(c.jsx)(C.a.Label,{children:"De"}),Object(c.jsx)(C.a.Control,{required:!0,name:"from",onChange:q,value:m.from,type:"text"})]})})]}),Object(c.jsx)(g.a,{children:Object(c.jsx)(f.a,{children:Object(c.jsxs)(C.a.Group,{children:[Object(c.jsx)(C.a.Label,{children:"Cantidad"}),Object(c.jsx)(C.a.Control,{required:!0,name:"amountText",onChange:q,value:m.amountText,type:"text"})]})})}),Object(c.jsx)(g.a,{children:Object(c.jsx)(f.a,{children:Object(c.jsxs)(C.a.Group,{children:[Object(c.jsx)(C.a.Label,{children:"En concepto de"}),Object(c.jsx)(C.a.Control,{required:!0,name:"concept",onChange:q,value:m.concept,type:"text"})]})})}),Object(c.jsxs)(g.a,{children:[Object(c.jsx)(f.a,{sm:12,md:3,children:Object(c.jsxs)(C.a.Group,{children:[Object(c.jsx)(C.a.Label,{children:"Cantidad"}),Object(c.jsxs)(Ne.a,{children:[Object(c.jsx)(Ne.a.Prepend,{children:Object(c.jsx)(Ne.a.Text,{children:Object(c.jsxs)("select",{name:"currency",onChange:q,value:m.currency,className:"no-decoration",children:[Object(c.jsx)("option",{children:"ARS"}),Object(c.jsx)("option",{children:"USD"})]})})}),Object(c.jsx)(C.a.Control,{required:!0,name:"amount",onChange:q,value:m.amount,min:1,type:"number"})]})]})}),Object(c.jsx)(f.a,{className:"text-right",children:Object(c.jsx)("p",{className:"lead",children:"Firma"})}),Object(c.jsx)(f.a,{children:m.sign?Object(c.jsx)("img",{height:"100",src:m.sign,alt:"signature"}):null})]}),Object(c.jsx)(g.a,{children:Object(c.jsxs)(f.a,{className:"text-right",children:[Object(c.jsx)("fieldset",{className:"mr-3 py-1 px-2 border border-gray rounded",children:Object(c.jsxs)("label",{className:"m-0 p-0",children:[Object(c.jsx)("input",{type:"checkbox",name:"pending",checked:m.pending,onChange:q,className:"mr-1 p-0 m-0"}),"Marcar boleta para firmar luego"]})}),Object(c.jsxs)(v.a,{variant:"info",onClick:E,className:"mr-3",children:[Object(c.jsx)(y.a,{icon:N.o})," Mostrar QR para firmar"]}),Object(c.jsxs)(v.a,{variant:"secondary",className:"mr-3",onClick:function(){P.push("/")},children:[Object(c.jsx)(y.a,{icon:N.t})," Cancelar"]}),Object(c.jsxs)(v.a,{variant:"primary",type:"submit",children:[Object(c.jsx)(y.a,{icon:N.p})," Guardar"]})]})})]})})})]})}var Ce=function(){return Object(c.jsx)(n.Fragment,{children:Object(c.jsx)(x,{children:Object(c.jsx)(V,{children:Object(c.jsxs)(o.b,{basename:"",children:[Object(c.jsx)(B,{}),Object(c.jsxs)(j.d,{children:[Object(c.jsx)(j.b,{path:"/signup",component:I}),Object(c.jsx)(j.b,{path:"/login",component:S}),Object(c.jsx)(j.b,{path:"/logout",component:D}),Object(c.jsx)(j.b,{path:"/",exact:!0,component:w}),Object(c.jsx)(j.b,{path:"/invoice/generate",component:ke}),Object(c.jsx)(re,{path:"/invoice/edit/:id",render:function(){return Object(c.jsx)(ke,{})}}),Object(c.jsx)(j.b,{path:"/invoice/display/:id/:socketId",component:ye}),Object(c.jsx)(j.b,{path:"/invoice/code/:id",component:_}),Object(c.jsx)(re,{path:"/dashboard",render:function(){return Object(c.jsx)(ce,{})}}),Object(c.jsx)(j.b,{path:"/signature/:socketId",component:de}),Object(c.jsx)(j.b,{path:"/offlinesignature/:invoiceId",component:de}),Object(c.jsx)(j.b,{render:function(){return Object(c.jsx)("div",{children:"Not found"})}})]})]})})})})};a(228),a(229);i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsxs)(o.a,{children:[Object(c.jsx)(m.a,{options:{zIndex:998,top:"56px",colors:{error:{color:"#FFFFFF",backgroundColor:"#ff7851"},success:{color:"#FFFFFF",backgroundColor:"#56cc9d"}}}}),Object(c.jsx)(Ce,{})]})}),document.getElementById("root"))}},[[230,1,2]]]);
//# sourceMappingURL=main.908d11a8.chunk.js.map