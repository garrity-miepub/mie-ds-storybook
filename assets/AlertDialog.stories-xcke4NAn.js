import{Y as V,a8 as Y,a9 as P,a1 as z}from"./props-D-11tLXy.js";import{h as E}from"./html-DH_r2Hsk.js";function d(e,t){let c=V(t,"content",8,"");var a=Y(),p=P(a);E(p,c),z(e,a)}d.__docgen={version:3,name:"AlertDialogContent.svelte",data:[{name:"content",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const g=({title:e="Default Title",content:t="This is the default alert dialog content.",type:c="Default",icon:a=null})=>`
    <div class="ds-alert-dialog ${`ds-alert-dialog--${c.toLowerCase()}`}" role="dialog" aria-modal="true" aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
      <div class="ds-alert-dialog__header">
        <h2 id="alert-dialog-title">
           ${(u=>u?`<span class="ds-alert-dialog__icon" role="img" aria-label="Alert Icon"><i class="fas ${u}"></i></span>`:"")(a)}
          ${e}
        </h2>
      </div>
      <div id="alert-dialog-description">
        <p>${t}</p>
      </div>
    </div>
  `,L={title:"Html Components/Alert Dialog",component:d,tags:["autodocs"],parameters:{layout:"centered",docs:{source:{transform:(e,t)=>g(t.args)},description:{component:"**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases."}}},argTypes:{title:{control:"text",description:"Title of the alert dialog",defaultValue:"Default Title"},content:{control:"text",description:"Content of the alert dialog",defaultValue:"This is the default alert dialog content."},type:{control:{type:"select"},options:["Default","Informative","Warning","Danger","Success"],description:"Type/severity of the alert dialog",defaultValue:"Default"},icon:{control:"text",description:"Optional Font Awesome icon class to display next to the title",defaultValue:null}},render:e=>({Component:d,props:{content:g(e)}})},n={args:{title:"Default Alert",content:"This is a standard alert dialog.",type:"Default"}},r={args:{title:"Informative Alert",content:"This dialog provides some useful information.",type:"Informative",icon:"fa-info-circle"}},o={args:{title:"Warning Alert",content:"Be careful with this action.",type:"Warning",icon:"fa-exclamation-triangle"}},s={args:{title:"Danger Alert",content:"An error has occurred! Please take action.",type:"Danger",icon:"fa-exclamation-circle"}},i={args:{title:"Success Alert",content:"Your operation was completed successfully!",type:"Success",icon:"fa-check-circle"}},l={args:{title:"Interactive Alert",content:"You can customize the title and content here.",type:"Default",icon:"fa-cog"}};var m,f,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: 'Default Alert',
    content: 'This is a standard alert dialog.',
    type: 'Default'
  }
}`,...(h=(f=n.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var y,v,D;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Informative Alert',
    content: 'This dialog provides some useful information.',
    type: 'Informative',
    icon: 'fa-info-circle'
  }
}`,...(D=(v=r.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var A,I,S;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    title: 'Warning Alert',
    content: 'Be careful with this action.',
    type: 'Warning',
    icon: 'fa-exclamation-triangle'
  }
}`,...(S=(I=o.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var x,T,_;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Danger Alert',
    content: 'An error has occurred! Please take action.',
    type: 'Danger',
    icon: 'fa-exclamation-circle'
  }
}`,...(_=(T=s.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var k,w,b;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    title: 'Success Alert',
    content: 'Your operation was completed successfully!',
    type: 'Success',
    icon: 'fa-check-circle'
  }
}`,...(b=(w=i.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var C,W,$;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    title: 'Interactive Alert',
    content: 'You can customize the title and content here.',
    type: 'Default',
    icon: 'fa-cog'
  }
}`,...($=(W=l.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};const R=["Default","Informative","Warning","Danger","Success","Interactive"];export{s as Danger,n as Default,r as Informative,l as Interactive,i as Success,o as Warning,R as __namedExportsOrder,L as default};
