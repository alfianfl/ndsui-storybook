import{r as y,e as _,c as v,a,t as x,n as S,o as V}from"./vue.esm-bundler-_KtclwrL.js";import{_ as h}from"./_plugin-vue_export-helper-x3n3nnut.js";const g={name:"DateInput",props:{label:{type:String,required:!0,default:"No Rekening"},hint:{type:String,default:""},value:{type:String,default:""},name:{type:String,default:""},suffix:{type:String,default:""},prefix:{type:String,default:""},type:{type:String,default:"text"},maxlength:{type:Number,default:null},disable:{type:Boolean,default:!1},required:{type:Boolean,default:!1}},setup(e){return e=y(e),{classes:_(()=>e.disable?"bg-gray-200":!e.disable&&e.required?"bg-yellow-100":"")}}},D={class:"md:flex md:items-center mb-6"},q={class:"text-subtitle-2 mr-10"},I={class:"md:w-2/3"},N=["disabled","name"];function k(e,w,r,b,F,R){return V(),v("div",D,[a("div",null,[a("label",q,[a("b",null,x(r.label),1)])]),a("div",I,[a("input",{disabled:r.disable,name:r.name,ref:"textInput",autocomplete:"off",class:S(`${b.classes} appearance-none border-2 border-gray-200 rounded w-full py-1 px-4 text-black-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-800`),id:"inline-full-name",type:"date",value:"Jane Doe"},null,10,N)])])}const B=h(g,[["render",k]]);g.__docgenInfo={displayName:"DateInput",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0,defaultValue:{func:!1,value:"'No Rekening'"}},{name:"hint",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"value",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"name",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"suffix",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"prefix",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:"'text'"}},{name:"maxlength",type:{name:"number"},defaultValue:{func:!1,value:"null"}},{name:"disable",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["D:/Catatanprogammer/Frontend-developer/Learning Path/Storybook/Storybook for platform/tailwind/nds-base-ui-lib/src/components/VueBased/FormNds/DateInput/index.vue"]};const z={title:"Vue Based/Component/Input Field/Input Date",component:B,tags:["autodocs"]},t={args:{disable:!0}},n={args:{required:!0}},l={};var s,u,o;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    disable: true
  }
}`,...(o=(u=t.parameters)==null?void 0:u.docs)==null?void 0:o.source}}};var d,i,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    required: true
  }
}`,...(c=(i=n.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var f,m,p;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(p=(m=l.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const J=["Disabled","Required","Normal"];export{t as Disabled,l as Normal,n as Required,J as __namedExportsOrder,z as default};
