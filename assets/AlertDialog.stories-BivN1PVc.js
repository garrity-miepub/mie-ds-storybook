import{p as X,Z as $,_ as ee,$ as te,a0 as _,e as ne,a1 as N,a2 as t,a3 as A,a4 as ae,l as oe,k as ie,Y as re}from"./store-DIQEHCOu.js";import{p as d}from"./props-DO17Jqv7.js";import{s as k}from"./render-CMzKQT-F.js";import{i as se}from"./if-DGZZ-pQQ.js";import{h as le}from"./html-Dgl4xvzF.js";import{s as ce}from"./class-Ds9EAFiq.js";import{i as pe}from"./lifecycle-9Sjl64q2.js";import"./events-DmGDAng9.js";import"./hydration-C_mtSyjW.js";var de=N('<span class="icon" role="img" aria-label="Alert Icon"><!></span>'),me=N('<div role="dialog" aria-modal="true" aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description"><div class="header"><h2><!> </h2></div> <div id="description"><p> </p></div></div>');function g(m,e){X(e,!1);const p=re();let u=d(e,"title",8,"Default Title"),Z=d(e,"content",8,"This is the default alert dialog content."),y=d(e,"type",8,"Default"),v=d(e,"icon",8,null);function j(a){return`<i class="fas ${a}"></i>`}$(()=>oe(y()),()=>{ae(p,`ds-alert-dialog--${y().toLowerCase()}`)}),ee(),pe();var f=me(),h=t(f),q=t(h),D=t(q);{var H=a=>{var b=de(),U=t(b);le(U,()=>j(v())),_(a,b)};se(D,a=>{v()&&a(H)})}var J=A(D),K=A(h,2),M=t(K),Q=t(M);te(()=>{ce(f,`ds-alert-dialog ${ie(p)??""}`),k(J,` ${u()??""}`),k(Q,Z())}),_(m,f),ne()}g.__docgen={version:3,name:"AlertDialog.svelte",data:[{name:"title",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"Default Title"'},{name:"content",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"This is the default alert dialog content."'},{name:"type",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"Default"'},{name:"icon",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"null"},static:!1,readonly:!1,defaultValue:"null"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const Ae={title:"Svelte Components/Alert Dialog",component:g,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases. <br /> **npm install**: mie-ds-alert-dialog "}}},argTypes:{title:{control:"text",description:"Title of the alert dialog",defaultValue:"Default Title"},content:{control:"text",description:"Content of the alert dialog",defaultValue:"This is the default alert dialog content."},type:{control:{type:"select"},options:["Default","Informative","Warning","Danger","Success"],description:"Type/severity of the alert dialog",defaultValue:"Default"},icon:{control:"text",description:"Optional Font Awesome icon class to display next to the title",defaultValue:null}}},n=({title:m,content:e,type:p,icon:u})=>({Component:g,props:{title:m,content:e,type:p,icon:u}}),o=n.bind({});o.args={title:"Default Alert",content:"This is a standard alert dialog.",type:"Default"};const i=n.bind({});i.args={title:"Informative Alert",content:"This dialog provides some useful information.",type:"Informative",icon:"fa-info-circle"};const r=n.bind({});r.args={title:"Warning Alert",content:"Be careful with this action.",type:"Warning",icon:"fa-exclamation-triangle"};const s=n.bind({});s.args={title:"Danger Alert",content:"An error has occurred! Please take action.",type:"Danger",icon:"fa-exclamation-circle"};const l=n.bind({});l.args={title:"Success Alert",content:"Your operation was completed successfully!",type:"Success",icon:"fa-check-circle"};const c=n.bind({});c.args={title:"Interactive Alert",content:"You can customize the title and content here.",type:"Default",icon:"fa-cog"};var x,S,T;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`({
  title,
  content,
  type,
  icon
}) => ({
  Component: AlertDialog,
  props: {
    title,
    content,
    type,
    icon
  }
})`,...(T=(S=o.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var C,I,w;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`({
  title,
  content,
  type,
  icon
}) => ({
  Component: AlertDialog,
  props: {
    title,
    content,
    type,
    icon
  }
})`,...(w=(I=i.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var V,W,E;r.parameters={...r.parameters,docs:{...(V=r.parameters)==null?void 0:V.docs,source:{originalSource:`({
  title,
  content,
  type,
  icon
}) => ({
  Component: AlertDialog,
  props: {
    title,
    content,
    type,
    icon
  }
})`,...(E=(W=r.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var O,P,Y;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`({
  title,
  content,
  type,
  icon
}) => ({
  Component: AlertDialog,
  props: {
    title,
    content,
    type,
    icon
  }
})`,...(Y=(P=s.parameters)==null?void 0:P.docs)==null?void 0:Y.source}}};var z,R,B;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`({
  title,
  content,
  type,
  icon
}) => ({
  Component: AlertDialog,
  props: {
    title,
    content,
    type,
    icon
  }
})`,...(B=(R=l.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var F,G,L;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`({
  title,
  content,
  type,
  icon
}) => ({
  Component: AlertDialog,
  props: {
    title,
    content,
    type,
    icon
  }
})`,...(L=(G=c.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};const ke=["Default","Informative","Warning","Danger","Success","Interactive"];export{s as Danger,o as Default,i as Informative,c as Interactive,l as Success,r as Warning,ke as __namedExportsOrder,Ae as default};
