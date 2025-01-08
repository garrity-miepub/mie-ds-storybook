import{Y as q,a8 as P,a9 as S,a1 as I}from"./props-D-11tLXy.js";import{h as $}from"./html-DH_r2Hsk.js";function l(e,n){let o=q(n,"content",8,"");var i=P(),c=S(i);$(c,o),I(e,i)}l.__docgen={version:3,name:"AlertContent.svelte",data:[{name:"content",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const m=({type:e="informative",icon:n="fa-info-circle",heading:o="Informative Alert",content:i="This is an informative alert.",link:c="Learn more",linkPath:T="#"})=>`
    <div class="${`ds-alert--${e}`}" role="alert" aria-label="alert text">
      <div class="ds-col--1">
        <span class="ds-icon--info--filled" role="img" aria-label="${e} icon" >
          <i class="fas ${n}"></i>
        </span>
      </div>
      <div class="ds-col--10">
        <span class="label">${o}</span>
        <span>${i}</span>
        <span><a href="${T}">${c}</a></span>
      </div>
    </div>
  `,W={title:"HTML Components/Alert",component:l,tags:["autodocs"],argTypes:{type:{control:"select",options:["informative","warning","success","danger"],description:"Type of the alert"},icon:{control:"text",description:"Icon class for the alert"},heading:{control:"text",description:"Heading text of the alert"},content:{control:"text",description:"Content text of the alert"},link:{control:"text",description:"Link text of the alert"},linkPath:{control:"text",description:"Link path (href) of the alert"}},render:e=>({Component:l,props:{content:m(e)}}),parameters:{docs:{source:{transform:(e,n)=>m(n.args)}}}},a={args:{type:"informative",icon:"fa-info-circle",heading:"Informative Alert",content:"This is an informative alert. Quis mihi dabit adquiescere in te? quis dabit mihi, ut venias in cor meum et inebries illud.",link:"Informative link",linkPath:"#"}},t={args:{type:"warning",icon:"fa-exclamation-triangle",heading:"Warning Alert",content:"This is a warning alert. Ed tamen sine me loqui apud misericordiam tuam, me terram et cinerem,sine tamen loqui, quoniam ecce misericordia tua est.",link:"Warning link",linkPath:"#"}},r={args:{type:"success",icon:"fa-check-circle",heading:"Success Alert",content:"This is a success alert. Post et ridere coepi, dormiens primo, deinde vigilans. hoc enim de me mihi indicatum est et credidi, quoniam sic videmus alios infantes; namista mea non memini",link:"Success link",linkPath:"#"}},s={args:{type:"danger",icon:"fa-exclamation-circle",heading:"Danger Alert",content:"This is an error alert. Nonne ab infantia huc pergens veni in pueritiam? vel potius ipsa in me venit et successit infantiae?",link:"Danger link",linkPath:"#"}};var d,p,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    type: 'informative',
    icon: 'fa-info-circle',
    heading: 'Informative Alert',
    content: 'This is an informative alert. Quis mihi dabit adquiescere in te? quis dabit mihi, ut venias in cor meum et inebries illud.',
    link: 'Informative link',
    linkPath: '#'
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,f,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    icon: 'fa-exclamation-triangle',
    heading: 'Warning Alert',
    content: 'This is a warning alert. Ed tamen sine me loqui apud misericordiam tuam, me terram et cinerem,sine tamen loqui, quoniam ecce misericordia tua est.',
    link: 'Warning link',
    linkPath: '#'
  }
}`,...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var v,k,y;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    type: 'success',
    icon: 'fa-check-circle',
    heading: 'Success Alert',
    content: 'This is a success alert. Post et ridere coepi, dormiens primo, deinde vigilans. hoc enim de me mihi indicatum est et credidi, quoniam sic videmus alios infantes; namista mea non memini',
    link: 'Success link',
    linkPath: '#'
  }
}`,...(y=(k=r.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var x,A,b;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    type: 'danger',
    icon: 'fa-exclamation-circle',
    heading: 'Danger Alert',
    content: 'This is an error alert. Nonne ab infantia huc pergens veni in pueritiam? vel potius ipsa in me venit et successit infantiae?',
    link: 'Danger link',
    linkPath: '#'
  }
}`,...(b=(A=s.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};const _=["Informative","Warning","Success","Danger"];export{s as Danger,a as Informative,r as Success,t as Warning,_ as __namedExportsOrder,W as default};
