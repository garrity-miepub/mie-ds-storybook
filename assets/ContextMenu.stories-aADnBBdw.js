import{p as z,$ as u,e as A,a0 as b,k as s,a4 as B,a1 as y,a2 as F,_ as G,a3 as h}from"./store-T5UnPX9g.js";import{p as N}from"./props-C9IDeoNK.js";import{s as j}from"./render-DSWJi0hW.js";import{i as H}from"./if-BZcF3WLq.js";import{e as J,i as K}from"./each-D4Oo9sU_.js";import{s as Q}from"./slot-BP_Qo1ZM.js";import{g as f}from"./events-DOkqN8RV.js";import{i as U}from"./lifecycle-mHODSN2N.js";import{a as X,o as Y}from"./index-client-DCCy74BY.js";import"./hydration-C_mtSyjW.js";var Z=b('<div role="option" aria-selected="false" tabindex="-1"> </div>'),$=b('<div class="ds-menu-basic" role="listbox" tabindex="-1"></div>'),ee=b('<div role="button" aria-haspopup="true" class="ds-context-menu" tabindex="0"><!>Right Click Trigger <!></div>');function l(t,m){z(m,!1);let r=B(!1),T=N(m,"items",24,()=>[]);function W(o){o.preventDefault(),h(r,!0)}function p(){h(r,!1)}function v(o){s(r)&&!o.target.closest(".combobox-menu")&&p()}X(()=>{window.removeEventListener("click",v)}),Y(()=>{window.addEventListener("click",v)}),U();var c=ee(),x=y(c);Q(x,m,"default",{},null);var P=F(x,2);{var I=o=>{var C=$();J(C,5,T,K,(L,d)=>{var i=Z(),V=y(i);G(()=>j(V,s(d))),f("click",i,()=>{console.log(`Clicked: ${s(d)}`),p()}),f("keydown",i,q=>{q.key==="Enter"&&(console.log(`Clicked: ${s(d)}`),p())}),u(L,i)}),u(o,C)};H(P,o=>{s(r)&&o(I)})}f("contextmenu",c,W),u(t,c),A()}l.__docgen={version:3,name:"ContextMenu.svelte",data:[{name:"items",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"any[]"},static:!1,readonly:!1,defaultValue:"[]"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};const ce={title:"Svelte Components/Context Menu",component:l,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases. <br /> **npm install**: mie-ds-context-menu"}}},argTypes:{items:{control:"array",description:"Array of menu items (strings)",defaultValue:["Option 1","Option 2","Option 3"]}}},g=({items:t})=>({Component:l,props:{items:t},on:{}}),a=g.bind({});a.args={items:["Back","Forward","Reload"]};const n=g.bind({});n.args={items:["Cut","Copy","Paste","---","More Options"]};n.parameters={docs:{description:{story:"This is a simplified context menu. Implementing actual submenus would require more complex logic."}}};const e=g.bind({});e.args={items:["Download","Share","Delete"]};e.parameters={docs:{source:{code:`<ContextMenu items={['Download', 'Share', 'Delete']}>
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Right-Click Me
  </button>
</ContextMenu>`,language:"svelte",type:"code"}}};e.decorators=[t=>({Component:t})];e.render=t=>({Component:l,props:t,slots:{default:`<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Right-Click Me
              </button>`}});var k,M,_;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`({
  items
}) => ({
  Component: ContextMenu,
  props: {
    items
  },
  on: {}
})`,...(_=(M=a.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var w,S,D;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`({
  items
}) => ({
  Component: ContextMenu,
  props: {
    items
  },
  on: {}
})`,...(D=(S=n.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var O,E,R;e.parameters={...e.parameters,docs:{...(O=e.parameters)==null?void 0:O.docs,source:{originalSource:`({
  items
}) => ({
  Component: ContextMenu,
  props: {
    items
  },
  on: {}
})`,...(R=(E=e.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};const de=["Default","WithSubmenu","WithCustomTrigger"];export{a as Default,e as WithCustomTrigger,n as WithSubmenu,de as __namedExportsOrder,ce as default};
