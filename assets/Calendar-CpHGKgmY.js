import{p as E,Y as c,Z as d,_ as G,$ as Y,a0 as A,e as H,a1 as V,a2 as u,a3 as D,k as e,a4 as l,a5 as C}from"./store-DKrw96s8.js";import{p as J}from"./props-WZpD2vyg.js";import{s as N}from"./render-Df-5AOqP.js";import{e as K,i as Q}from"./each-BEPMe8HD.js";import{g}from"./events-CYuOk1VT.js";import{t as T}from"./class-Ds9EAFiq.js";import{i as R}from"./lifecycle-C2CMyhQS.js";var U=V('<button class="calendar-day"> </button>'),X=V('<div class="calendar"><div class="calendar-header"><button class="nav-button" aria-label="minus"></button> <span class="month-year"> </span> <button class="nav-button" aria-label="plus"></button></div> <div class="calendar-days-header"><div>Sun</div> <div>Mon</div> <div>Tue</div> <div>Wed</div> <div>Thu</div> <div>Fri</div> <div>Sat</div></div> <div class="calendar-grid"></div></div>');function $(W,v){E(v,!1);const m=c(),p=c(),h=c(),_=c(),M=c();let i=J(v,"selectedDate",12,null),y=J(v,"onSelect",8,t=>{}),k=new Date,a=c(k.getMonth()),s=c(k.getFullYear());const I=["January","February","March","April","May","June","July","August","September","October","November","December"];function L(){const t=[],o=new Date(e(s),e(a),0).getDate(),r=e(_),b=42-e(h)-r;for(let n=0;n<r;n++)t.push({day:o-r+n+1,monthOffset:-1});for(let n=1;n<=e(h);n++){const F=new Date(e(s),e(a),n),B=i()&&P(i(),F);t.push({day:n,monthOffset:0,date:F,isSelected:B})}for(let n=1;n<=b;n++)t.push({day:n,monthOffset:1});return t}function P(t,o){return t.getDate()===o.getDate()&&t.getMonth()===o.getMonth()&&t.getFullYear()===o.getFullYear()}function Z(t){t.monthOffset===0?(i(t.date),y()(i())):t.monthOffset===-1?(f(-1),i(new Date(e(s),e(a),t.day)),y()(i())):t.monthOffset===1&&(f(1),i(new Date(e(s),e(a),t.day)),y()(i()))}function f(t){l(a,e(a)+t),e(a)<0?(l(a,11),C(s,-1)):e(a)>11&&(l(a,0),C(s))}d(()=>(e(s),e(a)),()=>{l(m,new Date(e(s),e(a),1))}),d(()=>(e(s),e(a)),()=>{l(p,new Date(e(s),e(a)+1,0))}),d(()=>e(p),()=>{l(h,e(p).getDate())}),d(()=>e(m),()=>{l(_,e(m).getDay())}),d(()=>{},()=>{l(M,L())}),G(),R();var O=X(),w=u(O),S=u(w),x=D(S,2),j=u(x),q=D(x,2),z=D(w,4);K(z,5,()=>e(M),Q,(t,o)=>{var r=U(),b=u(r);Y(()=>{T(r,"other-month",e(o).monthOffset!==0),T(r,"selected",e(o).isSelected),N(b,e(o).day)}),g("click",r,()=>Z(e(o))),A(t,r)}),Y(()=>N(j,`${I[e(a)]??""} ${e(s)??""}`)),g("click",S,()=>f(-1)),g("click",q,()=>f(1)),A(W,O),H()}$.__docgen={version:3,name:"Calendar.svelte",data:[{name:"selectedDate",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"null"},static:!1,readonly:!1,defaultValue:"null"},{name:"onSelect",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"(date: any) => void"},static:!1,readonly:!1,defaultValue:"function"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};export{$ as C};