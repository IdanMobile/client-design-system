import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{R as J}from"./index-DCXu2c-y.js";import{B as K}from"./Button-DoEnHtwV.js";import{C as Q}from"./CircularProgress-DXkKEIgb.js";import{S as F}from"./star-DL9v8gqC.js";import"./DefaultPropsProvider-Dvarb5rE.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-qaOHKnqS.js";import"./useTimeout-BCS2DETX.js";import"./useForkRef-BdVMMcKE.js";import"./useEventCallback-O7DVlRIu.js";import"./isFocusVisible-B8k4qzLc.js";const c=J.forwardRef(({onClick:N,onHover:W,isDisabled:l=!1,isLoading:m=!1,children:_,sx:E={},className:H,type:u="text",size:e="md",width:U="compact"},M)=>{const p=e==="lg"?"var(--dimension-24---1-5-rem)":e==="md"?"var(--dimension-20---1-25-rem)":"var(--dimension-16---1-rem)",P=p,g=e==="xs"?"var(--dimension-8---0-5-rem)":"var(--dimension-12---0-75-rem)",A=e==="xs"?"var(--border-radius-md)":"var(--border-radius-lg)",G=e==="lg"||e==="md"?"var(--font-text-md-l-24-medium-size)":"var(--font-text-sm-l-20-medium-size)";return r.jsx(K,{ref:M,onClick:N,onMouseEnter:W,disabled:l||m,className:H,sx:{display:"flex",alignItems:"center",justifyContent:"center",paddingLeft:u==="icon"?g:p,paddingRight:u==="icon"?g:P,borderRadius:A,fontSize:G,fontFamily:"var(--font-text-md-l-24-medium-family)",fontWeight:"var(--font-text-md-l-24-medium-weight)",border:"var(--border-width-thin) solid",cursor:l?"not-allowed":"pointer",...E},children:m?r.jsx(Q,{size:24}):_})});c.displayName="ButtonOutline";c.__docgenInfo={description:"ButtonOutline component for rendering an outlined button with various styles.",methods:[],displayName:"ButtonOutline",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click event handler"},onHover:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Mouse enter event handler"},isDisabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"Loading state",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Button content"},sx:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},description:"Style overrides",defaultValue:{value:"{}",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Class name overrides"},type:{required:!1,tsType:{name:"union",raw:"'text' | 'icon'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'icon'"}]},description:"Button type",defaultValue:{value:"'text'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'lg' | 'md' | 'sm' | 'xs'",elements:[{name:"literal",value:"'lg'"},{name:"literal",value:"'md'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'xs'"}]},description:"Button size",defaultValue:{value:"'md'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"'compact' | 'fluid'",elements:[{name:"literal",value:"'compact'"},{name:"literal",value:"'fluid'"}]},description:"Button width",defaultValue:{value:"'compact'",computed:!1}}}};const le={title:"Components/Button/Outline",component:c,args:{children:"Click me"}},a={},t={args:{isLoading:!0}},o={args:{isDisabled:!0}},n={args:{children:r.jsxs(r.Fragment,{children:[r.jsx(F,{size:16})," Click me"]})}},s={args:{sx:{":hover":{backgroundColor:"var(--color-background-state-interaction-hover-neutral)"}}}},i={args:{sx:{":focus":{backgroundColor:"var(--color-background-white-base)"}}}},d={args:{type:"icon",children:r.jsx(F,{size:16})}};var f,v,h;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var x,b,y;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    isLoading: true
  }
}`,...(y=(b=t.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var w,k,C;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(C=(k=o.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var B,R,S;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: <><Star size={16} /> Click me</>
  }
}`,...(S=(R=n.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var q,T,j;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    sx: {
      ':hover': {
        backgroundColor: 'var(--color-background-state-interaction-hover-neutral)'
      }
    }
  }
}`,...(j=(T=s.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var D,I,L;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    sx: {
      ':focus': {
        backgroundColor: 'var(--color-background-white-base)'
      }
    }
  }
}`,...(L=(I=i.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var z,O,V;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    type: 'icon',
    children: <Star size={16} />
  }
}`,...(V=(O=d.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};const me=["Default","Loading","Disabled","WithIcon","Hover","Focus","IconButton"];export{a as Default,o as Disabled,i as Focus,s as Hover,d as IconButton,t as Loading,n as WithIcon,me as __namedExportsOrder,le as default};
