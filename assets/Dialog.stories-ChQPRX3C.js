import{ar as D,as as L,a0 as M}from"./store-DIQEHCOu.js";import{p as x}from"./props-DO17Jqv7.js";import{h as w}from"./html-Dgl4xvzF.js";const t=({isOpen:e=!1,title:o="",content:d="",triggerText:r="Open Dialog",showHeader:c=!0,showFooter:y=!0})=>`
    <div data-is-open="${e}" >
        ${e?`
        <div class="ds-dialog__overlay">
            <div class="ds-dialog__content" role="dialog" aria-modal="true" aria-labelledby="dialog-title" aria-describedby="dialog-description">
                ${c?`
                    <div class="ds-dialog__header">
                        ${o?`<h2 id="dialog-title" class="ds-dialog__title">${o}</h2>`:""}
                    </div>
                `:""}
                <div id="dialog-description" class="ds-dialog__body">
                    ${d}
                </div>
                ${y?`
                    <div class="ds-dialog__footer">
                        <button >Close</button>
                    </div>
                `:""}
            </div>
        </div>
            `:""}
        <button >${r}</button>
    </div>
    `;function n(e,o){let d=x(o,"content",8,"");var r=D(),c=L(r);w(c,d),M(e,r)}n.__docgen={version:3,name:"DialogContent.svelte",data:[{name:"content",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const F={title:"HTML Components/Dialog",tags:["autodocs"],argTypes:{isOpen:{control:"boolean",description:"Whether the dialog is open",defaultValue:!1},title:{control:"text",description:"Title of the dialog",defaultValue:""},content:{control:"text",description:"Content of the dialog",defaultValue:"This is a dialog"},triggerText:{control:"text",description:"The text for the trigger button",defaultValue:"Open Dialog"},showHeader:{control:"boolean",description:"Toggle the visibility of the header",defaultValue:!0},showFooter:{control:"boolean",description:"Toggle the visibility of the footer",defaultValue:!0}},parameters:{docs:{description:{component:"**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases."},source:{language:"html",transform:(e,o)=>t(o.args)}}}},a={render:e=>({Component:n,props:{content:t(e)}})},s={render:e=>({Component:n,props:{content:t(e)}}),args:{isOpen:!0}},i={render:e=>({Component:n,props:{content:t(e)}}),args:{showHeader:!1}},l={render:e=>({Component:n,props:{content:t(e)}}),args:{showFooter:!1}};var p,g,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createDialogHTML(args)
    }
  })
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var m,f,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createDialogHTML(args)
    }
  }),
  args: {
    isOpen: true
  }
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var v,T,_;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createDialogHTML(args)
    }
  }),
  args: {
    showHeader: false
  }
}`,...(_=(T=i.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var b,C,H;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createDialogHTML(args)
    }
  }),
  args: {
    showFooter: false
  }
}`,...(H=(C=l.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};const N=["Default","OpenDialog","NoHeader","NoFooter"];export{a as Default,l as NoFooter,i as NoHeader,s as OpenDialog,N as __namedExportsOrder,F as default};
