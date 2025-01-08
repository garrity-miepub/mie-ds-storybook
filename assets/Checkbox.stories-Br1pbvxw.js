import{p as N,Z as x,_ as P,$ as _,a0 as v,e as Q,a1 as F,a4 as p,k as h,Y as S,a2 as w,a3 as R,l as L,ao as U}from"./store-DKrw96s8.js";import{p as t}from"./props-WZpD2vyg.js";import{s as W}from"./render-Df-5AOqP.js";import{i as X}from"./if-D8r51YhU.js";import{g as $}from"./events-CYuOk1VT.js";import{c as ee}from"./attributes-Jce5emvo.js";import{s as ae}from"./class-Ds9EAFiq.js";import{b as se}from"./input-D9oAd-3L.js";import{i as te}from"./lifecycle-C2CMyhQS.js";import"./hydration-C_mtSyjW.js";var oe=F('<span class="label"> </span>'),ne=F('<label><input type="checkbox"> <span class="checkbox"></span> <!></label>');function f(c,a){N(a,!1);const i=S(),k=S();let u=t(a,"checked",8,!1),y=t(a,"onChange",8),C=t(a,"label",8,""),m=t(a,"size",8,"default"),G=t(a,"hideLabel",8,!1);function H(e){const s=e.target.checked;p(i,s),y()&&y()(s)}x(()=>L(u()),()=>{p(i,u())}),x(()=>L(m()),()=>{p(k,["checkbox-container",m()!=="default"?m():""])}),P(),te();var b=ne();const I=U(()=>ee(h(k).join(" ")));var g=w(b),J=R(g,4);{var K=e=>{var s=oe(),M=w(s);_(()=>W(M,C())),v(e,s)};X(J,e=>{!G()&&C()&&e(K)})}_(()=>ae(b,h(I),"")),se(g,()=>h(i),e=>p(i,e)),$("change",g,H),v(c,b),Q()}f.__docgen={version:3,name:"Checkbox.svelte",data:[{name:"checked",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"onChange",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1},{name:"label",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"size",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"default"'},{name:"hideLabel",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const fe={title:"Svelte Components/Checkbox",component:f,tags:["autodocs"],argTypes:{checked:{control:"boolean"},label:{control:"text"},size:{control:{type:"select"},options:["default","small","large"]},onChange:{action:"changed"},hideLabel:{control:"boolean"}}},d=c=>({Component:f,props:c,on:{change:c.onChange}}),o=d.bind({});o.args={label:"Default Checkbox"};const n=d.bind({});n.args={label:"Small Checkbox",size:"small"};const r=d.bind({});r.args={label:"Large Checkbox",size:"large"};const l=d.bind({});l.args={label:"Checked Checkbox",checked:!0};var z,V,D;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
  Component: Checkbox,
  props: args,
  on: {
    change: args.onChange
  }
})`,...(D=(V=o.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var q,T,j;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
  Component: Checkbox,
  props: args,
  on: {
    change: args.onChange
  }
})`,...(j=(T=n.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var E,O,Y;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
  Component: Checkbox,
  props: args,
  on: {
    change: args.onChange
  }
})`,...(Y=(O=r.parameters)==null?void 0:O.docs)==null?void 0:Y.source}}};var Z,A,B;l.parameters={...l.parameters,docs:{...(Z=l.parameters)==null?void 0:Z.docs,source:{originalSource:`args => ({
  Component: Checkbox,
  props: args,
  on: {
    change: args.onChange
  }
})`,...(B=(A=l.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};const ke=["Default","Small","Large","Checked"];export{l as Checked,o as Default,r as Large,n as Small,ke as __namedExportsOrder,fe as default};
