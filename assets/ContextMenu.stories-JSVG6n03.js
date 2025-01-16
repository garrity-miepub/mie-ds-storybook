import{p as z,a0 as u,e as A,a1 as b,k as s,Y as B,a2 as y,a3 as F,$ as G,a4 as h}from"./store-DIQEHCOu.js";import{p as N}from"./props-DO17Jqv7.js";import{s as Y}from"./render-CMzKQT-F.js";import{i as j}from"./if-DGZZ-pQQ.js";import{e as H,i as J}from"./each-5udpwlkd.js";import{s as K}from"./slot-BP_Qo1ZM.js";import{g as f}from"./events-DmGDAng9.js";import{i as Q}from"./lifecycle-9Sjl64q2.js";import{a as U,o as X}from"./index-client-BsC9Mbj1.js";import"./hydration-C_mtSyjW.js";var Z=b('<div role="option" tabindex="-1"> </div>'),$=b('<div class="ds-menu-basic" role="listbox" tabindex="-1"></div>'),ee=b('<div role="button" aria-haspopup="true" class="ds-context-menu" tabindex="0"><!>Right Click Trigger <!></div>');function l(t,m){z(m,!1);let a=B(!1),T=N(m,"items",24,()=>[]);function W(o){o.preventDefault(),h(a,!0)}function p(){h(a,!1)}function v(o){s(a)&&!o.target.closest(".combobox-menu")&&p()}U(()=>{window.removeEventListener("click",v)}),X(()=>{window.addEventListener("click",v)}),Q();var c=ee(),x=y(c);K(x,m,"default",{},null);var P=F(x,2);{var I=o=>{var C=$();H(C,5,T,J,(L,d)=>{var i=Z(),V=y(i);G(()=>Y(V,s(d))),f("click",i,()=>{console.log(`Clicked: ${s(d)}`),p()}),f("keydown",i,q=>{q.key==="Enter"&&(console.log(`Clicked: ${s(d)}`),p())}),u(L,i)}),u(o,C)};j(P,o=>{s(a)&&o(I)})}f("contextmenu",c,W),u(t,c),A()}l.__docgen={version:3,name:"ContextMenu.svelte",data:[{name:"items",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"any[]"},static:!1,readonly:!1,defaultValue:"[]"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};const ce={title:"Svelte Components/Context Menu",component:l,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases. <br /> **npm install**: mie-ds-context-menu"}}},argTypes:{items:{control:"array",description:"Array of menu items (strings)",defaultValue:["Option 1","Option 2","Option 3"]}}},g=({items:t})=>({Component:l,props:{items:t},on:{}}),r=g.bind({});r.args={items:["Back","Forward","Reload"]};const n=g.bind({});n.args={items:["Cut","Copy","Paste","---","More Options"]};n.parameters={docs:{description:{story:"This is a simplified context menu. Implementing actual submenus would require more complex logic."}}};const e=g.bind({});e.args={items:["Download","Share","Delete"]};e.parameters={docs:{source:{code:`<ContextMenu items={['Download', 'Share', 'Delete']}>
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Right-Click Me
  </button>
</ContextMenu>`,language:"svelte",type:"code"}}};e.decorators=[t=>({Component:t})];e.render=t=>({Component:l,props:t,slots:{default:`<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Right-Click Me
              </button>`}});var k,M,w;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`({
  items
}) => ({
  Component: ContextMenu,
  props: {
    items
  },
  on: {}
})`,...(w=(M=r.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};var _,S,D;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`({
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
})`,...(R=(E=e.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};const de=["Default","WithSubmenu","WithCustomTrigger"];export{r as Default,e as WithCustomTrigger,n as WithSubmenu,de as __namedExportsOrder,ce as default};
