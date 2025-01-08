import{p as A,a0 as d,e as B,a1 as g,k as n,Y as f,a2 as M,a3 as F,$ as _,a4 as i}from"./store-DKrw96s8.js";import{p as G}from"./props-WZpD2vyg.js";import{s as N}from"./render-Df-5AOqP.js";import{i as j}from"./if-D8r51YhU.js";import{e as H,i as J}from"./each-BEPMe8HD.js";import{s as K}from"./slot-BP_Qo1ZM.js";import{s as Q}from"./attributes-CmWRQlTN.js";import{g as w}from"./events-CYuOk1VT.js";import{i as U}from"./lifecycle-C2CMyhQS.js";import{a as Z,o as $}from"./index-client--l5ENrDD.js";import"./hydration-C_mtSyjW.js";import"./attributes-Jce5emvo.js";var ee=g('<button class="context-menu-item"> </button>'),te=g('<div class="context-menu"></div>'),oe=g('<div role="button" aria-haspopup="true" class="relative" tabindex="0"><!>Trigger <!></div>');function l(o,m){A(m,!1);let a=f(!1),v=f(0),x=f(0),I=G(m,"items",24,()=>[]);function L(e){e.preventDefault(),i(a,!0),i(v,e.clientX),i(x,e.clientY)}function y(){i(a,!1)}function C(e){n(a)&&!e.target.closest(".context-menu")&&y()}Z(()=>{window.removeEventListener("click",C)}),$(()=>{window.addEventListener("click",C)}),U();var p=oe(),h=M(p);K(h,m,"default",{},null);var V=F(h,2);{var X=e=>{var u=te();H(u,5,I,J,(q,k)=>{var c=ee(),z=M(c);_(()=>N(z,n(k))),w("click",c,()=>{console.log(`Clicked: ${n(k)}`),y()}),d(q,c)}),_(()=>Q(u,"style",`left: ${n(v)??""}px; top: ${n(x)??""}px;`)),d(e,u)};j(V,e=>{n(a)&&e(X)})}w("contextmenu",p,L),d(o,p),B()}l.__docgen={version:3,name:"ContextMenu.svelte",data:[{name:"items",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"any[]"},static:!1,readonly:!1,defaultValue:"[]"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};const ge={title:"Svelte Components/Context Menu",component:l,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases."}}},argTypes:{items:{control:"array",description:"Array of menu items (strings)",defaultValue:["Option 1","Option 2","Option 3"]}}},b=({items:o})=>({Component:l,props:{items:o},on:{}}),r=b.bind({});r.args={items:["Back","Forward","Reload"]};const s=b.bind({});s.args={items:["Cut","Copy","Paste","---","More Options"]};s.parameters={docs:{description:{story:"This is a simplified context menu. Implementing actual submenus would require more complex logic."}}};const t=b.bind({});t.args={items:["Download","Share","Delete"]};t.parameters={docs:{source:{code:`<ContextMenu items={['Download', 'Share', 'Delete']}>
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Right-Click Me
  </button>
</ContextMenu>`,language:"svelte",type:"code"}}};t.decorators=[o=>({Component:o})];t.render=o=>({Component:l,props:o,slots:{default:`<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Right-Click Me
              </button>`}});var S,D,O;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`({
  items
}) => ({
  Component: ContextMenu,
  props: {
    items
  },
  on: {}
})`,...(O=(D=r.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var T,E,R;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`({
  items
}) => ({
  Component: ContextMenu,
  props: {
    items
  },
  on: {}
})`,...(R=(E=s.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var W,P,Y;t.parameters={...t.parameters,docs:{...(W=t.parameters)==null?void 0:W.docs,source:{originalSource:`({
  items
}) => ({
  Component: ContextMenu,
  props: {
    items
  },
  on: {}
})`,...(Y=(P=t.parameters)==null?void 0:P.docs)==null?void 0:Y.source}}};const be=["Default","WithSubmenu","WithCustomTrigger"];export{r as Default,t as WithCustomTrigger,s as WithSubmenu,be as __namedExportsOrder,ge as default};