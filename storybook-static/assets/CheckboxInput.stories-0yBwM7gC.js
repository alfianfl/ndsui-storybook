import{r as p,f as b,d as g,j as e,n as r,F as x,o as y}from"./vue.esm-bundler-yRObWDPG.js";import{_}from"./_plugin-vue_export-helper-x3n3nnut.js";const m={name:"CheckboxInput",props:{label:{type:String,required:!0,default:"No Rekening"},hint:{type:String,default:""},value:{type:String,default:""},name:{type:String,default:""},suffix:{type:String,default:""},prefix:{type:String,default:""},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1}},setup(a){return a=p(a),{classes:b(()=>({"checkbox-nds cursor-pointer":!0,"checkbox-nds--disabled":a.disabled}))}}},h={class:"flex items-center mb-4"},k=["disabled"],v=e("label",{for:"default-radio-1",class:"ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"},"Nasabah",-1),N={class:"flex items-center"},S=["disabled"],V=e("label",{for:"default-radio-2",class:"ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"},"Non Nasabah",-1);function C(a,B,n,l,F,q){return y(),g(x,null,[e("div",h,[e("input",{type:"checkbox",class:r(l.classes),checked:"",disabled:n.disabled},null,10,k),v]),e("div",N,[e("label",null,[e("input",{type:"checkbox",class:r(l.classes),checked:"",disabled:n.disabled},null,10,S)]),V])],64)}const I=_(m,[["render",C]]);m.__docgenInfo={displayName:"CheckboxInput",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0,defaultValue:{func:!1,value:'"No Rekening"'}},{name:"hint",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"value",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"name",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"suffix",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"prefix",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["D:/Catatanprogammer/Frontend-developer/Learning Path/Storybook/Storybook for platform/tailwind/nds-base-ui-lib/src/components/VueBased/FormNds/CheckboxInput/index.vue"]};const R={title:"Documentations/Component/Input Field/Checkbox Input",component:I,tags:["autodocs"]},t={args:{disabled:!0}},s={};var o,d,u;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var c,i,f;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(f=(i=s.parameters)==null?void 0:i.docs)==null?void 0:f.source}}};const j=["Disabled","Normal"];export{t as Disabled,s as Normal,j as __namedExportsOrder,R as default};