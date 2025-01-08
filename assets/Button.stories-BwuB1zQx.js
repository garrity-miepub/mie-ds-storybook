import{Y as I,a8 as D,a9 as j,a1 as O}from"./props-D-11tLXy.js";import{h as R}from"./html-DH_r2Hsk.js";function t(e,o){let s=I(o,"content",8,"");var a=D(),l=j(a);R(l,s),O(e,a)}t.__docgen={version:3,name:"ButtonContent.svelte",data:[{name:"content",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const n=({type:e="primary",label:o,leadingIcon:s="none",trailingIcon:a="none",size:l="default",customIcon:m="default",...P})=>{const r=["button"];e==="primary"?r.push("primary"):e==="secondary"?r.push("secondary"):e==="tertiary"&&r.push("tertiary"),l==="small"?r.push("small"):l==="large"&&r.push("large"),m==="icon-only"&&r.push("icon-only");const g=y=>{switch(y){case"envelope":return'<i class="fas fa-envelope"></i>';case"close":return'<i class="fas fa-times"></i>';case"user":return'<i class="fas fa-user"></i>';case"lock":return'<i class="fas fa-lock"></i>';case"chevronDown":return'<i class="fas fa-chevron-down"></i>';case"chevronRight":return'<i class="fas fa-chevron-right"></i>';case"download":return'<i class="fas fa-download"></i>';default:return""}},f=()=>m==="icon-only"?o||"Icon button":null;return`<button type="button" class="${r.join(" ")}" aria-label="${f()||""}" title="${f()||""}" ${Object.entries(P).map(([y,_])=>`${y}="${_}"`).join(" ")}>
    ${s!=="none"?`<span class="icon leading-icon">${g(s)}</span>`:""}${m!=="icon-only"?`<label>${o}</label>`:""}${a!=="none"?`<span class="icon trailing-icon">${g(a)}</span>`:""}
</button>`},E={title:"Html Components/Button",component:t,tags:["autodocs"],argTypes:{type:{control:"select",options:["primary","secondary","tertiary"]},size:{control:"select",options:["default","small","large"]},label:{control:"text"},leadingIcon:{control:"select",options:["none","envelope","lock","user","close"]},trailingIcon:{control:"select",options:["none","chevronDown","chevronRight","download"]},customIcon:{control:"select",options:["default","icon-only"]},content:{table:{disable:!0}}},render:e=>({Component:t,props:{content:n(e)}}),parameters:{docs:{source:{transform:(e,o)=>n(o.args)}}}},i={render:e=>({Component:t,props:{content:n(e)}}),args:{type:"primary",size:"default",label:"Primary Button"}},c={render:e=>({Component:t,props:{content:n(e)}}),args:{type:"secondary",label:"Secondary Button"}},p={render:e=>({Component:t,props:{content:n(e)}}),args:{type:"tertiary",label:"Tertiary Button"}},u={render:e=>({Component:t,props:{content:n(e)}}),args:{type:"primary",label:"Button",leadingIcon:"envelope"}},d={render:e=>({Component:t,props:{content:`
        <div style="display: inline-flex; align-items: center; gap: 20px;">
          ${n({...e,size:"small",label:`Small ${e.label}`})}
          ${n({...e,size:"default",label:`Default ${e.label}`})}
          ${n({...e,size:"large",label:`Large ${e.label}`})}
        </div>
      `}}),args:{type:"primary",label:"Button"}};var b,$,h;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: Button(args)
    }
  }),
  args: {
    type: 'primary',
    size: 'default',
    label: 'Primary Button'
  }
}`,...(h=($=i.parameters)==null?void 0:$.docs)==null?void 0:h.source}}};var B,v,C;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: Button(args)
    }
  }),
  args: {
    type: 'secondary',
    label: 'Secondary Button'
  }
}`,...(C=(v=c.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var S,z,L;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: Button(args)
    }
  }),
  args: {
    type: 'tertiary',
    label: 'Tertiary Button'
  }
}`,...(L=(z=p.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var T,w,x;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: Button(args)
    }
  }),
  args: {
    type: 'primary',
    label: 'Button',
    leadingIcon: 'envelope'
  }
}`,...(x=(w=u.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var k,M,H;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: \`
        <div style="display: inline-flex; align-items: center; gap: 20px;">
          \${Button({
        ...args,
        size: 'small',
        label: \`Small \${args.label}\`
      })}
          \${Button({
        ...args,
        size: 'default',
        label: \`Default \${args.label}\`
      })}
          \${Button({
        ...args,
        size: 'large',
        label: \`Large \${args.label}\`
      })}
        </div>
      \`
    }
  }),
  args: {
    type: 'primary',
    label: 'Button'
  }
}`,...(H=(M=d.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};const V=["Primary","Secondary","Tertiary","PrimaryWithLeadingIcon","MultipleSizes"];export{d as MultipleSizes,i as Primary,u as PrimaryWithLeadingIcon,c as Secondary,p as Tertiary,V as __namedExportsOrder,E as default};
