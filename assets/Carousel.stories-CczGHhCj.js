import{p as F,a0 as u,e as J,a1 as h,k as i,$ as w,a3 as v,a4 as f,a2 as L,Y as Q}from"./store-DIQEHCOu.js";import{p as M}from"./props-DO17Jqv7.js";import{g}from"./events-DmGDAng9.js";import{e as V,i as z}from"./each-5udpwlkd.js";import{h as U}from"./html-Dgl4xvzF.js";import{s as X}from"./attributes-DmLnXfCe.js";import{t as B}from"./class-Ds9EAFiq.js";import{i as Z}from"./lifecycle-9Sjl64q2.js";import{o as $,a as ee}from"./index-client-BsC9Mbj1.js";import"./hydration-C_mtSyjW.js";import"./attributes-Jce5emvo.js";var te=h('<div class="slide"><!></div>'),se=h('<button class="indicator"></button>'),ae=h('<div class="ds-carousel"><div class="slides"></div> <button class="control prev" aria-label="Previous Slide"><svg viewBox="0 0 24 24"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"></path></svg></button> <button class="control next" aria-label="Next Slide"><svg viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12l-4.58-4.59L10 6l6 6-6 6z"></path></svg></button> <div class="indicators"></div></div>');function b(c,s){F(s,!1);let a=M(s,"slides",24,()=>[]),H=M(s,"interval",8,5e3),t=Q(0),p;function C(){f(t,(i(t)+1)%a().length),m()}function K(){f(t,(i(t)-1+a().length)%a().length),m()}function Y(n){f(t,n),m()}function S(){p=setInterval(C,H())}function m(){clearInterval(p),S()}$(S),ee(()=>clearInterval(p)),Z();var _=ae(),x=L(_);V(x,5,a,z,(n,T,o)=>{var e=te(),q=L(e);U(q,()=>i(T)),w(()=>B(e,"active",o===i(t))),u(n,e)});var k=v(x,2),I=v(k,2),j=v(I,2);V(j,5,a,z,(n,T,o)=>{var e=se();X(e,"aria-label",`Go to slide ${o+1}`),w(()=>B(e,"active",o===i(t))),g("click",e,()=>Y(o)),u(n,e)}),g("click",k,K),g("click",I,C),u(c,_),J()}b.__docgen={version:3,name:"Carousel.svelte",data:[{name:"slides",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"any[]"},static:!1,readonly:!1,defaultValue:"[]"},{name:"interval",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"5000"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const fe={title:"Svelte Components/Carousel",component:b,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases. <br /> **npm install**: mie-ds-carousel"}}},argTypes:{slides:{control:"array",description:"Array of slide content (can be HTML strings)",defaultValue:["Slide 1 Content","Slide 2 Content","Slide 3 Content"]},interval:{control:"number",description:"Time interval in milliseconds for auto-scrolling",defaultValue:5e3}}},y=({slides:c,interval:s})=>({Component:b,props:{slides:c,interval:s}}),r=y.bind({});r.args={slides:["Slide 1 Content","Slide 2 Content","Slide 3 Content"]};const l=y.bind({});l.args={slides:['<img src="https://placehold.co/600x400" alt="Kitten 1" style="display: block; width: 100%; height: auto;">',"<h2>Second Slide with Custom Text</h2><p>More detailed information here.</p>",'<div style="background-color: #f0f0f0; padding: 20px; text-align: center;"><h3>Third Slide with a Box</h3></div>']};const d=y.bind({});d.args={slides:["Item 1","Item 2","Item 3","Item 4"],interval:3e3};var D,E,P;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`({
  slides,
  interval
}) => ({
  Component: Carousel,
  props: {
    slides,
    interval
  }
})`,...(P=(E=r.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var G,N,O;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`({
  slides,
  interval
}) => ({
  Component: Carousel,
  props: {
    slides,
    interval
  }
})`,...(O=(N=l.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var R,W,A;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`({
  slides,
  interval
}) => ({
  Component: Carousel,
  props: {
    slides,
    interval
  }
})`,...(A=(W=d.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};const ge=["Default","WithCustomContent","Interactive"];export{r as Default,d as Interactive,l as WithCustomContent,ge as __namedExportsOrder,fe as default};
