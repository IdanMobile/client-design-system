import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{R as F}from"./index-DCXu2c-y.js";import{B as M}from"./Button-DoEnHtwV.js";import{C as P}from"./CircularProgress-DXkKEIgb.js";import{S as A}from"./star-DL9v8gqC.js";import"./DefaultPropsProvider-Dvarb5rE.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-qaOHKnqS.js";import"./useTimeout-BCS2DETX.js";import"./useForkRef-BdVMMcKE.js";import"./useEventCallback-O7DVlRIu.js";import"./isFocusVisible-B8k4qzLc.js";const j=F.forwardRef(({onClick:z,onHover:B,isDisabled:V=!1,isLoading:m=!1,children:H,sx:I={},className:L,type:W="text",size:e="md",width:N="compact"},O)=>{const r=W==="icon",l={lg:r?"var(--dimension-12---0-75-rem)":"var(--dimension-24---1-5-rem)",md:r?"var(--dimension-8---0-5-rem)":"var(--dimension-20---1-25-rem)",sm:r?"var(--dimension-8---0-5-rem)":"var(--dimension-16---1-rem)",xs:r?"var(--dimension-8---0-5-rem)":"var(--dimension-16---1-rem)"},_={lg:"var(--font-text-md-l-24-medium-size)",md:"var(--font-text-md-l-24-medium-size)",sm:"var(--font-text-sm-l-20-medium-size)",xs:"var(--font-text-xs-medium-size)"},E={lg:"var(--body-md-line-height-24)",md:"var(--body-md-line-height-24)",sm:"var(--body-sm-line-height-l-20)",xs:"var(--body-xs-line-height)"};return d.jsx(M,{ref:O,onClick:z,onMouseEnter:B,disabled:V||m,className:L,sx:{display:"flex",alignItems:"center",justifyContent:"center",paddingLeft:l[e],paddingRight:l[e],borderRadius:e==="xs"?"var(--border-radius-md)":"var(--border-radius-lg)",borderWidth:"var(--border-width-thin)",borderStyle:"solid",fontSize:_[e],fontFamily:"var(--font-family-body)",fontWeight:"var(--font-weight-medium---500)",lineHeight:E[e],letterSpacing:e==="xs"?"var(--body-xs-letter-spacing)":"var(--body-md-letter-spacing)",width:N==="fluid"?"100%":"auto",...I},children:m?d.jsx(P,{size:24}):H})});j.__docgenInfo={description:"",methods:[],displayName:"ButtonOutline",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onHover:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},sx:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},description:"",defaultValue:{value:"{}",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:"'text' | 'icon'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'icon'"}]},description:"Type of button: 'text' or 'icon'.",defaultValue:{value:"'text'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'lg' | 'md' | 'sm' | 'xs'",elements:[{name:"literal",value:"'lg'"},{name:"literal",value:"'md'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'xs'"}]},description:"Size of the button: 'lg', 'md', 'sm', or 'xs'.",defaultValue:{value:"'md'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"'compact' | 'fluid'",elements:[{name:"literal",value:"'compact'"},{name:"literal",value:"'fluid'"}]},description:"Width of the button: 'compact' or 'fluid'.",defaultValue:{value:"'compact'",computed:!1}}}};const te={title:"Components/Button/Outline",component:j,args:{children:"Click me"}},a={},t={args:{isLoading:!0}},o={args:{isDisabled:!0}},s={args:{children:d.jsx(A,{size:16})}},n={args:{sx:{":hover":{backgroundColor:"var(--color-background-state-interaction-hover-neutral)"}}}},i={args:{sx:{":focus":{backgroundColor:"var(--background-white-base)"}}}};var u,c,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var g,f,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isLoading: true
  }
}`,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var h,b,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(x=(b=o.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var y,w,S;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: <Star size={16} />
  }
}`,...(S=(w=s.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var k,R,T;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    sx: {
      ':hover': {
        backgroundColor: 'var(--color-background-state-interaction-hover-neutral)'
      }
    }
  }
}`,...(T=(R=n.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var q,C,D;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    sx: {
      ':focus': {
        backgroundColor: 'var(--background-white-base)'
      }
    }
  }
}`,...(D=(C=i.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};const oe=["Default","Loading","Disabled","WithIcon","Hover","Focus"];export{a as Default,o as Disabled,i as Focus,n as Hover,t as Loading,s as WithIcon,oe as __namedExportsOrder,te as default};
