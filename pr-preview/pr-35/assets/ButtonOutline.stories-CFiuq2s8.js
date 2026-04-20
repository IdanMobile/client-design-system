import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{R as Fe}from"./index-DCXu2c-y.js";import{B as De}from"./ButtonBase-CYJ2-9JW.js";import{C as qe}from"./CircularProgress-CioTBP4G.js";import{S as Ve}from"./sparkles-B6JjKAM5.js";import"./DefaultPropsProvider-tolH4bEA.js";import"./memoTheme-KRCIbq4o.js";import"./useTimeout-GLrqR6mX.js";import"./useForkRef-BdVMMcKE.js";import"./useEventCallback-BYuPd7TF.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const p=Fe.forwardRef(({onClick:xe,onHover:Oe,sx:Re,className:we,isDisabled:ze,isLoading:g,children:Te,icon:h,type:Ee="textButton",size:We="lg",width:Le="compact",state:Ce="default",..._e},ke)=>m.jsxs(De,{ref:ke,onClick:xe,onMouseEnter:Oe,disabled:ze||g,className:we,..._e,sx:{display:"inline-flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box",gap:"var(--dimension-8---0-5-rem)",paddingLeft:"var(--dimension-24---1-5-rem)",paddingRight:"var(--dimension-24---1-5-rem)",borderTopLeftRadius:"var(--border-radius-lg)",borderTopRightRadius:"var(--border-radius-lg)",borderBottomLeftRadius:"var(--border-radius-lg)",borderBottomRightRadius:"var(--border-radius-lg)",borderTopWidth:"var(--border-width-thin)",borderBottomWidth:"var(--border-width-thin)",borderLeftWidth:"var(--border-width-thin)",borderRightWidth:"var(--border-width-thin)",letterSpacing:"var(--body-md-letter-spacing)",fontSize:"var(--body-md-font-size)",fontFamily:"var(--font-family-body)",lineHeight:"var(--body-md-line-height-24)",fontWeight:"var(--font-weight-medium---500)",border:"0",cursor:"pointer","&:focus-visible":{effects:"var(--background-white-base)"},...Re||{}},children:[h&&m.jsx("span",{"aria-hidden":"true",style:{display:"inline-flex"},children:h}),g?m.jsx(qe,{size:16,color:"inherit"}):Te]}));p.displayName="ButtonOutline";p.__docgenInfo={description:"",methods:[],displayName:"ButtonOutline",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.SyntheticEvent) => void",signature:{arguments:[{type:{name:"ReactSyntheticEvent",raw:"React.SyntheticEvent"},name:"event"}],return:{name:"void"}}},description:"Fired when the user clicks / activates the primitive."},onHover:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.SyntheticEvent) => void",signature:{arguments:[{type:{name:"ReactSyntheticEvent",raw:"React.SyntheticEvent"},name:"event"}],return:{name:"void"}}},description:"Fired when the mouse enters."},isDisabled:{required:!1,tsType:{name:"boolean"},description:"Disable the primitive."},isLoading:{required:!1,tsType:{name:"boolean"},description:"Show a loading spinner. Also implies disabled."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content rendered inside the primitive."},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional leading icon (React node)."},sx:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},description:"Extra sx overrides merged on top of the manifest-driven styles."},className:{required:!1,tsType:{name:"string"},description:"Extra className to append."},type:{required:!1,tsType:{name:"union",raw:"'textButton' | 'iconButton'",elements:[{name:"literal",value:"'textButton'"},{name:"literal",value:"'iconButton'"}]},description:'Figma variant axis: "Type" (values: "Text button" → textButton, "Icon button" → iconButton)',defaultValue:{value:"'textButton'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'lg' | 'md' | 'sm' | 'xs'",elements:[{name:"literal",value:"'lg'"},{name:"literal",value:"'md'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'xs'"}]},description:'Figma variant axis: "Size" (values: "lg" → lg, "md" → md, "sm" → sm, "xs" → xs)',defaultValue:{value:"'lg'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"'compact' | 'fluidBlock'",elements:[{name:"literal",value:"'compact'"},{name:"literal",value:"'fluidBlock'"}]},description:'Figma variant axis: "Width" (values: "Compact" → compact, "Fluid/block" → fluidBlock)',defaultValue:{value:"'compact'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'hover' | 'focus' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'focus'"},{name:"literal",value:"'disabled'"}]},description:'Figma variant axis: "State" (values: "Default" → default, "Hover" → hover, "Focus" → focus, "Disabled" → disabled)',defaultValue:{value:"'default'",computed:!1}}}};const Ue={title:"Components/Button/Outline",component:p,tags:["autodocs"]},e={args:{children:"Button (Outline)"}},t={args:{children:"Button (Outline)",type:"iconButton"}},r={args:{children:"Button (Outline)",size:"md"}},a={args:{children:"Button (Outline)",size:"sm"}},s={args:{children:"Button (Outline)",size:"xs"}},i={args:{children:"Button (Outline)",width:"fluidBlock"}},n={args:{children:"Button (Outline)",state:"hover"}},o={args:{children:"Button (Outline)",state:"focus"}},d={args:{children:"Button (Outline)",state:"disabled"}},c={args:{children:"Button (Outline)",isLoading:!0}},l={args:{children:"Button (Outline)",isDisabled:!0}},u={args:{children:"Button (Outline)",icon:m.jsx(Ve,{size:16})}};var v,f,y,B,b;e.parameters={...e.parameters,docs:{...(v=e.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'Button (Outline)'
  }
}`,...(y=(f=e.parameters)==null?void 0:f.docs)==null?void 0:y.source},description:{story:"Canonical render — matches the Figma Default variant.",...(b=(B=e.parameters)==null?void 0:B.docs)==null?void 0:b.description}}};var S,x,O,R,w;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Button (Outline)',
    type: 'iconButton'
  }
}`,...(O=(x=t.parameters)==null?void 0:x.docs)==null?void 0:O.source},description:{story:'Variant axis "Type" = "Icon button".',...(w=(R=t.parameters)==null?void 0:R.docs)==null?void 0:w.description}}};var z,T,_,k,F;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: 'Button (Outline)',
    size: 'md'
  }
}`,...(_=(T=r.parameters)==null?void 0:T.docs)==null?void 0:_.source},description:{story:'Variant axis "Size" = "md".',...(F=(k=r.parameters)==null?void 0:k.docs)==null?void 0:F.description}}};var D,q,V,E,W;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: 'Button (Outline)',
    size: 'sm'
  }
}`,...(V=(q=a.parameters)==null?void 0:q.docs)==null?void 0:V.source},description:{story:'Variant axis "Size" = "sm".',...(W=(E=a.parameters)==null?void 0:E.docs)==null?void 0:W.description}}};var L,C,I,N,j;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: 'Button (Outline)',
    size: 'xs'
  }
}`,...(I=(C=s.parameters)==null?void 0:C.docs)==null?void 0:I.source},description:{story:'Variant axis "Size" = "xs".',...(j=(N=s.parameters)==null?void 0:N.docs)==null?void 0:j.description}}};var H,M,X,A,P;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    children: 'Button (Outline)',
    width: 'fluidBlock'
  }
}`,...(X=(M=i.parameters)==null?void 0:M.docs)==null?void 0:X.source},description:{story:'Variant axis "Width" = "Fluid/block".',...(P=(A=i.parameters)==null?void 0:A.docs)==null?void 0:P.description}}};var G,J,K,Q,U;n.parameters={...n.parameters,docs:{...(G=n.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    children: 'Button (Outline)',
    state: 'hover'
  }
}`,...(K=(J=n.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:'Variant axis "State" = "Hover".',...(U=(Q=n.parameters)==null?void 0:Q.docs)==null?void 0:U.description}}};var Y,Z,$,ee,te;o.parameters={...o.parameters,docs:{...(Y=o.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    children: 'Button (Outline)',
    state: 'focus'
  }
}`,...($=(Z=o.parameters)==null?void 0:Z.docs)==null?void 0:$.source},description:{story:'Variant axis "State" = "Focus".',...(te=(ee=o.parameters)==null?void 0:ee.docs)==null?void 0:te.description}}};var re,ae,se,ie,ne;d.parameters={...d.parameters,docs:{...(re=d.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    children: 'Button (Outline)',
    state: 'disabled'
  }
}`,...(se=(ae=d.parameters)==null?void 0:ae.docs)==null?void 0:se.source},description:{story:'Variant axis "State" = "Disabled".',...(ne=(ie=d.parameters)==null?void 0:ie.docs)==null?void 0:ne.description}}};var oe,de,ce,le,ue;c.parameters={...c.parameters,docs:{...(oe=c.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    children: 'Button (Outline)',
    isLoading: true
  }
}`,...(ce=(de=c.parameters)==null?void 0:de.docs)==null?void 0:ce.source},description:{story:"Loading state with spinner.",...(ue=(le=c.parameters)==null?void 0:le.docs)==null?void 0:ue.description}}};var me,pe,ge,he,ve;l.parameters={...l.parameters,docs:{...(me=l.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    children: 'Button (Outline)',
    isDisabled: true
  }
}`,...(ge=(pe=l.parameters)==null?void 0:pe.docs)==null?void 0:ge.source},description:{story:"Disabled state.",...(ve=(he=l.parameters)==null?void 0:he.docs)==null?void 0:ve.description}}};var fe,ye,Be,be,Se;u.parameters={...u.parameters,docs:{...(fe=u.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    children: 'Button (Outline)',
    icon: <Sparkles size={16} />
  }
}`,...(Be=(ye=u.parameters)==null?void 0:ye.docs)==null?void 0:Be.source},description:{story:"Rendered with a leading icon.",...(Se=(be=u.parameters)==null?void 0:be.docs)==null?void 0:Se.description}}};const Ye=["Default","Type_IconButton","Size_Md","Size_Sm","Size_Xs","Width_FluidBlock","State_Hover","State_Focus","State_Disabled","Loading","Disabled","WithIcon"];export{e as Default,l as Disabled,c as Loading,r as Size_Md,a as Size_Sm,s as Size_Xs,d as State_Disabled,o as State_Focus,n as State_Hover,t as Type_IconButton,i as Width_FluidBlock,u as WithIcon,Ye as __namedExportsOrder,Ue as default};
