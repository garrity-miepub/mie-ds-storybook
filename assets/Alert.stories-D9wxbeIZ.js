import{p as re,Z as oe,_ as le,$ as ce,a0 as pe,e as de,a1 as me,a3 as y,a4 as fe,l as ue,a2 as n,k as ye,Y as ge}from"./store-DKrw96s8.js";import{p as t}from"./props-WZpD2vyg.js";import{s as g}from"./render-Df-5AOqP.js";import{h as he}from"./html-BjPEsh1c.js";import{s as A}from"./attributes-CmWRQlTN.js";import{s as ke}from"./class-Ds9EAFiq.js";import{c as ve}from"./attributes-Jce5emvo.js";import"./events-CYuOk1VT.js";import"./hydration-C_mtSyjW.js";var be=me('<div role="alert" aria-label="alert message"><div class="ds-col--1"><span class="ds-icon" role="img"><!></span></div> <div class="ds-col--10"><span class="label"> </span> <span> </span> <span><a> </a></span></div></div>');function h(d,e){re(e,!1);const p=ge();let l=t(e,"type",8,"informative"),m=t(e,"icon",8,"fa-info-circle"),f=t(e,"heading",8,"Default Heading"),J=t(e,"content",8,"This has no styles applied"),K=t(e,"link",8,"Default Link"),Q=t(e,"linkPath",8,"#");function X(se){return`<i class="fas ${se}"></i>`}oe(()=>ue(l()),()=>{fe(p,`ds-alert--${l()}`)}),le();var u=be(),k=n(u),v=n(k),$=n(v);he($,()=>X(m()));var ee=y(k,2),b=n(ee),ne=n(b),_=y(b,2),te=n(_),ae=y(_,2),x=n(ae),ie=n(x);ce(()=>{ke(u,ve(ye(p)),""),A(v,"aria-label",l()+" icon"),g(ne,f()),g(te,J()),A(x,"href",Q()),g(ie,K())}),pe(d,u),de()}h.__docgen={version:3,name:"Alert.svelte",data:[{name:"type",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"informative"'},{name:"icon",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"fa-info-circle"'},{name:"heading",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"Default Heading"'},{name:"content",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"This has no styles applied"'},{name:"link",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"Default Link"'},{name:"linkPath",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"#"'}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const De={title:"Svelte Components/Alert",component:h,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases. <br /> **npm install**: mie-ds-alert "}}},argTypes:{type:{control:{type:"select"},options:["informative","warning","success","danger"],description:"Type of the alert",defaultValue:"informative"},icon:{control:{type:"select"},options:["fa-info-circle","fa-exclamation-triangle","fa-check-circle","fa-exclamation-circle"],description:"Font Awesome icon class",defaultValue:"fa-info-circle"},heading:{control:"text",description:"Heading text of the alert",defaultValue:"Default Heading"},content:{control:"text",description:"Content/message of the alert",defaultValue:"This has no styles applied"},link:{control:"text",description:"Text for the alert link",defaultValue:"Default Link"},linkPath:{control:"text",description:"URL for the alert link",defaultValue:"#"}}},c=({type:d,icon:e,heading:p,content:l,link:m,linkPath:f})=>({Component:h,props:{type:d,icon:e,heading:p,content:l,link:m,linkPath:f}}),a=c.bind({});a.args={type:"informative",icon:"fa-info-circle",heading:"Informative Alert",content:"This is an informative alert. It provides useful information to the user.",link:"Learn More",linkPath:"#"};const i=c.bind({});i.args={type:"informative",icon:"fa-info-circle",heading:"Informative Alert",content:"This is an informative alert. It provides useful information to the user.",link:"Learn More",linkPath:"#"};const s=c.bind({});s.args={type:"warning",icon:"fa-exclamation-triangle",heading:"Warning Alert",content:"This is a warning alert. Be cautious about the information presented here.",link:"Take Action",linkPath:"#"};const r=c.bind({});r.args={type:"success",icon:"fa-check-circle",heading:"Success Alert",content:"This is a success alert. Your operation was completed successfully!",link:"View Details",linkPath:"#"};const o=c.bind({});o.args={type:"danger",icon:"fa-exclamation-circle",heading:"Danger Alert",content:"This is a danger alert. An error has occurred!",link:"Report Issue",linkPath:"#"};var P,S,w,I,T;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`({
  type,
  icon,
  heading,
  content,
  link,
  linkPath
}) => ({
  Component: Alert,
  props: {
    type,
    icon,
    heading,
    content,
    link,
    linkPath
  }
})`,...(w=(S=a.parameters)==null?void 0:S.docs)==null?void 0:w.source},description:{story:"Interactive Story with Controls",...(T=(I=a.parameters)==null?void 0:I.docs)==null?void 0:T.description}}};var V,D,C,L,H;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`({
  type,
  icon,
  heading,
  content,
  link,
  linkPath
}) => ({
  Component: Alert,
  props: {
    type,
    icon,
    heading,
    content,
    link,
    linkPath
  }
})`,...(C=(D=i.parameters)==null?void 0:D.docs)==null?void 0:C.source},description:{story:"Informative Alert Story",...(H=(L=i.parameters)==null?void 0:L.docs)==null?void 0:H.description}}};var R,W,E,M,O;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`({
  type,
  icon,
  heading,
  content,
  link,
  linkPath
}) => ({
  Component: Alert,
  props: {
    type,
    icon,
    heading,
    content,
    link,
    linkPath
  }
})`,...(E=(W=s.parameters)==null?void 0:W.docs)==null?void 0:E.source},description:{story:"Warning Alert Story",...(O=(M=s.parameters)==null?void 0:M.docs)==null?void 0:O.description}}};var Y,z,B,F,G;r.parameters={...r.parameters,docs:{...(Y=r.parameters)==null?void 0:Y.docs,source:{originalSource:`({
  type,
  icon,
  heading,
  content,
  link,
  linkPath
}) => ({
  Component: Alert,
  props: {
    type,
    icon,
    heading,
    content,
    link,
    linkPath
  }
})`,...(B=(z=r.parameters)==null?void 0:z.docs)==null?void 0:B.source},description:{story:"Success Alert Story",...(G=(F=r.parameters)==null?void 0:F.docs)==null?void 0:G.description}}};var N,U,Z,j,q;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`({
  type,
  icon,
  heading,
  content,
  link,
  linkPath
}) => ({
  Component: Alert,
  props: {
    type,
    icon,
    heading,
    content,
    link,
    linkPath
  }
})`,...(Z=(U=o.parameters)==null?void 0:U.docs)==null?void 0:Z.source},description:{story:"Danger Alert Story",...(q=(j=o.parameters)==null?void 0:j.docs)==null?void 0:q.description}}};const Ce=["Interactive","Informative","Warning","Success","Danger"];export{o as Danger,i as Informative,a as Interactive,r as Success,s as Warning,Ce as __namedExportsOrder,De as default};
