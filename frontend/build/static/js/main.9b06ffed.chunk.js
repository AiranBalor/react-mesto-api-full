(this["webpackJsonpmesto-auth"]=this["webpackJsonpmesto-auth"]||[]).push([[0],{30:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(20),i=n.n(c),s=n(9),r=(n(30),n(24)),l=n(2),u=n(3),p=n.p+"static/media/logo.c2821b38.svg",d=n(0);var j=function(e){var t=e.onLogout,n=e.loggedIn,a=e.userEmail,o=Object(u.h)().pathname,c="".concat("/signin"===o?"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f":"\u0412\u043e\u0439\u0442\u0438"),i="".concat("/signin"===o?"/signup":"/signin");return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("img",{className:"logo",src:p,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0441\u0430\u0439\u0442\u0430 Mesto"}),n?Object(d.jsxs)("div",{className:"header__auth-info",children:[Object(d.jsx)("span",{className:"header__auth-email",children:a}),Object(d.jsx)("button",{className:"header__singout",onClick:t,children:"\u0412\u044b\u0439\u0442\u0438"})]}):Object(d.jsx)(s.b,{to:i,className:"header__link",children:c})]})},h=n.p+"static/media/footer__copyright-image.b2563baa.svg";var m=function(){return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsx)("img",{className:"footer__copyright-image",src:h,alt:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043b\u043e\u0433\u043e\u0442\u0438\u043f\u0430 \u0441\u0430\u0439\u0442\u0430"})})},b=n.p+"static/media/edit-button.6c7bf054.svg",_=n.p+"static/media/add-button.bed8c136.svg",f=o.a.createContext();var O=function(e){var t=e.card,n=e.onCardClick,a=e.onCardDelete,c=e.onCardLike,i=o.a.useContext(f),s=t.owner._id===i._id,r="".concat(s?"photo-element__button-delete":"photo_element__button-delete_hidden"),l=t.likes.some((function(e){return e._id===i._id})),u="".concat(l?"photo-element__button-like_active":"");return Object(d.jsxs)("article",{className:"photo-element",children:[Object(d.jsx)("button",{type:"button",className:r,onClick:function(){a(t)}}),Object(d.jsx)("img",{className:"photo-element__picture",src:t.link,alt:t.name,onClick:function(){n(t)}}),Object(d.jsxs)("div",{className:"photo-element__info",children:[Object(d.jsx)("h2",{className:"photo-element__title",children:t.name}),Object(d.jsxs)("div",{className:"photo-element__likes-container",children:[Object(d.jsx)("button",{type:"button",className:"photo-element__button-like ".concat(u),onClick:function(){c(t)}}),Object(d.jsx)("span",{className:"photo-element__likes-counter",children:t.likes.length})]})]})]})};var x=function(e){var t=e.cards,n=e.onEditProfile,a=e.onAddPlace,c=e.onEditAvatar,i=e.onCardClick,s=e.onCardDelete,r=e.onCardLike,l=o.a.useContext(f);return Object(d.jsxs)("main",{className:"content",children:[Object(d.jsxs)("section",{className:"profile",children:[Object(d.jsx)("div",{className:"profile__overlay",children:Object(d.jsx)("img",{className:"profile__avatar",src:l.avatar,alt:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u044f",onClick:c})}),Object(d.jsxs)("div",{className:"profile__info",children:[Object(d.jsx)("h1",{className:"profile__name",children:l.name}),Object(d.jsx)("button",{type:"button",className:"profile__edit-button",onClick:n,children:Object(d.jsx)("img",{className:"profile__edit-button-picture",src:b,alt:"\u041a\u043d\u043e\u043f\u043a\u0430 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043f\u0440\u043e\u0444\u0438\u043b\u044f"})}),Object(d.jsx)("p",{className:"profile__profession",children:l.about})]}),Object(d.jsx)("button",{type:"button",className:"profile__add-button",onClick:a,children:Object(d.jsx)("img",{className:"profile__add-button-picture",src:_,alt:"\u041a\u043d\u043e\u043f\u043a\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u043d\u0430 \u0441\u0430\u0439\u0442"})})]}),Object(d.jsx)("section",{className:"photo-elements",children:t.map((function(e){return Object(d.jsx)(O,{card:e,onCardClick:i,onCardDelete:s,onCardLike:r},e._id)}))})]})};var g=function(e){var t=e.name,n=e.title,a=e.children,o=e.text,c=e.isOpen,i=e.onClose,s=e.onSubmit,r=e.isForm;return Object(d.jsx)("div",{className:"popup popup-".concat(t," ").concat(c?"popup_opened":""),children:Object(d.jsxs)("form",{onSubmit:s,className:"popup__form popup__container",noValidate:!0,children:[Object(d.jsx)("h2",{className:"popup__container-title",children:n}),a,r?Object(d.jsx)("button",{type:"submit",className:"popup__submit",children:o}):"",Object(d.jsx)("button",{type:"button",className:"popup__close",onClick:i})]})})};var v=function(e){var t=e.card,n=e.isOpen,a=e.onClose;return Object(d.jsx)("div",{className:"popup popup-view ".concat(n?"popup_opened":""),children:Object(d.jsxs)("div",{className:"popup-view__container",children:[Object(d.jsx)("button",{type:"button",className:"popup__close popup-view__close-button",onClick:a}),Object(d.jsx)("img",{className:"popup-view__image",src:t.link,alt:t.name}),Object(d.jsx)("h2",{className:"popup-view__card-title",children:t.name})]})})},N=n(5),C=n(22),k=n(23),y=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))},S=new(function(){function e(t){Object(C.a)(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}return Object(k.a)(e,[{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:Object(N.a)(Object(N.a)({},this._headers),{},{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))})}).then(y)}},{key:"getUserInfoFromServer",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:Object(N.a)(Object(N.a)({},this._headers),{},{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))})}).then(y)}},{key:"getAllInfo",value:function(){return Promise.all([this.getUserInfoFromServer(),this.getInitialCards()])}},{key:"updateUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(y)}},{key:"sendNewCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(y)}},{key:"deleteCardFromServer",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(y)}},{key:"changeLikeCardStatus",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:t?"PUT":"DELETE",headers:this._headers}).then(y)}},{key:"updateAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(y)}}]),e}())({baseUrl:"http://localhost:3001",headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt")),"Content-Type":"application/json"}});var w=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateUser,c=o.a.useState(""),i=Object(l.a)(c,2),s=i[0],r=i[1],u=o.a.useState(""),p=Object(l.a)(u,2),j=p[0],h=p[1],m=o.a.useContext(f);return o.a.useEffect((function(){r(m.name),h(m.about)}),[m]),Object(d.jsxs)(g,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",text:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({name:s,about:j})},isForm:!0,children:[Object(d.jsxs)("label",{className:"popup__label",children:[Object(d.jsx)("input",{name:"name",id:"profile-name-input",className:"popup__input popup__input_type_name",type:"text",placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"40",onChange:function(e){r(e.target.value)},value:s||"",required:!0}),Object(d.jsx)("span",{className:"popup__input-error profile-name-input-error"})]}),Object(d.jsxs)("label",{className:"popup__label",children:[Object(d.jsx)("input",{name:"profession",id:"profile-profession-input",className:"popup__input popup__input_type_profession",type:"text",placeholder:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044f",minLength:"2",maxLength:"200",onChange:function(e){h(e.target.value)},value:j||"",required:!0}),Object(d.jsx)("span",{className:"popup__input-error profile-profession-input-error"})]})]})};var L=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateAvatar,c=o.a.useRef("");return Object(d.jsx)(g,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",text:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({avatar:c.current.value})},isForm:!0,children:Object(d.jsxs)("label",{className:"popup__label",children:[Object(d.jsx)("input",{name:"link",id:"avatar-link-input",className:"popup__input popup__input_type_card-link",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",ref:c,required:!0}),Object(d.jsx)("span",{className:"popup__input-error avatar-link-input-error"})]})})};var z=function(e){var t=e.isOpen,n=e.onClose,a=e.onAddPlace,c=o.a.useState(""),i=Object(l.a)(c,2),s=i[0],r=i[1],u=o.a.useState(""),p=Object(l.a)(u,2),j=p[0],h=p[1];return Object(d.jsxs)(g,{name:"card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",text:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({name:s,link:j})},isForm:!0,children:[Object(d.jsxs)("label",{className:"popup__label",children:[Object(d.jsx)("input",{name:"name",id:"card-name-input",className:"popup__input popup__input_type_card-name",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",onChange:function(e){r(e.target.value)},required:!0}),Object(d.jsx)("span",{className:"popup__input-error card-name-input-error"})]}),Object(d.jsxs)("label",{className:"popup__label",children:[Object(d.jsx)("input",{name:"link",id:"card-link-input",className:"popup__input popup__input_type_card-link",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",onChange:function(e){h(e.target.value)},required:!0}),Object(d.jsx)("span",{className:"popup__input-error card-link-input-error"})]})]})},A=n(11);var I=function(e){var t=e.children,n=e.title,a=e.text,o=e.active,c=e.onSubmit;return Object(d.jsx)("div",{className:"authorization",children:Object(d.jsxs)("div",{className:"authorization__container",children:[Object(d.jsx)("h2",{className:"authorization__title",children:n}),Object(d.jsxs)("form",{className:"authorization__form",onSubmit:c,action:"#",noValidate:!0,children:[t,Object(d.jsx)("button",{type:"submit",className:"authorization__submit-button",children:a})]}),Object(d.jsxs)("p",{className:"authorization__text ".concat(o),children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"," ",Object(d.jsx)(s.b,{to:"/signin",className:"authorization__link",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})};var U=function(e){var t=e.onLogin,n=o.a.useState({email:"",password:""}),a=Object(l.a)(n,2),c=a[0],i=a[1];function s(e){var t=e.target,n=t.name,a=t.value;i(Object(N.a)(Object(N.a)({},c),{},Object(A.a)({},n,a)))}return Object(d.jsxs)(I,{title:"\u0412\u0445\u043e\u0434",text:"\u0412\u043e\u0439\u0442\u0438",active:"",onSubmit:function(e){e.preventDefault();var n=c.email,a=c.password;a&&n&&t(n,a)},children:[Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"email",value:c.email,className:"authorization__item auth__item_type_email",name:"email",onChange:s,placeholder:"Email",required:!0,minLength:"4",maxLength:"40"}),Object(d.jsx)("span",{id:"email-error",className:"authorization__error"})]}),Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"password",value:c.password,className:"authorization__item auth__item_type_password",name:"password",onChange:s,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,minLength:"8",maxLength:"20"}),Object(d.jsx)("span",{id:"password-error",className:"authorization__error"})]})]})};var E=function(e){var t=e.onRegister,n=o.a.useState({email:"",password:""}),a=Object(l.a)(n,2),c=a[0],i=a[1];function s(e){var t=e.target,n=t.name,a=t.value;i(Object(N.a)(Object(N.a)({},c),{},Object(A.a)({},n,a)))}return Object(d.jsxs)(I,{title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",text:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",active:"authorization__text_active",onSubmit:function(e){e.preventDefault();var n=c.email,a=c.password;t(n,a)},children:[Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"email",value:c.email,className:"authorization__item",name:"email",onChange:s,placeholder:"Email",required:!0,minLength:"4",maxLength:"40"}),Object(d.jsx)("span",{id:"email-error",className:"authorization__error"})]}),Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"password",value:c.password,className:"authorization__item",name:"password",onChange:s,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,minLength:"8",maxLength:"20"}),Object(d.jsx)("span",{id:"password-error",className:"authorization__error"})]})]})},P=n(25);var T=function(e){var t=e.component,n=Object(P.a)(e,["component"]);return Object(d.jsx)(u.b,{children:function(){return n.loggedIn?Object(d.jsx)(t,Object(N.a)({},n)):Object(d.jsx)(u.a,{to:"./login"})}})};var F=function(e){var t=e.isOpen,n=e.onClose,a=e.message;return Object(d.jsxs)(g,{isModal:!1,name:"authorization",isOpen:t,onClose:n,isForm:!1,children:[Object(d.jsx)("img",{src:a.icon,className:"popup__tooltip-image",alt:"\u0438\u043a\u043e\u043d\u043a\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438"}),Object(d.jsx)("p",{className:"popup__tooltip-text",children:a.text})]})},D=n.p+"static/media/profile-avatar.bbe7c5b6.jpg",q=n.p+"static/media/success-icon.1b6082f8.svg",J=n.p+"static/media/failure-icon.7c6a020b.svg",B="http://localhost:3001";var M=function(){var e=o.a.useState(""),t=Object(l.a)(e,2),n=t[0],a=t[1],c=o.a.useState({icon:"",text:""}),i=Object(l.a)(c,2),s=i[0],p=i[1],h=o.a.useState(!1),b=Object(l.a)(h,2),_=b[0],O=b[1],N=o.a.useState(!1),C=Object(l.a)(N,2),k=C[0],A=C[1],I=o.a.useState(!1),P=Object(l.a)(I,2),M=P[0],R=P[1],H=o.a.useState(!1),V=Object(l.a)(H,2),G=V[0],K=V[1],Q=o.a.useState(!1),W=Object(l.a)(Q,2),X=W[0],Y=W[1],Z=o.a.useState(!1),$=Object(l.a)(Z,2),ee=$[0],te=$[1],ne=o.a.useState({}),ae=Object(l.a)(ne,2),oe=ae[0],ce=ae[1],ie=o.a.useState({name:"\u0416\u0430\u043a \u0418\u0432-\u041a\u0443\u0441\u0442\u043e",about:"\u0418\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c",email:"",avatar:D}),se=Object(l.a)(ie,2),re=se[0],le=se[1],ue=o.a.useState([]),pe=Object(l.a)(ue,2),de=pe[0],je=pe[1],he=Object(u.g)();function me(){A(!1),R(!1),K(!1),Y(!1),te(!1)}function be(){localStorage.removeItem("jwt"),a(""),O(!1),he.push("/signin")}return o.a.useEffect((function(){_&&S.getAllInfo().then((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];le(n),je(a)})).catch((function(e){return console.log(e)}))}),[_]),o.a.useEffect((function(){var e,t=localStorage.getItem("jwt");t&&(e=t,fetch("".concat(B,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status," - ").concat(e.statusText))})).then((function(e){return e}))).then((function(e){a(e.email),O(!0),he.push("/")})).catch((function(e){console.error(e),p({icon:J,text:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."}),te(!0)}))}),[_,he]),Object(d.jsx)(f.Provider,{value:re,children:Object(d.jsx)("div",{className:"App page",children:Object(d.jsxs)("div",{className:"page__container",children:[Object(d.jsx)(j,{onLogout:be,loggedIn:_,userEmail:n}),Object(d.jsxs)(u.d,{children:[Object(d.jsx)(T,{exact:!0,path:"/",loggedIn:_,handleLogout:be,component:x,cards:de,onEditProfile:function(){A(!0)},onAddPlace:function(){R(!0)},onEditAvatar:function(){K(!0)},onCardClick:function(e){!function(e){ce(e),Y(!0)}(e)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===re._id}));S.changeLikeCardStatus(e._id,!t).then((function(t){je((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)}))},onCardDelete:function(e){S.deleteCardFromServer(e._id).then((function(){je((function(t){return t.filter((function(t){return t._id!==e._id}))}))})).catch((function(e){return console.log(e)}))}}),Object(d.jsx)(u.b,{path:"/signin",children:Object(d.jsx)(U,{onLogin:function(e,t){(function(e,t){return fetch("".concat(B,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(y).then((function(e){if(e.token)return localStorage.setItem("jwt",e.token),e}))})(e,t).then((function(t){localStorage.setItem("jwt",t.token),a(e),O(!0),he.push("/")})).catch((function(){p({icon:J,text:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."}),te(!0)}))}})}),Object(d.jsx)(u.b,{path:"/signup",children:Object(d.jsx)(E,{onRegister:function(e,t){(function(e,t){return fetch("".concat(B,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(y).then((function(e){if(e)return e}))})(e,t).then((function(e){e&&a(e.email),he.push("/signin"),p({icon:q,text:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"}),te(!0)})).catch((function(){p({icon:J,text:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."}),te(!0)}))}})}),Object(d.jsx)(u.b,{children:_?Object(d.jsx)(u.a,{to:"/"}):Object(d.jsx)(u.a,{to:"/signin"})})]}),Object(d.jsx)(m,{}),Object(d.jsx)(w,{isOpen:k,onClose:me,onUpdateUser:function(e){S.updateUserInfo(e).then((function(e){le(e),me()})).catch((function(e){return console.log(e)}))}}),Object(d.jsx)(z,{isOpen:M,onClose:me,onAddPlace:function(e){S.sendNewCard(e).then((function(e){je([e].concat(Object(r.a)(de))),me()})).catch((function(e){return console.log(e)}))}}),Object(d.jsx)(g,{name:"delete",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",children:Object(d.jsx)(d.Fragment,{}),text:"\u0414\u0430"}),Object(d.jsx)(F,{isOpen:ee,onClose:me,message:s}),Object(d.jsx)(L,{isOpen:G,onClose:me,onUpdateAvatar:function(e){var t=e.avatar;S.updateAvatar(t).then((function(e){console.log(e),le(e),console.log(re),me()})).catch((function(e){return console.log(e)}))}}),Object(d.jsx)(v,{card:oe,isOpen:X,onClose:me})]})})})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),o(e),c(e),i(e)}))};i.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(s.a,{children:Object(d.jsx)(M,{})})}),document.getElementById("root")),R()}},[[37,1,2]]]);
//# sourceMappingURL=main.9b06ffed.chunk.js.map