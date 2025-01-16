import{ar as X,as as Y,a0 as Z}from"./store-DIQEHCOu.js";import{p as ee}from"./props-DO17Jqv7.js";import{h as ne}from"./html-Dgl4xvzF.js";const n=({filled:e=!0,type:r="default",leadingIcon:t=null,trailingIcon:o=null,label:b="Badge"})=>{const K=`ds-badge--${r}`,Q=e?"ds-badge--filled":"ds-badge--outlined",y=U=>`<i class="fas ${U}"></i>`;return`
      <span class="ds-badge ${K} ${Q}">${t?`<span class="ds-badge__icon ds-badge__icon--leading" role="img" aria-label="Leading Icon">${y(t)}</span>`:""}${b} ${o?`<span class="ds-badge__icon ds-badge__icon--trailing" role="img" aria-label="Trailing Icon">${y(o)}</span>`:""}</span>
    `};function a(e,r){let t=ee(r,"content",8,"");var o=X(),b=Y(o);ne(b,t),Z(e,o)}a.__docgen={version:3,name:"BadgeContent.svelte",data:[{name:"content",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const te={title:"HTML Components/Badge",tags:["autodocs"],argTypes:{filled:{control:"boolean",description:"Whether the badge should be filled or outlined",defaultValue:!0},type:{control:"select",options:["default","primary","secondary","success","warning","danger"],description:"Type of the badge",defaultValue:"default"},leadingIcon:{control:"select",options:[null,"fa-user","fa-bell","fa-envelope"],description:"Font Awesome icon class for the leading icon",defaultValue:null},trailingIcon:{control:"select",options:[null,"fa-check","fa-times","fa-arrow-right"],description:"Font Awesome icon class for the trailing icon",defaultValue:null},label:{control:"text",description:"Text content of the badge",defaultValue:"Badge"}},parameters:{docs:{description:{component:"**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases."},source:{language:"html",transform:(e,r)=>n(r.args)}}}},s={render:e=>({Component:a,props:{content:n(e)}}),args:{label:"Default Badge"}},c={render:e=>({Component:a,props:{content:n(e)}}),args:{type:"primary",label:"Primary Badge"}},d={render:e=>({Component:a,props:{content:n(e)}}),args:{type:"secondary",label:"Secondary Badge"}},l={render:e=>({Component:a,props:{content:n(e)}}),args:{type:"success",label:"Success Badge"}},p={render:e=>({Component:a,props:{content:n(e)}}),args:{type:"warning",label:"Warning Badge"}},g={render:e=>({Component:a,props:{content:n(e)}}),args:{type:"danger",label:"Danger Badge"}},i={render:e=>({Component:a,props:{content:n(e)}}),args:{filled:!1,label:"Outlined Badge"}},m={render:e=>({Component:a,props:{content:n(e)}}),args:{leadingIcon:"fa-user",label:"Leading Icon"}},u={render:e=>({Component:a,props:{content:n(e)}}),args:{trailingIcon:"fa-arrow-right",label:"Trailing Icon"}},f={render:e=>({Component:a,props:{content:n(e)}}),args:{leadingIcon:"fa-bell",trailingIcon:"fa-check",label:"Both Icons"}};var B,C,T;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createBadgeHTML(args)
    }
  }),
  args: {
    label: 'Default Badge'
  }
}`,...(T=(C=s.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var h,L,I;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createBadgeHTML(args)
    }
  }),
  args: {
    type: 'primary',
    label: 'Primary Badge'
  }
}`,...(I=(L=c.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var H,M,S;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createBadgeHTML(args)
    }
  }),
  args: {
    type: 'secondary',
    label: 'Secondary Badge'
  }
}`,...(S=(M=d.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var _,w,$;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createBadgeHTML(args)
    }
  }),
  args: {
    type: 'success',
    label: 'Success Badge'
  }
}`,...($=(w=l.parameters)==null?void 0:w.docs)==null?void 0:$.source}}};var D,k,v;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createBadgeHTML(args)
    }
  }),
  args: {
    type: 'warning',
    label: 'Warning Badge'
  }
}`,...(v=(k=p.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var W,x,O;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createBadgeHTML(args)
    }
  }),
  args: {
    type: 'danger',
    label: 'Danger Badge'
  }
}`,...(O=(x=g.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};var P,V,E;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createBadgeHTML(args)
    }
  }),
  args: {
    filled: false,
    label: 'Outlined Badge'
  }
}`,...(E=(V=i.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var A,F,R;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createBadgeHTML(args)
    }
  }),
  args: {
    leadingIcon: 'fa-user',
    label: 'Leading Icon'
  }
}`,...(R=(F=m.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var z,G,N;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createBadgeHTML(args)
    }
  }),
  args: {
    trailingIcon: 'fa-arrow-right',
    label: 'Trailing Icon'
  }
}`,...(N=(G=u.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var j,q,J;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createBadgeHTML(args)
    }
  }),
  args: {
    leadingIcon: 'fa-bell',
    trailingIcon: 'fa-check',
    label: 'Both Icons'
  }
}`,...(J=(q=f.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};const se=["Default","Primary","Secondary","Success","Warning","Danger","Outlined","LeadingIcon","TrailingIcon","WithBothIcons"];export{g as Danger,s as Default,m as LeadingIcon,i as Outlined,c as Primary,d as Secondary,l as Success,u as TrailingIcon,p as Warning,f as WithBothIcons,se as __namedExportsOrder,te as default};
