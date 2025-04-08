import{s as xe,a8 as qe,p as We,Y as m,Z as Me,_,$ as V,e as Re,a0 as q,a1 as y,a3 as c,k as o,a4 as g,a2 as G,l as w,aw as Ge}from"./store-T5UnPX9g.js";import{p}from"./props-C9IDeoNK.js";import{s as P}from"./render-DSWJi0hW.js";import{i as X}from"./if-BZcF3WLq.js";import{e as Pe,i as Ue}from"./each-D4Oo9sU_.js";import{s as H}from"./attributes-BfksUnjX.js";import{s as E}from"./class-Ds9EAFiq.js";import{l as Ne,g as U}from"./events-DOkqN8RV.js";import{i as Ye}from"./lifecycle-mHODSN2N.js";import{c as Ze}from"./index-client-DCCy74BY.js";import{c as j}from"./attributes-Jce5emvo.js";import"./hydration-C_mtSyjW.js";function Ce(e,a,t){if(e.multiple)return Ke(e,a);for(var r of e.options){var s=T(r);if(qe(s,a)){r.selected=!0;return}}(!t||a!==void 0)&&(e.selectedIndex=-1)}function ze(e,a){xe(()=>{var t=new MutationObserver(()=>{var r=e.__value;Ce(e,r)});return t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{t.disconnect()}})}function Je(e,a,t=a){var r=!0;Ne(e,"change",s=>{var u=s?"[selected]":":checked",f;if(e.multiple)f=[].map.call(e.querySelectorAll(u),T);else{var h=e.querySelector(u)??e.querySelector("option:not([disabled])");f=h&&T(h)}t(f)}),xe(()=>{var s=a();if(Ce(e,s,r),r&&s===void 0){var u=e.querySelector(":checked");u!==null&&(s=T(u),t(s))}e.__value=s,r=!1}),ze(e)}function Ke(e,a){for(var t of e.options)t.selected=~a.indexOf(T(t))}function T(e){return"__value"in e?e.__value:e.value}var Qe=q("<option> </option>"),Xe=q("<label> </label>"),$e=q("<div> </div>"),ea=q('<div class="ds-input-wrapper"><div><select><option disabled hidden>Select an option</option><!></select> <!></div> <!></div>');function N(e,a){We(a,!1);const t=g(),r=g(),s=g(),u=g(),f=g(),h=g();let O=p(a,"label",8,""),Y=p(a,"ariaLabel",8,""),Se=p(a,"showLabel",8,!0),i=p(a,"state",8,"default"),Z=p(a,"helperText",8,""),I=p(a,"value",8,void 0),z=p(a,"options",24,()=>[]),Fe=p(a,"onFocus",8,n=>{}),Be=p(a,"onBlur",8,n=>{});const De=Ze();let A=g(!1),W=g("");const J=`select-${Math.random().toString(36).substring(2,10)}`,Le=n=>{o(t)?De("change",n.target.value):c(W,n.target.value)},Te=n=>{c(A,!0),Fe()(n)},Oe=n=>{c(A,!1),Be()(n)};m(()=>w(I()),()=>{c(t,I()!==void 0)}),m(()=>(o(t),w(I()),o(W)),()=>{c(r,o(t)?I():o(W))}),m(()=>{},()=>{c(s,["ds-input-container"].join(" "))}),m(()=>(w(i()),o(A),o(r)),()=>{c(u,["ds-input",i()!=="default"?`ds-input--${i()}`:"",o(A)||o(r)?"ds-input--has-value":""].filter(Boolean).join(" "))}),m(()=>w(i()),()=>{c(f,["ds-input-label floating",i()==="disabled"?"disabled":""].filter(Boolean).join(" "))}),m(()=>w(i()),()=>{c(h,["ds-helper-text",i()!=="default"?`ds-helper-text--${i()}`:""].filter(Boolean).join(" "))}),Me(),Ye();var K=ea(),M=y(K),d=y(M);_(()=>{o(r),Ge(()=>{o(u),Y(),O(),i(),z()})}),H(d,"id",J);var R=y(d);R.value=((R.__value="")==null,"");var Ie=G(R);Pe(Ie,1,z,Ue,(n,l)=>{var b=Qe(),Q={},je=y(b);_(()=>{Q!==(Q=o(l).value)&&(b.value=(b.__value=o(l).value)==null?"":o(l).value),P(je,o(l).label)}),V(n,b)});var Ae=G(d,2);{var Ve=n=>{var l=Xe();H(l,"for",J);var b=y(l);_(()=>{E(l,j(o(f)),""),P(b,O())}),V(n,l)};X(Ae,n=>{Se()&&O()&&n(Ve)})}var He=G(M,2);{var Ee=n=>{var l=$e(),b=y(l);_(()=>{E(l,j(o(h)),""),P(b,Z())}),V(n,l)};X(He,n=>{Z()&&n(Ee)})}_(()=>{E(M,j(o(s)),""),E(d,j(o(u)),""),H(d,"aria-label",Y()||O()),H(d,"aria-invalid",i()==="danger"),d.disabled=i()==="disabled"}),Je(d,()=>o(r),n=>c(r,n)),U("change",d,Le),U("focus",d,Te),U("blur",d,Oe),V(e,K),Re()}N.__docgen={version:3,name:"Dropdown.svelte",data:[{name:"label",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"ariaLabel",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"showLabel",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"true"},{name:"state",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"default"'},{name:"helperText",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"value",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"undefined"},static:!1,readonly:!1},{name:"options",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"any[]"},static:!1,readonly:!1,defaultValue:"[]"},{name:"onFocus",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"(event: any) => void"},static:!1,readonly:!1,defaultValue:"function"},{name:"onBlur",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"(event: any) => void"},static:!1,readonly:!1,defaultValue:"function"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{visibility:"public",description:null,keywords:[],name:"change"}],slots:[],refs:[]};const ba={title:"Svelte Components/Dropdown",component:N,parameters:{layout:"centered",docs:{description:{component:"**IN PROGRESS** This dropdown is part of the MIE Design System. <br /> **npm install**: mie-ds-dropdown"}}},tags:["autodocs"],argTypes:{label:{control:"text",description:"Label for the dropdown"},ariaLabel:{control:"text",description:"ARIA label for accessibility"},state:{control:{type:"select"},options:["default","success","danger","disabled"]},showLabel:{control:"boolean",description:"Toggles visibility of the floating label"},helperText:{control:"text",description:"Helper text below the dropdown"},value:{control:"text",description:"Controlled value"},options:{control:"object",description:"Array of { label, value }"},onFocus:{action:"focus",description:"Fires on focus"},onBlur:{action:"blur",description:"Fires on blur"},onChange:{action:"change",description:"Fires on value change"}}},v=e=>({Component:N,props:e,on:{change:e.onChange,focus:e.onFocus,blur:e.onBlur}}),k=v.bind({});k.args={label:"Favorite Fruit",options:[{label:"Apple",value:"apple"},{label:"Orange",value:"orange"},{label:"Banana",value:"banana"}]};const x=v.bind({});x.args={label:"Favorite Animal",value:"dog",options:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"},{label:"Bird",value:"bird"}]};const C=v.bind({});C.args={label:"Select Option",leadingIcon:"user",trailingIcon:"check",options:[{label:"One",value:"1"},{label:"Two",value:"2"}]};const S=v.bind({});S.args={label:"Pick something",helperText:"Choose wisely",options:[{label:"Option A",value:"a"},{label:"Option B",value:"b"}]};const F=v.bind({});F.args={label:"Error Example",state:"danger",helperText:"Something went wrong",options:[{label:"Oops",value:"oops"}]};const B=v.bind({});B.args={label:"Disabled Select",state:"disabled",value:"locked",options:[{label:"Locked",value:"locked"},{label:"Hidden",value:"hidden"}]};const D=v.bind({});D.args={label:"Full Control",leadingIcon:"user",trailingIcon:"warning",state:"success",helperText:"Looking good!",value:"2",options:[{label:"Alpha",value:"1"},{label:"Beta",value:"2"},{label:"Gamma",value:"3"}]};const L=v.bind({});L.args={label:"Hidden Label",showLabel:!1,ariaLabel:"Dropdown for accessibility only",options:[{label:"One",value:"1"},{label:"Two",value:"2"}]};var $,ee,ae;k.parameters={...k.parameters,docs:{...($=k.parameters)==null?void 0:$.docs,source:{originalSource:`args => ({
  Component: Dropdown,
  props: args,
  on: {
    change: args.onChange,
    focus: args.onFocus,
    blur: args.onBlur
  }
})`,...(ae=(ee=k.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,oe,te;x.parameters={...x.parameters,docs:{...(ne=x.parameters)==null?void 0:ne.docs,source:{originalSource:`args => ({
  Component: Dropdown,
  props: args,
  on: {
    change: args.onChange,
    focus: args.onFocus,
    blur: args.onBlur
  }
})`,...(te=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var re,le,se;C.parameters={...C.parameters,docs:{...(re=C.parameters)==null?void 0:re.docs,source:{originalSource:`args => ({
  Component: Dropdown,
  props: args,
  on: {
    change: args.onChange,
    focus: args.onFocus,
    blur: args.onBlur
  }
})`,...(se=(le=C.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var ie,de,ce;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`args => ({
  Component: Dropdown,
  props: args,
  on: {
    change: args.onChange,
    focus: args.onFocus,
    blur: args.onBlur
  }
})`,...(ce=(de=S.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var ue,pe,be;F.parameters={...F.parameters,docs:{...(ue=F.parameters)==null?void 0:ue.docs,source:{originalSource:`args => ({
  Component: Dropdown,
  props: args,
  on: {
    change: args.onChange,
    focus: args.onFocus,
    blur: args.onBlur
  }
})`,...(be=(pe=F.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var ge,ve,fe;B.parameters={...B.parameters,docs:{...(ge=B.parameters)==null?void 0:ge.docs,source:{originalSource:`args => ({
  Component: Dropdown,
  props: args,
  on: {
    change: args.onChange,
    focus: args.onFocus,
    blur: args.onBlur
  }
})`,...(fe=(ve=B.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var me,ye,he;D.parameters={...D.parameters,docs:{...(me=D.parameters)==null?void 0:me.docs,source:{originalSource:`args => ({
  Component: Dropdown,
  props: args,
  on: {
    change: args.onChange,
    focus: args.onFocus,
    blur: args.onBlur
  }
})`,...(he=(ye=D.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};var _e,we,ke;L.parameters={...L.parameters,docs:{...(_e=L.parameters)==null?void 0:_e.docs,source:{originalSource:`args => ({
  Component: Dropdown,
  props: args,
  on: {
    change: args.onChange,
    focus: args.onFocus,
    blur: args.onBlur
  }
})`,...(ke=(we=L.parameters)==null?void 0:we.docs)==null?void 0:ke.source}}};const ga=["Uncontrolled","Controlled","WithIcons","WithHelperText","DangerState","Disabled","AllOptions","HiddenLabel"];export{D as AllOptions,x as Controlled,F as DangerState,B as Disabled,L as HiddenLabel,k as Uncontrolled,S as WithHelperText,C as WithIcons,ga as __namedExportsOrder,ba as default};
