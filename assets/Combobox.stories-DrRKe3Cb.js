import{p as fe,Z as O,_ as be,$ as D,a0 as d,e as ve,a1 as k,k as e,Y as s,a2 as u,a4 as o,a3 as S,at as F,l as N,ar as xe,as as he}from"./store-DKrw96s8.js";import{p as L}from"./props-WZpD2vyg.js";import{s as W}from"./render-Df-5AOqP.js";import{i as z}from"./if-D8r51YhU.js";import{e as ye,i as ge}from"./each-BEPMe8HD.js";import{s as B}from"./attributes-CmWRQlTN.js";import{s as ke}from"./class-Ds9EAFiq.js";import{g as E}from"./events-CYuOk1VT.js";import{a as _e}from"./input-D9oAd-3L.js";import{b as we}from"./this-DHb84UND.js";import{i as Ce}from"./lifecycle-C2CMyhQS.js";import"./hydration-C_mtSyjW.js";import"./attributes-Jce5emvo.js";var je=k('<div class="py-2 px-4 text-gray-500">No framework found.</div>'),Se=k('<div class="flex items-center px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer" role="option" tabindex="-1"><i></i> </div>'),Ne=k('<div class="combobox-menu" tabindex="-1" role="listbox"><div class="p-2"><input type="text" id="combobox-input" placeholder="Search framework..." class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></div> <!></div>'),Ee=k('<div class="combobox"><button type="button" aria-haspopup="listbox" class="border border-gray-300 rounded px-4 py-2 w-[200px] text-left flex items-center justify-between"> <i class="fa-solid fa-chevron-down ml-2 opacity-50"></i></button> <!></div>');function V(w,n){fe(n,!1);const A=s(),C=s();let x=L(n,"frameworks",24,()=>[{value:"sveltekit",label:"SvelteKit"},{value:"next.js",label:"Next.js"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}]),R=L(n,"placeholder",8,"Select a framework..."),r=s(!1),i=s(""),h=s(""),j=s();function ae(){o(r,!e(r)),e(r)&&F().then(()=>{var a;(a=document.getElementById("combobox-input"))==null||a.focus()})}function te(){o(r,!1),F().then(()=>{var a;(a=e(j))==null||a.focus()})}function I(a){o(i,a),te()}O(()=>(N(x()),e(i),N(R())),()=>{var a;o(A,((a=x().find(y=>y.value===e(i)))==null?void 0:a.label)??R())}),O(()=>(N(x()),e(h)),()=>{o(C,x().filter(a=>a.label.toLowerCase().includes(e(h).toLowerCase())))}),be(),Ce();var P=Ee(),c=u(P),oe=u(c);we(c,a=>o(j,a),()=>e(j));var re=S(c,2);{var se=a=>{var y=Ne(),K=u(y),le=u(K),ne=S(K,2);{var ie=t=>{var g=je();d(t,g)},ce=t=>{var g=xe(),pe=he(g);ye(pe,1,()=>e(C),ge,(me,p)=>{var m=Se(),T=u(m),de=S(T);D(()=>{B(m,"aria-selected",e(i)===e(p).value),ke(T,`fa-solid fa-check mr-2 h-4 w-4 ${e(i)!==e(p).value?"text-transparent":""}`),W(de,` ${e(p).label??""}`)}),E("click",m,()=>I(e(p).value)),E("keydown",m,ue=>{ue.key==="Enter"&&I(e(p).value)}),d(me,m)}),d(t,g)};z(ne,t=>{e(C).length===0?t(ie):t(ce,!1)})}_e(le,()=>e(h),t=>o(h,t)),d(a,y)};z(re,a=>{e(r)&&a(se)})}D(()=>{B(c,"aria-expanded",e(r)),W(oe,`${e(A)??""} `)}),E("click",c,ae),d(w,P),ve()}V.__docgen={version:3,name:"Combobox.svelte",data:[{name:"frameworks",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"{ value: string; label: string; }[]"},static:!1,readonly:!1,defaultValue:`[
      {
        value: 'sveltekit',
        label: 'SvelteKit',
      },
      {
        value: 'next.js',
        label: 'Next.js',
      },
      {
        value: 'nuxt.js',
        label: 'Nuxt.js',
      },
      {
        value: 'remix',
        label: 'Remix',
      },
      {
        value: 'astro',
        label: 'Astro',
      },
    ]`},{name:"placeholder",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"Select a framework..."'}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const Be={title:"Svelte Components/Combobox",component:V,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases."}}},argTypes:{frameworks:{control:"object",description:"Array of framework objects ({ value: string, label: string })"},placeholder:{control:"text",description:"Placeholder text for the combobox",defaultValue:"Select a framework..."}}},_=({frameworks:w,placeholder:n})=>({Component:V,props:{frameworks:w,placeholder:n}}),f=_.bind({});f.args={frameworks:[{value:"sveltekit",label:"SvelteKit"},{value:"next.js",label:"Next.js"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}]};const b=_.bind({});b.args={frameworks:[],placeholder:"No frameworks available"};const v=_.bind({});v.args={placeholder:"Choose your favorite!"};const l=_.bind({});l.args={frameworks:[{value:"sveltekit",label:"SvelteKit"},{value:"next.js",label:"Next.js"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}]};l.parameters={docs:{description:{story:"To set an initial value, you would typically control the `value` prop of the Combobox from its parent component."}}};var G,Y,Z;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`({
  frameworks,
  placeholder
}) => ({
  Component: Combobox,
  props: {
    frameworks,
    placeholder
  }
})`,...(Z=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var q,H,J;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`({
  frameworks,
  placeholder
}) => ({
  Component: Combobox,
  props: {
    frameworks,
    placeholder
  }
})`,...(J=(H=b.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var M,Q,U;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`({
  frameworks,
  placeholder
}) => ({
  Component: Combobox,
  props: {
    frameworks,
    placeholder
  }
})`,...(U=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,$,ee;l.parameters={...l.parameters,docs:{...(X=l.parameters)==null?void 0:X.docs,source:{originalSource:`({
  frameworks,
  placeholder
}) => ({
  Component: Combobox,
  props: {
    frameworks,
    placeholder
  }
})`,...(ee=($=l.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const Ge=["Default","Empty","CustomPlaceholder","WithInitialValue"];export{v as CustomPlaceholder,f as Default,b as Empty,l as WithInitialValue,Ge as __namedExportsOrder,Be as default};
