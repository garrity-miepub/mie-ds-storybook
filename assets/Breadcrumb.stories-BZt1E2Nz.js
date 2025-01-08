import{p as ie,a0 as t,e as ce,a1 as o,a2 as e,ar as de,as as j,a3 as g,$ as S,k as s,Y as pe,a4 as me}from"./store-DKrw96s8.js";import{p as ue}from"./props-WZpD2vyg.js";import{s as k}from"./render-Df-5AOqP.js";import{i as w}from"./if-D8r51YhU.js";import{e as X,i as E}from"./each-BEPMe8HD.js";import{s as i}from"./attributes-CmWRQlTN.js";import{g as be}from"./events-CYuOk1VT.js";import{i as fe}from"./lifecycle-C2CMyhQS.js";import"./hydration-C_mtSyjW.js";import"./attributes-Jce5emvo.js";var _e=o('<span class="ds-breadcrumb__separator">/</span>'),ve=o('<li class="ds-breadcrumb__item"><a> </a> <!></li>'),he=o('<li class="ds-breadcrumb__dropdown-item"><a> </a></li>'),ge=o('<ul class="ds-breadcrumb__dropdown"></ul>'),ye=o('<span class="ds-breadcrumb__separator">/</span>'),Be=o('<li class="ds-breadcrumb__item"><a> </a> <!></li>'),De=o('<li class="ds-breadcrumb__item"><a> </a> <span class="ds-breadcrumb__separator">/</span></li> <li class="ds-breadcrumb__item ds-breadcrumb__item--collapse-trigger"><button aria-haspopup="true">...</button> <!></li> <!>',1),xe=o('<nav aria-label="Breadcrumb"><ol class="ds-breadcrumb"><!></ol></nav>');function O(C,T){ie(T,!1);let r=ue(T,"items",24,()=>[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Details",href:"/products/details"}]),y=pe(!1);function re(){me(y,!s(y))}fe();var V=xe(),ae=e(V),te=e(ae);{var se=c=>{var _=de(),B=j(_);X(B,1,r,E,(D,x,v)=>{var d=ve(),p=e(d),A=e(p),H=g(p,2);{var l=a=>{var m=_e();t(a,m)};w(H,a=>{v<r().length-1&&a(l)})}S(()=>{i(p,"href",s(x).href),i(p,"aria-current",v===r().length-1?"page":void 0),k(A,s(x).label)}),t(D,d)}),t(c,_)},oe=c=>{var _=De(),B=j(_),D=e(B),x=e(D),v=g(B,2),d=e(v),p=g(d,2);{var A=l=>{var a=ge();X(a,5,()=>r().slice(1,r().length-2),E,(m,h)=>{var n=he(),P=e(n),L=e(P);S(()=>{i(P,"href",s(h).href),k(L,s(h).label)}),t(m,n)}),t(l,a)};w(p,l=>{s(y)&&l(A)})}var H=g(v,2);X(H,1,()=>r().slice(-2),E,(l,a,m)=>{var h=Be(),n=e(h);i(n,"aria-current",m===1?"page":void 0);var P=e(n),L=g(n,2);{var le=I=>{var ne=ye();t(I,ne)};w(L,I=>{m===0&&r().length>1&&I(le)})}S(()=>{i(n,"href",s(a).href),k(P,s(a).label)}),t(l,h)}),S(()=>{i(D,"href",r()[0].href),k(x,r()[0].label),i(d,"aria-expanded",s(y))}),be("click",d,re),t(c,_)};w(te,c=>{r().length<=3?c(se):c(oe,!1)})}t(C,V),ce()}O.__docgen={version:3,name:"Breadcrumb.svelte",data:[{name:"items",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"{ label: string; href: string; }[]"},static:!1,readonly:!1,defaultValue:`[
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Details', href: '/products/details' },
    ]`}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const Ee={title:"Svelte Components/Breadcrumb",component:O,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases."}}},argTypes:{items:{control:"object",description:"Array of breadcrumb items (label and href)",defaultValue:[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Details",href:"/products/details"}]}}},R=({items:C})=>({Component:O,props:{items:C}}),u=R.bind({});u.args={items:[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Details",href:"/products/details"}]};const b=R.bind({});b.args={items:[{label:"Home",href:"/"},{label:"Section 1",href:"/section1"},{label:"Category A",href:"/section1/categoryA"},{label:"Subcategory X",href:"/section1/categoryA/subcategoryX"},{label:"Product List",href:"/section1/categoryA/subcategoryX/products"},{label:"Product Details",href:"/section1/categoryA/subcategoryX/products/details"}]};const f=R.bind({});f.args={items:[{label:"Home",href:"/"},{label:"Section",href:"/section"},{label:"Page",href:"/section/page"}]};var z,G,N,Y,q;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`({
  items
}) => ({
  Component: Breadcrumb,
  props: {
    items
  }
})`,...(N=(G=u.parameters)==null?void 0:G.docs)==null?void 0:N.source},description:{story:"Default Breadcrumb (3 Levels)",...(q=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:q.description}}};var F,J,K,M,Q;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`({
  items
}) => ({
  Component: Breadcrumb,
  props: {
    items
  }
})`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:"Long Breadcrumb with Collapse",...(Q=(M=b.parameters)==null?void 0:M.docs)==null?void 0:Q.description}}};var U,W,Z,$,ee;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`({
  items
}) => ({
  Component: Breadcrumb,
  props: {
    items
  }
})`,...(Z=(W=f.parameters)==null?void 0:W.docs)==null?void 0:Z.source},description:{story:"Interactive Breadcrumb",...(ee=($=f.parameters)==null?void 0:$.docs)==null?void 0:ee.description}}};const Oe=["Default","LongBreadcrumb","Interactive"];export{u as Default,f as Interactive,b as LongBreadcrumb,Oe as __namedExportsOrder,Ee as default};
