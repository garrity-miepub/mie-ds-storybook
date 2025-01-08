import{p as pe,Z as W,_ as ge,$ as fe,a0 as v,e as ue,a1 as h,a2 as _,a3 as O,a4 as T,l as D,k as F,Y as E}from"./store-DKrw96s8.js";import{p as o}from"./props-WZpD2vyg.js";import{s as me}from"./render-Df-5AOqP.js";import{i as L}from"./if-D8r51YhU.js";import{h as A}from"./html-BjPEsh1c.js";import{s as be}from"./class-Ds9EAFiq.js";import"./events-CYuOk1VT.js";import"./hydration-C_mtSyjW.js";var ye=h('<span class="ds-badge__icon ds-badge__icon--leading" role="img" aria-label="Leading Icon"><!></span>'),Ie=h('<span class="ds-badge__icon ds-badge__icon--trailing" role="img" aria-label="Trailing Icon"><!></span>'),ve=h("<span><!> <!></span>");function B(b,n){pe(n,!1);const f=E(),u=E();let m=o(n,"filled",8,!0),k=o(n,"type",8,"default"),x=o(n,"leadingIcon",8,null),C=o(n,"trailingIcon",8,null),re=o(n,"label",8,"Badge");function S(e){return`<i class="fas ${e}"></i>`}W(()=>D(k()),()=>{T(f,`ds-badge--${k()}`)}),W(()=>D(m()),()=>{T(u,m()?"ds-badge--filled":"ds-badge--outlined")}),ge();var y=ve(),w=_(y);{var se=e=>{var l=ye(),I=_(l);A(I,()=>S(x())),v(e,l)};L(w,e=>{x()&&e(se)})}var V=O(w),de=O(V);{var ce=e=>{var l=Ie(),I=_(l);A(I,()=>S(C())),v(e,l)};L(de,e=>{C()&&e(ce)})}fe(()=>{be(y,`ds-badge ${F(f)??""} ${F(u)??""}`),me(V,` ${re()??""} `)}),v(b,y),ue()}B.__docgen={version:3,name:"Badge.svelte",data:[{name:"filled",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"true"},{name:"type",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"default"'},{name:"leadingIcon",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"null"},static:!1,readonly:!1,defaultValue:"null"},{name:"trailingIcon",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"null"},static:!1,readonly:!1,defaultValue:"null"},{name:"label",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"Badge"'}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const Ve={title:"Svelte Components/Badge",component:B,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases."}}},argTypes:{filled:{control:"boolean",description:"Whether the badge is filled or outlined",defaultValue:!0},type:{control:{type:"select"},options:["default","informative","warning","danger","success"],description:"Type/severity of the badge",defaultValue:"default"},leadingIcon:{control:"text",description:"Optional Font Awesome icon class to display at the beginning",defaultValue:null},trailingIcon:{control:"text",description:"Optional Font Awesome icon class to display at the end",defaultValue:null},label:{control:"text",description:"Text content of the badge",defaultValue:"Badge"}}},a=({filled:b,type:n,leadingIcon:f,trailingIcon:u,label:m="Badge"})=>({Component:B,props:{filled:b,type:n,leadingIcon:f,trailingIcon:u,label:m}}),i=a.bind({});i.args={filled:!0,type:"default",label:"Default"};const r=a.bind({});r.args={filled:!1,type:"default",label:"Default"};const s=a.bind({});s.args={filled:!0,type:"informative",label:"Informative"};const d=a.bind({});d.args={filled:!1,type:"informative",label:"Informative"};const c=a.bind({});c.args={label:"With Icon",leadingIcon:"fa-user"};const p=a.bind({});p.args={label:"With Icon",trailingIcon:"fa-check"};const g=a.bind({});g.args={label:"With Icons",leadingIcon:"fa-arrow-left",trailingIcon:"fa-arrow-right"};const t=a.bind({});t.args={filled:!0,type:"default",leadingIcon:null,trailingIcon:null,label:"Interactive Badge"};t.argTypes={label:{control:"text"}};var P,R,z;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`({
  filled,
  type,
  leadingIcon,
  trailingIcon,
  label = 'Badge'
}) => ({
  Component: Badge,
  props: {
    filled,
    type,
    leadingIcon,
    trailingIcon,
    label
  }
})`,...(z=(R=i.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var G,N,Y;r.parameters={...r.parameters,docs:{...(G=r.parameters)==null?void 0:G.docs,source:{originalSource:`({
  filled,
  type,
  leadingIcon,
  trailingIcon,
  label = 'Badge'
}) => ({
  Component: Badge,
  props: {
    filled,
    type,
    leadingIcon,
    trailingIcon,
    label
  }
})`,...(Y=(N=r.parameters)==null?void 0:N.docs)==null?void 0:Y.source}}};var Z,j,q;s.parameters={...s.parameters,docs:{...(Z=s.parameters)==null?void 0:Z.docs,source:{originalSource:`({
  filled,
  type,
  leadingIcon,
  trailingIcon,
  label = 'Badge'
}) => ({
  Component: Badge,
  props: {
    filled,
    type,
    leadingIcon,
    trailingIcon,
    label
  }
})`,...(q=(j=s.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var H,J,K;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`({
  filled,
  type,
  leadingIcon,
  trailingIcon,
  label = 'Badge'
}) => ({
  Component: Badge,
  props: {
    filled,
    type,
    leadingIcon,
    trailingIcon,
    label
  }
})`,...(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,Q,U;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`({
  filled,
  type,
  leadingIcon,
  trailingIcon,
  label = 'Badge'
}) => ({
  Component: Badge,
  props: {
    filled,
    type,
    leadingIcon,
    trailingIcon,
    label
  }
})`,...(U=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,$,ee;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`({
  filled,
  type,
  leadingIcon,
  trailingIcon,
  label = 'Badge'
}) => ({
  Component: Badge,
  props: {
    filled,
    type,
    leadingIcon,
    trailingIcon,
    label
  }
})`,...(ee=($=p.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ne,ae,te;g.parameters={...g.parameters,docs:{...(ne=g.parameters)==null?void 0:ne.docs,source:{originalSource:`({
  filled,
  type,
  leadingIcon,
  trailingIcon,
  label = 'Badge'
}) => ({
  Component: Badge,
  props: {
    filled,
    type,
    leadingIcon,
    trailingIcon,
    label
  }
})`,...(te=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var le,oe,ie;t.parameters={...t.parameters,docs:{...(le=t.parameters)==null?void 0:le.docs,source:{originalSource:`({
  filled,
  type,
  leadingIcon,
  trailingIcon,
  label = 'Badge'
}) => ({
  Component: Badge,
  props: {
    filled,
    type,
    leadingIcon,
    trailingIcon,
    label
  }
})`,...(ie=(oe=t.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};const We=["FilledDefault","OutlinedDefault","FilledInformative","OutlinedInformative","WithLeadingIcon","WithTrailingIcon","WithBothIcons","Interactive"];export{i as FilledDefault,s as FilledInformative,t as Interactive,r as OutlinedDefault,d as OutlinedInformative,g as WithBothIcons,c as WithLeadingIcon,p as WithTrailingIcon,We as __namedExportsOrder,Ve as default};
