import{ar as v,as as L,a0 as N}from"./store-DKrw96s8.js";import{p as H}from"./props-WZpD2vyg.js";import{h as $}from"./html-BjPEsh1c.js";const n=({classNames:e="",width:t=null,height:d=null,rounded:s=!0})=>{const p="animate-pulse bg-gray-200",w=s?"rounded-md":"",T=`width: ${t}; height: ${d};`;return`<div class="${`${p} ${w} ${e}`.trim()}" style="${T}">&nbsp;</div>`};function o(e,t){let d=H(t,"content",8,"");var s=v(),p=L(s);$(p,d),N(e,s)}o.__docgen={version:3,name:"SkeletonContent.svelte",data:[{name:"content",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const E={title:"HTML Components/Skeleton",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases."},source:{language:"html",transform:(e,t)=>n(t.args)}}},argTypes:{classNames:{control:"text",description:"Additional CSS classes to apply",defaultValue:""},width:{control:"text",description:"Width of the skeleton",defaultValue:null},height:{control:"text",description:"Height of the skeleton",defaultValue:null},rounded:{control:"boolean",description:"Whether to apply rounded corners",defaultValue:!0}}},r={render:e=>({Component:o,props:{content:n(e)}})},a={render:e=>({Component:o,props:{content:n(e)}}),args:{width:"50px",height:"50px",rounded:!1,classNames:"rounded-full"}},l={render:e=>({Component:o,props:{content:n(e)}}),args:{width:"200px",height:"1rem",rounded:!0}},c={render:e=>({Component:o,props:{content:n(e)}}),args:{width:"150px",height:"30px",classNames:"bg-blue-300"}};var i,m,u;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => ({
    Component: SkeletonContent,
    props: {
      content: createSkeletonHTML(args)
    }
  })
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,h,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => ({
    Component: SkeletonContent,
    props: {
      content: createSkeletonHTML(args)
    }
  }),
  args: {
    width: '50px',
    height: '50px',
    rounded: false,
    classNames: 'rounded-full'
  }
}`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var C,S,k;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => ({
    Component: SkeletonContent,
    props: {
      content: createSkeletonHTML(args)
    }
  }),
  args: {
    width: '200px',
    height: '1rem',
    rounded: true
  }
}`,...(k=(S=l.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var x,y,b;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => ({
    Component: SkeletonContent,
    props: {
      content: createSkeletonHTML(args)
    }
  }),
  args: {
    width: '150px',
    height: '30px',
    classNames: 'bg-blue-300'
  }
}`,...(b=(y=c.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const D=["Default","Circle","TextLine","WithCustomClasses"];export{a as Circle,r as Default,l as TextLine,c as WithCustomClasses,D as __namedExportsOrder,E as default};
