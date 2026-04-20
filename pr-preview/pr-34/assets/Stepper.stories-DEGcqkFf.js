import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{w as m}from"./decorator-DVsY47gn.js";import{S as r,a as s,b as a}from"./Stepper-Ub8w01mL.js";import"./DesignSystemProvider-taZLeaZD.js";import"./tokens-BfVU3znj.js";import"./DefaultPropsProvider-4fy5dMm0.js";import"./index-DCXu2c-y.js";import"./styled-9G2oBuYA.js";import"./memoTheme-DTigGV7r.js";import"./useSlot-C25jAoNF.js";import"./mergeSlotProps-DK1J69Q7.js";import"./useForkRef-BdVMMcKE.js";import"./createSvgIcon-DREfgZk1.js";const k={title:"System/Library Components (MUI)/Stepper",component:r,decorators:[m],parameters:{layout:"padded"}},i=["Select Library","Configure Tokens","Connect GitHub","Publish"],p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[e.jsx(r,{activeStep:0,children:i.map(t=>e.jsx(s,{children:e.jsx(a,{children:t})},t))}),e.jsx(r,{activeStep:2,children:i.map(t=>e.jsx(s,{children:e.jsx(a,{children:t})},t))}),e.jsx(r,{activeStep:4,children:i.map(t=>e.jsx(s,{children:e.jsx(a,{children:t})},t))})]})};var o,n,l;p.parameters={...p.parameters,docs:{...(o=p.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
      <Stepper activeStep={0}>{steps.map(s => <Step key={s}><StepLabel>{s}</StepLabel></Step>)}</Stepper>
      <Stepper activeStep={2}>{steps.map(s => <Step key={s}><StepLabel>{s}</StepLabel></Step>)}</Stepper>
      <Stepper activeStep={4}>{steps.map(s => <Step key={s}><StepLabel>{s}</StepLabel></Step>)}</Stepper>
    </div>
}`,...(l=(n=p.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const C=["AllSteps"];export{p as AllSteps,C as __namedExportsOrder,k as default};
