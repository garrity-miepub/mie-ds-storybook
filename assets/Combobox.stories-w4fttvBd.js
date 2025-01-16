import{p as xe,Z as G,_ as he,$ as V,a0 as n,e as ke,a1 as k,k as e,Y as i,a2 as v,a4 as l,a3 as w,at as Y,l as A,ar as ye,as as ge}from"./store-DIQEHCOu.js";import{p as Z}from"./props-DO17Jqv7.js";import{s as q}from"./render-CMzKQT-F.js";import{i as R}from"./if-DGZZ-pQQ.js";import{e as _e,i as we}from"./each-5udpwlkd.js";import{s as I}from"./attributes-DmLnXfCe.js";import{s as Ce}from"./class-Ds9EAFiq.js";import{g as f}from"./events-DmGDAng9.js";import{a as je}from"./input-C4EMWbeo.js";import{b as Se}from"./this-UGYHE2u4.js";import{i as Ne}from"./lifecycle-9Sjl64q2.js";import"./hydration-C_mtSyjW.js";import"./attributes-Jce5emvo.js";var Ee=k('<div class="clear" role="option" tabindex="-1">Clear selection</div>'),Ve=k("<div>No framework found.</div>"),Ae=k('<div role="option" tabindex="-1"><i></i> </div>'),Re=k('<div class="ds-menu-basic" tabindex="-1" role="listbox"><div class="search" role="option" tabindex="-1" aria-selected="false"><input type="text" id="combobox-input" placeholder="Search framework..." class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></div> <!> <!></div>'),Ie=k('<div class="ds-combobox"><button type="button" aria-haspopup="listbox" class="border border-gray-300 rounded px-4 py-2 w-[200px] text-left flex items-center justify-between"> <i class="fa-solid fa-chevron-down ml-2 opacity-50"></i></button> <!></div>');function P(j,d){xe(d,!1);const K=i(),S=i();let y=Z(d,"frameworks",24,()=>[{value:"sveltekit",label:"SvelteKit"},{value:"next.js",label:"Next.js"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}]),T=Z(d,"placeholder",8,"Select a framework..."),s=i(!1),r=i(""),g=i(""),N=i();function le(){l(s,!e(s)),e(s)&&Y().then(()=>{var a;(a=document.getElementById("combobox-input"))==null||a.focus()})}function O(){l(s,!1),Y().then(()=>{var a;(a=e(N))==null||a.focus()})}function D(){l(r,""),O()}function F(a){l(r,a),O()}G(()=>(A(y()),e(r),A(T())),()=>{var a;l(K,((a=y().find(_=>_.value===e(r)))==null?void 0:a.label)??T())}),G(()=>(A(y()),e(g)),()=>{l(S,y().filter(a=>a.label.toLowerCase().includes(e(g).toLowerCase())))}),he(),Ne();var L=Ie(),p=v(L),se=v(p);Se(p,a=>l(N,a),()=>e(N));var ne=w(p,2);{var ie=a=>{var _=Re(),W=v(_),ce=v(W),z=w(W,2);{var de=o=>{var t=Ee();V(()=>I(t,"aria-selected",!e(r))),f("click",t,()=>D()),f("keydown",t,E=>{E.key==="Enter"&&D()}),n(o,t)};R(z,o=>{e(r)&&o(de)})}var pe=w(z,2);{var me=o=>{var t=Ve();n(o,t)},ue=o=>{var t=ye(),E=ge(t);_e(E,1,()=>e(S),we,(ve,m)=>{var u=Ae(),B=v(u),fe=w(B);V(()=>{I(u,"aria-selected",e(r)===e(m).value),Ce(B,`fa-solid fa-check ${e(r)!==e(m).value?"text-transparent":""}`),q(fe,` ${e(m).label??""}`)}),f("click",u,()=>F(e(m).value)),f("keydown",u,be=>{be.key==="Enter"&&F(e(m).value)}),n(ve,u)}),n(o,t)};R(pe,o=>{e(S).length===0?o(me):o(ue,!1)})}je(ce,()=>e(g),o=>l(g,o)),n(a,_)};R(ne,a=>{e(s)&&a(ie)})}V(()=>{I(p,"aria-expanded",e(s)),q(se,`${e(K)??""} `)}),f("click",p,le),n(j,L),ke()}P.__docgen={version:3,name:"Combobox.svelte",data:[{name:"frameworks",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"{ value: string; label: string; }[]"},static:!1,readonly:!1,defaultValue:`[
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
  ]`},{name:"placeholder",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"Select a framework..."'}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const qe={title:"Svelte Components/Combobox",component:P,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases. <br /> **npm install**: mie-ds-combobox"}}},argTypes:{frameworks:{control:"object",description:"Array of framework objects ({ value: string, label: string })"},placeholder:{control:"text",description:"Placeholder text for the combobox",defaultValue:"Select a framework..."}}},C=({frameworks:j,placeholder:d})=>({Component:P,props:{frameworks:j,placeholder:d}}),b=C.bind({});b.args={frameworks:[{value:"sveltekit",label:"SvelteKit"},{value:"next.js",label:"Next.js"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}]};const x=C.bind({});x.args={frameworks:[],placeholder:"No frameworks available"};const h=C.bind({});h.args={placeholder:"Choose your favorite!"};const c=C.bind({});c.args={frameworks:[{value:"sveltekit",label:"SvelteKit"},{value:"next.js",label:"Next.js"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}]};c.parameters={docs:{description:{story:"To set an initial value, you would typically control the `value` prop of the Combobox from its parent component."}}};var H,J,M;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`({
  frameworks,
  placeholder
}) => ({
  Component: Combobox,
  props: {
    frameworks,
    placeholder
  }
})`,...(M=(J=b.parameters)==null?void 0:J.docs)==null?void 0:M.source}}};var Q,U,X;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`({
  frameworks,
  placeholder
}) => ({
  Component: Combobox,
  props: {
    frameworks,
    placeholder
  }
})`,...(X=(U=x.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var $,ee,ae;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`({
  frameworks,
  placeholder
}) => ({
  Component: Combobox,
  props: {
    frameworks,
    placeholder
  }
})`,...(ae=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var oe,te,re;c.parameters={...c.parameters,docs:{...(oe=c.parameters)==null?void 0:oe.docs,source:{originalSource:`({
  frameworks,
  placeholder
}) => ({
  Component: Combobox,
  props: {
    frameworks,
    placeholder
  }
})`,...(re=(te=c.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};const He=["Default","Empty","CustomPlaceholder","WithInitialValue"];export{h as CustomPlaceholder,b as Default,x as Empty,c as WithInitialValue,He as __namedExportsOrder,qe as default};
