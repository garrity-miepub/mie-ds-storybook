import{p as N,Y as t,_ as x,$ as P,a0 as _,a1 as v,e as Q,a2 as F,a5 as d,k as h,Z as S,a3 as w,a4 as R,l as L,aa as U}from"./props-D-11tLXy.js";import{s as W}from"./render-B6mKzPQC.js";import{i as X}from"./if-DG_9oCP6.js";import{g as $}from"./events-ef7BX3Ie.js";import{c as ee}from"./attributes-Jce5emvo.js";import{s as ae}from"./class-Ds9EAFiq.js";import{b as se}from"./input-WSSMULZ9.js";import{i as te}from"./lifecycle-Dq4UX-i8.js";import"./hydration-C_mtSyjW.js";var oe=F('<span class="label"> </span>'),ne=F('<label><input type="checkbox"> <span class="checkbox"></span> <!></label>');function f(c,a){N(a,!1);const i=S(),k=S();let u=t(a,"checked",8,!1),y=t(a,"onChange",8),C=t(a,"label",8,""),m=t(a,"size",8,"default"),G=t(a,"hideLabel",8,!1);function H(e){const s=e.target.checked;d(i,s),y()&&y()(s)}x(()=>L(u()),()=>{d(i,u())}),x(()=>L(m()),()=>{d(k,["checkbox-container",m()!=="default"?m():""])}),P(),te();var b=ne();const I=U(()=>ee(h(k).join(" ")));var g=w(b),J=R(g,4);{var K=e=>{var s=oe(),M=w(s);_(()=>W(M,C())),v(e,s)};X(J,e=>{!G()&&C()&&e(K)})}_(()=>ae(b,h(I),"")),se(g,()=>h(i),e=>d(i,e)),$("change",g,H),v(c,b),Q()}f.__docgen={version:3,name:"Checkbox.svelte",data:[{name:"checked",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"onChange",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1},{name:"label",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"size",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"default"'},{name:"hideLabel",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const he={title:"Svelte Components/Checkbox",component:f,tags:["autodocs"],argTypes:{checked:{control:"boolean"},label:{control:"text"},size:{control:{type:"select"},options:["default","small","large"]},onChange:{action:"changed"},hideLabel:{control:"boolean"}}},p=c=>({Component:f,props:c,on:{change:c.onChange}}),o=p.bind({});o.args={label:"Default Checkbox"};const n=p.bind({});n.args={label:"Small Checkbox",size:"small"};const r=p.bind({});r.args={label:"Large Checkbox",size:"large"};const l=p.bind({});l.args={label:"Checked Checkbox",checked:!0};var z,V,D;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
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
})`,...(B=(A=l.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};const fe=["Default","Small","Large","Checked"];export{l as Checked,o as Default,r as Large,n as Small,fe as __namedExportsOrder,he as default};
