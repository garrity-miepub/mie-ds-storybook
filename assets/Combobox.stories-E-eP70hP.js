import{Y as H,a8 as M,a9 as V,a1 as $}from"./props-D-11tLXy.js";import{h as k}from"./html-DH_r2Hsk.js";const s=({frameworks:e=[{value:"sveltekit",label:"SvelteKit"},{value:"next.js",label:"Next.js"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],placeholder:n="Select a framework...",open:a=!1,value:o="",inputValue:r=""})=>{var m;const S=((m=e.find(t=>t.value===o))==null?void 0:m.label)??n,d=e.filter(t=>t.label.toLowerCase().includes(r.toLowerCase()));return`
    <div class="combobox" data-open="${a}" data-value="${o}" data-input-value="${r}">
        <button
            type="button"
            aria-haspopup="listbox"
            aria-expanded="${a}"
            class="border border-gray-300 rounded px-4 py-2 w-[200px] text-left flex items-center justify-between"
        >
            ${S}
            <i class="fa-solid fa-chevron-down ml-2 opacity-50"></i>
        </button>
        ${a?`
            <div class="combobox-menu" tabindex="-1" role="listbox">
                <div class="p-2">
                    <input
                        type="text"
                        placeholder="Search framework..."
                        class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                         value="${r}"
                    />
                </div>
                ${d.length===0?`
                <div class="py-2 px-4 text-gray-500">No framework found.</div>`:d.map(t=>`
                    <div
                        class="flex items-center px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                        role="option"
                        tabindex="-1"
                        aria-selected="${o===t.value}"
                        data-value="${t.value}"
                     >
                      <i class="fa-solid fa-check mr-2 h-4 w-4 ${o!==t.value?"text-transparent":""}"></i>
                      ${t.label}
                    </div>
                `).join("")}
            </div>
            `:""}
    </div>
    `};function l(e,n){let a=H(n,"content",8,"");var o=M(),r=V(o);k(r,a),$(e,o)}l.__docgen={version:3,name:"ComboboxContent.svelte",data:[{name:"content",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const O={title:"HTML Components/Combobox",tags:["autodocs"],argTypes:{frameworks:{control:"object",description:"Array of framework objects for the combobox",defaultValue:[{value:"sveltekit",label:"SvelteKit"},{value:"next.js",label:"Next.js"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}]},placeholder:{control:"text",description:"Placeholder text for the combobox",defaultValue:"Select a framework..."},open:{control:"boolean",description:"Whether the combobox menu is open",defaultValue:!1},value:{control:"text",description:"The value of the selected framework",defaultValue:""},inputValue:{control:"text",description:"The value of the search input",defaultValue:""}},parameters:{docs:{description:{component:"**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases."},source:{language:"html",transform:(e,n)=>s(n.args)}}}},c={render:e=>({Component:l,props:{content:s(e)}})},p={render:e=>({Component:l,props:{content:s(e)}}),args:{open:!0}},i={render:e=>({Component:l,props:{content:s(e)}}),args:{value:"next.js"}},u={render:e=>({Component:l,props:{content:s(e)}}),args:{open:!0,inputValue:"nex"}};var b,x,f;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createComboboxHTML(args)
    }
  })
}`,...(f=(x=c.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var v,g,h;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createComboboxHTML(args)
    }
  }),
  args: {
    open: true
  }
}`,...(h=(g=p.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var C,y,T;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createComboboxHTML(args)
    }
  }),
  args: {
    value: 'next.js'
  }
}`,...(T=(y=i.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var j,L,w;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createComboboxHTML(args)
    }
  }),
  args: {
    open: true,
    inputValue: 'nex'
  }
}`,...(w=(L=u.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};const R=["Default","Open","WithSelectedValue","WithInputValue"];export{c as Default,p as Open,u as WithInputValue,i as WithSelectedValue,R as __namedExportsOrder,O as default};
