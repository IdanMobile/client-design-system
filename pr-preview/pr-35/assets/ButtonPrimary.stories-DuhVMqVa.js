import{j as u}from"./jsx-runtime-D_zvdyIk.js";import{R as Fe}from"./index-DCXu2c-y.js";import{B as De}from"./ButtonBase-CYJ2-9JW.js";import{C as qe}from"./CircularProgress-CioTBP4G.js";import{S as Ve}from"./sparkles-B6JjKAM5.js";import"./DefaultPropsProvider-tolH4bEA.js";import"./memoTheme-KRCIbq4o.js";import"./useTimeout-GLrqR6mX.js";import"./useForkRef-BdVMMcKE.js";import"./useEventCallback-BYuPd7TF.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const p=Fe.forwardRef(({onClick:xe,onHover:Pe,sx:Re,className:we,isDisabled:ze,isLoading:g,children:_e,icon:y,type:Ee="textButton",size:Ce="lg",width:Ie="compact",state:Le="default",...Te},ke)=>u.jsxs(De,{ref:ke,onClick:xe,onMouseEnter:Pe,disabled:ze||g,className:we,...Te,sx:{display:"inline-flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box",gap:"var(--dimension-8---0-5-rem)",paddingLeft:"var(--dimension-24---1-5-rem)",paddingRight:"var(--dimension-24---1-5-rem)",borderTopLeftRadius:"var(--border-radius-lg)",borderTopRightRadius:"var(--border-radius-lg)",borderBottomLeftRadius:"var(--border-radius-lg)",borderBottomRightRadius:"var(--border-radius-lg)",letterSpacing:"var(--body-md-letter-spacing)",fontSize:"var(--body-md-font-size)",fontFamily:"var(--font-family-body)",lineHeight:"var(--body-md-line-height-24)",fontWeight:"var(--font-weight-medium---500)",border:"0",cursor:"pointer","&:focus-visible":{effects:"var(--background-white-base)"},...Re||{}},children:[y&&u.jsx("span",{"aria-hidden":"true",style:{display:"inline-flex"},children:y}),g?u.jsx(qe,{size:16,color:"inherit"}):_e]}));p.displayName="ButtonPrimary";p.__docgenInfo={description:"",methods:[],displayName:"ButtonPrimary",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.SyntheticEvent) => void",signature:{arguments:[{type:{name:"ReactSyntheticEvent",raw:"React.SyntheticEvent"},name:"event"}],return:{name:"void"}}},description:"Fired when the user clicks / activates the primitive."},onHover:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.SyntheticEvent) => void",signature:{arguments:[{type:{name:"ReactSyntheticEvent",raw:"React.SyntheticEvent"},name:"event"}],return:{name:"void"}}},description:"Fired when the mouse enters."},isDisabled:{required:!1,tsType:{name:"boolean"},description:"Disable the primitive."},isLoading:{required:!1,tsType:{name:"boolean"},description:"Show a loading spinner. Also implies disabled."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content rendered inside the primitive."},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional leading icon (React node)."},sx:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},description:"Extra sx overrides merged on top of the manifest-driven styles."},className:{required:!1,tsType:{name:"string"},description:"Extra className to append."},type:{required:!1,tsType:{name:"union",raw:"'textButton' | 'iconButton'",elements:[{name:"literal",value:"'textButton'"},{name:"literal",value:"'iconButton'"}]},description:'Figma variant axis: "Type" (values: "Text button" → textButton, "Icon button" → iconButton)',defaultValue:{value:"'textButton'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'lg' | 'md' | 'sm' | 'xs'",elements:[{name:"literal",value:"'lg'"},{name:"literal",value:"'md'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'xs'"}]},description:'Figma variant axis: "Size" (values: "lg" → lg, "md" → md, "sm" → sm, "xs" → xs)',defaultValue:{value:"'lg'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"'compact' | 'fluidBlock'",elements:[{name:"literal",value:"'compact'"},{name:"literal",value:"'fluidBlock'"}]},description:'Figma variant axis: "Width" (values: "Compact" → compact, "Fluid/block" → fluidBlock)',defaultValue:{value:"'compact'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'hover' | 'focus' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'focus'"},{name:"literal",value:"'disabled'"}]},description:'Figma variant axis: "State" (values: "Default" → default, "Hover" → hover, "Focus" → focus, "Disabled" → disabled)',defaultValue:{value:"'default'",computed:!1}}}};const Ue={title:"Components/Button/Primary",component:p,tags:["autodocs"]},e={args:{children:"Button (Primary)"}},r={args:{children:"Button (Primary)",type:"iconButton"}},t={args:{children:"Button (Primary)",size:"md"}},a={args:{children:"Button (Primary)",size:"sm"}},s={args:{children:"Button (Primary)",size:"xs"}},i={args:{children:"Button (Primary)",width:"fluidBlock"}},n={args:{children:"Button (Primary)",state:"hover"}},o={args:{children:"Button (Primary)",state:"focus"}},d={args:{children:"Button (Primary)",state:"disabled"}},c={args:{children:"Button (Primary)",isLoading:!0}},m={args:{children:"Button (Primary)",isDisabled:!0}},l={args:{children:"Button (Primary)",icon:u.jsx(Ve,{size:16})}};var h,v,f,B,S;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'Button (Primary)'
  }
}`,...(f=(v=e.parameters)==null?void 0:v.docs)==null?void 0:f.source},description:{story:"Canonical render — matches the Figma Default variant.",...(S=(B=e.parameters)==null?void 0:B.docs)==null?void 0:S.description}}};var b,x,P,R,w;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: 'Button (Primary)',
    type: 'iconButton'
  }
}`,...(P=(x=r.parameters)==null?void 0:x.docs)==null?void 0:P.source},description:{story:'Variant axis "Type" = "Icon button".',...(w=(R=r.parameters)==null?void 0:R.docs)==null?void 0:w.description}}};var z,_,T,k,F;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: 'Button (Primary)',
    size: 'md'
  }
}`,...(T=(_=t.parameters)==null?void 0:_.docs)==null?void 0:T.source},description:{story:'Variant axis "Size" = "md".',...(F=(k=t.parameters)==null?void 0:k.docs)==null?void 0:F.description}}};var D,q,V,E,C;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: 'Button (Primary)',
    size: 'sm'
  }
}`,...(V=(q=a.parameters)==null?void 0:q.docs)==null?void 0:V.source},description:{story:'Variant axis "Size" = "sm".',...(C=(E=a.parameters)==null?void 0:E.docs)==null?void 0:C.description}}};var I,L,N,j,W;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: 'Button (Primary)',
    size: 'xs'
  }
}`,...(N=(L=s.parameters)==null?void 0:L.docs)==null?void 0:N.source},description:{story:'Variant axis "Size" = "xs".',...(W=(j=s.parameters)==null?void 0:j.docs)==null?void 0:W.description}}};var H,M,O,X,A;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    children: 'Button (Primary)',
    width: 'fluidBlock'
  }
}`,...(O=(M=i.parameters)==null?void 0:M.docs)==null?void 0:O.source},description:{story:'Variant axis "Width" = "Fluid/block".',...(A=(X=i.parameters)==null?void 0:X.docs)==null?void 0:A.description}}};var G,J,K,Q,U;n.parameters={...n.parameters,docs:{...(G=n.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    children: 'Button (Primary)',
    state: 'hover'
  }
}`,...(K=(J=n.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:'Variant axis "State" = "Hover".',...(U=(Q=n.parameters)==null?void 0:Q.docs)==null?void 0:U.description}}};var Y,Z,$,ee,re;o.parameters={...o.parameters,docs:{...(Y=o.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    children: 'Button (Primary)',
    state: 'focus'
  }
}`,...($=(Z=o.parameters)==null?void 0:Z.docs)==null?void 0:$.source},description:{story:'Variant axis "State" = "Focus".',...(re=(ee=o.parameters)==null?void 0:ee.docs)==null?void 0:re.description}}};var te,ae,se,ie,ne;d.parameters={...d.parameters,docs:{...(te=d.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    children: 'Button (Primary)',
    state: 'disabled'
  }
}`,...(se=(ae=d.parameters)==null?void 0:ae.docs)==null?void 0:se.source},description:{story:'Variant axis "State" = "Disabled".',...(ne=(ie=d.parameters)==null?void 0:ie.docs)==null?void 0:ne.description}}};var oe,de,ce,me,le;c.parameters={...c.parameters,docs:{...(oe=c.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    children: 'Button (Primary)',
    isLoading: true
  }
}`,...(ce=(de=c.parameters)==null?void 0:de.docs)==null?void 0:ce.source},description:{story:"Loading state with spinner.",...(le=(me=c.parameters)==null?void 0:me.docs)==null?void 0:le.description}}};var ue,pe,ge,ye,he;m.parameters={...m.parameters,docs:{...(ue=m.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    children: 'Button (Primary)',
    isDisabled: true
  }
}`,...(ge=(pe=m.parameters)==null?void 0:pe.docs)==null?void 0:ge.source},description:{story:"Disabled state.",...(he=(ye=m.parameters)==null?void 0:ye.docs)==null?void 0:he.description}}};var ve,fe,Be,Se,be;l.parameters={...l.parameters,docs:{...(ve=l.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    children: 'Button (Primary)',
    icon: <Sparkles size={16} />
  }
}`,...(Be=(fe=l.parameters)==null?void 0:fe.docs)==null?void 0:Be.source},description:{story:"Rendered with a leading icon.",...(be=(Se=l.parameters)==null?void 0:Se.docs)==null?void 0:be.description}}};const Ye=["Default","Type_IconButton","Size_Md","Size_Sm","Size_Xs","Width_FluidBlock","State_Hover","State_Focus","State_Disabled","Loading","Disabled","WithIcon"];export{e as Default,m as Disabled,c as Loading,t as Size_Md,a as Size_Sm,s as Size_Xs,d as State_Disabled,o as State_Focus,n as State_Hover,r as Type_IconButton,i as Width_FluidBlock,l as WithIcon,Ye as __namedExportsOrder,Ue as default};
