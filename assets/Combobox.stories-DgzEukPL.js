import{p as be,Y as O,_ as D,$ as fe,a0 as F,a1 as d,e as ve,a2 as k,k as e,Z as s,a3 as u,a5 as o,a4 as S,ab as L,l as N,a8 as xe,a9 as he}from"./props-D-11tLXy.js";import{s as W}from"./render-B6mKzPQC.js";import{i as z}from"./if-DG_9oCP6.js";import{e as ye,i as ge}from"./each-CLSpy_uj.js";import{s as B}from"./attributes-0g2EBlF2.js";import{s as ke}from"./class-Ds9EAFiq.js";import{g as E}from"./events-ef7BX3Ie.js";import{a as _e}from"./input-WSSMULZ9.js";import{b as we}from"./this-Br0GFaQS.js";import{i as Ce}from"./lifecycle-Dq4UX-i8.js";import"./hydration-C_mtSyjW.js";import"./attributes-Jce5emvo.js";var je=k('<div class="py-2 px-4 text-gray-500">No framework found.</div>'),Se=k('<div class="flex items-center px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer" role="option" tabindex="-1"><i></i> </div>'),Ne=k('<div class="combobox-menu" tabindex="-1" role="listbox"><div class="p-2"><input type="text" id="combobox-input" placeholder="Search framework..." class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></div> <!></div>'),Ee=k('<div class="combobox"><button type="button" aria-haspopup="listbox" class="border border-gray-300 rounded px-4 py-2 w-[200px] text-left flex items-center justify-between"> <i class="fa-solid fa-chevron-down ml-2 opacity-50"></i></button> <!></div>');function V(w,n){be(n,!1);const A=s(),C=s();let x=O(n,"frameworks",24,()=>[{value:"sveltekit",label:"SvelteKit"},{value:"next.js",label:"Next.js"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}]),R=O(n,"placeholder",8,"Select a framework..."),r=s(!1),i=s(""),h=s(""),j=s();function ae(){o(r,!e(r)),e(r)&&L().then(()=>{var a;(a=document.getElementById("combobox-input"))==null||a.focus()})}function te(){o(r,!1),L().then(()=>{var a;(a=e(j))==null||a.focus()})}function I(a){o(i,a),te()}D(()=>(N(x()),e(i),N(R())),()=>{var a;o(A,((a=x().find(y=>y.value===e(i)))==null?void 0:a.label)??R())}),D(()=>(N(x()),e(h)),()=>{o(C,x().filter(a=>a.label.toLowerCase().includes(e(h).toLowerCase())))}),fe(),Ce();var P=Ee(),c=u(P),oe=u(c);we(c,a=>o(j,a),()=>e(j));var re=S(c,2);{var se=a=>{var y=Ne(),K=u(y),le=u(K),ne=S(K,2);{var ie=t=>{var g=je();d(t,g)},ce=t=>{var g=xe(),pe=he(g);ye(pe,1,()=>e(C),ge,(me,p)=>{var m=Se(),T=u(m),de=S(T);F(()=>{B(m,"aria-selected",e(i)===e(p).value),ke(T,`fa-solid fa-check mr-2 h-4 w-4 ${e(i)!==e(p).value?"text-transparent":""}`),W(de,` ${e(p).label??""}`)}),E("click",m,()=>I(e(p).value)),E("keydown",m,ue=>{ue.key==="Enter"&&I(e(p).value)}),d(me,m)}),d(t,g)};z(ne,t=>{e(C).length===0?t(ie):t(ce,!1)})}_e(le,()=>e(h),t=>o(h,t)),d(a,y)};z(re,a=>{e(r)&&a(se)})}F(()=>{B(c,"aria-expanded",e(r)),W(oe,`${e(A)??""} `)}),E("click",c,ae),d(w,P),ve()}V.__docgen={version:3,name:"Combobox.svelte",data:[{name:"frameworks",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"{ value: string; label: string; }[]"},static:!1,readonly:!1,defaultValue:`[
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
    ]`},{name:"placeholder",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"Select a framework..."'}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const ze={title:"Svelte Components/Combobox",component:V,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases."}}},argTypes:{frameworks:{control:"object",description:"Array of framework objects ({ value: string, label: string })"},placeholder:{control:"text",description:"Placeholder text for the combobox",defaultValue:"Select a framework..."}}},_=({frameworks:w,placeholder:n})=>({Component:V,props:{frameworks:w,placeholder:n}}),b=_.bind({});b.args={frameworks:[{value:"sveltekit",label:"SvelteKit"},{value:"next.js",label:"Next.js"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}]};const f=_.bind({});f.args={frameworks:[],placeholder:"No frameworks available"};const v=_.bind({});v.args={placeholder:"Choose your favorite!"};const l=_.bind({});l.args={frameworks:[{value:"sveltekit",label:"SvelteKit"},{value:"next.js",label:"Next.js"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}]};l.parameters={docs:{description:{story:"To set an initial value, you would typically control the `value` prop of the Combobox from its parent component."}}};var G,Y,Z;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`({
  frameworks,
  placeholder
}) => ({
  Component: Combobox,
  props: {
    frameworks,
    placeholder
  }
})`,...(Z=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var q,H,J;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`({
  frameworks,
  placeholder
}) => ({
  Component: Combobox,
  props: {
    frameworks,
    placeholder
  }
})`,...(J=(H=f.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var M,Q,U;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`({
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
})`,...(ee=($=l.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const Be=["Default","Empty","CustomPlaceholder","WithInitialValue"];export{v as CustomPlaceholder,b as Default,f as Empty,l as WithInitialValue,Be as __namedExportsOrder,ze as default};
