import{p as ue,Z as fe,_ as ve,$ as ge,a0 as S,e as he,a1 as E,k as n,a4 as o,Y as f,a2 as D,a3 as P,l as ye}from"./store-DIQEHCOu.js";import{p as w}from"./props-DO17Jqv7.js";import{g as I}from"./events-DmGDAng9.js";import{i as N}from"./if-DGZZ-pQQ.js";import{s as be}from"./attributes-DmLnXfCe.js";import{a as De}from"./input-C4EMWbeo.js";import{b as x}from"./this-UGYHE2u4.js";import{i as ke}from"./lifecycle-9Sjl64q2.js";import{o as _e}from"./index-client-BsC9Mbj1.js";import{C as Ye}from"./Calendar-7vhXS1Mc.js";import"./attributes-Jce5emvo.js";import"./render-CMzKQT-F.js";import"./each-5udpwlkd.js";import"./hydration-C_mtSyjW.js";import"./class-Ds9EAFiq.js";var Te=E('<div class="time-input-group"><input type="time" class="time-input"></div>'),Ce=E('<div class="calendar-popup"><!></div>'),Me=E('<div class="date-picker"><div class="date-input-group"><input type="text" class="date-input"> <button type="button" class="calendar-icon-button" aria-label="calendar icon"><i class="fa-regular fa-calendar"></i></button></div> <!> <!></div>');function V(_,l){ue(l,!1);let s=w(l,"value",12,null),Y=w(l,"format",8,"MM/DD/YYYY"),ae=w(l,"includeTime",8,!1),c=f(!1),d=f(""),T=f(),C=f(),W=f();const ne=e=>{if(!e)return"";const t=String(e.getMonth()+1).padStart(2,"0"),a=String(e.getDate()).padStart(2,"0"),r=e.getFullYear();return Y().replace("MM",t).replace("DD",a).replace("YYYY",r)},re=e=>{if(!e)return"";let t="",a="",r="",u="",i=0;for(let M=0;M<e.length;M++){const m=e[M];/\d/.test(m)?i===0?(a+=m,a.length===2&&i++):i===1?(r+=m,r.length===2&&i++):i===2&&(u+=m,u.length===4&&i++):(m==="/"||m==="-")&&(i===0&&a.length===2||i===1&&r.length===2)&&i++}return t=Y().replace("MM",a.slice(0,2)).replace("DD",r.slice(0,2)).replace("YYYY",u.slice(0,4)),t},ie=e=>{const t=e.match(/(\d+)/g);if(t&&t.length===3){const[a,r,u]=t.map(Number);return new Date(u,a-1,r)}return null};function oe(){o(c,!n(c))}function se(e){const t=e.detail;s(t),o(c,!1)}function le(){const e=ie(n(d));e?s(e):n(d)===""&&s(null)}function ce(e){o(d,re(e.target.value))}function R(e){var t,a;n(c)&&!((t=n(T))!=null&&t.contains(e.target))&&!((a=n(C))!=null&&a.contains(e.target))&&!e.target.closest(".calendar")&&o(c,!1)}_e(()=>(window.addEventListener("click",R),()=>window.removeEventListener("click",R))),fe(()=>ye(s()),()=>{o(d,ne(s()))}),ve(),ke();var F=Me(),O=D(F),p=D(O);x(p,e=>o(C,e),()=>n(C));var B=P(p,2);x(B,e=>o(T,e),()=>n(T));var L=P(O,2);{var de=e=>{var t=Te(),a=D(t);x(a,r=>o(W,r),()=>n(W)),S(e,t)};N(L,e=>{ae()&&e(de)})}var pe=P(L,2);{var me=e=>{var t=Ce(),a=D(t);Ye(a,{get value(){return s()},$$events:{select:se}}),S(e,t)};N(pe,e=>{n(c)&&e(me)})}ge(()=>be(p,"placeholder",Y())),De(p,()=>n(d),e=>o(d,e)),I("input",p,ce),I("blur",p,le),I("click",B,oe),S(_,F),he()}V.__docgen={version:3,name:"DatePicker.svelte",data:[{name:"value",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"null"},static:!1,readonly:!1,defaultValue:"null"},{name:"format",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"MM/DD/YYYY"'},{name:"includeTime",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const Ge={title:"Svelte Components/DatePicker",component:V,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases. <br /> **npm install**: mie-ds-date-picker"}}},argTypes:{value:{control:"date",description:"The selected date"},format:{control:"text",description:"Format string for the date input",defaultValue:"MM/DD/YYYY"},includeTime:{control:{type:"select"},options:[!0,!1],description:"Include a time input field",defaultValue:!1}}},b=({value:_,format:l,includeTime:s})=>({Component:V,props:{value:_,format:l,includeTime:s}}),k=b.bind({}),v=b.bind({});v.args={value:new Date};const g=b.bind({});g.args={format:"YYYY-MM-DD"};const h=b.bind({});h.args={includeTime:!0};const y=b.bind({});y.args={includeTime:!1};var z,G,Z;k.parameters={...k.parameters,docs:{...(z=k.parameters)==null?void 0:z.docs,source:{originalSource:`({
  value,
  format,
  includeTime
}) => ({
  Component: DatePicker,
  props: {
    value,
    format,
    includeTime
  }
})`,...(Z=(G=k.parameters)==null?void 0:G.docs)==null?void 0:Z.source}}};var j,q,A;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`({
  value,
  format,
  includeTime
}) => ({
  Component: DatePicker,
  props: {
    value,
    format,
    includeTime
  }
})`,...(A=(q=v.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var H,J,K;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`({
  value,
  format,
  includeTime
}) => ({
  Component: DatePicker,
  props: {
    value,
    format,
    includeTime
  }
})`,...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`({
  value,
  format,
  includeTime
}) => ({
  Component: DatePicker,
  props: {
    value,
    format,
    includeTime
  }
})`,...(X=(U=h.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var $,ee,te;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`({
  value,
  format,
  includeTime
}) => ({
  Component: DatePicker,
  props: {
    value,
    format,
    includeTime
  }
})`,...(te=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const Ze=["Basic","WithInitialDate","CustomFormat","WithTimeEnabled","WithTimeDisabled"];export{k as Basic,g as CustomFormat,v as WithInitialDate,y as WithTimeDisabled,h as WithTimeEnabled,Ze as __namedExportsOrder,Ge as default};
