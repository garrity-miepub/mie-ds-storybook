import{Y as B,a8 as G,a9 as J,a1 as Q}from"./props-D-11tLXy.js";import{h as R}from"./html-DH_r2Hsk.js";const n=({media:e=null,showMedia:a=!0,primaryTitle:o="",showPrimaryTitle:r=!0,secondaryTitle:s="",showSecondaryTitle:T=!0,supportingText:m="",showSupportingText:f=!0,actions:C=null,showActions:q=!0,leadingUtilityIcon:l="none",utilityHeader:w="",utilityContent:x="",utilityIcons:O=[],showUtility:Y=!0})=>{const c={user:'<i class="fa fa-user"></i>',check:'<i class="fa fa-check-circle"></i>',warning:'<i class="fa fa-exclamation-triangle"></i>'},j=r&&o||T&&s||f&&m;let t='<div class="ds-card">';return a&&e&&(t+=`<div class="media">${e}</div>`),j&&(t+='<div class="content">',r&&o&&(t+=`<h3 class="primary-title">${o}</h3>`),T&&s&&(t+=`<h4 class="secondary-title">${s}</h4>`),f&&m&&(t+=`<p class="supporting-text">${m}</p>`),t+="</div>"),Y&&(t+='<div class="utility">',l!=="none"&&c[l]&&(t+=`
            <button type="button" class="button tertiary icon-only" aria-label="Utility icon for ${l}">
              <span class="icon">${c[l]}</span>
            </button>
          `),t+='<div class="content">',w&&(t+=`<div class="header">${w}</div>`),x&&(t+=`<div class="content-row">${x}</div>`),t+="</div>",t+='<div class="trailing-icon-group">',O.forEach(b=>{c[b]&&(t+=`
                <button type="button" class="button tertiary icon-only" aria-label="Icon button for ${b}">
                <span class="icon">${c[b]}</span>
                </button>
            `)}),t+="</div>",t+="</div>"),q&&C&&(t+=`<div class="actions">${C}</div>`),t+="</div>",t};function i(e,a){let o=B(a,"content",8,"");var r=G(),s=J(r);R(s,o),Q(e,r)}i.__docgen={version:3,name:"CardContent.svelte",data:[{name:"content",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const X={title:"HTML Components/Card",tags:["autodocs"],argTypes:{media:{control:"text",description:"HTML for the media section of the card",defaultValue:null,table:{category:"Media"}},showMedia:{control:"boolean",description:"Toggle visibility of media section",defaultValue:!0,table:{category:"Media"}},primaryTitle:{control:"text",description:"The primary title of the card",defaultValue:"",table:{category:"Titles"}},showPrimaryTitle:{control:"boolean",description:"Toggle visibility of the primary title",defaultValue:!0,table:{category:"Titles"}},secondaryTitle:{control:"text",description:"The secondary title of the card",defaultValue:"",table:{category:"Titles"}},showSecondaryTitle:{control:"boolean",description:"Toggle visibility of the secondary title",defaultValue:!0,table:{category:"Titles"}},supportingText:{control:"text",description:"The supporting text of the card",defaultValue:"",table:{category:"Text"}},showSupportingText:{control:"boolean",description:"Toggle visibility of supporting text",defaultValue:!0,table:{category:"Text"}},actions:{control:"text",description:"HTML for the action buttons at the bottom of the card",defaultValue:null,table:{category:"Actions"}},showActions:{control:"boolean",description:"Toggle visibility of the action buttons",defaultValue:!0,table:{category:"Actions"}},leadingUtilityIcon:{control:"select",options:["none","user","check","warning"],description:"Leading utility icon",defaultValue:"none",table:{category:"Utility"}},utilityHeader:{control:"text",description:"The utility header",defaultValue:"",table:{category:"Utility"}},utilityContent:{control:"text",description:"The utility content row",defaultValue:"",table:{category:"Utility"}},utilityIcons:{control:"array",options:["user","check","warning"],description:"Trailing utility icons",defaultValue:[],table:{category:"Utility"}},showUtility:{control:"boolean",description:"Toggle visibility of the utility section",defaultValue:!0,table:{category:"Utility"}}},parameters:{docs:{source:{language:"html",transform:(e,a)=>n(a.args)}}}},u={render:e=>({Component:i,props:{content:n(e)}}),args:{media:'<img src="https://fastly.picsum.photos/id/204/936/204.jpg?hmac=Bqz3HnPUeEFJ6DyzhRugEziG6DkOLFY5Hqg2cdVn3FQ" alt="Placeholder" />',primaryTitle:"Primary Title",secondaryTitle:"Secondary Title",supportingText:"This is some supporting text for the card.",actions:`
          <button type="button" class="button tertiary"><label>Cancel</label></button>
          <button type="button" class="button primary"><label>Save</label></button>
        `,showMedia:!0,showPrimaryTitle:!0,showSecondaryTitle:!0,showSupportingText:!0,showActions:!0,leadingUtilityIcon:"user",utilityHeader:"Utility Header",utilityContent:"Utility Content",utilityIcons:["check","warning"],showUtility:!0}},d={render:e=>({Component:i,props:{content:n(e)}}),args:{media:'<img src="https://placekitten.com/300/200" alt="Card Media" style="width: 100%; height: auto;" />',primaryTitle:"Card with Media",supportingText:"This card includes an image."}},p={render:e=>({Component:i,props:{content:n(e)}}),args:{primaryTitle:"Card with Actions",supportingText:"This card has some actions.",actions:'<button class="button primary">Action 1</button> <button class="button secondary">Action 2</button>'}},y={render:e=>({Component:i,props:{content:n(e)}}),args:{primaryTitle:"Card with Utility",supportingText:"This card has a utility section",leadingUtilityIcon:"user",utilityHeader:"Utility Header",utilityContent:"Utility Content"}},g={render:e=>({Component:i,props:{content:n(e)}}),args:{primaryTitle:"Card with utility icons",supportingText:"This card has a utility section with icons",utilityIcons:["check","warning"]}},h={render:e=>({Component:i,props:{content:n(e)}}),args:{media:'<img src="https://placekitten.com/300/200" alt="Card Media" style="width: 100%; height: auto;" />',primaryTitle:"Full Card Example",secondaryTitle:"Subtitle",supportingText:"This is a card with media, supporting text, utility and actions.",leadingUtilityIcon:"warning",utilityHeader:"Utility Header",utilityContent:"Some useful content.",utilityIcons:["user","check"],actions:'<button class="button primary">Action 1</button> <button class="button secondary">Action 2</button>'}};var H,v,M;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createCardHTML(args)
    }
  }),
  args: {
    media: '<img src="https://fastly.picsum.photos/id/204/936/204.jpg?hmac=Bqz3HnPUeEFJ6DyzhRugEziG6DkOLFY5Hqg2cdVn3FQ" alt="Placeholder" />',
    primaryTitle: 'Primary Title',
    secondaryTitle: 'Secondary Title',
    supportingText: 'This is some supporting text for the card.',
    actions: \`
          <button type="button" class="button tertiary"><label>Cancel</label></button>
          <button type="button" class="button primary"><label>Save</label></button>
        \`,
    showMedia: true,
    showPrimaryTitle: true,
    showSecondaryTitle: true,
    showSupportingText: true,
    showActions: true,
    leadingUtilityIcon: 'user',
    utilityHeader: 'Utility Header',
    utilityContent: 'Utility Content',
    utilityIcons: ['check', 'warning'],
    showUtility: true
  }
}`,...(M=(v=u.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};var U,k,L;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createCardHTML(args)
    }
  }),
  args: {
    media: '<img src="https://placekitten.com/300/200" alt="Card Media" style="width: 100%; height: auto;" />',
    primaryTitle: 'Card with Media',
    supportingText: 'This card includes an image.'
  }
}`,...(L=(k=d.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var S,V,A;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createCardHTML(args)
    }
  }),
  args: {
    primaryTitle: 'Card with Actions',
    supportingText: 'This card has some actions.',
    actions: '<button class="button primary">Action 1</button> <button class="button secondary">Action 2</button>'
  }
}`,...(A=(V=p.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var I,$,F;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createCardHTML(args)
    }
  }),
  args: {
    primaryTitle: 'Card with Utility',
    supportingText: 'This card has a utility section',
    leadingUtilityIcon: 'user',
    utilityHeader: 'Utility Header',
    utilityContent: 'Utility Content'
  }
}`,...(F=($=y.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var E,P,W;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createCardHTML(args)
    }
  }),
  args: {
    primaryTitle: 'Card with utility icons',
    supportingText: 'This card has a utility section with icons',
    utilityIcons: ['check', 'warning']
  }
}`,...(W=(P=g.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var z,D,_;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createCardHTML(args)
    }
  }),
  args: {
    media: '<img src="https://placekitten.com/300/200" alt="Card Media" style="width: 100%; height: auto;" />',
    primaryTitle: 'Full Card Example',
    secondaryTitle: 'Subtitle',
    supportingText: 'This is a card with media, supporting text, utility and actions.',
    leadingUtilityIcon: 'warning',
    utilityHeader: 'Utility Header',
    utilityContent: 'Some useful content.',
    utilityIcons: ['user', 'check'],
    actions: '<button class="button primary">Action 1</button> <button class="button secondary">Action 2</button>'
  }
}`,...(_=(D=h.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};const Z=["Default","WithMedia","WithActions","WithUtility","WithTrailingUtilityIcons","FullCard"];export{u as Default,h as FullCard,p as WithActions,d as WithMedia,g as WithTrailingUtilityIcons,y as WithUtility,Z as __namedExportsOrder,X as default};
