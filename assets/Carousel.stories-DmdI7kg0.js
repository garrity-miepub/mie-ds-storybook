import{p as q,Y as w,a1 as m,e as F,a2 as g,k as r,a0 as L,a4 as v,a5 as f,a3 as M,Z as J}from"./props-D-11tLXy.js";import{g as _}from"./events-ef7BX3Ie.js";import{e as V,i as z}from"./each-CLSpy_uj.js";import{h as Q}from"./html-DH_r2Hsk.js";import{s as U}from"./attributes-0g2EBlF2.js";import{t as B}from"./class-Ds9EAFiq.js";import{i as X}from"./lifecycle-Dq4UX-i8.js";import{o as $,a as ee}from"./index-client-QvcM8E6w.js";import"./hydration-C_mtSyjW.js";import"./attributes-Jce5emvo.js";var te=g('<div class="ds-carousel__slide"><!></div>'),se=g('<button class="ds-carousel__indicator"></button>'),ae=g('<div class="ds-carousel"><div class="ds-carousel__slides"></div> <button class="ds-carousel__control ds-carousel__control--prev" aria-label="Previous Slide"><svg viewBox="0 0 24 24"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"></path></svg></button> <button class="ds-carousel__control ds-carousel__control--next" aria-label="Next Slide"><svg viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12l-4.58-4.59L10 6l6 6-6 6z"></path></svg></button> <div class="ds-carousel__indicators"></div></div>');function h(c,s){q(s,!1);let a=w(s,"slides",24,()=>[]),H=w(s,"interval",8,5e3),t=J(0),p;function y(){f(t,(r(t)+1)%a().length),u()}function K(){f(t,(r(t)-1+a().length)%a().length),u()}function Y(o){f(t,o),u()}function C(){p=setInterval(y,H())}function u(){clearInterval(p),C()}$(C),ee(()=>clearInterval(p)),X();var S=ae(),x=M(S);V(x,5,a,z,(o,T,n)=>{var e=te(),j=M(e);Q(j,()=>r(T)),L(()=>B(e,"active",n===r(t))),m(o,e)});var k=v(x,2),I=v(k,2),Z=v(I,2);V(Z,5,a,z,(o,T,n)=>{var e=se();U(e,"aria-label",`Go to slide ${n+1}`),L(()=>B(e,"active",n===r(t))),_("click",e,()=>Y(n)),m(o,e)}),_("click",k,K),_("click",I,y),m(c,S),F()}h.__docgen={version:3,name:"Carousel.svelte",data:[{name:"slides",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"any[]"},static:!1,readonly:!1,defaultValue:"[]"},{name:"interval",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"5000"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const ve={title:"Svelte Components/Carousel",component:h,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases."}}},argTypes:{slides:{control:"array",description:"Array of slide content (can be HTML strings)",defaultValue:["Slide 1 Content","Slide 2 Content","Slide 3 Content"]},interval:{control:"number",description:"Time interval in milliseconds for auto-scrolling",defaultValue:5e3}}},b=({slides:c,interval:s})=>({Component:h,props:{slides:c,interval:s}}),i=b.bind({});i.args={slides:["Slide 1 Content","Slide 2 Content","Slide 3 Content"]};const l=b.bind({});l.args={slides:['<img src="https://placehold.co/600x400" alt="Kitten 1" style="display: block; width: 100%; height: auto;">',"<h2>Second Slide with Custom Text</h2><p>More detailed information here.</p>",'<div style="background-color: #f0f0f0; padding: 20px; text-align: center;"><h3>Third Slide with a Box</h3></div>']};const d=b.bind({});d.args={slides:["Item 1","Item 2","Item 3","Item 4"],interval:3e3};var D,E,P;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`({
  slides,
  interval
}) => ({
  Component: Carousel,
  props: {
    slides,
    interval
  }
})`,...(P=(E=i.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var G,N,O;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`({
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
})`,...(A=(W=d.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};const fe=["Default","WithCustomContent","Interactive"];export{i as Default,d as Interactive,l as WithCustomContent,fe as __namedExportsOrder,ve as default};
