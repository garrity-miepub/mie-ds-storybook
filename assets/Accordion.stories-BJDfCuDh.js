import{$ as I,a0 as b,a1 as V,a3 as B,a4 as F,k as e,a2 as c,Y as G}from"./store-DKrw96s8.js";import{p as g}from"./props-WZpD2vyg.js";import{s as _}from"./render-Df-5AOqP.js";import{e as H,i as J}from"./each-BEPMe8HD.js";import{s as i}from"./attributes-CmWRQlTN.js";import{s as v}from"./class-Ds9EAFiq.js";import{g as K}from"./events-CYuOk1VT.js";import"./hydration-C_mtSyjW.js";import"./attributes-Jce5emvo.js";var L=V('<div class="accordion-item"><h2 class="accordion-header"><button type="button"> <i class="fa fa-chevron-down"></i></button></h2> <div data-bs-parent="#accordionExample"><div class="accordion-body"> </div></div></div>'),M=V('<div id="accordionExample"></div>');function d(p,C){let E=g(C,"items",24,()=>[]),N=g(C,"size",8,"default"),o=G(null);const j=m=>{F(o,e(o)===m?null:m)};var f=M();H(f,5,E,J,(m,A,t)=>{var y=L(),u=c(y);i(u,"id",`heading-${t}`);var n=c(u);i(n,"aria-controls",`collapse-${t}`);var O=c(n),l=B(u,2);i(l,"id",`collapse-${t}`),i(l,"aria-labelledby",`heading-${t}`);var Y=c(l),q=c(Y);I(()=>{v(n,`accordion-button ${(e(o)===t?"":"collapsed")??""}`),i(n,"aria-expanded",e(o)===t),_(O,`${e(A).title??""} `),v(l,`content ${e(o)===t?"open":""}`),_(q,e(A).content)}),K("click",n,()=>j(t)),b(m,y)}),I(()=>v(f,`accordion ds-accordion ${N()==="condensed"?"condensed":""}`)),b(p,f)}d.__docgen={version:3,name:"Accordion.svelte",data:[{name:"items",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"any[]"},static:!1,readonly:!1,defaultValue:"[]"},{name:"size",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"default"'}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const it={title:"Svelte Components/Accordion",component:d,tags:["autodocs"],argTypes:{size:{control:"select",options:["default","condensed"],description:"Size of the accordion",defaultValue:"default"},items:{control:"object",description:"Array of accordion items",defaultValue:[{title:"Accordion Item 1",content:"Content for accordion item 1."},{title:"Accordion Item 2",content:"Content for accordion item 2."},{title:"Accordion Item 3",content:"Content for accordion item 3."}]}}},P=p=>({Component:d,props:p}),r=P.bind({});r.args={size:"default",items:[{title:"Accordion Item 1",content:"Content for accordion item 1."},{title:"Accordion Item 2",content:"Content for accordion item 2."},{title:"Accordion Item 3",content:"Content for accordion item 3."}]};const Q=()=>({Component:d,props:{size:"default",items:[{title:"Accordion Item 1",content:"Content for accordion item 1."},{title:"Accordion Item 2",content:"Content for accordion item 2."},{title:"Accordion Item 3",content:"Content for accordion item 3."}]}}),a=Q.bind({});a.storyName="Default Size";const R=()=>({Component:d,props:{size:"condensed",items:[{title:"Accordion Item 1",content:"Content for accordion item 1."},{title:"Accordion Item 2",content:"Content for accordion item 2."},{title:"Accordion Item 3",content:"Content for accordion item 3."}]}}),s=R.bind({});s.storyName="Condensed Size";var h,z,k;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  Component: Accordion,
  props: args
})`,...(k=(z=r.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var S,$,T;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`() => ({
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
})`,...(T=($=a.parameters)==null?void 0:$.docs)==null?void 0:T.source}}};var w,x,D;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`() => ({
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
})`,...(D=(x=s.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};const rt=["Interactive","Default","Condensed"];export{s as Condensed,a as Default,r as Interactive,rt as __namedExportsOrder,it as default};
