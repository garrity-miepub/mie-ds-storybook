import{ar as x,as as M,a0 as h}from"./store-DIQEHCOu.js";import{p as C}from"./props-DO17Jqv7.js";import{h as y}from"./html-Dgl4xvzF.js";const a=({items:e=[],isOpen:t=!1,menuX:o=0,menuY:n=0})=>`
        <div role="button" aria-haspopup="true" class="relative" tabindex="0" data-is-open="${t}" data-menu-x="${o}" data-menu-y="${n}">
        Trigger
        ${t?`
            <div class="context-menu" style="left: ${o}px; top: ${n}px;">
            ${e.map(c=>`<button class="context-menu-item" data-item="${c}">
                ${c}
                </button>`).join("")}
            </div>
          `:""}
        </div>
      `;function i(e,t){let o=C(t,"content",8,"");var n=x(),p=M(n);y(p,o),h(e,n)}i.__docgen={version:3,name:"ContextMenuContent.svelte",data:[{name:"content",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const $={title:"HTML Components/Context Menu",tags:["autodocs"],argTypes:{items:{control:"array",description:"Array of strings for context menu items",defaultValue:["Item 1","Item 2","Item 3"]},isOpen:{control:"boolean",description:"Whether the context menu is open",defaultValue:!1},menuX:{control:"number",description:"The x position of the menu",defaultValue:0},menuY:{control:"number",description:"The y position of the menu",defaultValue:0}},parameters:{docs:{description:{component:"**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases."},source:{language:"html",transform:(e,t)=>a(t.args)}}}},r={render:e=>({Component:i,props:{content:a(e)}})},s={render:e=>({Component:i,props:{content:a(e)}}),args:{isOpen:!0,menuX:100,menuY:100}};var u,m,l;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createContextMenuHTML(args)
    }
  })
}`,...(l=(m=r.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,f,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createContextMenuHTML(args)
    }
  }),
  args: {
    isOpen: true,
    menuX: 100,
    menuY: 100
  }
}`,...(g=(f=s.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const H=["Default","OpenMenu"];export{r as Default,s as OpenMenu,H as __namedExportsOrder,$ as default};
