import{ar as C,as as y,a0 as T}from"./store-DIQEHCOu.js";import{p as x}from"./props-DO17Jqv7.js";import{h as S}from"./html-Dgl4xvzF.js";const d=({currentPage:e=1,totalPages:n=10,...c})=>{let a;const p=()=>{e>1&&(e-=1,s())},b=()=>{e<n&&(e+=1,s())},P=t=>{e=t,s()},k=(t,o)=>Array.from({length:o-t+1},(H,$)=>t+$),s=()=>{if(a||(a=document.getElementById("pagination")),!a)return;const t=k(1,n);a.innerHTML=`
         <ul class="pagination">
              <li class="page-item" ${e===1?"disabled":""}>
                <button class="page-link" onclick="handlePrevious()" aria-label="Previous">
                   <i class="fas fa-chevron-left size-4"></i>
                  <span class="hidden sm:block">Previous</span>
                </button>
              </li>
            ${t.map(o=>`
                <li class="page-item" ${o===e?'class="active"':""}>
                  <button class="page-link" onclick="handlePageClick(${o})">
                    ${o}
                  </button>
              </li>
            `).join("")}
            <li class="page-item"  ${e===n?"disabled":""}>
                <button class="page-link" onclick="handleNext()" aria-label="Next">
                  <span class="hidden sm:block">Next</span>
                   <i class="fas fa-chevron-right size-4"></i>
                </button>
            </li>
         </ul>
        `};return setTimeout(s,0),`
    <nav aria-label="Pagination"  ${Object.entries(c).map(([t,o])=>`${t}="${o}"`).join(" ")}>
          <div id="pagination"></div>
     </nav>
        <script>
             let currentPage = ${e};
           let totalPages = ${n};
            const handlePrevious = () => {
                  ${p.toString()}
                  handlePrevious();
              };
          
            const handleNext = () => {
                ${b.toString()}
                handleNext();
            };
        
            const handlePageClick = (page) => {
                 ${P.toString()}
                handlePageClick(page)
            };
            function render() {
              ${s.toString()}
              render();
             }
        <\/script>
    `};function l(e,n){let c=x(n,"content",8,"");var a=C(),p=y(a);S(p,c),T(e,a)}l.__docgen={version:3,name:"PaginationContent.svelte",data:[{name:"content",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const _={title:"HTML Components/Pagination",component:l,tags:["autodocs"],argTypes:{currentPage:{control:"number",description:"Current page number"},totalPages:{control:"number",description:"Total number of pages"}},parameters:{docs:{description:{component:"**IN PROGRESS** This component is currently under development and is not yet complete. For a fully functional version, please refer to the Svelte implementation."},source:{language:"html",transform:(e,n)=>d(n.args)}}}},r={render:e=>({Component:l,props:{content:d(e)}}),args:{currentPage:1,totalPages:10}},i={render:e=>({Component:l,props:{content:d(e)}}),args:{currentPage:6,totalPages:20}};var m,g,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createPaginationHTML(args)
    }
  }),
  args: {
    currentPage: 1,
    totalPages: 10
  }
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var f,h,v;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createPaginationHTML(args)
    }
  }),
  args: {
    currentPage: 6,
    totalPages: 20
  }
}`,...(v=(h=i.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const E=["Default","Truncated"];export{r as Default,i as Truncated,E as __namedExportsOrder,_ as default};
