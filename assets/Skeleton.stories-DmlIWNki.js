import{ad as m,Y as _,a0 as T,a1 as W,a2 as E,a3 as P}from"./props-D-11tLXy.js";import{s as z}from"./slot-BP_Qo1ZM.js";import{a as D}from"./attributes-0g2EBlF2.js";import"./events-ef7BX3Ie.js";import"./attributes-Jce5emvo.js";var L=E("<div><!></div>");function c(r,e){const d=m(e,["children","$$slots","$$events","$$legacy"]),i=m(d,["classNames"]);let v=_(e,"classNames",8,"");var l=L();let p;var C=P(l);z(C,e,"default",{},null),T(()=>p=D(l,p,{class:`animate-pulse bg-gray-200 rounded-md ${v()}`,...i})),W(r,l)}c.__docgen={version:3,name:"Skeleton.svelte",data:[{name:"classNames",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};const H={title:"Svelte Components/Skeleton",component:c,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases."}}},argTypes:{classNames:{control:"text",description:"Additional CSS classes to apply"},width:{control:"text",description:"Width of the skeleton"},height:{control:"text",description:"Height of the skeleton"},rounded:{control:"boolean",description:"Whether to apply rounded corners",defaultValue:!0}}},a=({classNames:r,width:e,height:d,rounded:i})=>({Component:c,props:{classNames:r+(i?" rounded-md":""),style:`width: ${e}; height: ${d};`}}),s=a.bind({});s.args={width:"100px",height:"20px"};const t=a.bind({});t.args={width:"50px",height:"50px",rounded:!1,classNames:"rounded-full"};const n=a.bind({});n.args={width:"200px",height:"1rem",rounded:!0};const o=a.bind({});o.args={width:"150px",height:"30px",classNames:"bg-blue-300"};var h,u,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`({
  classNames,
  width,
  height,
  rounded
}) => ({
  Component: Skeleton,
  props: {
    classNames: classNames + (rounded ? ' rounded-md' : ''),
    style: \`width: \${width}; height: \${height};\`
  }
})`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,y,w;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`({
  classNames,
  width,
  height,
  rounded
}) => ({
  Component: Skeleton,
  props: {
    classNames: classNames + (rounded ? ' rounded-md' : ''),
    style: \`width: \${width}; height: \${height};\`
  }
})`,...(w=(y=t.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var N,S,$;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`({
  classNames,
  width,
  height,
  rounded
}) => ({
  Component: Skeleton,
  props: {
    classNames: classNames + (rounded ? ' rounded-md' : ''),
    style: \`width: \${width}; height: \${height};\`
  }
})`,...($=(S=n.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};var x,k,b;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`({
  classNames,
  width,
  height,
  rounded
}) => ({
  Component: Skeleton,
  props: {
    classNames: classNames + (rounded ? ' rounded-md' : ''),
    style: \`width: \${width}; height: \${height};\`
  }
})`,...(b=(k=o.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};const I=["Default","Circle","TextLine","WithCustomClasses"];export{t as Circle,s as Default,n as TextLine,o as WithCustomClasses,I as __namedExportsOrder,H as default};
