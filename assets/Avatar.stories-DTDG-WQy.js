import{ar as N,as as j,a0 as q}from"./store-DIQEHCOu.js";import{p as B}from"./props-DO17Jqv7.js";import{h as D}from"./html-Dgl4xvzF.js";const t=({letter:e="A",image:n=null,size:d="medium"})=>`
      <div class="ds-avatar ${`ds-avatar--${d}`}">
        ${n?`<img src="${n}" alt="Avatar" />`:`<span>${e}</span>`}
      </div>
    `;function r(e,n){let d=B(n,"content",8,"");var u=N(),G=j(u);D(G,d),q(e,u)}r.__docgen={version:3,name:"AvatarContent.svelte",data:[{name:"content",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const X={title:"HTML Components/Avatar",tags:["autodocs"],argTypes:{letter:{control:"text",description:"Letter to display when no image is provided",defaultValue:"A"},image:{control:"text",description:"URL of the image to display (overrides letter)",defaultValue:null},size:{control:{type:"select"},options:["small","medium","large"],description:"Size of the avatar",defaultValue:"medium"}},render:e=>({Component:r,props:{content:t(e)}}),parameters:{docs:{description:{component:"**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases."},source:{transform:(e,n)=>t(n.args)}}}},a={render:e=>({Component:r,props:{content:t(e)}}),args:{letter:"J"}},o={render:e=>({Component:r,props:{content:t(e)}}),args:{image:"https://www.w3schools.com/howto/img_avatar.png"}},s={render:e=>({Component:r,props:{content:t(e)}}),args:{size:"small",letter:"S"}},m={render:e=>({Component:r,props:{content:t(e)}}),args:{size:"medium",letter:"M"}},p={render:e=>({Component:r,props:{content:t(e)}}),args:{size:"large",letter:"L"}},c={render:e=>({Component:r,props:{content:t(e)}}),args:{size:"small",image:"https://www.w3schools.com/howto/img_avatar.png"}},i={render:e=>({Component:r,props:{content:t(e)}}),args:{size:"medium",image:"https://www.w3schools.com/howto/img_avatar.png"}},g={render:e=>({Component:r,props:{content:t(e)}}),args:{size:"large",image:"https://www.w3schools.com/howto/img_avatar.png"}},l={render:e=>({Component:r,props:{content:t(e)}}),args:{letter:"U",image:null,size:"medium"}};var h,w,v;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createAvatarHTML(args)
    }
  }),
  args: {
    letter: 'J'
  }
}`,...(v=(w=a.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var L,C,M;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createAvatarHTML(args)
    }
  }),
  args: {
    image: 'https://www.w3schools.com/howto/img_avatar.png'
  }
}`,...(M=(C=o.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var T,f,H;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createAvatarHTML(args)
    }
  }),
  args: {
    size: 'small',
    letter: 'S'
  }
}`,...(H=(f=s.parameters)==null?void 0:f.docs)==null?void 0:H.source}}};var S,z,A;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createAvatarHTML(args)
    }
  }),
  args: {
    size: 'medium',
    letter: 'M'
  }
}`,...(A=(z=m.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var W,_,y;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createAvatarHTML(args)
    }
  }),
  args: {
    size: 'large',
    letter: 'L'
  }
}`,...(y=(_=p.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var I,x,$;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createAvatarHTML(args)
    }
  }),
  args: {
    size: 'small',
    image: 'https://www.w3schools.com/howto/img_avatar.png'
  }
}`,...($=(x=c.parameters)==null?void 0:x.docs)==null?void 0:$.source}}};var k,V,E;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createAvatarHTML(args)
    }
  }),
  args: {
    size: 'medium',
    image: 'https://www.w3schools.com/howto/img_avatar.png'
  }
}`,...(E=(V=i.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var R,U,b;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createAvatarHTML(args)
    }
  }),
  args: {
    size: 'large',
    image: 'https://www.w3schools.com/howto/img_avatar.png'
  }
}`,...(b=(U=g.parameters)==null?void 0:U.docs)==null?void 0:b.source}}};var J,O,P;l.parameters={...l.parameters,docs:{...(J=l.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createAvatarHTML(args)
    }
  }),
  args: {
    letter: 'U',
    image: null,
    size: 'medium'
  }
}`,...(P=(O=l.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};const Y=["WithLetter","WithImage","SmallWithLetter","MediumWithLetter","LargeWithLetter","SmallWithImage","MediumWithImage","LargeWithImage","Interactive"];export{l as Interactive,g as LargeWithImage,p as LargeWithLetter,i as MediumWithImage,m as MediumWithLetter,c as SmallWithImage,s as SmallWithLetter,o as WithImage,a as WithLetter,Y as __namedExportsOrder,X as default};
