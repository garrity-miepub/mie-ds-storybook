import{ar as w,as as b,a0 as O}from"./store-DKrw96s8.js";import{p as W}from"./props-WZpD2vyg.js";import{h as _}from"./html-BjPEsh1c.js";const t=({targetText:e="Hover Over Me",iconClass:n=null,header:a=null,content:o=null,linkHref:s=null,linkText:h=null,isHovering:m=!1})=>`
    <div class="ds-hover-card-wrapper" data-is-hovering="${m}">
      <span class="ds-hover-card-target">
        ${e}
      </span>
        ${m?`
            <div class="ds-hover-card-content">
                ${n?`
                    <div class="ds-hover-card-icon">
                        <i class="${n}"></i>
                    </div>
                `:""}
                ${a?`
                    <div class="ds-hover-card-header">
                        <h4>${a}</h4>
                    </div>
                `:""}
                 ${o?`
                    <div class="ds-hover-card-body">
                         <p>${o}</p>
                    </div>
                `:""}
                  ${s&&h?`
                    <div class="ds-hover-card-footer">
                        <a href="${s}">${h}</a>
                    </div>
                `:""}
            </div>
            `:""}
    </div>
    `;function r(e,n){let a=W(n,"content",8,"");var o=w(),s=b(o);_(s,a),O(e,o)}r.__docgen={version:3,name:"HoverCardContent.svelte",data:[{name:"content",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const R={title:"HTML Components/HoverCard",tags:["autodocs"],argTypes:{targetText:{control:"text",description:"Text to trigger hover",defaultValue:"Hover Over Me"},iconClass:{control:"text",description:"Font Awesome class for the icon",defaultValue:null},header:{control:"text",description:"Header text",defaultValue:null},content:{control:"text",description:"Main content text",defaultValue:null},linkHref:{control:"text",description:"Link for the content footer",defaultValue:null},linkText:{control:"text",description:"Link text for the footer",defaultValue:null},isHovering:{control:"boolean",description:"Set to true to show hover card",defaultValue:!1}},parameters:{docs:{description:{component:"**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases."},source:{language:"html",transform:(e,n)=>t(n.args)}}}},c={render:e=>({Component:r,props:{content:t(e)}})},d={render:e=>({Component:r,props:{content:t(e)}}),args:{header:"Header",content:"This is some content for the card"}},i={render:e=>({Component:r,props:{content:t(e)}}),args:{iconClass:"fa fa-info-circle",header:"Header",content:"This is some content with an icon"}},l={render:e=>({Component:r,props:{content:t(e)}}),args:{linkHref:"#",linkText:"Link text",header:"Header",content:"This content includes a link"}},p={render:e=>({Component:r,props:{content:t(e)}}),args:{isHovering:!0,header:"Header",content:"This is a card that has been set to the open state"}};var u,v,f;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createHoverCardHTML(args)
    }
  })
}`,...(f=(v=c.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var g,H,C;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createHoverCardHTML(args)
    }
  }),
  args: {
    header: 'Header',
    content: 'This is some content for the card'
  }
}`,...(C=(H=d.parameters)==null?void 0:H.docs)==null?void 0:C.source}}};var T,L,x;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createHoverCardHTML(args)
    }
  }),
  args: {
    iconClass: 'fa fa-info-circle',
    header: 'Header',
    content: 'This is some content with an icon'
  }
}`,...(x=(L=i.parameters)==null?void 0:L.docs)==null?void 0:x.source}}};var M,k,$;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createHoverCardHTML(args)
    }
  }),
  args: {
    linkHref: '#',
    linkText: 'Link text',
    header: 'Header',
    content: 'This content includes a link'
  }
}`,...($=(k=l.parameters)==null?void 0:k.docs)==null?void 0:$.source}}};var y,S,V;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createHoverCardHTML(args)
    }
  }),
  args: {
    isHovering: true,
    header: 'Header',
    content: 'This is a card that has been set to the open state'
  }
}`,...(V=(S=p.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};const z=["Default","WithContent","WithIcon","WithLink","OpenCard"];export{c as Default,p as OpenCard,d as WithContent,i as WithIcon,l as WithLink,z as __namedExportsOrder,R as default};
