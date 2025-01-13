import{p as J,Z as x,_ as K,$ as _,a0 as v,e as M,a1 as N,a4 as p,k as h,Y as S,a2 as w,a3 as Q,l as z,ao as U}from"./store-DKrw96s8.js";import{p as s}from"./props-WZpD2vyg.js";import{s as W}from"./render-Df-5AOqP.js";import{i as X}from"./if-D8r51YhU.js";import{g as $}from"./events-CYuOk1VT.js";import{c as ee}from"./attributes-Jce5emvo.js";import{s as ae}from"./class-Ds9EAFiq.js";import{b as te}from"./input-D9oAd-3L.js";import{i as se}from"./lifecycle-C2CMyhQS.js";import"./hydration-C_mtSyjW.js";var ne=N('<span class="label"> </span>'),oe=N('<label><input type="checkbox"> <span class="checkbox"></span> <!></label>');function f(c,a){J(a,!1);const i=S(),k=S();let u=s(a,"checked",8,!1),y=s(a,"onChange",8),C=s(a,"label",8,""),m=s(a,"size",8,"default"),Y=s(a,"hideLabel",8,!1);function Z(e){const t=e.target.checked;p(i,t),y()&&y()(t)}x(()=>z(u()),()=>{p(i,u())}),x(()=>z(m()),()=>{p(k,["checkbox-container",m()!=="default"?m():""])}),K(),se();var b=oe();const A=U(()=>ee(h(k).join(" ")));var g=w(b),B=Q(g,4);{var F=e=>{var t=ne(),H=w(t);_(()=>W(H,C())),v(e,t)};X(B,e=>{!Y()&&C()&&e(F)})}_(()=>ae(b,h(A),"")),te(g,()=>h(i),e=>p(i,e)),$("change",g,Z),v(c,b),M()}f.__docgen={version:3,name:"Checkbox.svelte",data:[{name:"checked",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"onChange",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1},{name:"label",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"size",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"default"'},{name:"hideLabel",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const fe={title:"Svelte Components/Checkbox",component:f,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases. <br /> **npm install**: mie-ds-checkbox"}}},argTypes:{checked:{control:"boolean"},label:{control:"text"},size:{control:{type:"select"},options:["default","small","large"]},onChange:{action:"changed"},hideLabel:{control:"boolean"}}},d=c=>({Component:f,props:c,on:{change:c.onChange}}),n=d.bind({});n.args={label:"Default Checkbox"};const o=d.bind({});o.args={label:"Small Checkbox",size:"small"};const r=d.bind({});r.args={label:"Large Checkbox",size:"large"};const l=d.bind({});l.args={label:"Checked Checkbox",checked:!0};var L,V,D;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`args => ({
  Component: Checkbox,
  props: args,
  on: {
    change: args.onChange
  }
})`,...(D=(V=n.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var E,q,O;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
  Component: Checkbox,
  props: args,
  on: {
    change: args.onChange
  }
})`,...(O=(q=o.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var P,R,T;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
  Component: Checkbox,
  props: args,
  on: {
    change: args.onChange
  }
})`,...(T=(R=r.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var j,G,I;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`args => ({
  Component: Checkbox,
  props: args,
  on: {
    change: args.onChange
  }
})`,...(I=(G=l.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};const ke=["Default","Small","Large","Checked"];export{l as Checked,n as Default,r as Large,o as Small,ke as __namedExportsOrder,fe as default};
