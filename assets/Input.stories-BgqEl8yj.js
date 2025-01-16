import{p as Ue,k as n,Z as f,_ as je,$ as b,a0 as h,e as Ae,a1 as F,a3 as L,a4 as o,Y as d,a2 as p,l as D}from"./store-DIQEHCOu.js";import{p as r}from"./props-DO17Jqv7.js";import{s as Q}from"./render-CMzKQT-F.js";import{i as W}from"./if-DGZZ-pQQ.js";import{h as X}from"./html-Dgl4xvzF.js";import{s as A}from"./attributes-DmLnXfCe.js";import{s as g}from"./class-Ds9EAFiq.js";import{g as H}from"./events-DmGDAng9.js";import{a as He}from"./input-C4EMWbeo.js";import{i as Me}from"./lifecycle-9Sjl64q2.js";import{c as Pe}from"./index-client-BsC9Mbj1.js";import{c as M}from"./attributes-Jce5emvo.js";import"./hydration-C_mtSyjW.js";var Re=F("<div><!></div>"),ze=F("<label> </label>"),Ye=F("<div><!></div>"),Ze=F("<div> </div>"),qe=F('<div class="ds-input-wrapper"><div><!> <input> <!> <!></div> <!></div>');function P(u,t){Ue(t,!1);const S=d(),m=d(),T=d(),B=d(),R=d();let G=r(t,"label",8,""),xe=r(t,"ariaLabel",8,""),N=r(t,"leadingIcon",8,"none"),O=r(t,"trailingIcon",8,"none"),i=r(t,"state",8,"default"),z=r(t,"helperText",8,""),V=r(t,"value",8,void 0),Ce=r(t,"onFocus",8,e=>{}),we=r(t,"onBlur",8,e=>{});const Fe=Pe();let E=d(!1),U=d(""),Y=`input-${Math.random().toString(36).substring(2,15)}`;const Se=e=>{n(S)?Fe("change",e.target.value):o(U,e.target.value)},Te=e=>{o(E,!0),Ce()(e)},Be=e=>{o(E,!1),we()(e)},Ve=["ds-input",i()!=="default"?i():"",n(E)||n(m)?"ds-input--has-value":""].filter(Boolean).join(" "),Ee=["ds-helper-text",i()!=="default"?i():""].filter(Boolean).join(" "),Z={user:'<i class="fa fa-user"></i>',check:'<i class="fa fa-check-circle"></i>',warning:'<i class="fa fa-exclamation-triangle"></i>'};f(()=>D(V()),()=>{o(S,V()!==void 0)}),f(()=>(n(S),D(V()),n(U)),()=>{o(m,n(S)?V():n(U))}),f(()=>D(N()),()=>{o(T,N()!=="none")}),f(()=>D(O()),()=>{o(B,O()!=="none")}),f(()=>(n(T),n(B)),()=>{o(R,["ds-input-container",n(T)||n(B)?"has-icon":""].filter(Boolean).join(" "))}),je(),Me();var q=qe(),j=p(q),J=p(j);{var Le=e=>{var a=Re(),c=p(a);X(c,()=>Z[N()]),b(()=>g(a,`ds-input-icon leading ${i()}`)),h(e,a)};W(J,e=>{n(T)&&e(Le)})}var s=L(J,2);g(s,M(Ve),""),A(s,"id",Y);var K=L(s,2);{var De=e=>{var a=ze();A(a,"for",Y);var c=p(a);b(()=>{g(a,`ds-input-label ${n(E)||n(m)?"floating":""} ${i()==="disabled"?"disabled":""}`),Q(c,G())}),h(e,a)};W(K,e=>{G()&&e(De)})}var We=L(K,2);{var Ge=e=>{var a=Ye(),c=p(a);X(c,()=>Z[O()]),b(()=>g(a,`ds-input-icon trailing ${i()}`)),h(e,a)};W(We,e=>{n(B)&&e(Ge)})}var Ne=L(j,2);{var Oe=e=>{var a=Ze();g(a,M(Ee),"");var c=p(a);b(()=>Q(c,z())),h(e,a)};W(Ne,e=>{z()&&e(Oe)})}b(()=>{g(j,M(n(R)),""),s.disabled=i()==="disabled",A(s,"aria-label",xe()||G())}),H("focus",s,Te),H("blur",s,Be),H("input",s,Se),He(s,()=>n(m),e=>o(m,e)),h(u,q),Ae()}P.__docgen={version:3,name:"Input.svelte",data:[{name:"label",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"ariaLabel",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"leadingIcon",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"none"'},{name:"trailingIcon",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"none"'},{name:"state",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"default"'},{name:"helperText",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"value",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"undefined"},static:!1,readonly:!1},{name:"onFocus",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"(_event: any) => void"},static:!1,readonly:!1,defaultValue:"function"},{name:"onBlur",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"(_event: any) => void"},static:!1,readonly:!1,defaultValue:"function"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{visibility:"public",description:null,keywords:[],name:"change"}],slots:[],refs:[]};const cn={title:"Svelte Components/Input",component:P,parameters:{layout:"centered",docs:{description:{component:"**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases. <br /> **npm install**: mie-ds-input"}}},tags:["autodocs"],argTypes:{label:{control:"text",description:"Label for the input",table:{category:"General"}},ariaLabel:{control:"text",description:"Aria label for accessibility",table:{category:"General"}},leadingIcon:{control:{type:"select",options:["none","user","check","warning"]},description:"Leading icon for the input",table:{category:"Icons"}},trailingIcon:{control:{type:"select",options:["none","user","check","warning"]},description:"Trailing icon for the input",table:{category:"Icons"}},state:{control:{type:"select",options:["default","success","danger","disabled"]},description:"State of the input",table:{category:"State"}},helperText:{control:"text",description:"Helper text below the input",table:{category:"General"}},value:{control:"text",description:"Controlled value of the input",table:{category:"Data"}},onFocus:{action:"focus",description:"Fires when the input is focused",table:{category:"Events"}},onBlur:{action:"blur",description:"Fires when the input loses focus",table:{category:"Events"}},onChange:{action:"change",description:"Fires when the input value changes (for controlled component)",table:{category:"Events"}}}},l=u=>({Component:P,props:u,on:{change:u.onChange,focus:u.onFocus,blur:u.onBlur}}),v=l.bind({});v.args={label:"Username",state:"default"};const y=l.bind({});y.args={label:"Username",state:"default",value:"Initial Value"};const _=l.bind({});_.args={label:"Email",leadingIcon:"user"};const k=l.bind({});k.args={label:"Confirm",trailingIcon:"check",state:"success"};const I=l.bind({});I.args={label:"Password",helperText:"Minimum 8 characters"};const x=l.bind({});x.args={label:"Error Field",state:"danger",helperText:"This field has an error"};const C=l.bind({});C.args={label:"Disabled Field",state:"disabled",value:"This is disabled"};const w=l.bind({});w.args={label:"Full Example",leadingIcon:"user",trailingIcon:"check",state:"success",helperText:"Everything looks good!",value:"Validated Input"};var $,ee,ne;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`args => ({
  Component: Input,
  props: args,
  on: {
    change: args.onChange,
    focus: args.onFocus,
    blur: args.onBlur
  }
})`,...(ne=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var ae,te,se;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`args => ({
  Component: Input,
  props: args,
  on: {
    change: args.onChange,
    focus: args.onFocus,
    blur: args.onBlur
  }
})`,...(se=(te=y.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var oe,re,ie;_.parameters={..._.parameters,docs:{...(oe=_.parameters)==null?void 0:oe.docs,source:{originalSource:`args => ({
  Component: Input,
  props: args,
  on: {
    change: args.onChange,
    focus: args.onFocus,
    blur: args.onBlur
  }
})`,...(ie=(re=_.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var le,ce,de;k.parameters={...k.parameters,docs:{...(le=k.parameters)==null?void 0:le.docs,source:{originalSource:`args => ({
  Component: Input,
  props: args,
  on: {
    change: args.onChange,
    focus: args.onFocus,
    blur: args.onBlur
  }
})`,...(de=(ce=k.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,pe,ge;I.parameters={...I.parameters,docs:{...(ue=I.parameters)==null?void 0:ue.docs,source:{originalSource:`args => ({
  Component: Input,
  props: args,
  on: {
    change: args.onChange,
    focus: args.onFocus,
    blur: args.onBlur
  }
})`,...(ge=(pe=I.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var me,fe,be;x.parameters={...x.parameters,docs:{...(me=x.parameters)==null?void 0:me.docs,source:{originalSource:`args => ({
  Component: Input,
  props: args,
  on: {
    change: args.onChange,
    focus: args.onFocus,
    blur: args.onBlur
  }
})`,...(be=(fe=x.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var he,ve,ye;C.parameters={...C.parameters,docs:{...(he=C.parameters)==null?void 0:he.docs,source:{originalSource:`args => ({
  Component: Input,
  props: args,
  on: {
    change: args.onChange,
    focus: args.onFocus,
    blur: args.onBlur
  }
})`,...(ye=(ve=C.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var _e,ke,Ie;w.parameters={...w.parameters,docs:{...(_e=w.parameters)==null?void 0:_e.docs,source:{originalSource:`args => ({
  Component: Input,
  props: args,
  on: {
    change: args.onChange,
    focus: args.onFocus,
    blur: args.onBlur
  }
})`,...(Ie=(ke=w.parameters)==null?void 0:ke.docs)==null?void 0:Ie.source}}};const dn=["Uncontrolled","Controlled","WithLeadingIcon","WithTrailingIcon","WithHelperText","DangerState","DisabledState","AllOptions"];export{w as AllOptions,y as Controlled,x as DangerState,C as DisabledState,v as Uncontrolled,I as WithHelperText,_ as WithLeadingIcon,k as WithTrailingIcon,dn as __namedExportsOrder,cn as default};
