import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as A}from"./index-DCXu2c-y.js";import{B as G}from"./ButtonBase-mum15mak.js";import{C as J}from"./CircularProgress-ACWjdm9Y.js";import{S as I}from"./star-DL9v8gqC.js";import"./DefaultPropsProvider-4fy5dMm0.js";import"./styled-9G2oBuYA.js";import"./useTimeout-GLrqR6mX.js";import"./useForkRef-BdVMMcKE.js";import"./useEventCallback-B17lLwcu.js";import"./isFocusVisible-B8k4qzLc.js";import"./memoTheme-DTigGV7r.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const c=A.forwardRef(({onClick:P,onHover:V,isDisabled:F=!1,isLoading:m=!1,children:H,sx:N={},className:_,type:E="text",size:r="md",width:K="compact"},W)=>{const u=()=>{if(E==="icon")switch(r){case"lg":return"var(--dimension-12---0-75-rem)";case"md":case"sm":case"xs":return"var(--dimension-8---0-5-rem)";default:return"var(--dimension-8---0-5-rem)"}else switch(r){case"lg":return"var(--dimension-24---1-5-rem)";case"md":return"var(--dimension-20---1-25-rem)";case"sm":return"var(--dimension-16---1-rem)";case"xs":return"var(--dimension-16---1-rem)";default:return"var(--dimension-20---1-25-rem)"}},M=()=>{switch(r){case"lg":case"md":return"var(--font-text-md-l-24-medium-size)";case"sm":return"var(--font-text-sm-l-20-medium-size)";case"xs":return"var(--font-text-xs-medium-size)";default:return"var(--font-text-md-l-24-medium-size)"}},O=()=>{switch(r){case"lg":case"md":return"var(--body-md-line-height-24)";case"sm":return"var(--body-sm-line-height-l-20)";case"xs":return"var(--body-xs-line-height)";default:return"var(--body-md-line-height-24)"}};return e.jsx(G,{ref:W,onClick:P,onMouseEnter:V,disabled:F||m,className:_,sx:{display:"flex",alignItems:"center",justifyContent:"center",paddingLeft:u(),paddingRight:u(),borderRadius:r==="xs"?"var(--border-radius-md)":"var(--border-radius-lg)",fontSize:M(),fontFamily:"var(--font-text-md-l-24-medium-family)",fontWeight:"var(--font-text-md-l-24-medium-weight)",lineHeight:O(),letterSpacing:"var(--body-md-letter-spacing)","&:hover":{backgroundColor:"var(--color-background-state-interaction-hover-primary)"},"&:disabled":{backgroundColor:"var(--color-background-state-interaction-disabled-neutral)"},gap:"var(--dimension-8---0-5-rem)",borderTopLeftRadius:"var(--border-radius-lg)",borderTopRightRadius:"var(--border-radius-lg)",borderBottomLeftRadius:"var(--border-radius-lg)",borderBottomRightRadius:"var(--border-radius-lg)",paragraphSpacing:"var(--body-md-paragaph-spacing)",...N},children:m?e.jsx(J,{size:24}):H})});c.displayName="ButtonPrimary";c.__docgenInfo={description:"",methods:[],displayName:"ButtonPrimary",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onHover:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},sx:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},description:"",defaultValue:{value:"{}",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:"'text' | 'icon'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'icon'"}]},description:"",defaultValue:{value:"'text'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'lg' | 'md' | 'sm' | 'xs'",elements:[{name:"literal",value:"'lg'"},{name:"literal",value:"'md'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'xs'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"'compact' | 'fluid'",elements:[{name:"literal",value:"'compact'"},{name:"literal",value:"'fluid'"}]},description:"",defaultValue:{value:"'compact'",computed:!1}}}};const ie={title:"Components/Button/Primary",component:c,args:{children:"Click me"}},a={},t={args:{isLoading:!0}},s={args:{isDisabled:!0}},o={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(I,{size:16})," Click me"]})}},n={args:{sx:{"&:hover":{backgroundColor:"var(--color-background-state-interaction-hover-primary)"}}}},i={args:{sx:{"&:focus":{backgroundColor:"var(--color-background-white-base)"}}}},d={args:{type:"icon",children:e.jsx(I,{size:16})}};var l,p,g;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var f,v,h;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    isLoading: true
  }
}`,...(h=(v=t.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var b,x,y;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var w,k,R;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: <><Star size={16} /> Click me</>
  }
}`,...(R=(k=o.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var S,C,T;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    sx: {
      '&:hover': {
        backgroundColor: 'var(--color-background-state-interaction-hover-primary)'
      }
    }
  }
}`,...(T=(C=n.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var B,q,j;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    sx: {
      '&:focus': {
        backgroundColor: 'var(--color-background-white-base)'
      }
    }
  }
}`,...(j=(q=i.parameters)==null?void 0:q.docs)==null?void 0:j.source}}};var z,L,D;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    type: 'icon',
    children: <Star size={16} />
  }
}`,...(D=(L=d.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};const de=["Default","Loading","Disabled","WithIcon","Hover","Focus","IconButton"];export{a as Default,s as Disabled,i as Focus,n as Hover,d as IconButton,t as Loading,o as WithIcon,de as __namedExportsOrder,ie as default};
