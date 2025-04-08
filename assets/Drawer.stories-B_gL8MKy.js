import{as as B,at as N,$ as k}from"./store-T5UnPX9g.js";import{p as R}from"./props-C9IDeoNK.js";import{h as E}from"./html-BUZpgOoR.js";const r=({isOpen:e=!1,title:n="",placement:l="bottom",showHeader:o=!0,showCloseButton:m=!0,triggerText:S="Open Drawer",content:V=""})=>{const P=`ds-drawer ds-drawer--${l}`;return`
        <div data-is-open="${e}">
            <button class="mie primary">${S}</button>
            ${e?`
                <div class="ds-drawer__overlay">
                    <div class="mie  primary ${P}" role="dialog" aria-modal="true" aria-labelledby="drawer-title">
                        ${o?`
                            <div class="ds-drawer__header">
                                ${n?`<h2 id="drawer-title" class="ds-drawer__title">${n}</h2>`:""}
                                ${m?`
                                    <button class="mie tertiary icon-only ds-drawer__close-button" aria-label="Close">
                                        <i class="fa fa-close" />
                                    </button>
                                `:""}
                            </div>
                        `:""}
                        <div class="mie ds-drawer__content">
                            ${V}
                        </div>
                    </div>
                </div>
            `:""}
        </div>
    `};function t(e,n){let l=R(n,"content",8,"");var o=B(),m=N(o);E(m,l),k(e,o)}t.__docgen={version:3,name:"DrawerContent.svelte",data:[{name:"content",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const j={title:"HTML Components/Drawer",tags:["autodocs"],argTypes:{isOpen:{control:"boolean",description:"Whether the drawer is open or not",defaultValue:!1},title:{control:"text",description:"Title of the drawer",defaultValue:""},placement:{control:"select",options:["bottom","right","left"],description:"Placement of the drawer",defaultValue:"bottom"},showHeader:{control:"boolean",description:"Toggle the visibility of the header",defaultValue:!0},showCloseButton:{control:"boolean",description:"Toggle the visibility of the close button",defaultValue:!0},triggerText:{control:"text",description:"Text for the trigger button",defaultValue:"Open Drawer"},content:{control:"text",description:"The content of the drawer",defaultValue:"This is the drawer content"}},parameters:{docs:{description:{component:"**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases."},source:{language:"html",transform:(e,n)=>r(n.args)}}}},a={render:e=>({Component:t,props:{content:r(e)}})},s={render:e=>({Component:t,props:{content:r(e)}}),args:{isOpen:!0}},c={render:e=>({Component:t,props:{content:r(e)}}),args:{placement:"right",isOpen:!0}},i={render:e=>({Component:t,props:{content:r(e)}}),args:{placement:"left",isOpen:!0}},p={render:e=>({Component:t,props:{content:r(e)}}),args:{showHeader:!1,isOpen:!0}},d={render:e=>({Component:t,props:{content:r(e)}}),args:{showCloseButton:!1,isOpen:!0}};var u,g,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createDrawerHTML(args)
    }
  })
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var w,h,C;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createDrawerHTML(args)
    }
  }),
  args: {
    isOpen: true
  }
}`,...(C=(h=s.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var T,H,b;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createDrawerHTML(args)
    }
  }),
  args: {
    placement: 'right',
    isOpen: true
  }
}`,...(b=(H=c.parameters)==null?void 0:H.docs)==null?void 0:b.source}}};var v,y,L;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createDrawerHTML(args)
    }
  }),
  args: {
    placement: 'left',
    isOpen: true
  }
}`,...(L=(y=i.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};var D,M,O;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createDrawerHTML(args)
    }
  }),
  args: {
    showHeader: false,
    isOpen: true
  }
}`,...(O=(M=p.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var _,$,x;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createDrawerHTML(args)
    }
  }),
  args: {
    showCloseButton: false,
    isOpen: true
  }
}`,...(x=($=d.parameters)==null?void 0:$.docs)==null?void 0:x.source}}};const q=["Default","OpenDrawer","RightPlacement","LeftPlacement","NoHeader","NoCloseButton"];export{a as Default,i as LeftPlacement,d as NoCloseButton,p as NoHeader,s as OpenDrawer,c as RightPlacement,q as __namedExportsOrder,j as default};
