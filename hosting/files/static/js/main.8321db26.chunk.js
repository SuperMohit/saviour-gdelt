(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{132:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return f}));var c=n(1),s=n.n(c),r=n(4),a=n(32),i=n(64),o=new a.d.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"),l=new a.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),u=new a.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),d=function(){var e=Object(r.a)(s.a.mark((function e(t,n,c){var a,i,o,l,u,d=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=d.length>3&&void 0!==d[3]?d[3]:"recent",i=d.length>4&&void 0!==d[4]&&d[4],o=!1,l={slot:0,confirmations:0,err:null},u=0,e.next=7,new Promise(function(){var e=Object(r.a)(s.a.mark((function e(d,j){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){o||(o=!0,console.log("Rejecting for timeout..."),j({timeout:!0}))}),n);try{u=c.onSignature(t,(function(e,t){o=!0,l={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),j(l)):(console.log("Resolved via websocket",e),d(l))}),a)}catch(b){o=!0,console.error("WS error in setup",t,b)}case 2:if(o||!i){e.next=8;break}return Object(r.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.getSignatureStatuses([t]);case 3:n=e.sent,l=n&&n.value[0],o||(l?l.err?(console.log("REST error for",t,l),o=!0,j(l.err)):l.confirmations?(console.log("REST confirmation for",t,l),o=!0,d(l)):console.log("REST no confirmations for",t,l):console.log("REST null result for",t,l)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),o||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,O(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return l=e.sent,c._signatureSubscriptions[u]&&c.removeSignatureListener(u),o=!0,console.log("Returning status",l),e.abrupt("return",l);case 12:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),j=function(t,n,c,s){var r=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:c,isSigner:!1,isWritable:!1},{pubkey:s,isSigner:!1,isWritable:!1},{pubkey:a.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:i.b,isSigner:!1,isWritable:!1},{pubkey:a.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new a.d.TransactionInstruction({keys:r,programId:l,data:e.from([])})},b=function(){var e=Object(r.a)(s.a.mark((function e(t,n,c){var r,i,l,u,d,j,b,x,m;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new a.b(c,t,{preflightCommitment:"recent"}),e.next=3,a.a.fetchIdl(o,r);case 3:return i=e.sent,l=new a.a(i,o,r),u={id:n,connection:c,program:l},e.next=8,l.account.candyMachine.fetch(n);case 8:return d=e.sent,j=d.data.itemsAvailable.toNumber(),b=d.itemsRedeemed.toNumber(),x=j-b,console.log(d.data),m=d.data.goLiveDate.toNumber(),m=new Date(1e3*m),console.log({itemsAvailable:j,itemsRedeemed:b,itemsRemaining:x,goLiveDate:m}),e.abrupt("return",{candyMachine:u,itemsAvailable:j,itemsRedeemed:b,itemsRemaining:x,goLiveDate:m});case 17:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),x=function(){var t=Object(r.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.d.PublicKey.findProgramAddress([e.from("metadata"),u.toBuffer(),n.toBuffer(),e.from("edition")],u);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(r.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.d.PublicKey.findProgramAddress([e.from("metadata"),u.toBuffer(),n.toBuffer()],u);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var e=Object(r.a)(s.a.mark((function e(t,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.d.PublicKey.findProgramAddress([t.toBuffer(),i.b.toBuffer(),n.toBuffer()],l);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),p=function(){var e=Object(r.a)(s.a.mark((function e(t,n,c,r){var o,l,d,b,p,f,O;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=a.d.Keypair.generate(),e.next=3,h(c,o.publicKey);case 3:return l=e.sent,d=t.connection,b=t.program,e.next=7,m(o.publicKey);case 7:return p=e.sent,e.next=10,x(o.publicKey);case 10:return f=e.sent,e.next=13,d.getMinimumBalanceForRentExemption(i.a.span);case 13:return O=e.sent,e.next=16,b.rpc.mintNft({accounts:{config:n,candyMachine:t.id,payer:c,wallet:r,mint:o.publicKey,metadata:p,masterEdition:f,mintAuthority:c,updateAuthority:c,tokenMetadataProgram:u,tokenProgram:i.b,systemProgram:a.d.SystemProgram.programId,rent:a.d.SYSVAR_RENT_PUBKEY,clock:a.d.SYSVAR_CLOCK_PUBKEY},signers:[o],instructions:[a.d.SystemProgram.createAccount({fromPubkey:c,newAccountPubkey:o.publicKey,space:i.a.span,lamports:O,programId:i.b}),i.c.createInitMintInstruction(i.b,o.publicKey,0,c,c),j(l,c,c,o.publicKey),i.c.createMintToInstruction(i.b,o.publicKey,l,c,[],1)]});case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(t,n,c,s){return e.apply(this,arguments)}}(),f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return"".concat(e.slice(0,t),"...").concat(e.slice(-t))},O=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(8).Buffer)},354:function(e,t,n){},355:function(e,t,n){},358:function(e,t){},360:function(e,t){},376:function(e,t){},377:function(e,t){},407:function(e,t){},463:function(e,t){},465:function(e,t){},479:function(e,t){},483:function(e,t){},485:function(e,t){},495:function(e,t){},497:function(e,t){},524:function(e,t){},526:function(e,t){},531:function(e,t){},533:function(e,t){},539:function(e,t){},541:function(e,t){},553:function(e,t){},556:function(e,t){},568:function(e,t){},569:function(e,t,n){"use strict";n.r(t);var c,s,r,a,i=n(2),o=n.n(i),l=n(29),u=n.n(l),d=(n(354),n(355),n(14)),j=n(1),b=n.n(j),x=n(4),m=n(13),h=n(131),p=n(133),f=n(314),O=n(596),g=n(601),y=n(605),v=n(604),S=n(16),N=n(52),w=n(175),k=n(132),T=n(7),P=Object(p.a)(w.a)(c||(c=Object(h.a)([""]))),A=p.a.span(s||(s=Object(h.a)([""]))),B=p.a.div(r||(r=Object(h.a)([""]))),M=Object(p.a)(O.a)(a||(a=Object(h.a)([""]))),K=function(e){var t=e.days,n=e.hours,c=e.minutes,s=e.seconds;e.completed;return Object(T.jsxs)(A,{children:[n+24*(t||0)," hours, ",c," minutes, ",s," seconds"]})},F=function(e){var t=Object(i.useState)(),n=Object(m.a)(t,2),c=n[0],s=n[1],r=Object(i.useState)(!1),a=Object(m.a)(r,2),o=a[0],l=a[1],u=Object(i.useState)(!1),j=Object(m.a)(u,2),h=j[0],p=j[1],O=Object(i.useState)(!1),w=Object(m.a)(O,2),A=w[0],F=w[1],L=Object(i.useState)(0),R=Object(m.a)(L,2),C=R[0],I=R[1],D=Object(i.useState)(0),E=Object(m.a)(D,2),q=E[0],U=E[1],W=Object(i.useState)(0),Q=Object(m.a)(W,2),_=Q[0],G=Q[1],J=Object(i.useState)({open:!1,message:"",severity:void 0}),Y=Object(m.a)(J,2),Z=Y[0],V=Y[1],H=Object(i.useState)(new Date(e.startDate)),z=Object(m.a)(H,2),X=z[0],$=z[1],ee=Object(N.c)(),te=Object(i.useState)(),ne=Object(m.a)(te,2),ce=ne[0],se=ne[1],re=function(){Object(x.a)(b.a.mark((function t(){var n,c,s,r,a,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(ee){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(k.b)(ee,e.candyMachineId,e.connection);case 4:n=t.sent,c=n.candyMachine,s=n.goLiveDate,r=n.itemsAvailable,a=n.itemsRemaining,i=n.itemsRedeemed,I(r),G(a),U(i),p(0===a),$(s),se(c);case 16:case"end":return t.stop()}}),t)})))()},ae=function(){var t=Object(x.a)(b.a.mark((function t(){var n,c,r,a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,F(!0),!ee||!(null===ce||void 0===ce?void 0:ce.program)){t.next=10;break}return t.next=5,Object(k.c)(ce,e.config,ee.publicKey,e.treasury);case 5:return n=t.sent,t.next=8,Object(k.a)(n,e.txTimeout,e.connection,"singleGossip",!1);case 8:(null===(c=t.sent)||void 0===c?void 0:c.err)?V({open:!0,message:"Mint failed! Please try again!",severity:"error"}):V({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"});case 10:t.next=17;break;case 12:t.prev=12,t.t0=t.catch(0),r=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?(r="SOLD OUT!",p(!0)):312===t.t0.code&&(r="Minting period hasn't started yet."):t.t0.message.indexOf("0x138")||(t.t0.message.indexOf("0x137")?r="SOLD OUT!":t.t0.message.indexOf("0x135")&&(r="Insufficient funds to mint. Please fund your wallet.")),V({open:!0,message:r,severity:"error"});case 17:if(t.prev=17,!ee){t.next=23;break}return t.next=21,e.connection.getBalance(ee.publicKey);case 21:a=t.sent,s(a/S.LAMPORTS_PER_SOL);case 23:return F(!1),re(),t.finish(17);case 26:case"end":return t.stop()}}),t,null,[[0,12,17,26]])})));return function(){return t.apply(this,arguments)}}();return Object(i.useEffect)((function(){Object(x.a)(b.a.mark((function t(){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!ee){t.next=5;break}return t.next=3,e.connection.getBalance(ee.publicKey);case 3:n=t.sent,s(n/S.LAMPORTS_PER_SOL);case 5:case"end":return t.stop()}}),t)})))()}),[ee,e.connection]),Object(i.useEffect)(re,[ee,e.candyMachineId,e.connection]),Object(T.jsxs)("main",{children:[ee&&Object(T.jsxs)("p",{style:{backgroundColor:"#323663",fontSize:"25px",textAlign:"center"},children:["Wallet ",Object(k.d)(ee.publicKey.toBase58()||"")]}),ee&&Object(T.jsx)("img",{className:"vc",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw7ko-BzDK8cDQcoiEA0AHQP11PYEv9tJnQg&usqp=CAUy"}),ee&&Object(T.jsx)("p",{className:"mon3",children:Object(T.jsx)("p",{className:"conti",children:Object(T.jsxs)("p",{className:"boxi",children:[Object(T.jsx)("p",{className:"rr",children:(c||0).toLocaleString()})," ",Object(T.jsx)("br",{}),Object(T.jsx)("p",{className:"rr1",children:"\xa0\xa0"})," ",Object(T.jsx)("br",{}),Object(T.jsx)("p",{className:"rr2",children:"Balance"})]})})}),ee&&Object(T.jsx)("p",{className:"mon ",children:Object(T.jsx)("p",{className:"conti",children:Object(T.jsxs)("p",{className:"boxi",children:[Object(T.jsx)("p",{className:"xx1",children:C})," ",Object(T.jsx)("br",{}),Object(T.jsx)("p",{className:"xx2",children:" Total Available "})]})})}),ee&&Object(T.jsx)("p",{className:"mon1",children:Object(T.jsx)("p",{className:"conti",children:Object(T.jsxs)("p",{className:"boxi",children:[Object(T.jsxs)("p",{className:"xx1",children:[" ",q]})," ",Object(T.jsx)("br",{}),Object(T.jsx)("p",{className:"xx2",children:"Redeemed"})]})})}),ee&&Object(T.jsx)("p",{className:"mon2",children:Object(T.jsx)("p",{className:"conti",children:Object(T.jsxs)("p",{className:"boxi",children:[Object(T.jsx)("p",{className:"xx1",children:_})," ",Object(T.jsx)("br",{}),Object(T.jsx)("p",{className:"xx2",children:"Remaining"})]})})}),ee&&Object(T.jsx)("h1",{className:"ld",children:"Description"}),ee&&Object(T.jsxs)("p",{className:"ld1",children:["They love the night. When the stars come out and the planets and other stars",Object(T.jsx)("br",{}),"emerge to dance with the sun. They look up and it makes them all to come up and",Object(T.jsx)("br",{}),"appreciate the planet below them even more. They are grounded.They are beautiful."]}),Object(T.jsxs)(B,{children:[!ee&&Object(T.jsx)("img",{style:{width:"1530px",height:"351px",marginTop:"0px",marginLeft:"-20px"},src:"https://pbs.twimg.com/profile_banners/1488260833738170371/1643683042/1500x500"}),ee?Object(T.jsx)(M,{style:{marginTop:"50px",marginLeft:"980px",backgroundColor:"#323663",color:"white",fontSize:"24px",width:"210px",height:"60px"},disabled:h||A||!o,onClick:ae,variant:"contained",children:h?"SOLD OUT":o?A?Object(T.jsx)(g.a,{}):Object(T.jsx)("p",{style:{textAlign:"center",marginLeft:"50px"},children:"MINT"}):Object(T.jsx)(f.a,{date:X,onMount:function(e){return e.completed&&l(!0)},onComplete:function(){return l(!0)},renderer:K})}):Object(T.jsx)(P,{style:{marginLeft:"1350px",marginTop:"-660px"},children:"Connect Wallet"})]}),Object(T.jsx)(y.a,{open:Z.open,autoHideDuration:6e3,onClose:function(){return V(Object(d.a)(Object(d.a)({},Z),{},{open:!1}))},children:Object(T.jsx)(v.a,{onClose:function(){return V(Object(d.a)(Object(d.a)({},Z),{},{open:!1}))},severity:Z.severity,children:Z.message})})]})};var L=function(){return Object(T.jsx)("h1",{class:"va",children:"The Artisans 04: Astro"})};var R=function(){return Object(T.jsx)("div",{children:Object(T.jsx)("h1",{class:"op",children:"Top Collection in 7 Days"})})},C=function(){var e=[{id:0,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqt8PYs6XbwU7Kl2lKoS8DhNHx7JmJZk6bTQ&usqp=CAU",Firstline:"Degenerate Ape Academy",Seacondline:"5.1k"},{id:1,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqt8PYs6XbwU7Kl2lKoS8DhNHx7JmJZk6bTQ&usqp=CAU",Firstline:"Degenerate Ape Academy",Seacondline:"5.1k"}];console.log(e);var t=Object(i.useState)(e),n=Object(m.a)(t,1)[0];return Object(T.jsx)(T.Fragment,{children:n.map((function(e){return Object(T.jsx)("table",{children:Object(T.jsxs)("tr",{class:"nb",children:[Object(T.jsx)("td",{children:Object(T.jsx)("img",{class:"op2",src:e.url,alt:"random"})}),Object(T.jsx)("td",{children:Object(T.jsx)("h1",{class:"ki",style:{marginLeft:"10px"},children:e.Firstline})}),Object(T.jsx)("td",{children:Object(T.jsx)("h2",{className:"li",children:e.Seacondline})}),Object(T.jsx)("td",{children:Object(T.jsx)("img",{class:"op2",src:e.url,alt:"random"})}),Object(T.jsx)("td",{children:Object(T.jsx)("h1",{class:"ki",style:{marginLeft:"10px"},children:e.Firstline})}),Object(T.jsx)("td",{children:Object(T.jsx)("h2",{className:"li",children:e.Seacondline})}),Object(T.jsx)("td",{children:Object(T.jsx)("img",{class:"op2",src:e.url,alt:"random"})}),Object(T.jsx)("td",{children:Object(T.jsx)("h1",{class:"ki",style:{marginLeft:"10px"},children:e.Firstline})}),Object(T.jsx)("td",{children:Object(T.jsx)("h2",{className:"li",children:e.Seacondline})}),Object(T.jsx)("td",{children:Object(T.jsx)("img",{class:"op2",src:e.url,alt:"random"})}),Object(T.jsx)("td",{children:Object(T.jsx)("h1",{class:"ki",style:{marginLeft:"10px"},children:e.Firstline})}),Object(T.jsx)("td",{children:Object(T.jsx)("h2",{className:"li",children:e.Seacondline})})]})})}))})};var I=function(){return Object(T.jsx)("h1",{class:"op9",children:"All Collections"})},D=function(){var e=[{id:0,url:"https://static8.depositphotos.com/1222912/909/i/950/depositphotos_9092062-stock-photo-fantasy-world.jpg",Firstline:"Solana Mystery Box Items",Seacondline:"Solana Mystery Box enables merging special items from",Thirdline:"Mystery Boxes with the most popular Solana NFTs",Fourthline:"0.2 Total Volume"},{id:1,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNPg6iCN3ZOmEwbeh8b3biZ5Xrv2ZBc1ttmg&usqp=CAU",Firstline:"Solana Mystery Box Items",Seacondline:"Solana Mystery Box enables merging special items from",Thirdline:"Mystery Boxes with the most popular Solana NFTs",Fourthline:"0.2 Total Volume"},{id:2,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWXlnubEoPMqKRLI7OQU_dQZBWPeZePmvf8A&usqp=CAU",Firstline:"Solana Mystery Box Items",Seacondline:"Solana Mystery Box enables merging special items from",Thirdline:"Mystery Boxes with the most popular Solana NFTs",Fourthline:"0.2 Total Volume"},{id:3,url:"https://static8.depositphotos.com/1222912/909/i/950/depositphotos_9092062-stock-photo-fantasy-world.jpg",Firstline:"Solana Mystery Box Items",Seacondline:"Solana Mystery Box enables merging special items from",Thirdline:"Mystery Boxes with the most popular Solana NFTs",Fourthline:"0.2 Total Volume"},{id:4,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWXlnubEoPMqKRLI7OQU_dQZBWPeZePmvf8A&usqp=CAU",Firstline:"Solana Mystery Box Items",Seacondline:"Solana Mystery Box enables merging special items from",Thirdline:"Mystery Boxes with the most popular Solana NFTs",Fourthline:"0.2 Total Volume"}];console.log(e);var t=Object(i.useState)(e),n=Object(m.a)(t,1)[0];return Object(T.jsx)(T.Fragment,{children:n.map((function(e){return Object(T.jsx)("table",{children:Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{children:Object(T.jsx)("div",{className:"body",children:Object(T.jsx)("div",{className:"container",children:Object(T.jsxs)("div",{className:"box",children:[Object(T.jsx)("img",{className:"jj",src:e.url,alt:"random"}),Object(T.jsx)("h1",{className:"cc",children:e.Firstline}),Object(T.jsx)("h3",{className:"dd",children:e.Seacondline}),Object(T.jsx)("h3",{className:"nn",children:e.Thirdline}),Object(T.jsx)("h3",{className:"mm",children:e.Fourthline})]})})})}),Object(T.jsx)("td",{children:Object(T.jsx)("div",{className:"body",children:Object(T.jsx)("div",{className:"container",style:{marginLeft:"-750px"},children:Object(T.jsxs)("div",{className:"box",children:[Object(T.jsx)("img",{className:"jj",src:e.url,alt:"random"}),Object(T.jsx)("h1",{className:"cc",children:e.Firstline}),Object(T.jsx)("h3",{className:"dd",children:e.Seacondline}),Object(T.jsx)("h3",{className:"nn",children:e.Thirdline}),Object(T.jsx)("h3",{className:"mm",children:e.Fourthline})]})})})}),Object(T.jsx)("td",{children:Object(T.jsx)("div",{className:"body",children:Object(T.jsx)("div",{className:"container",style:{marginLeft:"-750px"},children:Object(T.jsxs)("div",{className:"box",children:[Object(T.jsx)("img",{className:"jj",src:e.url,alt:"random"}),Object(T.jsx)("h1",{className:"cc",children:e.Firstline}),Object(T.jsx)("h3",{className:"dd",children:e.Seacondline}),Object(T.jsx)("h3",{className:"nn",children:e.Thirdline}),Object(T.jsx)("h3",{className:"mm",children:e.Fourthline})]})})})})]})})}))})};var E=function(){return Object(T.jsx)("div",{class:"vb",children:Object(T.jsx)("div",{class:"f-container",children:Object(T.jsxs)("div",{class:"footer",children:[Object(T.jsxs)("div",{class:"footer-h footer1",children:[Object(T.jsx)("h2",{class:"xx",children:" About Us"}),Object(T.jsx)("a",{class:"xx",href:"#",children:"Blog"}),Object(T.jsx)("a",{class:"xx",href:"#",children:"Demo"}),Object(T.jsx)("a",{class:"xx",href:"#",children:"Purchases"}),Object(T.jsx)("a",{class:"xx",href:"#",children:"Terms Of Service"})]}),Object(T.jsxs)("div",{class:"footer-h footer2",children:[Object(T.jsx)("h2",{class:"xx",children:"Contact Us"}),Object(T.jsx)("a",{href:"#",class:"xx",children:"Jobs"}),Object(T.jsx)("a",{class:"xx",href:"#",children:"Support"}),Object(T.jsx)("a",{class:"xx",href:"#",children:"Contact"}),Object(T.jsx)("a",{class:"xx",href:"#",children:"Sponserships"})]}),Object(T.jsxs)("div",{class:"footer-h footer3",children:[Object(T.jsx)("h2",{class:"xx",children:"Social Media"}),Object(T.jsx)("a",{class:"xx",href:"#",children:"Instagram"}),Object(T.jsx)("a",{class:"xx",href:"#",children:"Demo"}),Object(T.jsx)("a",{class:"xx",href:"#",children:"Purchases"}),Object(T.jsx)("a",{class:"xx",href:"#",children:"Terms Of Service"})]})]})})})},q=n(32),U=n(116),W=n(341),Q=n(602),_=new q.d.PublicKey("9JwTsecscKtQKwvGPLxi7m5iF9MufZNH3XhfBgCQtets"),G=new q.d.PublicKey("5QyNp7Rwe2JjJUSfeJ2ytRP8zdwAQnwnxpH7w1SGinwQ"),J=new q.d.PublicKey("5GtHjgBVMquXEk9RzhV5D1e51QyxKYwGvsySLYTzF3Pi"),Y="devnet",Z=new q.d.Connection("https://explorer-api.devnet.solana.com/"),V=parseInt("1640494800",10),H=Object(W.a)({palette:{type:"dark"},overrides:{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),z=function(){var e=Object(i.useMemo)((function(){return Object(S.clusterApiUrl)(Y)}),[]),t=Object(i.useMemo)((function(){return[Object(U.a)(),Object(U.b)(),Object(U.c)(),Object(U.e)({network:Y}),Object(U.d)({network:Y})]}),[]);return Object(T.jsx)(Q.a,{theme:H,children:Object(T.jsx)(N.a,{endpoint:e,children:Object(T.jsx)(N.b,{wallets:t,autoConnect:!0,children:Object(T.jsxs)(w.b,{children:[Object(T.jsx)(F,{candyMachineId:J,config:G,connection:Z,startDate:V,treasury:_,txTimeout:3e4}),Object(T.jsx)(L,{}),Object(T.jsx)(R,{}),Object(T.jsx)(C,{}),Object(T.jsx)(I,{}),Object(T.jsx)(D,{}),Object(T.jsx)(E,{})]})})})})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,606)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};u.a.render(Object(T.jsx)(o.a.StrictMode,{children:Object(T.jsx)(z,{})}),document.getElementById("root")),X()}},[[569,1,2]]]);
//# sourceMappingURL=main.8321db26.chunk.js.map