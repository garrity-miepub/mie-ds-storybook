import{p as ie,Y as ce,a1 as t,e as de,a2 as o,a3 as e,a8 as pe,a9 as j,a4 as g,a0 as S,k as s,Z as me,a5 as ue}from"./props-D-11tLXy.js";import{s as k}from"./render-B6mKzPQC.js";import{i as w}from"./if-DG_9oCP6.js";import{e as X,i as E}from"./each-CLSpy_uj.js";import{s as i}from"./attributes-0g2EBlF2.js";import{g as be}from"./events-ef7BX3Ie.js";import{i as fe}from"./lifecycle-Dq4UX-i8.js";import"./hydration-C_mtSyjW.js";import"./attributes-Jce5emvo.js";var _e=o('<span class="ds-breadcrumb__separator">/</span>'),ve=o('<li class="ds-breadcrumb__item"><a> </a> <!></li>'),he=o('<li class="ds-breadcrumb__dropdown-item"><a> </a></li>'),ge=o('<ul class="ds-breadcrumb__dropdown"></ul>'),ye=o('<span class="ds-breadcrumb__separator">/</span>'),Be=o('<li class="ds-breadcrumb__item"><a> </a> <!></li>'),De=o('<li class="ds-breadcrumb__item"><a> </a> <span class="ds-breadcrumb__separator">/</span></li> <li class="ds-breadcrumb__item ds-breadcrumb__item--collapse-trigger"><button aria-haspopup="true">...</button> <!></li> <!>',1),xe=o('<nav aria-label="Breadcrumb"><ol class="ds-breadcrumb"><!></ol></nav>');function O(C,T){ie(T,!1);let a=ce(T,"items",24,()=>[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Details",href:"/products/details"}]),y=me(!1);function ae(){ue(y,!s(y))}fe();var V=xe(),re=e(V),te=e(re);{var se=c=>{var _=pe(),B=j(_);X(B,1,a,E,(D,x,v)=>{var d=ve(),p=e(d),A=e(p),H=g(p,2);{var l=r=>{var m=_e();t(r,m)};w(H,r=>{v<a().length-1&&r(l)})}S(()=>{i(p,"href",s(x).href),i(p,"aria-current",v===a().length-1?"page":void 0),k(A,s(x).label)}),t(D,d)}),t(c,_)},oe=c=>{var _=De(),B=j(_),D=e(B),x=e(D),v=g(B,2),d=e(v),p=g(d,2);{var A=l=>{var r=ge();X(r,5,()=>a().slice(1,a().length-2),E,(m,h)=>{var n=he(),P=e(n),L=e(P);S(()=>{i(P,"href",s(h).href),k(L,s(h).label)}),t(m,n)}),t(l,r)};w(p,l=>{s(y)&&l(A)})}var H=g(v,2);X(H,1,()=>a().slice(-2),E,(l,r,m)=>{var h=Be(),n=e(h);i(n,"aria-current",m===1?"page":void 0);var P=e(n),L=g(n,2);{var le=I=>{var ne=ye();t(I,ne)};w(L,I=>{m===0&&a().length>1&&I(le)})}S(()=>{i(n,"href",s(r).href),k(P,s(r).label)}),t(l,h)}),S(()=>{i(D,"href",a()[0].href),k(x,a()[0].label),i(d,"aria-expanded",s(y))}),be("click",d,ae),t(c,_)};w(te,c=>{a().length<=3?c(se):c(oe,!1)})}t(C,V),de()}O.__docgen={version:3,name:"Breadcrumb.svelte",data:[{name:"items",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"{ label: string; href: string; }[]"},static:!1,readonly:!1,defaultValue:`[
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Details', href: '/products/details' },
    ]`}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const Xe={title:"Svelte Components/Breadcrumb",component:O,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases."}}},argTypes:{items:{control:"object",description:"Array of breadcrumb items (label and href)",defaultValue:[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Details",href:"/products/details"}]}}},R=({items:C})=>({Component:O,props:{items:C}}),u=R.bind({});u.args={items:[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Details",href:"/products/details"}]};const b=R.bind({});b.args={items:[{label:"Home",href:"/"},{label:"Section 1",href:"/section1"},{label:"Category A",href:"/section1/categoryA"},{label:"Subcategory X",href:"/section1/categoryA/subcategoryX"},{label:"Product List",href:"/section1/categoryA/subcategoryX/products"},{label:"Product Details",href:"/section1/categoryA/subcategoryX/products/details"}]};const f=R.bind({});f.args={items:[{label:"Home",href:"/"},{label:"Section",href:"/section"},{label:"Page",href:"/section/page"}]};var z,G,N,Y,Z;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`({
  items
}) => ({
  Component: Breadcrumb,
  props: {
    items
  }
})`,...(N=(G=u.parameters)==null?void 0:G.docs)==null?void 0:N.source},description:{story:"Default Breadcrumb (3 Levels)",...(Z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};var q,F,J,K,M;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`({
  items
}) => ({
  Component: Breadcrumb,
  props: {
    items
  }
})`,...(J=(F=b.parameters)==null?void 0:F.docs)==null?void 0:J.source},description:{story:"Long Breadcrumb with Collapse",...(M=(K=b.parameters)==null?void 0:K.docs)==null?void 0:M.description}}};var Q,U,W,$,ee;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`({
  items
}) => ({
  Component: Breadcrumb,
  props: {
    items
  }
})`,...(W=(U=f.parameters)==null?void 0:U.docs)==null?void 0:W.source},description:{story:"Interactive Breadcrumb",...(ee=($=f.parameters)==null?void 0:$.docs)==null?void 0:ee.description}}};const Ee=["Default","LongBreadcrumb","Interactive"];export{u as Default,f as Interactive,b as LongBreadcrumb,Ee as __namedExportsOrder,Xe as default};
