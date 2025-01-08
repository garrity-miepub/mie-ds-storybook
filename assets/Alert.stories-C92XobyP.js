import{p as se,Z as oe,_ as le,$ as ce,a0 as pe,e as de,a1 as fe,a3 as y,a4 as me,l as ue,a2 as t,k as ye,Y as ge}from"./store-DKrw96s8.js";import{p as n}from"./props-WZpD2vyg.js";import{s as g}from"./render-Df-5AOqP.js";import{h as he}from"./html-BjPEsh1c.js";import{s as A}from"./attributes-CmWRQlTN.js";import{s as ke}from"./class-Ds9EAFiq.js";import{c as ve}from"./attributes-Jce5emvo.js";import"./events-CYuOk1VT.js";import"./hydration-C_mtSyjW.js";var _e=fe('<div role="alert" aria-label="alert message"><div class="ds-col--1"><span class="ds-icon" role="img"><!></span></div> <div class="ds-col--10"><span class="label"> </span> <span> </span> <span><a> </a></span></div></div>');function h(d,e){se(e,!1);const p=ge();let l=n(e,"type",8,"informative"),f=n(e,"icon",8,"fa-info-circle"),m=n(e,"heading",8,"Default Heading"),K=n(e,"content",8,"This has no styles applied"),N=n(e,"link",8,"Default Link"),Q=n(e,"linkPath",8,"#");function X(re){return`<i class="fas ${re}"></i>`}oe(()=>ue(l()),()=>{me(p,`ds-alert--${l()}`)}),le();var u=_e(),k=t(u),v=t(k),$=t(v);he($,()=>X(f()));var ee=y(k,2),_=t(ee),te=t(_),b=y(_,2),ne=t(b),ae=y(b,2),x=t(ae),ie=t(x);ce(()=>{ke(u,ve(ye(p)),""),A(v,"aria-label",l()+" icon"),g(te,m()),g(ne,K()),A(x,"href",Q()),g(ie,N())}),pe(d,u),de()}h.__docgen={version:3,name:"Alert.svelte",data:[{name:"type",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"informative"'},{name:"icon",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"fa-info-circle"'},{name:"heading",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"Default Heading"'},{name:"content",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"This has no styles applied"'},{name:"link",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"Default Link"'},{name:"linkPath",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"#"'}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const De={title:"Svelte Components/Alert",component:h,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{type:{control:{type:"select"},options:["informative","warning","success","danger"],description:"Type of the alert",defaultValue:"informative"},icon:{control:{type:"select"},options:["fa-info-circle","fa-exclamation-triangle","fa-check-circle","fa-exclamation-circle"],description:"Font Awesome icon class",defaultValue:"fa-info-circle"},heading:{control:"text",description:"Heading text of the alert",defaultValue:"Default Heading"},content:{control:"text",description:"Content/message of the alert",defaultValue:"This has no styles applied"},link:{control:"text",description:"Text for the alert link",defaultValue:"Default Link"},linkPath:{control:"text",description:"URL for the alert link",defaultValue:"#"}}},c=({type:d,icon:e,heading:p,content:l,link:f,linkPath:m})=>({Component:h,props:{type:d,icon:e,heading:p,content:l,link:f,linkPath:m}}),a=c.bind({});a.args={type:"informative",icon:"fa-info-circle",heading:"Informative Alert",content:"This is an informative alert. It provides useful information to the user.",link:"Learn More",linkPath:"#"};const i=c.bind({});i.args={type:"informative",icon:"fa-info-circle",heading:"Informative Alert",content:"This is an informative alert. It provides useful information to the user.",link:"Learn More",linkPath:"#"};const r=c.bind({});r.args={type:"warning",icon:"fa-exclamation-triangle",heading:"Warning Alert",content:"This is a warning alert. Be cautious about the information presented here.",link:"Take Action",linkPath:"#"};const s=c.bind({});s.args={type:"success",icon:"fa-check-circle",heading:"Success Alert",content:"This is a success alert. Your operation was completed successfully!",link:"View Details",linkPath:"#"};const o=c.bind({});o.args={type:"danger",icon:"fa-exclamation-circle",heading:"Danger Alert",content:"This is a danger alert. An error has occurred!",link:"Report Issue",linkPath:"#"};var P,S,w,T,V;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`({
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
})`,...(w=(S=a.parameters)==null?void 0:S.docs)==null?void 0:w.source},description:{story:"Interactive Story with Controls",...(V=(T=a.parameters)==null?void 0:T.docs)==null?void 0:V.description}}};var I,D,C,L,H;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`({
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
})`,...(C=(D=i.parameters)==null?void 0:D.docs)==null?void 0:C.source},description:{story:"Informative Alert Story",...(H=(L=i.parameters)==null?void 0:L.docs)==null?void 0:H.description}}};var W,M,R,Y,B;r.parameters={...r.parameters,docs:{...(W=r.parameters)==null?void 0:W.docs,source:{originalSource:`({
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
})`,...(R=(M=r.parameters)==null?void 0:M.docs)==null?void 0:R.source},description:{story:"Warning Alert Story",...(B=(Y=r.parameters)==null?void 0:Y.docs)==null?void 0:B.description}}};var E,F,O,U,Z;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`({
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
})`,...(O=(F=s.parameters)==null?void 0:F.docs)==null?void 0:O.source},description:{story:"Success Alert Story",...(Z=(U=s.parameters)==null?void 0:U.docs)==null?void 0:Z.description}}};var j,q,z,G,J;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`({
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
})`,...(z=(q=o.parameters)==null?void 0:q.docs)==null?void 0:z.source},description:{story:"Danger Alert Story",...(J=(G=o.parameters)==null?void 0:G.docs)==null?void 0:J.description}}};const Ce=["Interactive","Informative","Warning","Success","Danger"];export{o as Danger,i as Informative,a as Interactive,s as Success,r as Warning,Ce as __namedExportsOrder,De as default};
