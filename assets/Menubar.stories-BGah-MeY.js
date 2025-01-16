import{ar as A,as as V,a0 as j}from"./store-DIQEHCOu.js";import{p as B}from"./props-DO17Jqv7.js";import{h as F}from"./html-Dgl4xvzF.js";const y=({items:n=[],bookmarks:c=!1,fullUrls:g=!0,profileRadioValue:l="benoit",openMenuIndex:a=null,openSubmenuIndex:o={},...H})=>{let i;const b=e=>{a=a===e?null:e,u()},f=(e,t)=>{o[e]||(o[e]={}),o[e][t]=o[e][t]?null:!0,u()},R=(e,t,r=null)=>{if(e.key==="Escape"){a=null,r!=null&&(o[t][r]=null),u();return}(e.key==="Enter"||e.key===" ")&&(r==null?b(t):f(t,r))},S=e=>{var t,r;return e.type==="separator"?'<div class="menubar__separator"></div>':e.type==="sub"?`
                    <button
                         class="menubar__sub-trigger"
                        aria-haspopup="true"
                        aria-expanded=${((t=o[e.menuIndex])==null?void 0:t[e.subIndex])||!1}
                        onkeydown="handleKeyDown(event, ${e.menuIndex}, ${e.subIndex})"
                        onclick="toggleSubmenu(${e.menuIndex}, ${e.subIndex})"
                        >${e.title}</button>
                    ${(r=o[e.menuIndex])!=null&&r[e.subIndex]?`
                     <ul class="menubar__sub-dropdown">
                         ${e.items.map(s=>`<li class="menubar__sub-dropdown-item">
                          <button class="menu-item" role="menuitem">${s.title}</button>
                          </li>`).join("")}
                     </ul>`:""}
                 `:e.type==="checkbox"?`
                  <label class="menu-checkbox-item" role="menuitemcheckbox">
                      <input type="checkbox" ${e.bindValue?"checked":""} onchange="this.dataset.bindValue = this.checked;render()"  />${e.title}
                  </label>
                 `:e.type==="radioGroup"?`
                     <div class="radio-group" role="radiogroup">
                         ${e.items.map(s=>`
                          <label class="radio-item" role="menuitemradio">
                              <input type="radio" onchange="this.dataset.value = this.value;render()"  name="profileRadio"  value="${s.value}" ${s.value==l?"checked":""} />${s.title}
                           </label>
                        `).join("")}
                     </div>
                 `:`
                 <button class="menu-item" role="menuitem">
                     ${e.title}
                      ${e.shortcut?`<span class="menu-shortcut">${e.shortcut}</span>`:""}
                </button>
                 `},u=()=>{i||(i=document.getElementById("menubar")),i&&(i.innerHTML=`
                <ul class="menubar__list">
                    ${n.map((e,t)=>`
                      <li class="menubar__item">
                           <button
                                 class="menubar__trigger"
                                aria-haspopup="true"
                                aria-expanded=${a===t}
                                onkeydown="handleKeyDown(event, ${t})"
                                onclick="toggleMenu(${t})"
                             >${e.title}</button>
                        ${a===t?`
                         <ul class="menubar__dropdown">
                             ${e.items.map((r,s)=>S({...r,menuIndex:t,subIndex:s})).join("")}
                         </ul>
                         `:""}
                       </li>
                    `).join("")}
                </ul>
            `,Object.values(i.querySelectorAll('.menu-checkbox-item input[type="checkbox"]')).forEach(e=>{e instanceof HTMLInputElement&&e.dataset.bindValue!=null&&(e.checked=e.dataset.bindValue=="true")}),Object.values(i.querySelectorAll('.radio-item input[type="radio"]')).forEach(e=>{e instanceof HTMLElement&&e.dataset.value!=null&&(l=e.dataset.value)}))};let E=`
         <nav class="menubar" id="menubar" ${Object.entries(H).map(([e,t])=>`${e}="${t}"`).join(" ")}>
         </nav>
         <script>
            window.toggleMenu =  ${b.toString()};
             window.toggleSubmenu =  ${f.toString()};
             window.handleKeyDown =  ${R.toString()};
         <\/script>
         `;return u(),setTimeout(u,0),E};function h(n,c){let g=B(c,"content",8,"");var l=A(),a=V(l);F(a,g),j(n,l)}h.__docgen={version:3,name:"MenubarContent.svelte",data:[{name:"content",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const P={title:"HTML Components/Menubar",tags:["autodocs"],argTypes:{items:{control:"object"}},parameters:{docs:{description:{component:"**IN PROGRESS** This component is currently under development and is not yet complete. For a fully functional version, please refer to the Svelte implementation."},source:{language:"html",transform:(n,c)=>y(c.args)}}}},p={render:n=>({Component:h,props:{content:y(n)}})},d={render:n=>({Component:h,props:{content:y(n)}}),args:{items:[{title:"View",items:[{type:"checkbox",title:"Always Show Bookmarks Bar",bindValue:!1},{type:"checkbox",title:"Always Show Full URLs",bindValue:!0},{type:"separator"},{title:"Reload",shortcut:"⌘R",inset:!0},{title:"Force Reload",shortcut:"⇧⌘R",inset:!0},{type:"separator"},{title:"Toggle Fullscreen",inset:!0},{type:"separator"},{title:"Hide Sidebar",inset:!0}]}]}},m={render:n=>({Component:h,props:{content:y(n)}}),args:{items:[{title:"Profiles",items:[{type:"radioGroup",items:[{title:"Andy",value:"andy"},{title:"Benoit",value:"benoit"},{title:"Luis",value:"Luis"}]},{type:"separator"},{title:"Edit...",inset:!0},{type:"separator"},{title:"Add Profile...",inset:!0}]}]}};var k,$,v;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createMenubarHTML(args)
    }
  })
}`,...(v=($=p.parameters)==null?void 0:$.docs)==null?void 0:v.source}}};var w,_,M;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createMenubarHTML(args)
    }
  }),
  args: {
    items: [{
      title: 'View',
      items: [{
        type: 'checkbox',
        title: 'Always Show Bookmarks Bar',
        bindValue: false
      }, {
        type: 'checkbox',
        title: 'Always Show Full URLs',
        bindValue: true
      }, {
        type: 'separator'
      }, {
        title: 'Reload',
        shortcut: '⌘R',
        inset: true
      }, {
        title: 'Force Reload',
        shortcut: '⇧⌘R',
        inset: true
      }, {
        type: 'separator'
      }, {
        title: 'Toggle Fullscreen',
        inset: true
      }, {
        type: 'separator'
      }, {
        title: 'Hide Sidebar',
        inset: true
      }]
    }]
  }
}`,...(M=(_=d.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var L,T,C;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createMenubarHTML(args)
    }
  }),
  args: {
    items: [{
      title: 'Profiles',
      items: [{
        type: 'radioGroup',
        items: [{
          title: 'Andy',
          value: "andy"
        }, {
          title: 'Benoit',
          value: "benoit"
        }, {
          title: 'Luis',
          value: "Luis"
        }]
      }, {
        type: 'separator'
      }, {
        title: 'Edit...',
        inset: true
      }, {
        type: 'separator'
      }, {
        title: 'Add Profile...',
        inset: true
      }]
    }]
  }
}`,...(C=(T=m.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};const K=["Default","WithCheckboxes","WithRadioGroups"];export{p as Default,d as WithCheckboxes,m as WithRadioGroups,K as __namedExportsOrder,P as default};
