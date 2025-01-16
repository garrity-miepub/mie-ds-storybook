import{p as L,Z as Q,_ as U,$ as S,a0 as w,e as W,a1 as Y,a2 as e,a3 as N,k as p,Y as X,a4 as $,l as aa}from"./store-DIQEHCOu.js";import{p as P}from"./props-DO17Jqv7.js";import{s as ea}from"./render-CMzKQT-F.js";import{e as ta,i as sa}from"./each-5udpwlkd.js";import{g as b}from"./events-DmGDAng9.js";import{t as v}from"./class-Ds9EAFiq.js";import{i as na}from"./lifecycle-9Sjl64q2.js";import"./hydration-C_mtSyjW.js";var oa=Y('<li class="page-item"><button class="page-link"> </button></li>'),ra=Y('<nav aria-label="Pagination"><ul class="ds-pagination"><li class="page-item"><button class="page-link" aria-label="Previous"><i class="fas fa-chevron-left"></i> <span class="hidden sm:block">Previous</span></button></li> <!> <li class="page-item"><button class="page-link" aria-label="Next"><span class="hidden sm:block">Next</span> <i class="fas fa-chevron-right"></i></button></li></ul></nav>');function y(m,l){L(l,!1);const _=X();let a=P(l,"currentPage",12,1),c=P(l,"totalPages",8,10),d=P(l,"onPageChange",8,t=>{});const Z=()=>{a()>1&&(a(a()-1),d()(a()))},j=()=>{a()<c()&&(a(a()+1),d()(a()))},q=t=>{a(t),d()(a())};Q(()=>aa(c()),()=>{$(_,Array.from({length:c()},(t,s)=>s+1))}),U(),na();var h=ra(),D=e(h),u=e(D),H=e(u),k=N(u,2);ta(k,1,()=>p(_),sa,(t,s)=>{var f=oa(),C=e(f),K=e(C);S(()=>{v(f,"active",p(s)===a()),ea(K,p(s))}),b("click",C,()=>q(p(s))),w(t,f)});var x=N(k,2),J=e(x);S(()=>{v(u,"disabled",a()===1),v(x,"disabled",a()===c())}),b("click",H,Z),b("click",J,j),w(m,h),W()}y.__docgen={version:3,name:"Pagination.svelte",data:[{name:"currentPage",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"1"},{name:"totalPages",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"10"},{name:"onPageChange",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"(page: any) => void"},static:!1,readonly:!1,defaultValue:"function"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const fa={title:"Svelte Components/Pagination",component:y,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases. <br /> **npm install**: mie-ds-pagination"}}},argTypes:{currentPage:{control:"number"},totalPages:{control:"number"},onPageChange:{action:"onPageChange"}}},g=m=>({Component:y,props:m}),n=g.bind({});n.args={totalPages:10};const o=g.bind({});o.args={totalPages:10,currentPage:3};const r=g.bind({});r.args={totalPages:3};const i=g.bind({});i.args={totalPages:20};var E,I,V;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
  Component: Pagination,
  props: args
})`,...(V=(I=n.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var B,F,M;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
  Component: Pagination,
  props: args
})`,...(M=(F=o.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var O,R,T;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
  Component: Pagination,
  props: args
})`,...(T=(R=r.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var z,A,G;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
  Component: Pagination,
  props: args
})`,...(G=(A=i.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};const Pa=["Basic","InitialPage","FewPages","ManyPages"];export{n as Basic,r as FewPages,o as InitialPage,i as ManyPages,Pa as __namedExportsOrder,fa as default};
