import{Y as I,a0 as b,a1 as g,a2 as V,a4 as q,a5 as B,k as e,a3 as c,Z as F}from"./props-D-11tLXy.js";import{s as _}from"./render-B6mKzPQC.js";import{e as G,i as H}from"./each-CLSpy_uj.js";import{s as i}from"./attributes-0g2EBlF2.js";import{s as v}from"./class-Ds9EAFiq.js";import{g as J}from"./events-ef7BX3Ie.js";import"./hydration-C_mtSyjW.js";import"./attributes-Jce5emvo.js";var K=V('<div class="accordion-item"><h2 class="accordion-header"><button type="button"> <i class="fa fa-chevron-down"></i></button></h2> <div data-bs-parent="#accordionExample"><div class="accordion-body"> </div></div></div>'),L=V('<div id="accordionExample"></div>');function d(p,C){let E=I(C,"items",24,()=>[]),N=I(C,"size",8,"default"),o=F(null);const j=l=>{B(o,e(o)===l?null:l)};var f=L();G(f,5,E,H,(l,A,t)=>{var y=K(),u=c(y);i(u,"id",`heading-${t}`);var n=c(u);i(n,"aria-controls",`collapse-${t}`);var O=c(n),m=q(u,2);i(m,"id",`collapse-${t}`),i(m,"aria-labelledby",`heading-${t}`);var Y=c(m),Z=c(Y);b(()=>{v(n,`accordion-button ${(e(o)===t?"":"collapsed")??""}`),i(n,"aria-expanded",e(o)===t),_(O,`${e(A).title??""} `),v(m,`content ${e(o)===t?"open":""}`),_(Z,e(A).content)}),J("click",n,()=>j(t)),g(l,y)}),b(()=>v(f,`accordion ds-accordion ${N()==="condensed"?"condensed":""}`)),g(p,f)}d.__docgen={version:3,name:"Accordion.svelte",data:[{name:"items",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"any[]"},static:!1,readonly:!1,defaultValue:"[]"},{name:"size",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"default"'}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const ct={title:"Svelte Components/Accordion",component:d,tags:["autodocs"],argTypes:{size:{control:"select",options:["default","condensed"],description:"Size of the accordion",defaultValue:"default"},items:{control:"object",description:"Array of accordion items",defaultValue:[{title:"Accordion Item 1",content:"Content for accordion item 1."},{title:"Accordion Item 2",content:"Content for accordion item 2."},{title:"Accordion Item 3",content:"Content for accordion item 3."}]}}},M=p=>({Component:d,props:p}),r=M.bind({});r.args={size:"default",items:[{title:"Accordion Item 1",content:"Content for accordion item 1."},{title:"Accordion Item 2",content:"Content for accordion item 2."},{title:"Accordion Item 3",content:"Content for accordion item 3."}]};const P=()=>({Component:d,props:{size:"default",items:[{title:"Accordion Item 1",content:"Content for accordion item 1."},{title:"Accordion Item 2",content:"Content for accordion item 2."},{title:"Accordion Item 3",content:"Content for accordion item 3."}]}}),a=P.bind({});a.storyName="Default Size";const Q=()=>({Component:d,props:{size:"condensed",items:[{title:"Accordion Item 1",content:"Content for accordion item 1."},{title:"Accordion Item 2",content:"Content for accordion item 2."},{title:"Accordion Item 3",content:"Content for accordion item 3."}]}}),s=Q.bind({});s.storyName="Condensed Size";var h,z,k;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
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
})`,...(D=(x=s.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};const it=["Interactive","Default","Condensed"];export{s as Condensed,a as Default,r as Interactive,it as __namedExportsOrder,ct as default};
