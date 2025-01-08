import{ar as te,as as ae,a0 as re}from"./store-DKrw96s8.js";import{p as se}from"./props-WZpD2vyg.js";import{h as oe}from"./html-BjPEsh1c.js";const n=({label:e="",ariaLabel:r="",leadingIcon:o="none",trailingIcon:s="none",state:a="default",helperText:T="",value:l="",focused:h=!1})=>{const C={user:'<i class="fa fa-user"></i>',check:'<i class="fa fa-check-circle"></i>',warning:'<i class="fa fa-exclamation-triangle"></i>'},Z=["ds-input",a!=="default"?a:"",h||l?"ds-input--has-value":""].filter(Boolean).join(" "),ee=["ds-helper-text",a!=="default"?a:""].filter(Boolean).join(" "),L=o!=="none",H=s!=="none",ne=["ds-input-container",L||H?"has-icon":""].filter(Boolean).join(" ");return`
        <div class="ds-input-wrapper" data-focused="${h}" data-value="${l}">
            <div class="${ne}">
                ${L?`
                    <div class="ds-input-icon leading ${a}">${C[o]}</div>
                    `:""}
                <input
                    class="${Z}"
                    ${a==="disabled"?"disabled":""}
                     value="${l}"
                     aria-label="${r||e}"
                  />
                  ${e?`
                     <label class="ds-input-label ${h||l?"floating":""} ${a==="disabled"?"disabled":""}">
                      ${e}
                     </label>
                    `:""}
                    ${H?`
                        <div class="ds-input-icon trailing ${a}">${C[s]}</div>
                    `:""}
            </div>
            ${T?`<div class="${ee}">${T}</div>`:""}
        </div>
    `};function t(e,r){let o=se(r,"content",8,"");var s=te(),a=ae(s);oe(a,o),re(e,s)}t.__docgen={version:3,name:"InputContent.svelte",data:[{name:"content",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const ue={title:"HTML Components/Input",tags:["autodocs"],argTypes:{label:{control:"text",description:"Label for the input field",defaultValue:""},ariaLabel:{control:"text",description:"Aria label for the input field",defaultValue:""},leadingIcon:{control:"select",options:["none","user","check","warning"],description:"Leading icon of the input",defaultValue:"none"},trailingIcon:{control:"select",options:["none","user","check","warning"],description:"Trailing icon of the input",defaultValue:"none"},state:{control:"select",options:["default","success","warning","danger","disabled"],description:"State of the input",defaultValue:"default"},helperText:{control:"text",description:"Helper text for the input",defaultValue:""},value:{control:"text",description:"The value of the input",defaultValue:""},focused:{control:"boolean",description:"Whether the input is focused or not",defaultValue:!1}},parameters:{docs:{description:{component:"**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases."},source:{language:"html",transform:(e,r)=>n(r.args)}}}},p={render:e=>({Component:t,props:{content:n(e)}}),args:{label:"Input label"}},c={render:e=>({Component:t,props:{content:n(e)}}),args:{label:"Input label",leadingIcon:"user"}},i={render:e=>({Component:t,props:{content:n(e)}}),args:{label:"Input label",trailingIcon:"user"}},u={render:e=>({Component:t,props:{content:n(e)}}),args:{label:"Input label",helperText:"Helper text"}},d={render:e=>({Component:t,props:{content:n(e)}}),args:{label:"Input label",focused:!0}},g={render:e=>({Component:t,props:{content:n(e)}}),args:{label:"Input label",state:"success",helperText:"This is a successful input"}},m={render:e=>({Component:t,props:{content:n(e)}}),args:{label:"Input label",state:"warning",helperText:"This is a warning input"}},b={render:e=>({Component:t,props:{content:n(e)}}),args:{label:"Input label",state:"danger",helperText:"This is a danger input"}},f={render:e=>({Component:t,props:{content:n(e)}}),args:{label:"Input label",state:"disabled",helperText:"This input is disabled"}},I={render:e=>({Component:t,props:{content:n(e)}}),args:{label:"Input label",value:"some input value"}};var x,M,v;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createInputHTML(args)
    }
  }),
  args: {
    label: 'Input label'
  }
}`,...(v=(M=p.parameters)==null?void 0:M.docs)==null?void 0:v.source}}};var $,S,w;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createInputHTML(args)
    }
  }),
  args: {
    label: 'Input label',
    leadingIcon: 'user'
  }
}`,...(w=(S=c.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var V,W,y;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createInputHTML(args)
    }
  }),
  args: {
    label: 'Input label',
    trailingIcon: 'user'
  }
}`,...(y=(W=i.parameters)==null?void 0:W.docs)==null?void 0:y.source}}};var k,D,_;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createInputHTML(args)
    }
  }),
  args: {
    label: 'Input label',
    helperText: 'Helper text'
  }
}`,...(_=(D=u.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var N,j,B;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createInputHTML(args)
    }
  }),
  args: {
    label: 'Input label',
    focused: true
  }
}`,...(B=(j=d.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var E,F,O;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createInputHTML(args)
    }
  }),
  args: {
    label: 'Input label',
    state: 'success',
    helperText: 'This is a successful input'
  }
}`,...(O=(F=g.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var P,R,z;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createInputHTML(args)
    }
  }),
  args: {
    label: 'Input label',
    state: 'warning',
    helperText: 'This is a warning input'
  }
}`,...(z=(R=m.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var A,G,q;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createInputHTML(args)
    }
  }),
  args: {
    label: 'Input label',
    state: 'danger',
    helperText: 'This is a danger input'
  }
}`,...(q=(G=b.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};var J,K,Q;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createInputHTML(args)
    }
  }),
  args: {
    label: 'Input label',
    state: 'disabled',
    helperText: 'This input is disabled'
  }
}`,...(Q=(K=f.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;I.parameters={...I.parameters,docs:{...(U=I.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createInputHTML(args)
    }
  }),
  args: {
    label: 'Input label',
    value: 'some input value'
  }
}`,...(Y=(X=I.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const de=["Default","WithLeadingIcon","WithTrailingIcon","WithHelperText","FocusedInput","SuccessInput","WarningInput","DangerInput","DisabledInput","WithValue"];export{b as DangerInput,p as Default,f as DisabledInput,d as FocusedInput,g as SuccessInput,m as WarningInput,u as WithHelperText,c as WithLeadingIcon,i as WithTrailingIcon,I as WithValue,de as __namedExportsOrder,ue as default};
