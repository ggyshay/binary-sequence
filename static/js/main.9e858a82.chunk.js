(this["webpackJsonpbinary-sequence"]=this["webpackJsonpbinary-sequence"]||[]).push([[0],{19:function(e,r,l){e.exports=l.p+"static/media/alert.4c4a3087.wav"},21:function(e,r,l){e.exports=l(35)},26:function(e,r,l){},28:function(e,r,l){},29:function(e,r,l){},35:function(e,r,l){"use strict";l.r(r);var t=l(0),o=l.n(t),a=l(16),n=l.n(a),c=(l(26),l(3)),s=l.n(c),u=l(4),b=l(2),i=l(20),f=l(17);var g=new function e(){var r=this;Object(f.a)(this,e),this.setupApiCallbacks=function(){r.ws=new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=22269"),r.callbacks={},r.ws.onmessage=function(e){var l=JSON.parse(e.data);return console.log(l,r.callbacks[l.msg_type],r.callbacks),l.error?r.callbacks[l.msg_type].reject(l.error):(r.callbacks[l.msg_type],r.callbacks[l.msg_type].resolve(l))},r.ws.onopen=function(){console.log("open"),setTimeout(r.onOpenCB,1e3)}},this.reset=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("reseting"),r.ws.readyState===r.ws.CLOSED||r.ws.readyState===r.ws.CLOSING){e.next=7;break}return e.next=4,r.cancelSubscription();case 4:console.log("forgot all ticks"),r.ws.close(),console.log("closed");case 7:setTimeout((function(){r.onOpenCB=function(){return r.startTicks()},r.setupApiCallbacks()}),1e3);case 8:case"end":return e.stop()}}),e)}))),this.resetTimer=function(){r.timeout&&clearTimeout(r.timeout),r.timeout=setTimeout(r.reset,2e5)},this.send=function(e){return r.ws.send(JSON.stringify(e))},this.handleProposalResponse=function(e){var l=e.proposal.id;r.finishBuy(l,e.proposal.ask_price)},this.onOpen=function(e){return r.onOpenCB=e},this.pushToStack=function(e){r.stack.length>10&&r.stack.shift(),r.stack.push(e)},this.setOnData=function(e){r.tickCB=function(l){if(console.log("tick"),r.resetTimer(),l.proposal&&r.handleProposalResponse(l),l.tick){var t=l.tick;r.pushToStack(t),void 0!=r.lastValue?r.isPlaying?(e(Object(i.a)({},t,{delta:t.quote-r.lastValue})),r.lastValue=t.quote):(r.pausedTicks--,0===r.pausedTicks&&r.callback&&r.callback(t.quote,r.lastValue,r.stack)):r.lastValue=t.quote}}},this.startTicks=function(){return new Promise((function(e,l){console.log("send ticks"),r.send({ticks:r.symbol}),r.callbacks.tick={resolve:r.tickCB,reject:l},console.log("callbacks after that",r.callbacks)}))},this.authorize=function(e){return new Promise((function(l,t){r.send({authorize:e}),r.callbacks.authorize={resolve:l,reject:t}}))},this.unpause=function(){r.isPlaying=!0},this.setShouldFreeze=function(e,l){e&&r.isPlaying&&(r.isPlaying=!1,r.pausedTicks=5,r.callback=l)},this.buy=function(){var e=Object(u.a)(s.a.mark((function e(l,t){var o,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,o){console.log("proposal",l,t?"up":"down"),r.send({proposal:1,amount:l,basis:"stake",contract_type:t?"CALL":"PUT",currency:"USD",duration:5,duration_unit:"t",symbol:r.symbol}),r.callbacks.proposal={resolve:e,reject:o}}));case 2:return o=e.sent,a=o.proposal.id,e.abrupt("return",new Promise((function(e,l){r.send({buy:a,price:o.proposal.ask_price}),r.callbacks.buy={resolve:e,reject:l}})));case 5:case"end":return e.stop()}}),e)})));return function(r,l){return e.apply(this,arguments)}}(),this.cancelSubscription=function(){return new Promise((function(e,l){r.send({forget_all:"ticks"}),r.callbacks.forget_all={resolve:e,reject:l}}))},this.pausedTicks=0,this.resolution=2,this.symbol="R_100",this.callback=void 0,this.onOpenCB=void 0,this.timeout=void 0,this.errorCB=void 0,this.setupApiCallbacks(),this.lastValue=void 0,this.isPlaying=!0,this.isAuthorized=!1,this.stack=[],this.ws.onerror=console.error},p=(l(28),l(12)),h=(l(29),function(e){return o.a.createElement("div",{className:"tg-group"},o.a.createElement("div",{className:"tg-container"+(e.isOn?" tg-on":""),onClick:e.onClick},o.a.createElement("div",{className:"tg-slider"})),e.label&&o.a.createElement("p",{className:"tg-label"},e.label))}),m=l(11),v=[{rule:["e6","e5","e2"],colors:"rbb",flag:!0},{rule:["e5","e6","e2"],colors:"rrb",flag:!0},{rule:["e7","e4","e8"],colors:"rbb",flag:!0},{rule:["e6","e5","e2"],colors:"rbb",flag:!0},{rule:["e1","e8","e6"],colors:"bbb",flag:!0},{rule:["e8","e7","e0"],colors:"bbr",flag:!0},{rule:["e4","e3","e4"],colors:"rbb",flag:!0},{rule:["e3","e0","e8"],colors:"rbr",flag:!0},{rule:["e4","e9","e5"],colors:"rrb",flag:!0},{rule:["e9","e8","e7"],colors:"rrr",flag:!0},{rule:["e8","e9","e2"],colors:"rbr",flag:!0},{rule:["e1","e6","e4"],colors:"rbr",flag:!0},{rule:["e0","e9","e1"],colors:"rrr",flag:!0},{rule:["e0","e7","e9"],colors:"bbb",flag:!0},{rule:["e8","e6","e9"],colors:"rbb",flag:!0},{rule:["e1","e0","e2"],colors:"rbb",flag:!0},{rule:["e7","e2","e3"],colors:"bbr",flag:!0},{rule:["e9","e4","e1"],colors:"rbb",flag:!0},{rule:["e0","e9","e5"],colors:"brr",flag:!0},{rule:["e0","e9","e1"],colors:"rrb",flag:!0},{rule:["e5","e0","e2"],colors:"bbb",flag:!0},{rule:["e2","e1","e5"],colors:"rbb",flag:!0},{rule:["e4","e3","e2"],colors:"brb",flag:!0},{rule:["e5","e0","e8"],colors:"bbb",flag:!0},{rule:["e4","e5","e3"],colors:"rbb",flag:!0},{rule:["e4","e1","e7"],colors:"bbr",flag:!0},{rule:["e7","e4","e1"],colors:"rrb",flag:!0},{rule:["e4","e5","e3"],colors:"rbb",flag:!0},{rule:["e7","e8","e5"],colors:"bbb",flag:!0},{rule:["e3","e4","e0"],colors:"bbr",flag:!0},{rule:["e8","e7","e4"],colors:"rrb",flag:!0},{rule:["e8","e9","e5"],colors:"bbb",flag:!0},{rule:["e6","e1","e8"],colors:"rbb",flag:!0},{rule:["e1","e8","e4"],colors:"bbr",flag:!0},{rule:["e3","e4","e0"],colors:"bbb",flag:!0},{rule:["e0","e3","e8"],colors:"bbb",flag:!0},{rule:["e6","e5","e7"],colors:"rrr",flag:!0},{rule:["e6","e1","e5"],colors:"bbb",flag:!0},{rule:["e5","e2","e4"],colors:"brr",flag:!0},{rule:["e0","e5","e5"],colors:"bbr",flag:!0},{rule:["e0","e1","e9"],colors:"bbb",flag:!0},{rule:["e8","e3","e7"],colors:"bbb",flag:!0},{rule:["e1","e0","e8"],colors:"brb",flag:!0},{rule:["e5","e4","e6"],colors:"rrb",flag:!0},{rule:["e6","e5","e7"],colors:"brr",flag:!0},{rule:["e2","e5","e1"],colors:"bbr",flag:!0},{rule:["e6","e9","e5"],colors:"rbr",flag:!0},{rule:["e7","e8","e0"],colors:"bbr",flag:!0},{rule:["e6","e5","e0"],colors:"brr",flag:!0},{rule:["e0","e1","e0"],colors:"bbr",flag:!0},{rule:["e4","e1","e5"],colors:"bbb",flag:!0},{rule:["e0","e3","e5"],colors:"rbb",flag:!0},{rule:["e3","e0","e2"],colors:"bbb",flag:!0},{rule:["e2","e1","e2"],colors:"brr",flag:!0},{rule:["e6","e1","e0"],colors:"brb",flag:!0},{rule:["e1","e6","e1"],colors:"bbr",flag:!0},{rule:["e3","e2","e7"],colors:"brb",flag:!0},{rule:["e5","e6","e4"],colors:"rbr",flag:!0},{rule:["e0","e9","e5"],colors:"brr",flag:!0},{rule:["e7","e0","e9"],colors:"bbr",flag:!0},{rule:["e0","e9","e4"],colors:"brr",flag:!0},{rule:["e4","e5","e3"],colors:"rrb",flag:!0},{rule:["e6","e7","e1"],colors:"rbr",flag:!0},{rule:["e0","e7","e8"],colors:"bbb",flag:!0},{rule:["e9","e0","e8"],colors:"rbr",flag:!0},{rule:["e9","e4","e5"],colors:"brb",flag:!0},{rule:["e8","e3","e9"],colors:"rbb",flag:!0},{rule:["e3","e4","e1"],colors:"brb",flag:!0},{rule:["e4","e1","e1"],colors:"rbb",flag:!0},{rule:["e8","e5","e4"],colors:"rrr",flag:!0},{rule:["e3","e2","e9"],colors:"bbb",flag:!0},{rule:["e5","e4","e5"],colors:"rrb",flag:!0},{rule:["e5","e2","e3"],colors:"bbb",flag:!0},{rule:["e5","e8","e1"],colors:"brb",flag:!1},{rule:["e8","e5","e3"],colors:"rrr",flag:!1},{rule:["e2","e5","e1"],colors:"brb",flag:!1},{rule:["e3","e8","e1"],colors:"bbb",flag:!1},{rule:["e1","e8","e6"],colors:"rrb",flag:!1},{rule:["e3","e0","e4"],colors:"rrr",flag:!1},{rule:["e4","e9","e7"],colors:"brb",flag:!1},{rule:["e1","e0","e7"],colors:"bbb",flag:!1},{rule:["e0","e1","e9"],colors:"brr",flag:!1},{rule:["e9","e6","e1"],colors:"rbb",flag:!1},{rule:["e9","e8","e2"],colors:"brb",flag:!1},{rule:["e4","e1","e8"],colors:"rrb",flag:!1},{rule:["e5","e4","e3"],colors:"brr",flag:!1},{rule:["e4","e7","e1"],colors:"rrr",flag:!1},{rule:["e7","e2","e1"],colors:"bbb",flag:!1},{rule:["e2","e1","e0"],colors:"bbb",flag:!1},{rule:["e7","e4","e2"],colors:"brb",flag:!1},{rule:["e1","e4","e0"],colors:"rrr",flag:!1},{rule:["e5","e4","e8"],colors:"brb",flag:!1},{rule:["e3","e4","e8"],colors:"bbb",flag:!1},{rule:["e7","e4","e0"],colors:"brr",flag:!1},{rule:["e3","e0","e8"],colors:"brr",flag:!1},{rule:["e6","e7","e5"],colors:"bbb",flag:!1},{rule:["e9","e2","e2"],colors:"rbr",flag:!1},{rule:["e6","e5","e9"],colors:"rrr",flag:!1},{rule:["e9","e0","e8"],colors:"brb",flag:!1},{rule:["e7","e4","e4"],colors:"bbb",flag:!1},{rule:["e3","e4","e4"],colors:"bbb",flag:!1},{rule:["e3","e2","e1"],colors:"rrb",flag:!1},{rule:["e9","e4","e4"],colors:"rbb",flag:!1},{rule:["e9","e6","e4"],colors:"rbb",flag:!1},{rule:["e8","e7","e5"],colors:"bbb",flag:!1},{rule:["e7","e6","e1"],colors:"brr",flag:!1},{rule:["e5","e0","e4"],colors:"brr",flag:!1},{rule:["e7","e2","e9"],colors:"brr",flag:!1},{rule:["e3","e2","e5"],colors:"rbr",flag:!1},{rule:["e8","e5","e0"],colors:"rbb",flag:!1},{rule:["e1","e6","e4"],colors:"rbb",flag:!1},{rule:["e6","e7","e3"],colors:"bbr",flag:!1},{rule:["e3","e6","e7"],colors:"rbb",flag:!1},{rule:["e7","e4","e9"],colors:"rbr",flag:!1},{rule:["e1","e8","e9"],colors:"brb",flag:!1},{rule:["e3","e8","e5"],colors:"rrr",flag:!1},{rule:["e9","e2","e6"],colors:"brr",flag:!1},{rule:["e7","e0","e9"],colors:"rrb",flag:!1},{rule:["e2","e7","e1"],colors:"brr",flag:!1},{rule:["e6","e9","e0"],colors:"bbb",flag:!1},{rule:["e2","e9","e3"],colors:"brb",flag:!1},{rule:["e1","e4","e3"],colors:"rrb",flag:!1},{rule:["e2","e5","e1"],colors:"rbr",flag:!1},{rule:["e8","e1","e7"],colors:"brr",flag:!1},{rule:["e9","e8","e4"],colors:"bbr",flag:!1},{rule:["e3","e4","e6"],colors:"brb",flag:!1},{rule:["e9","e6","e2"],colors:"rrb",flag:!1},{rule:["e0","e3","e4"],colors:"rrb",flag:!1},{rule:["e4","e3","e8"],colors:"rbb",flag:!1},{rule:["e6","e1","e4"],colors:"rrr",flag:!1},{rule:["e9","e8","e1"],colors:"rrb",flag:!1},{rule:["e9","e8","e4"],colors:"brr",flag:!1},{rule:["e2","e3","e4"],colors:"rbb",flag:!1}];function d(e){for(var r=[],l=0;l<e.length;)if("p"===e[l]||"i"===e[l])r.push([e[l],0,0]),l+=1;else if("d"===e[l]){var t=e.substr(l).split(/[(|)]/)[1];r.push([e[l],e[l+1]-1,parseInt(t)]),l+=t.length+4}else r.push([e[l],e[l+1]-1,0]),l+=2;return r}function k(e,r){for(var l=0;l<r.length;l++)if(!O(e[l],d(r[l]),e))return!1;return!0}function O(e,r,l){var t,o=Object(m.a)(r);try{for(o.s();!(t=o.n()).done;){var a=t.value,n=a[0],c=l[a[1]],s=a[2];if("p"===n&&e%2===1)return!1;if("i"===n&&j(e))return!1;if("m"===n&&e>=c)return!1;if("M"===n&&S(e,c))return!1;if("n"===n&&y(e,c))return!1;if("N"===n&&E(e,c))return!1;if("d"===n&&!w(e,c,s))return!1;if("e"===n&&!C(e,a[1]+1))return!1}}catch(u){o.e(u)}finally{o.f()}return!0}function j(e){return e%2===0}function E(e,r){return e<r}function y(e,r){return e>r}function S(e,r){return e<=r}function w(e,r,l){return e-r===l}function C(e,r){return e===r}var _=l(18),x=l(19),R=l.n(x),T=function(e){return o.a.createElement("div",null,o.a.createElement("p",null,e.label),o.a.createElement("input",{onChange:function(r){return e.onChange(r.target.value)},value:e.value}))},z=function(e){var r=Object(t.useState)([]),l=Object(b.a)(r,2),a=l[0],n=l[1],c=Object(t.useState)([]),s=Object(b.a)(c,2),u=s[0],i=s[1],f=Object(t.useState)(!1),d=Object(b.a)(f,2),O=d[0],j=d[1],E=Object(t.useState)(void 0),y=Object(b.a)(E,2),S=y[0],w=y[1],C=Object(t.useState)(0),x=Object(b.a)(C,2),z=x[0],I=x[1],P=Object(t.useState)(0),A=Object(b.a)(P,2),q=A[0],B=A[1],L=Object(t.useState)(!0),N=Object(b.a)(L,2),V=N[0],D=N[1],M=Object(t.useState)(0),F=Object(b.a)(M,2),W=F[0],J=F[1],U=Object(t.useState)(5),G=Object(b.a)(U,2),K=G[0],Z=G[1],$=Object(t.useState)(2),H=Object(b.a)($,2),Q=H[0],X=H[1],Y=Object(_.a)(R.a),ee=Object(b.a)(Y,1)[0];Object(t.useEffect)((function(){g.setOnData((function(r){n((function(l){var t=Object(p.a)(l);return t.push({value:r.quote,lastDigit:Math.round(r.quote*Math.pow(10,e.resolution))%10,color:r.delta>0?"blue":"red"}),t.length>5&&t.shift(),Object(p.a)(t)}))})),g.startTicks()}),[]);var re=function(){g.unpause(),n([]),i("")},le=function(e,r,l){return function(e,r,t){console.log("stack",t);var o=t[1],a=e>o;l!==a?function(){var e=W+1;e>K?j(!1):(B(q*Q),J(e))}():B(z),re()}};Object(t.useEffect)((function(){var e=function(e){for(var r=[],l=[],t=0;t<e.length-1;t+=2)r.push(+e[t]),l.push(e[t+1]);var o,a=Object(m.a)(v);try{for(a.s();!(o=a.n()).done;){var n=o.value,c=n.rule,s=n.colors,u=n.flag;if(l.length<=s.length){if(l.toString().replace(/,/g,"")===s&&k(r,c))return{result:u,rule:c,colors:s}}else for(var b=0;b<=l.length-s.length;){for(var i=[],f=[],g=b;g<s.length+b;g++)i.push(r[g]),f.push(l[g]);var p=f.toString().replace(/,/g,""),h=k(i,c);if(p===s&&h)return{result:u,rule:c,colors:s};b++}}}catch(d){a.e(d)}finally{a.f()}return{}}(a.reduce((function(e,r){return e+r.lastDigit+r.color[0]}),"")),r=e.result;e.rule,e.colors;g.setShouldFreeze(void 0!==r,le(0,0,r)),w(r),void 0!==r&&V&&ee(),void 0!==r&&O&&g.buy(q,r)}),[a]);return o.a.createElement("div",{className:"App"},o.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},o.a.createElement("div",{style:{display:"flex"}},o.a.createElement(h,{label:"Modo Automatico",onClick:function(){return j(!O)},isOn:O}),o.a.createElement(T,{label:"Stop Loss",onChange:Z,value:K}),o.a.createElement(T,{label:"Valor de Entrada",onChange:I,value:z}),o.a.createElement(T,{label:"Multiplicador",onChange:X,value:Q}),o.a.createElement("p",null,'Valor atual ="'),o.a.createElement("p",null,q)),o.a.createElement("button",{onClick:e.showIndexScreen},"Trocar Indice"),o.a.createElement("button",{onClick:function(){localStorage.clear(),e.logout()}},"Logout"),o.a.createElement(h,{label:"Avisos sonoros",onClick:function(){return D(!V)},isOn:V})),o.a.createElement("div",{className:"digit-container"},a.map((function(e){return o.a.createElement("p",{style:{fontSize:45,color:e.color,margin:20}},e.lastDigit)}))),void 0!==S&&o.a.createElement("h3",{style:{color:S?"blue":"red",fontSize:60}},S?"RISE":"FALL"),u.length>0&&o.a.createElement("p",null,u),u.length>0&&o.a.createElement("button",{onClick:re},"Voltar para a analise"),o.a.createElement("button",{onClick:g.reset},"Atualizar"))},I=function(e){return o.a.createElement("div",null,e.error)},P=l(8);l(30),l(32);P.initializeApp({apiKey:"AIzaSyB0Tn75fPotov6ZzLPqaOhoW5dF3MwkpTE",authDomain:"binary-sequence-db.firebaseapp.com",databaseURL:"https://binary-sequence-db.firebaseio.com",projectId:"binary-sequence-db",storageBucket:"binary-sequence-db.appspot.com",messagingSenderId:"811701963619",appId:"1:811701963619:web:727c69305900b2c73d2156"});var A=function(){var e=Object(u.a)(s.a.mark((function e(r,l,t){var o,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.auth().signInWithEmailAndPassword(r,l);case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",!1);case 9:return o=P.firestore(),e.next=12,o.collection("users").where("email","==",r).get();case 12:if(e.sent.forEach((function(e){a=e})),(n=a.data()).binary_token){e.next=22;break}return e.next=19,a.ref.set({email:r,binary_token:t});case 19:return e.abrupt("return",!0);case 22:if(n.binary_token!==t){e.next=26;break}return e.abrupt("return",!0);case 26:return e.abrupt("return",!1);case 27:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(r,l,t){return e.apply(this,arguments)}}(),q=function(e){var r=Object(t.useState)(""),l=Object(b.a)(r,2),a=l[0],n=l[1],c=Object(t.useState)(""),i=Object(b.a)(c,2),f=i[0],p=i[1],h=Object(t.useState)(""),m=Object(b.a)(h,2),v=m[0],d=m[1],k=function(){var r=Object(u.a)(s.a.mark((function r(){var l;return s.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,A(a,f,v);case 2:if(l=r.sent,console.log(l),!l){r.next=11;break}return localStorage.setItem("user",l),e.onLogin(l),r.next=9,g.authorize(v);case 9:localStorage.setItem("token",v),e.onAuthorize(!0);case 11:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return o.a.createElement("div",null,o.a.createElement("p",null,"Email"),o.a.createElement("input",{onChange:function(e){return n(e.target.value)},value:a}),o.a.createElement("p",null,"Senha"),o.a.createElement("input",{onChange:function(e){return p(e.target.value)},value:f,type:"password"}),o.a.createElement("p",null,"Token da binary"),o.a.createElement("input",{onChange:function(e){return d(e.target.value)}}),o.a.createElement("button",{onClick:k},"Entrar"))},B=function(e){var r=Object(t.useState)("R_100"),l=Object(b.a)(r,2),a=l[0],n=l[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("select",{onChange:function(e){return n(e.target.value)}},o.a.createElement("option",{value:"R_100"},"R_100"),o.a.createElement("option",{value:"R_75"},"R_75"),o.a.createElement("option",{value:"R_50"},"R_50"),o.a.createElement("option",{value:"R_25"},"R_25"),o.a.createElement("option",{value:"R_10"},"R_10")),o.a.createElement("button",{onClick:function(){return e.onChange(a,L[a])}},"Confirmar"))},L={R_100:2,R_75:4,R_50:4,R_25:3,R_10:3};var N=function(){var e=Object(t.useState)(!1),r=Object(b.a)(e,2),l=r[0],a=r[1],n=Object(t.useState)(!1),c=Object(b.a)(n,2),i=c[0],f=c[1],p=Object(t.useState)(),h=Object(b.a)(p,2),m=h[0],v=h[1],d=Object(t.useState)(!1),k=Object(b.a)(d,2),O=k[0],j=k[1],E=Object(t.useState)(!1),y=Object(b.a)(E,2),S=y[0],w=y[1],C=Object(t.useState)(2),_=Object(b.a)(C,2),x=_[0],R=_[1];return Object(t.useEffect)((function(){var e=localStorage.getItem("user");e&&j(e),g.onOpen(Object(u.a)(s.a.mark((function e(){var r,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f(!0),!(r=localStorage.getItem("token"))){e.next=14;break}return e.prev=3,e.next=6,g.authorize(r);case 6:l=e.sent,console.log(l),a(!0),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])}))))}),[]),S?o.a.createElement(B,{onChange:function(e,r){g.symbol=e,R(r),g.reset(),w(!1)}}):O&&l?m?o.a.createElement(I,{error:m}):i?l&&o.a.createElement(z,{onError:v,logout:function(){j(!1),a(!1),g.cancelSubscription()},showIndexScreen:function(){return w(!0)},resolution:x}):o.a.createElement("h1",null,"Carregando..."):o.a.createElement(q,{onLogin:j,onAuthorize:a})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.9e858a82.chunk.js.map