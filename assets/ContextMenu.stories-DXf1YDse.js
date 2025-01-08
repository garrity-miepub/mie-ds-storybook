import{p as A,Y as B,a1 as d,e as F,a2 as g,k as n,Z as f,a3 as M,a4 as G,a0 as _,a5 as i}from"./props-D-11tLXy.js";import{s as N}from"./render-B6mKzPQC.js";import{i as Z}from"./if-DG_9oCP6.js";import{e as j,i as H}from"./each-CLSpy_uj.js";import{s as J}from"./slot-BP_Qo1ZM.js";import{s as K}from"./attributes-0g2EBlF2.js";import{g as w}from"./events-ef7BX3Ie.js";import{i as Q}from"./lifecycle-Dq4UX-i8.js";import{a as U,o as $}from"./index-client-QvcM8E6w.js";import"./hydration-C_mtSyjW.js";import"./attributes-Jce5emvo.js";var ee=g('<button class="context-menu-item"> </button>'),te=g('<div class="context-menu"></div>'),oe=g('<div role="button" aria-haspopup="true" class="relative" tabindex="0"><!>Trigger <!></div>');function l(o,m){A(m,!1);let r=f(!1),v=f(0),x=f(0),I=B(m,"items",24,()=>[]);function L(e){e.preventDefault(),i(r,!0),i(v,e.clientX),i(x,e.clientY)}function y(){i(r,!1)}function C(e){n(r)&&!e.target.closest(".context-menu")&&y()}U(()=>{window.removeEventListener("click",C)}),$(()=>{window.addEventListener("click",C)}),Q();var p=oe(),h=M(p);J(h,m,"default",{},null);var V=G(h,2);{var X=e=>{var u=te();j(u,5,I,H,(q,k)=>{var c=ee(),z=M(c);_(()=>N(z,n(k))),w("click",c,()=>{console.log(`Clicked: ${n(k)}`),y()}),d(q,c)}),_(()=>K(u,"style",`left: ${n(v)??""}px; top: ${n(x)??""}px;`)),d(e,u)};Z(V,e=>{n(r)&&e(X)})}w("contextmenu",p,L),d(o,p),F()}l.__docgen={version:3,name:"ContextMenu.svelte",data:[{name:"items",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"any[]"},static:!1,readonly:!1,defaultValue:"[]"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};const fe={title:"Svelte Components/Context Menu",component:l,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases."}}},argTypes:{items:{control:"array",description:"Array of menu items (strings)",defaultValue:["Option 1","Option 2","Option 3"]}}},b=({items:o})=>({Component:l,props:{items:o},on:{}}),a=b.bind({});a.args={items:["Back","Forward","Reload"]};const s=b.bind({});s.args={items:["Cut","Copy","Paste","---","More Options"]};s.parameters={docs:{description:{story:"This is a simplified context menu. Implementing actual submenus would require more complex logic."}}};const t=b.bind({});t.args={items:["Download","Share","Delete"]};t.parameters={docs:{source:{code:`<ContextMenu items={['Download', 'Share', 'Delete']}>
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Right-Click Me
  </button>
</ContextMenu>`,language:"svelte",type:"code"}}};t.decorators=[o=>({Component:o})];t.render=o=>({Component:l,props:o,slots:{default:`<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Right-Click Me
              </button>`}});var S,D,O;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`({
  items
}) => ({
  Component: ContextMenu,
  props: {
    items
  },
  on: {}
})`,...(O=(D=a.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var T,E,R;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`({
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
})`,...(Y=(P=t.parameters)==null?void 0:P.docs)==null?void 0:Y.source}}};const ge=["Default","WithSubmenu","WithCustomTrigger"];export{a as Default,t as WithCustomTrigger,s as WithSubmenu,ge as __namedExportsOrder,fe as default};
