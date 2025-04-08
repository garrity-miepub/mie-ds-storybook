import{p as ft,Y as I,Z as mt,as as we,at as Ce,$ as u,e as yt,k as e,a3 as i,_ as y,a0 as v,a4 as p,l as D,a1 as g,a2 as b,a5 as vt}from"./store-T5UnPX9g.js";import{p as l}from"./props-C9IDeoNK.js";import{s as w}from"./render-DSWJi0hW.js";import{i as _}from"./if-BZcF3WLq.js";import{e as bt,i as ht}from"./each-D4Oo9sU_.js";import{h as Fe}from"./html-BUZpgOoR.js";import{s as C}from"./attributes-BfksUnjX.js";import{s as k}from"./class-Ds9EAFiq.js";import{g as F}from"./events-DOkqN8RV.js";import{a as xt}from"./input-CgAcMd-e.js";import{b as _t}from"./this-DiNLeJvR.js";import{p as kt}from"./event-modifiers-CKPgqgF5.js";import{i as It}from"./lifecycle-mHODSN2N.js";import{c as wt}from"./index-client-DCCy74BY.js";import{c as ee}from"./attributes-Jce5emvo.js";import{B as Ct}from"./Button-CzRhS5eJ.js";import"./hydration-C_mtSyjW.js";var Ft=v("<li><strong> </strong> </li>"),St=v('<ul class="file-preview"></ul>'),Bt=v('<p class="ds-error-text danger"> </p>'),Tt=v("<div> </div>"),Vt=v('<div role="region" aria-label="File upload dropzone"><input type="file" hidden> <!> <p class="ds-drop-hint"> </p> <!> <!></div>'),Dt=v("<div><!></div>"),Et=v("<label> </label>"),Lt=v("<div><!></div>"),zt=v("<div> </div>"),Gt=v('<div class="ds-input-wrapper"><div><!> <input> <!> <!></div> <!></div>');function ge(S,o){ft(o,!1);const R=p(),B=p(),fe=p(),te=p(),j=p(),K=p(),me=p();let q=l(o,"label",8,""),et=l(o,"ariaLabel",8,""),ae=l(o,"leadingIcon",8,"none"),ne=l(o,"trailingIcon",8,"none"),f=l(o,"state",8,"default"),Y=l(o,"helperText",8,""),L=l(o,"value",8,void 0),re=l(o,"type",8,"text"),se=l(o,"accept",8,""),ye=l(o,"maxSize",8,5*1024*1024),tt=l(o,"min",8,void 0),at=l(o,"max",8,void 0),ve=l(o,"multiple",8,!1),nt=l(o,"dropHint",8,"or drag and drop a file here"),rt=l(o,"onFocus",8,n=>{}),st=l(o,"onBlur",8,n=>{});const be=wt();let ie=p(),z=p(!1),Z=p(!1),oe=p(""),he=`input-${Math.random().toString(36).substring(2,15)}`,J=p([]),Q=p("");const it=n=>{i(z,!0),rt()(n)},ot=n=>{i(z,!1),st()(n)},lt=()=>{var n;return(n=e(ie))==null?void 0:n.click()},ct=n=>{var s,r;n.preventDefault(),i(Z,!1),(r=(s=n.dataTransfer)==null?void 0:s.files)!=null&&r.length&&_e(n.dataTransfer.files)},xe=n=>{var r,m;const s=(r=n.target)==null?void 0:r.files;if(re()==="file"&&s)_e(s);else{const x=(m=n.target)==null?void 0:m.value;e(R)?be("change",x):i(oe,x)}},_e=n=>{const s=[];i(Q,""),i(J,[]);for(const r of Array.from(n)){const m=!se()||new RegExp(se().replace("*",".*")).test(r.type),x=!ye()||r.size<=ye();m&&x?s.push(r):i(Q,`Invalid file: ${r.name} (${r.type}, ${Math.round(r.size/1024)} KB)`)}s.length&&(i(J,s),be("change",ve()?s:s[0]))},ke={user:'<i class="fa fa-user"></i>',check:'<i class="fa fa-check-circle"></i>',warning:'<i class="fa fa-exclamation-triangle"></i>'};I(()=>D(L()),()=>{i(R,L()!==void 0)}),I(()=>(e(R),D(L()),e(oe)),()=>{i(B,e(R)&&typeof L()=="string"?L():e(oe))}),I(()=>(D(f()),e(z),e(B)),()=>{i(fe,["ds-input",f()!=="default"?f():"",e(z)||e(B)?"ds-input--has-value":""].filter(Boolean).join(" "))}),I(()=>D(f()),()=>{i(te,["ds-helper-text",f()!=="default"?f():""].filter(Boolean).join(" "))}),I(()=>D(ae()),()=>{i(j,ae()!=="none")}),I(()=>D(ne()),()=>{i(K,ne()!=="none")}),I(()=>(e(j),e(K)),()=>{i(me,["ds-input-container",e(j)||e(K)?"has-icon":""].filter(Boolean).join(" "))}),mt(),It();var Ie=we(),dt=Ce(Ie);{var pt=n=>{var s=Vt(),r=g(s);_t(r,t=>i(ie,t),()=>e(ie));var m=b(r,2),x=vt(()=>q()||"Choose file");Ct(m,{type:"primary",get label(){return e(x)},$$events:{click:lt}});var c=b(m,2),X=g(c),$=b(c,2);{var le=t=>{var a=St();bt(a,5,()=>e(J),ht,(d,G)=>{var T=Ft(),V=g(T),ue=g(V),gt=b(V);y(()=>w(gt,` – ${(e(G).size/1024).toFixed(1)??""} KB – ${e(G).type??""}`)),y(()=>w(ue,e(G).name)),u(d,T)}),u(t,a)};_($,t=>{e(J).length&&t(le)})}var ce=b($,2);{var de=t=>{var a=Bt(),d=g(a);y(()=>w(d,e(Q))),u(t,a)},pe=t=>{var a=we(),d=Ce(a);{var G=T=>{var V=Tt(),ue=g(V);y(()=>{k(V,ee(e(te)),""),w(ue,Y())}),u(T,V)};_(d,T=>{Y()&&T(G)},!0)}u(t,a)};_(ce,t=>{e(Q)?t(de):t(pe,!1)})}y(()=>{k(s,`ds-input-wrapper dropzone ${f()} ${e(Z)?"drag-over":""}`),C(r,"accept",se()),r.multiple=ve(),w(X,nt())}),F("change",r,xe),F("dragover",s,kt(()=>i(Z,!0))),F("dragleave",s,()=>i(Z,!1)),F("drop",s,ct),u(n,s)},ut=n=>{var s=Gt(),r=g(s),m=g(r);{var x=t=>{var a=Dt(),d=g(a);Fe(d,()=>ke[ae()]),y(()=>k(a,`ds-input-icon leading ${f()}`)),u(t,a)};_(m,t=>{e(j)&&t(x)})}var c=b(m,2);C(c,"id",he);var X=b(c,2);{var $=t=>{var a=Et();C(a,"for",he);var d=g(a);y(()=>{k(a,`ds-input-label ${e(z)||e(B)?"floating":""} ${f()==="disabled"?"disabled":""}`),w(d,q())}),u(t,a)};_(X,t=>{q()&&t($)})}var le=b(X,2);{var ce=t=>{var a=Lt(),d=g(a);Fe(d,()=>ke[ne()]),y(()=>k(a,`ds-input-icon trailing ${f()}`)),u(t,a)};_(le,t=>{e(K)&&t(ce)})}var de=b(r,2);{var pe=t=>{var a=zt(),d=g(a);y(()=>{k(a,ee(e(te)),""),w(d,Y())}),u(t,a)};_(de,t=>{Y()&&t(pe)})}y(()=>{k(r,ee(e(me)),""),k(c,ee(e(fe)),""),C(c,"type",re()),C(c,"min",tt()),C(c,"max",at()),c.disabled=f()==="disabled",C(c,"aria-label",et()||q())}),F("focus",c,it),F("blur",c,ot),F("input",c,xe),xt(c,()=>e(B),t=>i(B,t)),u(n,s)};_(dt,n=>{re()==="file"?n(pt):n(ut,!1)})}u(S,Ie),yt()}ge.__docgen={version:3,name:"Input.svelte",data:[{name:"label",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"ariaLabel",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"leadingIcon",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"none"'},{name:"trailingIcon",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"none"'},{name:"state",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"default"'},{name:"helperText",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"value",visibility:"public",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"type",type:"string",text:"string"},{kind:"type",type:"array",text:"FileList"}],text:"string | FileList"},static:!1,readonly:!1},{name:"type",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"text"'},{name:"accept",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"maxSize",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"..."},{name:"min",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"undefined"},static:!1,readonly:!1},{name:"max",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"undefined"},static:!1,readonly:!1},{name:"multiple",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"dropHint",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"or drag and drop a file here"'},{name:"onFocus",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"(_event: any) => void"},static:!1,readonly:!1,defaultValue:"function"},{name:"onBlur",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"(_event: any) => void"},static:!1,readonly:!1,defaultValue:"function"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{visibility:"public",description:null,keywords:[],name:"change"}],slots:[],refs:[]};const $t={title:"Svelte Components/Input",component:ge,args:{state:"default"},parameters:{layout:"centered",docs:{description:{component:"**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases. <br /> **npm install**: mie-ds-input"}}},tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["text","number"],description:"Input type, e.g. text or number",table:{category:"General",defaultValue:{summary:"text"}}},min:{control:{type:"number"},description:"Minimum value (for number inputs)",table:{category:"General"}},max:{control:{type:"number"},description:"Maximum value (for number inputs)",table:{category:"General"}},label:{control:"text",description:"Label for the input",table:{category:"General"}},ariaLabel:{control:"text",description:"Aria label for accessibility",table:{category:"General"}},leadingIcon:{control:{type:"select",options:["none","user","check","warning"]},description:"Leading icon for the input",table:{category:"Icons"}},trailingIcon:{control:{type:"select",options:["none","user","check","warning"]},description:"Trailing icon for the input",table:{category:"Icons"}},state:{control:{type:"select"},options:["default","success","danger","disabled"],description:"State of the input",table:{category:"State",type:{summary:"string"},defaultValue:{summary:"default"}}},helperText:{control:"text",description:"Helper text below the input",table:{category:"General"}},value:{control:"text",description:"Controlled value of the input",table:{category:"Data"}},onFocus:{action:"focus",description:"Fires when the input is focused",table:{category:"Events"}},onBlur:{action:"blur",description:"Fires when the input loses focus",table:{category:"Events"}},onChange:{action:"change",description:"Fires when the input value changes (for controlled component)",table:{category:"Events"}}}},h=S=>({Component:ge,props:S,on:{change:S.onChange,focus:S.onFocus,blur:S.onBlur}}),U=h.bind({});U.args={label:"Username",state:"default"};const H=h.bind({});H.args={label:"Username",state:"default",value:"Initial Value"};const M=h.bind({});M.args={label:"Email",leadingIcon:"user"};const N=h.bind({});N.args={label:"Confirm",trailingIcon:"check",state:"success"};const W=h.bind({});W.args={label:"Password",helperText:"Minimum 8 characters"};const A=h.bind({});A.args={label:"Error Field",state:"danger",helperText:"This field has an error"};const O=h.bind({});O.args={label:"Disabled Field",state:"disabled",value:"This is disabled"};const P=h.bind({});P.args={label:"Full Example",leadingIcon:"user",trailingIcon:"check",state:"success",helperText:"Everything looks good!",value:"Validated Input"};const E=h.bind({});E.args={type:"file",label:"Upload File",state:"default",helperText:"Select a file or drag it here",accept:".png",multiple:!0,dropHint:"Drop PNGs here or click to upload"};E.storyName="File Upload with Preview & Validation";var Se,Be,Te;U.parameters={...U.parameters,docs:{...(Se=U.parameters)==null?void 0:Se.docs,source:{originalSource:`args => ({
  Component: Input,
  props: args,
  on: {
    change: args.onChange,
    focus: args.onFocus,
    blur: args.onBlur
  }
})`,...(Te=(Be=U.parameters)==null?void 0:Be.docs)==null?void 0:Te.source}}};var Ve,De,Ee;H.parameters={...H.parameters,docs:{...(Ve=H.parameters)==null?void 0:Ve.docs,source:{originalSource:`args => ({
  Component: Input,
  props: args,
  on: {
    change: args.onChange,
    focus: args.onFocus,
    blur: args.onBlur
  }
})`,...(Ee=(De=H.parameters)==null?void 0:De.docs)==null?void 0:Ee.source}}};var Le,ze,Ge;M.parameters={...M.parameters,docs:{...(Le=M.parameters)==null?void 0:Le.docs,source:{originalSource:`args => ({
  Component: Input,
  props: args,
  on: {
    change: args.onChange,
    focus: args.onFocus,
    blur: args.onBlur
  }
})`,...(Ge=(ze=M.parameters)==null?void 0:ze.docs)==null?void 0:Ge.source}}};var Ue,He,Me;N.parameters={...N.parameters,docs:{...(Ue=N.parameters)==null?void 0:Ue.docs,source:{originalSource:`args => ({
  Component: Input,
  props: args,
  on: {
    change: args.onChange,
    focus: args.onFocus,
    blur: args.onBlur
  }
})`,...(Me=(He=N.parameters)==null?void 0:He.docs)==null?void 0:Me.source}}};var Ne,We,Ae;W.parameters={...W.parameters,docs:{...(Ne=W.parameters)==null?void 0:Ne.docs,source:{originalSource:`args => ({
  Component: Input,
  props: args,
  on: {
    change: args.onChange,
    focus: args.onFocus,
    blur: args.onBlur
  }
})`,...(Ae=(We=W.parameters)==null?void 0:We.docs)==null?void 0:Ae.source}}};var Oe,Pe,Re;A.parameters={...A.parameters,docs:{...(Oe=A.parameters)==null?void 0:Oe.docs,source:{originalSource:`args => ({
  Component: Input,
  props: args,
  on: {
    change: args.onChange,
    focus: args.onFocus,
    blur: args.onBlur
  }
})`,...(Re=(Pe=A.parameters)==null?void 0:Pe.docs)==null?void 0:Re.source}}};var je,Ke,qe;O.parameters={...O.parameters,docs:{...(je=O.parameters)==null?void 0:je.docs,source:{originalSource:`args => ({
  Component: Input,
  props: args,
  on: {
    change: args.onChange,
    focus: args.onFocus,
    blur: args.onBlur
  }
})`,...(qe=(Ke=O.parameters)==null?void 0:Ke.docs)==null?void 0:qe.source}}};var Ye,Ze,Je;P.parameters={...P.parameters,docs:{...(Ye=P.parameters)==null?void 0:Ye.docs,source:{originalSource:`args => ({
  Component: Input,
  props: args,
  on: {
    change: args.onChange,
    focus: args.onFocus,
    blur: args.onBlur
  }
})`,...(Je=(Ze=P.parameters)==null?void 0:Ze.docs)==null?void 0:Je.source}}};var Qe,Xe,$e;E.parameters={...E.parameters,docs:{...(Qe=E.parameters)==null?void 0:Qe.docs,source:{originalSource:`args => ({
  Component: Input,
  props: args,
  on: {
    change: args.onChange,
    focus: args.onFocus,
    blur: args.onBlur
  }
})`,...($e=(Xe=E.parameters)==null?void 0:Xe.docs)==null?void 0:$e.source}}};const ea=["Uncontrolled","Controlled","WithLeadingIcon","WithTrailingIcon","WithHelperText","DangerState","DisabledState","AllOptions","FileUpload"];export{P as AllOptions,H as Controlled,A as DangerState,O as DisabledState,E as FileUpload,U as Uncontrolled,W as WithHelperText,M as WithLeadingIcon,N as WithTrailingIcon,ea as __namedExportsOrder,$t as default};
