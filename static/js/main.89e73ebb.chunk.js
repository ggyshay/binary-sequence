(this["webpackJsonpbinary-sequence"]=this["webpackJsonpbinary-sequence"]||[]).push([[0],{19:function(e,t,n){e.exports=n.p+"static/media/alert.4c4a3087.wav"},21:function(e,t,n){e.exports=n(35)},26:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),c=n.n(o),l=(n(26),n(3)),s=n.n(l),i=n(4),u=n(2),p=n(20),f=n(17);var b=new function e(){var t=this;Object(f.a)(this,e),this.setupApiCallbacks=function(){t.ws=new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=22269"),t.callbacks={},t.ws.onmessage=function(e){var n=JSON.parse(e.data);return n.error?t.callbacks[n.msg_type].reject(n.error):(t.callbacks[n.msg_type],t.callbacks[n.msg_type].resolve(n))},t.ws.onopen=function(){console.log("open"),setTimeout(t.onOpenCB,1e3)}},this.reset=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("reseting"),t.ws.readyState===t.ws.CLOSED||t.ws.readyState===t.ws.CLOSING){e.next=7;break}return e.next=4,t.cancelSubscription();case 4:console.log("forgot all ticks"),t.ws.close(),console.log("closed");case 7:setTimeout((function(){t.onOpenCB=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.authorize();case 2:t.startTicks();case 3:case"end":return e.stop()}}),e)}))),t.setupApiCallbacks()}),1e3);case 8:case"end":return e.stop()}}),e)}))),this.resetTimer=function(){t.timeout&&clearTimeout(t.timeout),t.timeout=setTimeout(t.reset,2e5)},this.send=function(e){return t.ws.send(JSON.stringify(e))},this.handleProposalResponse=function(e){var n=e.proposal.id;t.finishBuy(n,e.proposal.ask_price)},this.onOpen=function(e){return t.onOpenCB=e},this.pushToStack=function(e){t.stack.length>10&&t.stack.shift(),t.stack.push(e)},this.setOnData=function(e){t.tickCB=function(n){if(console.log("tick"),t.resetTimer(),n.proposal&&t.handleProposalResponse(n),n.tick){var a=n.tick;t.pushToStack(a),void 0!=t.lastValue?t.isPlaying?(e(Object(p.a)({},a,{delta:a.quote-t.lastValue})),t.lastValue=a.quote):(t.pausedTicks--,0===t.pausedTicks&&t.callback&&t.callback(a.quote,t.lastValue,t.stack)):t.lastValue=a.quote}}},this.startTicks=function(){return new Promise((function(e,n){console.log("send ticks"),t.send({ticks:t.symbol}),t.callbacks.tick={resolve:t.tickCB,reject:n},console.log("callbacks after that",t.callbacks)}))},this.authorize=function(e){return new Promise((function(n,a){e?(t.send({authorize:e}),t.userToken=e):t.send({authorize:t.userToken}),t.callbacks.authorize={resolve:n,reject:a}}))},this.unpause=function(){t.isPlaying=!0},this.setShouldFreeze=function(e,n){e&&t.isPlaying&&(t.isPlaying=!1,t.pausedTicks=6,t.callback=n)},this.buy=function(){var e=Object(i.a)(s.a.mark((function e(n,a){var r,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,r){console.log("proposal",n,a?"up":"down"),t.send({proposal:1,amount:n,basis:"stake",contract_type:a?"CALL":"PUT",currency:"USD",duration:5,duration_unit:"t",symbol:t.symbol}),t.callbacks.proposal={resolve:e,reject:r}}));case 2:return r=e.sent,o=r.proposal.id,e.abrupt("return",new Promise((function(e,n){t.send({buy:o,price:r.proposal.ask_price}),t.callbacks.buy={resolve:e,reject:n}})));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),this.cancelSubscription=function(){return new Promise((function(e,n){t.send({forget_all:"ticks"}),t.callbacks.forget_all={resolve:e,reject:n}}))},this.pausedTicks=0,this.resolution=2,this.symbol="R_100",this.callback=void 0,this.onOpenCB=void 0,this.timeout=void 0,this.errorCB=void 0,this.setupApiCallbacks(),this.lastValue=void 0,this.isPlaying=!0,this.isAuthorized=!1,this.stack=[],this.ws.onerror=console.error,this.userToken=void 0},m=(n(28),n(12)),h=(n(29),function(e){return r.a.createElement("div",{className:"tg-group"},r.a.createElement("div",{className:"tg-container"+(e.isOn?" tg-on":""),onClick:e.onClick},r.a.createElement("div",{className:"tg-slider"})),e.label&&r.a.createElement("p",{className:"tg-label"},e.label))}),d=n(11),g=[{rule:["i","pM1","iM2"],colors:"rrb",flag:!0},{rule:["i","pM1","im2"],colors:"rbr",flag:!0},{rule:["i","pM1","iM2"],colors:"bbb",flag:!0},{rule:["p","iM1","pM2"],colors:"rrb",flag:!0},{rule:["p","iM1","pm1"],colors:"rbr",flag:!0},{rule:["p","iM1","pM2"],colors:"bbb",flag:!0},{rule:["i","pM1","iM2"],colors:"bbr",flag:!1},{rule:["i","pM1","im2"],colors:"brb",flag:!1},{rule:["i","pM1","iM2"],colors:"rrr",flag:!1},{rule:["p","iM1","pM2"],colors:"bbr",flag:!1},{rule:["p","iM1","pm1"],colors:"brb",flag:!1},{rule:["p","iM1","pM2"],colors:"rrr",flag:!1}];function v(e){for(var t=[],n=0;n<e.length;)if("p"===e[n]||"i"===e[n])t.push([e[n],0,0]),n+=1;else if("d"===e[n]){var a=e.substr(n).split(/[(|)]/)[1];t.push([e[n],e[n+1]-1,parseInt(a)]),n+=a.length+4}else t.push([e[n],e[n+1]-1,0]),n+=2;return t}function k(e,t){for(var n=0;n<t.length;n++)if(!O(e[n],v(t[n]),e))return!1;return!0}function O(e,t,n){var a,r=Object(d.a)(t);try{for(r.s();!(a=r.n()).done;){var o=a.value,c=o[0],l=n[o[1]],s=o[2];if("p"===c&&e%2===1)return!1;if("i"===c&&E(e))return!1;if("m"===c&&e>=l)return!1;if("M"===c&&y(e,l))return!1;if("n"===c&&w(e,l))return!1;if("N"===c&&j(e,l))return!1;if("d"===c&&!S(e,l,s))return!1;if("e"===c&&!C(e,o[1]+1))return!1}}catch(i){r.e(i)}finally{r.f()}return!0}function E(e){return e%2===0}function j(e,t){return e<t}function w(e,t){return e>t}function y(e,t){return e<=t}function S(e,t,n){return e-t===n}function C(e,t){return e===t}var _=n(18),x=n(19),M=n.n(x),T=function(e){return r.a.createElement("div",null,r.a.createElement("p",null,e.label),r.a.createElement("input",{onChange:function(t){return e.onChange(t.target.value)},value:e.value}))},R=function(e){var t=Object(a.useState)([]),n=Object(u.a)(t,2),o=n[0],c=n[1],l=Object(a.useState)([]),s=Object(u.a)(l,2),i=s[0],p=s[1],f=Object(a.useState)(!1),v=Object(u.a)(f,2),O=v[0],E=v[1],j=Object(a.useState)(void 0),w=Object(u.a)(j,2),y=w[0],S=w[1],C=Object(a.useState)(0),x=Object(u.a)(C,2),R=x[0],z=x[1],I=Object(a.useState)(0),P=Object(u.a)(I,2),q=P[0],A=P[1],B=Object(a.useState)(!0),L=Object(u.a)(B,2),N=L[0],V=L[1],D=Object(a.useState)(0),F=Object(u.a)(D,2),W=F[0],J=F[1],U=Object(a.useState)(5),G=Object(u.a)(U,2),K=G[0],Z=G[1],$=Object(a.useState)(2),H=Object(u.a)($,2),Q=H[0],X=H[1],Y=Object(_.a)(M.a),ee=Object(u.a)(Y,1)[0],te=function(e){window.localStorage.setItem("automaticTradeEnabled",e),E(e)};Object(a.useEffect)((function(){var t=window.localStorage.getItem("automaticTradeEnabled");E(t);b.setOnData((function(t){c((function(n){var a=Object(m.a)(n);return a.push({value:t.quote,lastDigit:Math.round(t.quote*Math.pow(10,e.resolution))%10,color:t.delta>0?"blue":"red",id:t.epoch}),a.length>10&&a.shift(),Object(m.a)(a)}))})),b.startTicks()}),[]);var ne=function(){b.unpause(),c([]),p("")},ae=function(e,t,n){return function(e,t,a){console.log("stack",a.map((function(e){return e.quote})));var r=a[a.length-6].quote,o=e>r;console.log("comparando atual",e,"com stack[1]",r,"=",o,"previsto pela regra era",n),n!==o?function(){var e=W+1;e>K?(te(!1),J(0)):(A(q*Q),J(e))}():(J(0),A(R)),ne()}};Object(a.useEffect)((function(){var e=function(e){for(var t=[],n=[],a=0;a<e.length-1;a+=2)t.push(+e[a]),n.push(e[a+1]);var r,o=Object(d.a)(g);try{for(o.s();!(r=o.n()).done;){var c=r.value,l=c.rule,s=c.colors,i=c.flag;if(n.length<=s.length){if(n.toString().replace(/,/g,"")===s&&k(t,l))return{result:i,rule:l,colors:s}}else for(var u=0;u<=n.length-s.length;){for(var p=[],f=[],b=u;b<s.length+u;b++)p.push(t[b]),f.push(n[b]);var m=f.toString().replace(/,/g,""),h=k(p,l);if(m===s&&h)return{result:i,rule:l,colors:s};u++}}}catch(v){o.e(v)}finally{o.f()}return{}}(o.reduce((function(e,t){return e+t.lastDigit+t.color[0]}),"")),t=e.result;e.rule,e.colors;b.setShouldFreeze(void 0!==t,ae(0,0,t)),S(t),void 0!==t&&N&&ee(),void 0!==t&&O&&b.buy(q,t)}),[o]);return r.a.createElement("div",{className:"App"},r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(h,{label:"Modo Automatico",onClick:function(){return te(!O)},isOn:O}),r.a.createElement(T,{label:"Stop Loss",onChange:Z,value:K}),r.a.createElement(T,{label:"Valor de Entrada",onChange:function(e){z(e),A(e)},value:R}),r.a.createElement(T,{label:"Multiplicador",onChange:X,value:Q}),r.a.createElement("p",null,r.a.createElement("b",null,"Valor atual")," =:"),r.a.createElement("p",null,q)),r.a.createElement("button",{onClick:e.showIndexScreen},"Trocar Indice"),r.a.createElement("button",{onClick:function(){localStorage.clear(),e.logout()}},"Logout"),r.a.createElement(h,{label:"Avisos sonoros",onClick:function(){return V(!N)},isOn:N})),r.a.createElement("div",{className:"digit-container"},o.map((function(e){return r.a.createElement("p",{style:{fontSize:35,color:e.color,margin:10},key:e.id},e.lastDigit)}))),void 0!==y&&r.a.createElement("h3",{style:{color:y?"blue":"red",fontSize:60}},y?"RISE":"FALL"),i.length>0&&r.a.createElement("p",null,i),i.length>0&&r.a.createElement("button",{onClick:ne},"Voltar para a analise"),r.a.createElement("button",{onClick:b.reset},"Atualizar"))},z=function(e){return r.a.createElement("div",null,e.error)},I=n(8);n(30),n(32);I.initializeApp({apiKey:"AIzaSyB0Tn75fPotov6ZzLPqaOhoW5dF3MwkpTE",authDomain:"binary-sequence-db.firebaseapp.com",databaseURL:"https://binary-sequence-db.firebaseio.com",projectId:"binary-sequence-db",storageBucket:"binary-sequence-db.appspot.com",messagingSenderId:"811701963619",appId:"1:811701963619:web:727c69305900b2c73d2156"});var P=function(){var e=Object(i.a)(s.a.mark((function e(t,n,a){var r,o,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.auth().signInWithEmailAndPassword(t,n);case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",!1);case 9:return r=I.firestore(),e.next=12,r.collection("users").where("email","==",t).get();case 12:if(e.sent.forEach((function(e){o=e})),(c=o.data()).binary_token){e.next=22;break}return e.next=19,o.ref.set({email:t,binary_token:a});case 19:return e.abrupt("return",!0);case 22:if(c.binary_token!==a){e.next=26;break}return e.abrupt("return",!0);case 26:return e.abrupt("return",!1);case 27:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t,n,a){return e.apply(this,arguments)}}(),q=function(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),o=n[0],c=n[1],l=Object(a.useState)(""),p=Object(u.a)(l,2),f=p[0],m=p[1],h=Object(a.useState)(""),d=Object(u.a)(h,2),g=d[0],v=d[1],k=function(){var t=Object(i.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P(o,f,g);case 2:if(n=t.sent,console.log(n),!n){t.next=11;break}return localStorage.setItem("user",n),e.onLogin(n),t.next=9,b.authorize(g);case 9:localStorage.setItem("token",g),e.onAuthorize(!0);case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("b",null,"Email")),r.a.createElement("input",{onChange:function(e){return c(e.target.value)},value:o}),r.a.createElement("p",null,r.a.createElement("b",null,"Senha")),r.a.createElement("input",{onChange:function(e){return m(e.target.value)},value:f,type:"password"}),r.a.createElement("p",null,r.a.createElement("b",null,"Token da binary")),r.a.createElement("input",{onChange:function(e){return v(e.target.value)}}),r.a.createElement("button",{onClick:k},"Entrar"))},A=function(e){var t=Object(a.useState)("R_100"),n=Object(u.a)(t,2),o=n[0],c=n[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("select",{onChange:function(e){return c(e.target.value)}},r.a.createElement("option",{value:"R_100"},"R_100"),r.a.createElement("option",{value:"R_75"},"R_75"),r.a.createElement("option",{value:"R_50"},"R_50"),r.a.createElement("option",{value:"R_25"},"R_25"),r.a.createElement("option",{value:"R_10"},"R_10")),r.a.createElement("button",{onClick:function(){return e.onChange(o,B[o])}},"Confirmar"))},B={R_100:2,R_75:4,R_50:4,R_25:3,R_10:3};var L=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(!1),l=Object(u.a)(c,2),p=l[0],f=l[1],m=Object(a.useState)(),h=Object(u.a)(m,2),d=h[0],g=h[1],v=Object(a.useState)(!1),k=Object(u.a)(v,2),O=k[0],E=k[1],j=Object(a.useState)(!1),w=Object(u.a)(j,2),y=w[0],S=w[1],C=Object(a.useState)(2),_=Object(u.a)(C,2),x=_[0],M=_[1];return Object(a.useEffect)((function(){var e=localStorage.getItem("user");e&&E(e),b.onOpen(Object(i.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f(!0),!(t=localStorage.getItem("token"))){e.next=14;break}return e.prev=3,e.next=6,b.authorize(t);case 6:n=e.sent,console.log(n),o(!0),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])}))))}),[]),y?r.a.createElement(A,{onChange:function(e,t){b.symbol=e,M(t),b.reset(),S(!1)}}):O&&n?d?r.a.createElement(z,{error:d}):p?n&&r.a.createElement(R,{onError:g,logout:function(){E(!1),o(!1),b.cancelSubscription()},showIndexScreen:function(){return S(!0)},resolution:x}):r.a.createElement("h1",null,"Carregando..."):r.a.createElement(q,{onLogin:E,onAuthorize:o})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.89e73ebb.chunk.js.map