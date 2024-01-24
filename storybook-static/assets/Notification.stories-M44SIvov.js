import{d as h,j as e,t as r,n as y,o as w}from"./vue.esm-bundler-yRObWDPG.js";import{_ as k}from"./_plugin-vue_export-helper-x3n3nnut.js";const g={name:"NdsNotification",props:{title:{type:String,required:!0,default:"Session Expired"},message:{type:String,required:!0,default:"Make sure you know how these changes affect you."},type:{type:String,default:"success"}}},_=e("div",{class:"flex items-center py-1"},[e("svg",{class:"fill-current h-6 w-6 text-teal-500 mr-4 text-white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[e("path",{d:"M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"})])],-1),x={class:"font-bold text-white"},S={class:"text-sm text-white"},v=e("button",{class:"bg-transparent text-white ms-auto -mx-1.5 -my-1.5","aria-label":"Close"},[e("span",{class:"sr-only"},"Close"),e("svg",{class:"w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})])],-1);function M(b,C,a,V,z,B){return w(),h("div",{class:y(`nds-toast nds-toast__${a.type}`),role:"alert"},[_,e("div",null,[e("p",x,r(a.title),1),e("p",S,r(a.message),1)]),v],2)}const N=k(g,[["render",M]]);g.__docgenInfo={displayName:"NdsNotification",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"},required:!0,defaultValue:{func:!1,value:'"Session Expired"'}},{name:"message",type:{name:"string"},required:!0,defaultValue:{func:!1,value:'"Make sure you know how these changes affect you."'}},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:'"success"'}}],sourceFiles:["D:/Catatanprogammer/Frontend-developer/Learning Path/Storybook/Storybook for platform/tailwind/nds-base-ui-lib/src/components/VueBased/Notification/index.vue"]};const F={title:"Documentations/Component/Notification",component:N,tags:["autodocs"],argTypes:{backgroundColor:{control:"color"},onClick:{},size:{control:{type:"select"},options:["small","medium","large"]}}},s={args:{message:"Make sure you know how these changes affect you.",title:"Success Something",type:"success"}},t={args:{message:"Make sure you know how these changes affect you.",title:"Failed Something",type:"error"}},o={args:{message:"Make sure you know how these changes affect you.",title:"info Something",type:"info"}};var n,i,c;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    message: 'Make sure you know how these changes affect you.',
    title: 'Success Something',
    type: 'success'
  }
}`,...(c=(i=s.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var u,l,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    message: 'Make sure you know how these changes affect you.',
    title: 'Failed Something',
    type: 'error'
  }
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,p,f;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    message: 'Make sure you know how these changes affect you.',
    title: 'info Something',
    type: 'info'
  }
}`,...(f=(p=o.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const D=["success","error","info"];export{D as __namedExportsOrder,F as default,t as error,o as info,s as success};
