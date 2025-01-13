import{$ as I,a0 as b,a1 as D,a3 as G,a4 as Y,k as e,a2 as c,Y as q}from"./store-DKrw96s8.js";import{p as g}from"./props-WZpD2vyg.js";import{s as h}from"./render-Df-5AOqP.js";import{e as B,i as F}from"./each-BEPMe8HD.js";import{s as i}from"./attributes-CmWRQlTN.js";import{s as v}from"./class-Ds9EAFiq.js";import{g as H}from"./events-CYuOk1VT.js";import"./hydration-C_mtSyjW.js";import"./attributes-Jce5emvo.js";var J=D('<div class="accordion-item"><h2 class="accordion-header"><button type="button"> <i class="fa fa-chevron-down"></i></button></h2> <div data-bs-parent="#accordionExample"><div class="accordion-body"> </div></div></div>'),K=D('<div id="accordionExample"></div>');function d(p,C){let V=g(C,"items",24,()=>[]),N=g(C,"size",8,"default"),o=q(null);const O=m=>{Y(o,e(o)===m?null:m)};var f=K();B(f,5,V,F,(m,A,t)=>{var y=J(),u=c(y);i(u,"id",`heading-${t}`);var n=c(u);i(n,"aria-controls",`collapse-${t}`);var P=c(n),l=G(u,2);i(l,"id",`collapse-${t}`),i(l,"aria-labelledby",`heading-${t}`);var R=c(l),j=c(R);I(()=>{v(n,`accordion-button ${(e(o)===t?"":"collapsed")??""}`),i(n,"aria-expanded",e(o)===t),h(P,`${e(A).title??""} `),v(l,`content ${e(o)===t?"open":""}`),h(j,e(A).content)}),H("click",n,()=>O(t)),b(m,y)}),I(()=>v(f,`accordion ds-accordion ${N()==="condensed"?"condensed":""}`)),b(p,f)}d.__docgen={version:3,name:"Accordion.svelte",data:[{name:"items",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"any[]"},static:!1,readonly:!1,defaultValue:"[]"},{name:"size",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"default"'}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const it={title:"Svelte Components/Accordion",component:d,tags:["autodocs"],parameters:{docs:{description:{component:"**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases. <br /> **npm install**: mie-ds-accordion "}}},argTypes:{size:{control:"select",options:["default","condensed"],description:"Size of the accordion",defaultValue:"default"},items:{control:"object",description:"Array of accordion items",defaultValue:[{title:"Accordion Item 1",content:"Content for accordion item 1."},{title:"Accordion Item 2",content:"Content for accordion item 2."},{title:"Accordion Item 3",content:"Content for accordion item 3."}]}}},L=p=>({Component:d,props:p}),r=L.bind({});r.args={size:"default",items:[{title:"Accordion Item 1",content:"Content for accordion item 1."},{title:"Accordion Item 2",content:"Content for accordion item 2."},{title:"Accordion Item 3",content:"Content for accordion item 3."}]};const M=()=>({Component:d,props:{size:"default",items:[{title:"Accordion Item 1",content:"Content for accordion item 1."},{title:"Accordion Item 2",content:"Content for accordion item 2."},{title:"Accordion Item 3",content:"Content for accordion item 3."}]}}),a=M.bind({});a.storyName="Default Size";const Q=()=>({Component:d,props:{size:"condensed",items:[{title:"Accordion Item 1",content:"Content for accordion item 1."},{title:"Accordion Item 2",content:"Content for accordion item 2."},{title:"Accordion Item 3",content:"Content for accordion item 3."}]}}),s=Q.bind({});s.storyName="Condensed Size";var _,z,k;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
  Component: Accordion,
  props: args
})`,...(k=(z=r.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var S,$,x;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`() => ({
  Component: Accordion,
  props: {
    size: 'default',
    items: [{
      title: 'Accordion Item 1',
      content: 'Content for accordion item 1.'
    }, {
      title: 'Accordion Item 2',
      content: 'Content for accordion item 2.'
    }, {
      title: 'Accordion Item 3',
      content: 'Content for accordion item 3.'
    }]
  }
})`,...(x=($=a.parameters)==null?void 0:$.docs)==null?void 0:x.source}}};var E,T,w;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`() => ({
  Component: Accordion,
  props: {
    size: 'condensed',
    items: [{
      title: 'Accordion Item 1',
      content: 'Content for accordion item 1.'
    }, {
      title: 'Accordion Item 2',
      content: 'Content for accordion item 2.'
    }, {
      title: 'Accordion Item 3',
      content: 'Content for accordion item 3.'
    }]
  }
})`,...(w=(T=s.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};const rt=["Interactive","Default","Condensed"];export{s as Condensed,a as Default,r as Interactive,rt as __namedExportsOrder,it as default};
