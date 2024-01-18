import{c as a,a as e,n as _,t as n,o as c}from"./vue.esm-bundler-_KtclwrL.js";import{_ as f}from"./_plugin-vue_export-helper-x3n3nnut.js";const u={name:"PopupSuccessRejected",props:{success:{type:Boolean,default:!1},rejected:{type:Boolean,default:!1},message:{type:String,default:"Description"}}},h={class:"relative z-10","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},g=e("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),x={class:"fixed inset-0 z-10 w-screen overflow-y-auto"},v={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},w={class:"nds-dialog-confirmation relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all"},y={class:"bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4"},b={class:"sm:flex sm:items-start m-4"},C={class:"flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-white sm:mx-0 sm:h-12 sm:w-12"},S={key:0,width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg"},j=e("g",{"clip-path":"url(#clip0_33_1194)"},[e("path",{d:"M31.9987 5.33398C17.2787 5.33398 5.33203 17.2807 5.33203 32.0007C5.33203 46.7207 17.2787 58.6673 31.9987 58.6673C46.7187 58.6673 58.6654 46.7207 58.6654 32.0007C58.6654 17.2807 46.7187 5.33398 31.9987 5.33398ZM24.772 43.4407L15.1987 33.8673C14.1587 32.8273 14.1587 31.1473 15.1987 30.1073C16.2387 29.0673 17.9187 29.0673 18.9587 30.1073L26.6654 37.7873L45.012 19.4407C46.052 18.4007 47.732 18.4007 48.772 19.4407C49.812 20.4807 49.812 22.1607 48.772 23.2007L28.532 43.4407C27.5187 44.4807 25.812 44.4807 24.772 43.4407Z",fill:"#1EC759"})],-1),P=e("defs",null,[e("clipPath",{id:"clip0_33_1194"},[e("rect",{width:"64",height:"64",fill:"white"})])],-1),V=[j,P],B={key:1,width:"84",height:"84",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg"},k=e("path",{d:"M31.9997 5.33398C17.2797 5.33398 5.33301 17.2807 5.33301 32.0007C5.33301 46.7207 17.2797 58.6673 31.9997 58.6673C46.7197 58.6673 58.6663 46.7207 58.6663 32.0007C58.6663 17.2807 46.7197 5.33398 31.9997 5.33398ZM31.9997 34.6673C30.533 34.6673 29.333 33.4673 29.333 32.0007V21.334C29.333 19.8673 30.533 18.6673 31.9997 18.6673C33.4663 18.6673 34.6663 19.8673 34.6663 21.334V32.0007C34.6663 33.4673 33.4663 34.6673 31.9997 34.6673ZM34.6663 45.334H29.333V40.0007H34.6663V45.334Z",fill:"#F7A738"},null,-1),D=[k],R={class:"mt-3 sm:ml-4 sm:mt-1 sm:text-left"},M={class:"mt-3"},L={class:"text-sm text-black"},Z=e("div",{class:"bg-gray-50 px-4 py-6 sm:flex sm:flex-row-reverse sm:px-6"},[e("button",{class:"btn-nds btn-nds--primary btn-nds--medium w-[90px]"},"OK")],-1);function z(F,N,s,H,O,A){return c(),a("div",h,[g,e("div",x,[e("div",v,[e("div",w,[e("div",y,[e("div",b,[e("div",C,[s.success?(c(),a("svg",S,V)):(c(),a("svg",B,D))]),e("div",R,[e("h3",{class:_(`${s.success?"text-green-500":"text-yellow-500"} text-2xl font-bold leading-6`),id:"modal-title"},n(s.success?"Success!":"Rejected"),3),e("div",M,[e("p",L,n(s.message),1)])])])]),Z])])])])}const E=f(u,[["render",z]]);u.__docgenInfo={displayName:"PopupSuccessRejected",exportName:"default",description:"",tags:{},props:[{name:"success",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"rejected",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"message",type:{name:"string"},defaultValue:{func:!1,value:'"Description"'}}],sourceFiles:["D:/Catatanprogammer/Frontend-developer/Learning Path/Storybook/Storybook for platform/tailwind/nds-base-ui-lib/src/components/VueBased/Popup/PopupSuccessRejected/index.vue"]};const $={title:"Vue Based/Section/Popup/Popup Success and Rejected",component:E,tags:["autodocs"]},t={args:{success:!0,message:"Description"}},o={args:{rejected:!0,message:"Description"}};var i,l,r;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    success: true,
    message: 'Description'
  }
}`,...(r=(l=t.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};var d,p,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    rejected: true,
    message: 'Description'
  }
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const q=["Success","Rejected"];export{o as Rejected,t as Success,q as __namedExportsOrder,$ as default};