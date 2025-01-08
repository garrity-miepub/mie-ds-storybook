import{ar as _,as as C,a0 as H}from"./store-DKrw96s8.js";import{p as M}from"./props-WZpD2vyg.js";import{h as $}from"./html-BjPEsh1c.js";const l=({items:e=[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Details",href:"/products/details"}]})=>{let a='<nav aria-label="Breadcrumb"><ol class="ds-breadcrumb">';return e.length<=3?e.forEach((r,t)=>{a+=`
          <li class="ds-breadcrumb__item">
            <a href="${r.href}" aria-current="${t===e.length-1?"page":void 0}">
              ${r.label}
            </a>
            ${t<e.length-1?'<span class="ds-breadcrumb__separator">/</span>':""}
          </li>
        `}):(a+=`
        <li class="ds-breadcrumb__item">
          <a href="${e[0].href}">
            ${e[0].label}
          </a>
          <span class="ds-breadcrumb__separator">/</span>
        </li>
         <li class="ds-breadcrumb__item ds-breadcrumb__item--collapse-trigger">
            <button aria-haspopup="true" aria-expanded="false">
              ...
            </button>
             <ul class="ds-breadcrumb__dropdown">
                ${e.slice(1,e.length-2).map(r=>`<li class="ds-breadcrumb__dropdown-item">
                      <a href="${r.href}">${r.label}</a>
                    </li>`).join("")}
              </ul>
          </li>
      `,e.slice(-2).forEach((r,t)=>{a+=`
              <li class="ds-breadcrumb__item">
                <a href="${r.href}" aria-current="${t===1?"page":void 0}">
                  ${r.label}
                </a>
                ${t===0&&e.length>1?'<span class="ds-breadcrumb__separator">/</span>':""}
              </li>
            `})),a+="</ol></nav>",a};function c(e,a){let r=M(a,"content",8,"");var t=_(),y=C(t);$(y,r),H(e,t)}c.__docgen={version:3,name:"BreadcrumbContent.svelte",data:[{name:"content",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const T={title:"HTML Components/Breadcrumb",tags:["autodocs"],argTypes:{items:{control:"object",description:"Array of breadcrumb items",defaultValue:[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Details",href:"/products/details"}]}},parameters:{docs:{description:{component:"**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases."},source:{language:"html",transform:(e,a)=>l(a.args)}}}},s={render:e=>({Component:c,props:{content:l(e)}}),args:{items:[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Details",href:"/products/details"}]}},n={render:e=>({Component:c,props:{content:l(e)}}),args:{items:[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Category 1",href:"/products/category1"},{label:"Category 2",href:"/products/category2"},{label:"Details",href:"/products/details"}]}},o={render:e=>({Component:c,props:{content:l(e)}}),args:{items:[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Category 1",href:"/products/category1"},{label:"Category 2",href:"/products/category2"},{label:"Category 3",href:"/products/category3"},{label:"Category 4",href:"/products/category4"},{label:"Details",href:"/products/details"}]}};var d,p,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createBreadcrumbHTML(args)
    }
  }),
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Products',
      href: '/products'
    }, {
      label: 'Details',
      href: '/products/details'
    }]
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var i,b,m;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createBreadcrumbHTML(args)
    }
  }),
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Products',
      href: '/products'
    }, {
      label: 'Category 1',
      href: '/products/category1'
    }, {
      label: 'Category 2',
      href: '/products/category2'
    }, {
      label: 'Details',
      href: '/products/details'
    }]
  }
}`,...(m=(b=n.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var f,h,g;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createBreadcrumbHTML(args)
    }
  }),
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Products',
      href: '/products'
    }, {
      label: 'Category 1',
      href: '/products/category1'
    }, {
      label: 'Category 2',
      href: '/products/category2'
    }, {
      label: 'Category 3',
      href: '/products/category3'
    }, {
      label: 'Category 4',
      href: '/products/category4'
    }, {
      label: 'Details',
      href: '/products/details'
    }]
  }
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const B=["Default","WithMoreItems","WithEvenMoreItems"];export{s as Default,o as WithEvenMoreItems,n as WithMoreItems,B as __namedExportsOrder,T as default};
