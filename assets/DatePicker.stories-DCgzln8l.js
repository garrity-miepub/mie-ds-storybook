import{p as se,Y as k,_ as le,$ as ce,a0 as de,a1 as _,e as pe,a2 as C,k as a,a5 as i,Z as v,a3 as T,a4 as Y,l as me}from"./props-D-11tLXy.js";import{g as V}from"./events-ef7BX3Ie.js";import{i as W}from"./if-DG_9oCP6.js";import{s as ue}from"./attributes-0g2EBlF2.js";import{a as fe}from"./input-WSSMULZ9.js";import{b as F}from"./this-Br0GFaQS.js";import{i as ve}from"./lifecycle-Dq4UX-i8.js";import{o as ge}from"./index-client-QvcM8E6w.js";import{C as ye}from"./Calendar-RC95Kw43.js";import"./attributes-Jce5emvo.js";import"./render-B6mKzPQC.js";import"./each-CLSpy_uj.js";import"./hydration-C_mtSyjW.js";import"./class-Ds9EAFiq.js";var be=C('<div class="time-input-group"><input type="time" class="time-input"></div>'),De=C('<div class="calendar-popup"><!></div>'),he=C('<div class="date-picker"><div class="date-input-group"><input type="text" class="date-input"> <button type="button" class="calendar-icon-button" aria-label="calendar icon"><i class="fa-regular fa-calendar"></i></button></div> <!> <!></div>');function S(y,o){se(o,!1);let n=k(o,"value",12,null),M=k(o,"format",8,"MM/DD/YYYY"),U=k(o,"includeTime",8,!1),s=v(!1),l=v(""),b=v(),D=v();const X=e=>{if(!e)return"";const t=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0"),h=e.getFullYear();return M().replace("MM",t).replace("DD",r).replace("YYYY",h)},$=e=>{const t=e.match(/(\d+)/g);if(t&&t.length===3){const[r,h,oe]=t.map(Number);return new Date(oe,r-1,h)}return null};function ee(){i(s,!a(s))}function te(e){n(e),i(s,!1)}function ae(){const e=$(a(l));e?n(e):a(l)===""&&n(null)}function w(e){var t,r;a(s)&&!((t=a(b))!=null&&t.contains(e.target))&&!((r=a(D))!=null&&r.contains(e.target))&&!e.target.closest(".calendar")&&i(s,!1)}ge(()=>(window.addEventListener("click",w),()=>window.removeEventListener("click",w))),le(()=>me(n()),()=>{i(l,X(n()))}),ce(),ve();var P=he(),x=T(P),c=T(x);F(c,e=>i(D,e),()=>a(D));var E=Y(c,2);F(E,e=>i(b,e),()=>a(b));var I=Y(x,2);{var ne=e=>{var t=be();_(e,t)};W(I,e=>{U()&&e(ne)})}var re=Y(I,2);{var ie=e=>{var t=De(),r=T(t);ye(r,{get selectedDate(){return n()},onSelect:te}),_(e,t)};W(re,e=>{a(s)&&e(ie)})}de(()=>ue(c,"placeholder",M())),fe(c,()=>a(l),e=>i(l,e)),V("blur",c,ae),V("click",E,ee),_(y,P),pe()}S.__docgen={version:3,name:"DatePicker.svelte",data:[{name:"value",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"null"},static:!1,readonly:!1,defaultValue:"null"},{name:"format",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"MM/DD/YYYY"'},{name:"includeTime",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const Fe={title:"Svelte Components/DatePicker",component:S,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases."}}},argTypes:{value:{control:"date",description:"The selected date"},format:{control:"text",description:"Format string for the date input",defaultValue:"MM/DD/YYYY"},includeTime:{control:{type:"select"},options:[!0,!1],description:"Include a time input field",defaultValue:!1}}},f=({value:y,format:o,includeTime:n})=>({Component:S,props:{value:y,format:o,includeTime:n}}),g=f.bind({}),d=f.bind({});d.args={value:new Date};const p=f.bind({});p.args={format:"YYYY-MM-DD"};const m=f.bind({});m.args={includeTime:!0};const u=f.bind({});u.args={includeTime:!1};var R,O,B;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`({
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
})`,...(B=(O=g.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var L,N,z;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`({
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
})`,...(z=(N=d.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var G,Z,j;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`({
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
})`,...(j=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:j.source}}};var q,A,H;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`({
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
})`,...(H=(A=m.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var J,K,Q;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`({
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
})`,...(Q=(K=u.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const Re=["Basic","WithInitialDate","CustomFormat","WithTimeEnabled","WithTimeDisabled"];export{g as Basic,p as CustomFormat,d as WithInitialDate,u as WithTimeDisabled,m as WithTimeEnabled,Re as __namedExportsOrder,Fe as default};
