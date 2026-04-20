import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{w as p}from"./decorator-Bwh7YJgS.js";import{T as i,a as T,b as d,c as o,d as a,e as b}from"./TableRow-CsDrnLqr.js";import{P as m}from"./Paper-DUHyXx-G.js";import"./DesignSystemProvider-DV5yVZWv.js";import"./tokens-DWxhIY_z.js";import"./DefaultPropsProvider-tolH4bEA.js";import"./index-DCXu2c-y.js";import"./memoTheme-KRCIbq4o.js";import"./useTheme-CHa4hmAb.js";const R={title:"System/Library Components (MUI)/Table",component:i,decorators:[p],parameters:{layout:"centered"}},c=[{token:"Brand 500",type:"Color",value:"var(--color-accent)"},{token:"Heading 1",type:"Typography",value:"32px / 700"},{token:"Medium",type:"Radius",value:"8px"},{token:"Level 2",type:"Elevation",value:"2 shadows"}],n={render:()=>e.jsx(T,{component:m,sx:{maxWidth:500},children:e.jsxs(i,{children:[e.jsx(d,{children:e.jsxs(o,{children:[e.jsx(a,{children:"Token"}),e.jsx(a,{children:"Type"}),e.jsx(a,{children:"Value"})]})}),e.jsx(b,{children:c.map(l=>e.jsxs(o,{children:[e.jsx(a,{children:l.token}),e.jsx(a,{children:l.type}),e.jsx(a,{children:l.value})]},l.token))})]})})};var r,t,s;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => <TableContainer component={Paper} sx={{
    maxWidth: 500
  }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Token</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(r => <TableRow key={r.token}>
              <TableCell>{r.token}</TableCell>
              <TableCell>{r.type}</TableCell>
              <TableCell>{r.value}</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>
    </TableContainer>
}`,...(s=(t=n.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const g=["Default"];export{n as Default,g as __namedExportsOrder,R as default};
