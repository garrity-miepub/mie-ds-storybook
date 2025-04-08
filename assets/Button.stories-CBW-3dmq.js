import{a as D}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{B as d}from"./Button-CzRhS5eJ.js";import"./v4-CQkTLCs1.js";import"./store-T5UnPX9g.js";import"./props-C9IDeoNK.js";import"./render-DSWJi0hW.js";import"./events-DOkqN8RV.js";import"./if-BZcF3WLq.js";import"./attributes-BfksUnjX.js";import"./attributes-Jce5emvo.js";import"./class-Ds9EAFiq.js";import"./hydration-C_mtSyjW.js";import"./lifecycle-mHODSN2N.js";import"./index-client-DCCy74BY.js";const Y={title:"Svelte Components/Button",component:d,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases. <br /> **npm install**: mie-ds-button"}}},argTypes:{type:{control:{type:"select"},options:["primary","secondary","tertiary"]},label:{control:"text"},leadingIcon:{control:{type:"text"},description:'Font Awesome icon name (e.g. "star", "user", "envelope")'},trailingIcon:{control:{type:"text"},description:'Font Awesome icon name (e.g. "star", "user", "envelope")'},size:{control:{type:"select"},options:["default","small","large"]},customIcon:{control:{type:"select"},options:["default","icon-only"]},borderRadius:{control:{type:"select"},options:["default","rounded"]},fillMode:{control:{type:"select"},options:["solid","outlined"]},onClick:{action:"clicked",table:{category:"Events"},description:"Handler for when the button is clicked."}}},o=e=>({Component:d,props:e}),n=o.bind({});n.args={type:"primary",label:"Primary Button",onClick:e=>{console.log("Primary button clicked!",e),alert("Primary button was clicked!")}};const a=o.bind({});a.args={type:"secondary",label:"Secondary Button"};const s=o.bind({});s.args={type:"tertiary",label:"Tertiary Button"};const c=o.bind({});c.args={size:"small",label:"Small Button"};const l=o.bind({});l.args={size:"large",label:"Large Button"};const i=o.bind({});i.args={customIcon:"icon-only",leadingIcon:"envelope",label:"Icon Button"};const r=o.bind({});r.args={type:"primary",label:"Click Me",onClick:e=>{console.log("Clicked from Storybook handler!",e),alert("Button was clicked!")}};r.storyName="Click Handler Example";const t=e=>{let p=!1;return{Component:d,props:{...e,label:p?"Clicked":"Click Me",class:p?"disabled":"",disabled:!1},on:{change:()=>{p=!0}}}};t.args={type:"primary",label:"Click Me",onChange:D("change fired")};t.storyName="Change Event → Disable & Rename";var m,u,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  Component: Button,
  props: args
})`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,b,C;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
  Component: Button,
  props: args
})`,...(C=(b=a.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var k,B,S;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
  Component: Button,
  props: args
})`,...(S=(B=s.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var f,h,I;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
  Component: Button,
  props: args
})`,...(I=(h=c.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var v,E,x;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
  Component: Button,
  props: args
})`,...(x=(E=l.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};var P,w,M;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
  Component: Button,
  props: args
})`,...(M=(w=i.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var T,z,A;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
  Component: Button,
  props: args
})`,...(A=(z=r.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var H,O,R;t.parameters={...t.parameters,docs:{...(H=t.parameters)==null?void 0:H.docs,source:{originalSource:`args => {
  let clicked = false;
  return {
    Component: Button,
    props: {
      ...args,
      label: clicked ? 'Clicked' : 'Click Me',
      class: clicked ? 'disabled' : '',
      disabled: false
    },
    on: {
      change: () => {
        clicked = true;
      }
    }
  };
}`,...(R=(O=t.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const Z=["Primary","Secondary","Tertiary","Small","Large","IconOnlyEnvelope","WithClickHandler","ClickedAndDisabled"];export{t as ClickedAndDisabled,i as IconOnlyEnvelope,l as Large,n as Primary,a as Secondary,c as Small,s as Tertiary,r as WithClickHandler,Z as __namedExportsOrder,Y as default};
