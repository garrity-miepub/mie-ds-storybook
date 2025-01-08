import{p as he,Y as a,_ as ge,$ as we,a9 as ye,a0 as _,a1 as n,e as be,a2 as u,a4 as k,a5 as ve,l as _e,a3 as r,k as ke,Z as Ce}from"./props-D-11tLXy.js";import{s as M}from"./render-B6mKzPQC.js";import{i as f}from"./if-DG_9oCP6.js";import{h as xe}from"./html-DH_r2Hsk.js";import{g as C}from"./events-ef7BX3Ie.js";import{c as Te}from"./attributes-Jce5emvo.js";import{s as De}from"./class-Ds9EAFiq.js";import{s as Oe}from"./event-modifiers-DSgajlPB.js";import{i as Ve}from"./lifecycle-Dq4UX-i8.js";import{c as He}from"./index-client-QvcM8E6w.js";import"./hydration-C_mtSyjW.js";var Be=u('<h2 id="drawer-title" class="ds-drawer__title"> </h2>'),Se=u('<button class="ds-drawer__close-button" aria-label="Close"><i class="fa fa-close"></i></button>'),Le=u('<div class="ds-drawer__header"><!> <!></div>'),Ie=u('<div class="ds-drawer__overlay"><div role="dialog" aria-modal="true" aria-labelledby="drawer-title"><!> <div class="ds-drawer__content"><!></div></div></div>'),Me=u("<button> </button> <!>",1);function x(h,e){he(e,!1);const T=Ce();let g=a(e,"isOpen",12,!1),D=a(e,"title",8,""),O=a(e,"placement",8,"bottom"),$=a(e,"showHeader",8,!0),ee=a(e,"showCloseButton",8,!0),te=a(e,"triggerText",8,"Open Drawer"),ae=a(e,"content",8,"");const re=He();function V(){g(!1),re("close")}function oe(){g(!0)}ge(()=>_e(O()),()=>{ve(T,`ds-drawer ds-drawer--${O()}`)}),we(),Ve();var H=Me(),w=ye(H),se=r(w),ne=k(w,2);{var ie=y=>{var b=Ie(),B=r(b),S=r(B);{var le=v=>{var L=Le(),I=r(L);{var pe=t=>{var s=Be(),fe=r(s);_(()=>M(fe,D())),n(t,s)};f(I,t=>{D()&&t(pe)})}var me=k(I,2);{var ue=t=>{var s=Se();C("click",s,V),n(t,s)};f(me,t=>{ee()&&t(ue)})}n(v,L)};f(S,v=>{$()&&v(le)})}var de=k(S,2),ce=r(de);xe(ce,ae),_(()=>De(B,Te(ke(T)),"")),C("click",b,Oe(V)),n(y,b)};f(ne,y=>{g()&&y(ie)})}_(()=>M(se,te())),C("click",w,oe),n(h,H),be()}x.__docgen={version:3,name:"Drawer.svelte",data:[{name:"isOpen",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"title",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"placement",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"bottom"'},{name:"showHeader",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"true"},{name:"showCloseButton",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"true"},{name:"triggerText",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"Open Drawer"'},{name:"content",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{visibility:"public",description:null,keywords:[],name:"close"}],slots:[],refs:[]};const Ae={title:"Svelte Components/Drawer",component:x,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases."}}},argTypes:{isOpen:{control:"boolean",description:"Controls whether the drawer is open",defaultValue:!1},title:{control:"text",description:"Title of the drawer",defaultValue:"Drawer Title"},placement:{control:{type:"select"},options:["bottom","left","right"],description:"Where the drawer appears from",defaultValue:"bottom"},showHeader:{control:"boolean",description:"Whether to display the header",defaultValue:!0},showCloseButton:{control:"boolean",description:"Whether to display the close button in the header",defaultValue:!0},triggerText:{control:"text",description:"Text for the button that opens the drawer",defaultValue:"Open Drawer"},content:{control:"text",description:"HTML content of the drawer",defaultValue:"<p>This is the drawer content.</p>"}}},o=h=>({Component:x,props:h}),i=o.bind({});i.args={isOpen:!1,placement:"bottom",title:"Bottom Drawer",content:"<p>This drawer slides up from the bottom.</p>"};const l=o.bind({});l.args={isOpen:!1,placement:"left",title:"Left Drawer",content:"<p>This drawer slides in from the left.</p>"};const d=o.bind({});d.args={isOpen:!1,placement:"right",title:"Right Drawer",content:"<p>This drawer slides in from the right.</p>"};const c=o.bind({});c.args={isOpen:!1,placement:"right",showHeader:!1,content:"<p>This drawer has no header.</p>"};const p=o.bind({});p.args={isOpen:!1,placement:"bottom",title:"Drawer without Close",showCloseButton:!1,content:"<p>This drawer does not have a close button in the header.</p>"};const m=o.bind({});m.args={isOpen:!1,placement:"bottom",title:"HTML Content",content:`
    <h2>Important Information</h2>
    <p>You can include <strong>HTML</strong> content here, like lists:</p>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
    <img src="https://via.placeholder.com/50" alt="Placeholder Image">
  `};var N,R,W;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
  Component: Drawer,
  props: args
})`,...(W=(R=i.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var E,P,Y;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
  Component: Drawer,
  props: args
})`,...(Y=(P=l.parameters)==null?void 0:P.docs)==null?void 0:Y.source}}};var z,G,Z;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
  Component: Drawer,
  props: args
})`,...(Z=(G=d.parameters)==null?void 0:G.docs)==null?void 0:Z.source}}};var j,q,A;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`args => ({
  Component: Drawer,
  props: args
})`,...(A=(q=c.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var F,J,K;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`args => ({
  Component: Drawer,
  props: args
})`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`args => ({
  Component: Drawer,
  props: args
})`,...(X=(U=m.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const Fe=["Bottom","Left","Right","NoHeader","NoCloseButton","WithHTMLContent"];export{i as Bottom,l as Left,p as NoCloseButton,c as NoHeader,d as Right,m as WithHTMLContent,Fe as __namedExportsOrder,Ae as default};
