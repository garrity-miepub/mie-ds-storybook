import{p as Te,Y as p,Z as Ce,_ as V,$ as D,e as we,a0 as N,a3 as r,k as e,a4 as i,a1 as T,a2 as Y,l as b}from"./store-T5UnPX9g.js";import{p as o}from"./props-C9IDeoNK.js";import{s as Z}from"./render-DSWJi0hW.js";import{i as q}from"./if-BZcF3WLq.js";import{s as C}from"./attributes-BfksUnjX.js";import{s as w}from"./class-Ds9EAFiq.js";import{g as E}from"./events-DOkqN8RV.js";import{a as Se}from"./input-CgAcMd-e.js";import{i as Be}from"./lifecycle-mHODSN2N.js";import{c as Fe}from"./index-client-DCCy74BY.js";import{c as S}from"./attributes-Jce5emvo.js";import"./hydration-C_mtSyjW.js";var Le=N("<label> </label>"),ze=N("<div> </div>"),Ve=N('<div class="ds-input-wrapper"><div><textarea></textarea> <!></div> <!></div>');function R(d,t){Te(t,!1);const k=i(),c=i(),j=i(),I=i(),M=i(),H=i();let B=o(t,"label",8,""),ue=o(t,"ariaLabel",8,""),pe=o(t,"showLabel",8,!0),s=o(t,"state",8,"default"),O=o(t,"helperText",8,""),_=o(t,"value",8,void 0),A=o(t,"resizable",8,!0),be=o(t,"onFocus",8,()=>{}),ge=o(t,"onBlur",8,()=>{});const fe=Fe();let u=i(!1),F=i("");const G=`textarea-${Math.random().toString(36).substring(2,10)}`,me=a=>{e(k)?fe("change",a.target.value):r(F,a.target.value)},ye=a=>{r(u,!0),be()(a)},ve=a=>{r(u,!1),ge()(a)};p(()=>b(_()),()=>{r(k,_()!==void 0)}),p(()=>(e(k),b(_()),e(F)),()=>{r(c,e(k)?_():e(F))}),p(()=>{},()=>{r(j,["ds-input-container"].join(" "))}),p(()=>(b(s()),e(u),e(c),b(A())),()=>{r(I,["ds-input",s()!=="default"?`ds-input--${s()}`:"",e(u)||e(c)?"ds-input--has-value":"",A()?"":"no-resize"].filter(Boolean).join(" "))}),p(()=>(e(u),e(c),b(s())),()=>{r(M,["ds-input-label",e(u)||e(c)?"floating":"",s()==="disabled"?"disabled":""].filter(Boolean).join(" "))}),p(()=>b(s()),()=>{r(H,["ds-helper-text",s()!=="default"?`ds-helper-text--${s()}`:""].filter(Boolean).join(" "))}),Ce(),Be();var P=Ve(),L=T(P),n=T(L);C(n,"id",G);var xe=Y(n,2);{var he=a=>{var l=Le();C(l,"for",G);var z=T(l);V(()=>{w(l,S(e(M)),""),Z(z,B())}),D(a,l)};q(xe,a=>{pe()&&B()&&a(he)})}var ke=Y(L,2);{var _e=a=>{var l=ze(),z=T(l);V(()=>{w(l,S(e(H)),""),Z(z,O())}),D(a,l)};q(ke,a=>{O()&&a(_e)})}V(()=>{w(L,S(e(j)),""),w(n,S(e(I)),""),C(n,"aria-label",ue()||B()),C(n,"aria-invalid",s()==="danger"),n.disabled=s()==="disabled"}),Se(n,()=>e(c),a=>r(c,a)),E("input",n,me),E("focus",n,ye),E("blur",n,ve),D(d,P),we()}R.__docgen={version:3,name:"Textarea.svelte",data:[{name:"label",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"ariaLabel",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"showLabel",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"true"},{name:"state",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"default"'},{name:"helperText",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"value",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"undefined"},static:!1,readonly:!1},{name:"resizable",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"true"},{name:"onFocus",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"(event: FocusEvent) => void"},static:!1,readonly:!1,defaultValue:"function"},{name:"onBlur",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"(event: FocusEvent) => void"},static:!1,readonly:!1,defaultValue:"function"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{visibility:"public",description:null,keywords:[],name:"change"}],slots:[],refs:[]};const Ye={title:"Svelte Components/Textarea",component:R,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"**IN PROGRESS** This textarea is part of the MIE Design System. <br /> **npm install**: mie-ds-textarea"}}},argTypes:{label:{control:"text"},ariaLabel:{control:"text"},showLabel:{control:"boolean"},state:{control:{type:"select"},options:["default","success","danger","disabled"]},helperText:{control:"text"},value:{control:"text"},onFocus:{action:"focus"},onBlur:{action:"blur"},onChange:{action:"change"},resizable:{control:"boolean",description:"Allow manual resizing of the textarea"}}},g=d=>({Component:R,props:d,on:{change:d.onChange,focus:d.onFocus,blur:d.onBlur}}),f=g.bind({});f.args={label:"Message",helperText:"Enter your message"};const m=g.bind({});m.args={label:"Notes",state:"success",helperText:"Looks good!"};const y=g.bind({});y.args={label:"Comments",state:"danger",helperText:"Something went wrong"};const v=g.bind({});v.args={label:"Disabled Notes",state:"disabled",value:"This is disabled"};const x=g.bind({});x.args={label:"No visible label",showLabel:!1,ariaLabel:"Textarea for accessibility only",helperText:"Screen reader only label"};const h=g.bind({});h.args={label:"Fixed Size Notes",helperText:"Resize is disabled",resizable:!1};var J,K,Q;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`args => ({
  Component: Textarea,
  props: args,
  on: {
    change: args.onChange,
    focus: args.onFocus,
    blur: args.onBlur
  }
})`,...(Q=(K=f.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,W,X;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`args => ({
  Component: Textarea,
  props: args,
  on: {
    change: args.onChange,
    focus: args.onFocus,
    blur: args.onBlur
  }
})`,...(X=(W=m.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var $,ee,ae;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`args => ({
  Component: Textarea,
  props: args,
  on: {
    change: args.onChange,
    focus: args.onFocus,
    blur: args.onBlur
  }
})`,...(ae=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,se,ne;v.parameters={...v.parameters,docs:{...(te=v.parameters)==null?void 0:te.docs,source:{originalSource:`args => ({
  Component: Textarea,
  props: args,
  on: {
    change: args.onChange,
    focus: args.onFocus,
    blur: args.onBlur
  }
})`,...(ne=(se=v.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var re,oe,le;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`args => ({
  Component: Textarea,
  props: args,
  on: {
    change: args.onChange,
    focus: args.onFocus,
    blur: args.onBlur
  }
})`,...(le=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ie,ce,de;h.parameters={...h.parameters,docs:{...(ie=h.parameters)==null?void 0:ie.docs,source:{originalSource:`args => ({
  Component: Textarea,
  props: args,
  on: {
    change: args.onChange,
    focus: args.onFocus,
    blur: args.onBlur
  }
})`,...(de=(ce=h.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};const Ze=["Default","Success","Danger","Disabled","HiddenLabel","NoResize"];export{y as Danger,f as Default,v as Disabled,x as HiddenLabel,h as NoResize,m as Success,Ze as __namedExportsOrder,Ye as default};
