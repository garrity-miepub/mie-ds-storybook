import{p as ie,a0 as t,e as ce,a1 as o,a2 as e,ar as pe,as as j,a3 as _,$ as S,k as s,Y as de,a4 as me}from"./store-DIQEHCOu.js";import{p as ue}from"./props-DO17Jqv7.js";import{s as k}from"./render-CMzKQT-F.js";import{i as C}from"./if-DGZZ-pQQ.js";import{e as X,i as E}from"./each-5udpwlkd.js";import{s as i}from"./attributes-DmLnXfCe.js";import{g as fe}from"./events-DmGDAng9.js";import{i as be}from"./lifecycle-9Sjl64q2.js";import"./hydration-C_mtSyjW.js";import"./attributes-Jce5emvo.js";var ve=o('<span class="separator">/</span>'),he=o('<li class="item"><a> </a> <!></li>'),ge=o("<li><a> </a></li>"),_e=o('<ul class="breadcrumb-menu"></ul>'),ye=o('<span class="separator">/</span>'),Be=o('<li class="item"><a> </a> <!></li>'),De=o('<li class="item"><a> </a> <span class="separator">/</span></li> <li class="item"><button aria-haspopup="true">...</button> <!></li> <!>',1),xe=o('<nav aria-label="Breadcrumb"><ol class="ds-breadcrumb"><!></ol></nav>');function O(A,T){ie(T,!1);let a=ue(T,"items",24,()=>[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Details",href:"/products/details"}]),y=de(!1);function ae(){me(y,!s(y))}be();var V=xe(),re=e(V),te=e(re);{var se=c=>{var v=pe(),B=j(v);X(B,1,a,E,(D,x,h)=>{var p=he(),d=e(p),H=e(d),w=_(d,2);{var l=r=>{var m=ve();t(r,m)};C(w,r=>{h<a().length-1&&r(l)})}S(()=>{i(d,"href",s(x).href),i(d,"aria-current",h===a().length-1?"page":void 0),k(H,s(x).label)}),t(D,p)}),t(c,v)},oe=c=>{var v=De(),B=j(v),D=e(B),x=e(D),h=_(B,2),p=e(h),d=_(p,2);{var H=l=>{var r=_e();X(r,5,()=>a().slice(1,a().length-2),E,(m,g)=>{var n=ge(),P=e(n),L=e(P);S(()=>{i(P,"href",s(g).href),k(L,s(g).label)}),t(m,n)}),t(l,r)};C(d,l=>{s(y)&&l(H)})}var w=_(h,2);X(w,1,()=>a().slice(-2),E,(l,r,m)=>{var g=Be(),n=e(g);i(n,"aria-current",m===1?"page":void 0);var P=e(n),L=_(n,2);{var le=I=>{var ne=ye();t(I,ne)};C(L,I=>{m===0&&a().length>1&&I(le)})}S(()=>{i(n,"href",s(r).href),k(P,s(r).label)}),t(l,g)}),S(()=>{i(D,"href",a()[0].href),k(x,a()[0].label),i(p,"aria-expanded",s(y))}),fe("click",p,ae),t(c,v)};C(te,c=>{a().length<=3?c(se):c(oe,!1)})}t(A,V),ce()}O.__docgen={version:3,name:"Breadcrumb.svelte",data:[{name:"items",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"{ label: string; href: string; }[]"},static:!1,readonly:!1,defaultValue:`[
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Details', href: '/products/details' },
    ]`}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const Ee={title:"Svelte Components/Breadcrumb",component:O,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases. <br /> **npm install**: mie-ds-breadcrumb "}}},argTypes:{items:{control:"object",description:"Array of breadcrumb items (label and href)",defaultValue:[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Details",href:"/products/details"}]}}},R=({items:A})=>({Component:O,props:{items:A}}),u=R.bind({});u.args={items:[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Details",href:"/products/details"}]};const f=R.bind({});f.args={items:[{label:"Home",href:"/"},{label:"Section 1",href:"/section1"},{label:"Category A",href:"/section1/categoryA"},{label:"Subcategory X",href:"/section1/categoryA/subcategoryX"},{label:"Product List",href:"/section1/categoryA/subcategoryX/products"},{label:"Product Details",href:"/section1/categoryA/subcategoryX/products/details"}]};const b=R.bind({});b.args={items:[{label:"Home",href:"/"},{label:"Section",href:"/section"},{label:"Page",href:"/section/page"}]};var z,G,N,Y,q;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`({
  items
}) => ({
  Component: Breadcrumb,
  props: {
    items
  }
})`,...(N=(G=u.parameters)==null?void 0:G.docs)==null?void 0:N.source},description:{story:"Default Breadcrumb (3 Levels)",...(q=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:q.description}}};var F,J,K,M,Q;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`({
  items
}) => ({
  Component: Breadcrumb,
  props: {
    items
  }
})`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:"Long Breadcrumb with Collapse",...(Q=(M=f.parameters)==null?void 0:M.docs)==null?void 0:Q.description}}};var U,W,Z,$,ee;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`({
  items
}) => ({
  Component: Breadcrumb,
  props: {
    items
  }
})`,...(Z=(W=b.parameters)==null?void 0:W.docs)==null?void 0:Z.source},description:{story:"Interactive Breadcrumb",...(ee=($=b.parameters)==null?void 0:$.docs)==null?void 0:ee.description}}};const Oe=["Default","LongBreadcrumb","Interactive"];export{u as Default,b as Interactive,f as LongBreadcrumb,Oe as __namedExportsOrder,Ee as default};
