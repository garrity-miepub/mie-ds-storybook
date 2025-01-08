import{Y as v,a8 as _,a9 as z,a1 as V}from"./props-D-11tLXy.js";import{h as $}from"./html-DH_r2Hsk.js";const o=({checked:e=!1,label:n="",size:a="default",hideLabel:t=!1})=>`
    <label class="${["checkbox-container",a!=="default"?a:""].join(" ")}">
      <input
        type="checkbox"
        ${e?"checked":""}
      />
      <span class="checkbox"></span>
      ${!t&&n?`<span class="label">${n}</span>`:""}
    </label>
    `;function r(e,n){let a=v(n,"content",8,"");var t=_(),h=z(t);$(h,a),V(e,t)}r.__docgen={version:3,name:"CheckboxContent.svelte",data:[{name:"content",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const N={title:"HTML Components/Checkbox",tags:["autodocs"],argTypes:{checked:{control:"boolean",description:"Whether the checkbox is checked",defaultValue:!1},label:{control:"text",description:"The label for the checkbox",defaultValue:""},size:{control:"select",options:["default","small","large"],description:"The size of the checkbox",defaultValue:"default"},hideLabel:{control:"boolean",description:"Hide the label for the checkbox",defaultValue:!1}},parameters:{docs:{source:{language:"html",transform:(e,n)=>o(n.args)}}}},s={render:e=>({Component:r,props:{content:o(e)}}),args:{label:"Checkbox Label"}},c={render:e=>({Component:r,props:{content:o(e)}}),args:{label:"Checked Checkbox",checked:!0}},l={render:e=>({Component:r,props:{content:o(e)}}),args:{label:"Small Checkbox",size:"small"}},p={render:e=>({Component:r,props:{content:o(e)}}),args:{label:"Large Checkbox",size:"large"}},d={render:e=>({Component:r,props:{content:o(e)}}),args:{hideLabel:!0}};var b,m,i;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createCheckboxHTML(args)
    }
  }),
  args: {
    label: 'Checkbox Label'
  }
}`,...(i=(m=s.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var u,C,k;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createCheckboxHTML(args)
    }
  }),
  args: {
    label: 'Checked Checkbox',
    checked: true
  }
}`,...(k=(C=c.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var g,x,f;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createCheckboxHTML(args)
    }
  }),
  args: {
    label: 'Small Checkbox',
    size: 'small'
  }
}`,...(f=(x=l.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var L,T,H;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createCheckboxHTML(args)
    }
  }),
  args: {
    label: 'Large Checkbox',
    size: 'large'
  }
}`,...(H=(T=p.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var M,y,S;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createCheckboxHTML(args)
    }
  }),
  args: {
    hideLabel: true
  }
}`,...(S=(y=d.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const j=["Default","Checked","SmallCheckbox","LargeCheckbox","NoLabel"];export{c as Checked,s as Default,p as LargeCheckbox,d as NoLabel,l as SmallCheckbox,j as __namedExportsOrder,N as default};
