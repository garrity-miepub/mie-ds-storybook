import{p as A,Z as b,_ as G,$ as H,a0 as I,e as Y,a1 as Z,a2 as j,a4 as N,l as o,k as x,Y as _}from"./store-DIQEHCOu.js";import{l as S,p as l}from"./props-DO17Jqv7.js";import{s as q}from"./slot-BP_Qo1ZM.js";import{a as B}from"./attributes-DmLnXfCe.js";import"./events-DmGDAng9.js";import"./attributes-Jce5emvo.js";var F=Z("<div><!></div>");function u(r,e){const d=S(e,["children","$$slots","$$events","$$legacy"]),c=S(d,["classNames","width","height","rounded"]);A(e,!1);const m=_(),f=_();let p=l(e,"classNames",8,""),g=l(e,"width",8,null),y=l(e,"height",8,null),w=l(e,"rounded",8,!1);b(()=>(o(w()),o(p())),()=>{N(m,w()?`${p()} rounded-full`:p())}),b(()=>(o(g()),o(y())),()=>{N(f,`width: ${g()}; height: ${y()};`)}),G();var h=F();let k;var R=j(h);q(R,e,"default",{},null),H(()=>k=B(h,k,{class:`ds-skeleton animate-pulse ${x(m)}`,style:x(f),...c})),I(r,h),Y()}u.__docgen={version:3,name:"Skeleton.svelte",data:[{name:"classNames",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"width",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"null"},static:!1,readonly:!1,defaultValue:"null"},{name:"height",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"null"},static:!1,readonly:!1,defaultValue:"null"},{name:"rounded",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};const ee={title:"Svelte Components/Skeleton",component:u,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases. <br /> **npm install**: mie-ds-skeleton"}}},argTypes:{classNames:{control:"text",description:"Additional CSS classes to apply"},width:{control:"text",description:"Width of the skeleton"},height:{control:"text",description:"Height of the skeleton"},rounded:{control:"boolean",description:"Whether to apply rounded corners",defaultValue:!0}}},i=({classNames:r,width:e,height:d,rounded:c})=>({Component:u,props:{classNames:r+(c?" rounded-full":""),style:`width: ${e}; height: ${d};`}}),t=i.bind({});t.args={width:"100px",height:"20px"};const s=i.bind({});s.args={width:"50px",height:"50px",rounded:!1,classNames:"rounded-full"};const a=i.bind({});a.args={width:"200px",height:"1rem",rounded:!1};const n=i.bind({});n.args={width:"150px",height:"30px",classNames:"bg-blue-300"};var v,C,$;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`({
  classNames,
  width,
  height,
  rounded
}) => ({
  Component: Skeleton,
  props: {
    classNames: classNames + (rounded ? ' rounded-full' : ''),
    style: \`width: \${width}; height: \${height};\`
  }
})`,...($=(C=t.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};var V,T,W;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`({
  classNames,
  width,
  height,
  rounded
}) => ({
  Component: Skeleton,
  props: {
    classNames: classNames + (rounded ? ' rounded-full' : ''),
    style: \`width: \${width}; height: \${height};\`
  }
})`,...(W=(T=s.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var E,P,z;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`({
  classNames,
  width,
  height,
  rounded
}) => ({
  Component: Skeleton,
  props: {
    classNames: classNames + (rounded ? ' rounded-full' : ''),
    style: \`width: \${width}; height: \${height};\`
  }
})`,...(z=(P=a.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var D,L,O;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`({
  classNames,
  width,
  height,
  rounded
}) => ({
  Component: Skeleton,
  props: {
    classNames: classNames + (rounded ? ' rounded-full' : ''),
    style: \`width: \${width}; height: \${height};\`
  }
})`,...(O=(L=n.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};const te=["Default","Circle","TextLine","WithCustomClasses"];export{s as Circle,t as Default,a as TextLine,n as WithCustomClasses,te as __namedExportsOrder,ee as default};
