import{p as A,k as s,a4 as F,a0 as q,e as B,a1 as H,Y as T,a2 as P}from"./store-DKrw96s8.js";import{p as _}from"./props-WZpD2vyg.js";import{h as z}from"./html-BjPEsh1c.js";import{b as V}from"./this-DHb84UND.js";import{i as j}from"./lifecycle-C2CMyhQS.js";import{o as O}from"./index-client--l5ENrDD.js";const p=({isOpen:e=!1,email:a="",password:m=""})=>`
    <div class="single-auth d-flex flex-column gap-4" data-is-open="${e}">
        <h3>Sign In</h3>
        <p class="mb-sm-4">By continuing, you agree to our <a href="#" class="ds-link">User Agreement</a> and acknowledge that you understand the <a href="#" class="ds-link">Privacy Policy</a>.</p>
        <div class="d-flex flex-row justify-content-between gap-2 social-media">
            <button type="button" class="button secondary icon-only d-flex flex-fill align-items-center justify-content-center" aria-label="Continue with Google">
                <span class="icon"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" xmlns:xlink="http://www.w3.org/1999/xlink" style="display: block;"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></svg></span>
            </button>
            <button type="button" class="button secondary icon-only d-flex flex-fill align-items-center justify-content-center" aria-label="Continue with Facebook">
                <span class="icon"><i class="fa-brands fa-facebook-f"></i></span>
            </button>
            <button type="button" class="button secondary icon-only d-flex flex-fill align-items-center justify-content-center" aria-label="Continue with Windows">
                <span class="icon"><i class="fa-brands fa-windows"></i></span>
            </button>            
        </div>
        <div class="d-flex flex-column">
            <div class="d-flex align-items-center justify-content-center or-container mt-sm-4 mb-sm-4">
                <span class="or-text">OR</span>
            </div>
            <button type="button" class="button tertiary small mt-sm-2" data-action="toggle-email-form" aria-label="Sign in with email">Sign In With Email</button>
        </div>            
        <div class="email-form flex-column ${e?"is-open":""}">
            <div class="ds-input-wrapper mb-sm-4">
                <div class="ds-input-container">
                <input type="text" class="ds-input" value="${a}" aria-label="Email" data-input="email" data-focused="false" />
                    <label class="ds-input-label" data-label="email">Email</label>
                </div>
            </div>
            <div class="ds-input-wrapper mb-sm-4">
                <div class="ds-input-container">
                <input type="password" class="ds-input" value="${m}" aria-label="Password" data-input="password" data-focused="false" />
                    <label class="ds-input-label" data-label="password">Password</label>
                </div>
            </div>
        </div>
        <div class="d-flex flex-column gap-2">
            <button type="button" class="button primary">Sign In</button>
            <button type="button" class="button primary outline">Register</button>
            <div>
                <a href="#" class="ds-link">Forgot Password</a>
            </div>
        </div>
    </div>
      `;var R=H("<div><!></div>");function h(e,a){A(a,!1);let m=_(a,"content",8,""),t=T();O(()=>{if(!s(t))return;const r=s(t).querySelector('[data-action="toggle-email-form"]'),v=s(t).querySelector(".email-form"),l=s(t).querySelector('[data-input="email"]'),o=s(t).querySelector('[data-input="password"]'),g=s(t).querySelector('[data-label="email"]'),b=s(t).querySelector('[data-label="password"]');r&&r.addEventListener("click",n=>{console.log("clicked"),v&&v.classList.toggle("email-active")});function d(n,i){n.value||n.dataset.focused==="true"?i.classList.add("floating"):i.classList.remove("floating")}function y(n,i){n.dataset.focused="true",d(n,i)}function w(n,i){n.dataset.focused="false",d(n,i)}l&&(l.addEventListener("focus",()=>y(l,g)),l.addEventListener("blur",()=>w(l,g)),l.addEventListener("input",()=>d(l,g))),o&&(o.addEventListener("focus",()=>y(o,b)),o.addEventListener("blur",()=>w(o,b)),o.addEventListener("input",()=>d(o,b)))}),j();var f=R(),M=P(f);z(M,m),V(f,r=>F(t,r),()=>s(t)),q(e,f),B()}h.__docgen={version:3,name:"SingleAuthContent.svelte",data:[{name:"content",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const k=`<script>
    import { onMount } from 'svelte';
    export let content = "";
    let element;
  
    onMount(() => {
        if(!element) return;
        const emailButton = element.querySelector('[data-action="toggle-email-form"]');
        const emailForm = element.querySelector('.email-form');
        const emailInput = element.querySelector('[data-input="email"]');
        const passwordInput = element.querySelector('[data-input="password"]');
        const emailLabel = element.querySelector('[data-label="email"]');
        const passwordLabel = element.querySelector('[data-label="password"]');


        if(emailButton){
            emailButton.addEventListener('click', (event) => {
                console.log("clicked");
              if (emailForm){
                 emailForm.classList.toggle('email-active');
                }
            });
         }
     

      function handleInput (input, label){
          if (input.value || input.dataset.focused === "true"){
            label.classList.add('floating')
          } else {
              label.classList.remove('floating')
          }
      }

    function handleFocus (input, label){
      input.dataset.focused = 'true';
      handleInput(input, label);
    }
  
    function handleBlur (input, label){
         input.dataset.focused = 'false';
         handleInput(input, label);
    }

      if (emailInput){
          emailInput.addEventListener('focus', ()=> handleFocus(emailInput, emailLabel) )
          emailInput.addEventListener('blur', ()=> handleBlur(emailInput, emailLabel))
            emailInput.addEventListener('input', ()=> handleInput(emailInput, emailLabel))
      }
          if (passwordInput){
            passwordInput.addEventListener('focus',  ()=> handleFocus(passwordInput, passwordLabel) )
              passwordInput.addEventListener('blur',  ()=> handleBlur(passwordInput, passwordLabel))
              passwordInput.addEventListener('input',  ()=> handleInput(passwordInput, passwordLabel))
          }
      });
  <\/script>
  
  <div bind:this={element} >
    {@html content}
  </div>`,Y={title:"HTML Components/SingleAuth",tags:["autodocs"],argTypes:{isOpen:{control:"boolean",description:"Show the email form",defaultValue:!1},email:{control:"text",description:"Value of the email",defaultValue:""},password:{control:"text",description:"Value of the password",defaultValue:""}},parameters:{docs:{description:{component:"**IN PROGRESS** Please note that the styling of this component is not yet finalized."}}}},c={render:e=>({Component:h,props:{content:p(e)}}),parameters:{docs:{source:{language:"html",transform:(e,a)=>p(a.args)},story:{source:{language:"svelte",code:k}}}}},u={render:e=>({Component:h,props:{content:p(e)}}),args:{isOpen:!0},parameters:{docs:{source:{language:"html",transform:(e,a)=>p(a.args)},story:{source:{language:"svelte",code:k}}}}};var L,x,S;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createSingleAuthHTML(args)
    }
  }),
  parameters: {
    docs: {
      source: {
        language: 'html',
        transform: (args, context) => {
          return createSingleAuthHTML(context.args);
        }
      },
      story: {
        source: {
          language: 'svelte',
          code: singleAuthContent
        }
      }
    }
  }
}`,...(S=(x=c.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var I,E,C;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createSingleAuthHTML(args)
    }
  }),
  args: {
    isOpen: true
  },
  parameters: {
    docs: {
      source: {
        language: 'html',
        transform: (args, context) => {
          return createSingleAuthHTML(context.args);
        }
      },
      story: {
        source: {
          language: 'svelte',
          code: singleAuthContent
        }
      }
    }
  }
}`,...(C=(E=u.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};const J=["Default","WithEmailForm"];export{c as Default,u as WithEmailForm,J as __namedExportsOrder,Y as default};
