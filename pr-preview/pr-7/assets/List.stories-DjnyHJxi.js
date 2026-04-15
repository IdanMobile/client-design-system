import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as x,R as d}from"./index-DCXu2c-y.js";import{g as M,b as B,e as k,c as P,h as W,s as Y,w as E}from"./decorator-C0y9GClE.js";import{L as U,a as c}from"./List-Cj945Qsr.js";import{L as p,a as C,b as u}from"./ListItemText-C_FsBBPn.js";import{D as R}from"./Divider-D4bckDC-.js";import{A as J}from"./Avatar-DXOFaVv1.js";import"./tokens-DBm_rmL-.js";/* empty css               */import"./useForkRef-BdVMMcKE.js";import"./ButtonBase-DbwsGwqG.js";import"./useTimeout-A26cqGrY.js";import"./useEventCallback-CKq0_iTs.js";import"./isFocusVisible-B8k4qzLc.js";import"./useSlot-CxoZWvyD.js";import"./mergeSlotProps-CemHIHvj.js";import"./Typography-C7Nav8Py.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-CZnzCMSy.js";function H(t){return M("MuiListItemAvatar",t)}B("MuiListItemAvatar",["root","alignItemsFlexStart"]);const K=t=>{const{alignItems:s,classes:r}=t;return W({root:["root",s==="flex-start"&&"alignItemsFlexStart"]},H,r)},N=Y("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:r}=t;return[s.root,r.alignItems==="flex-start"&&s.alignItemsFlexStart]}})({minWidth:56,flexShrink:0,variants:[{props:{alignItems:"flex-start"},style:{marginTop:8}}]}),G=x.forwardRef(function(s,r){const i=k({props:s,name:"MuiListItemAvatar"}),{className:a,...D}=i,T=x.useContext(U),h={...i,alignItems:T.alignItems},F=K(h);return e.jsx(N,{className:P(F.root,a),ownerState:h,ref:r,...D})}),de={title:"System/Library Components (MUI)/List",decorators:[E]},m=["Dashboard","Profile","Settings","Notifications","Messages","Analytics","Reports","Team Members","Billing","Integrations","API Keys","Audit Log","Help Center","Documentation","Changelog"],n={render:()=>e.jsx("div",{style:{height:320,overflowY:"auto",border:"1px solid #e0e0e0",borderRadius:8,width:320},children:e.jsx(c,{children:m.map((t,s)=>e.jsxs(d.Fragment,{children:[e.jsx(p,{disablePadding:!0,children:e.jsx(C,{children:e.jsx(u,{primary:t,secondary:`Description for ${t.toLowerCase()}`})})}),s<m.length-1&&e.jsx(R,{})]},t))})})},g=[{name:"Alice Johnson",initials:"AJ"},{name:"Bob Smith",initials:"BS"},{name:"Carol White",initials:"CW"},{name:"David Brown",initials:"DB"},{name:"Eve Davis",initials:"ED"},{name:"Frank Miller",initials:"FM"},{name:"Grace Lee",initials:"GL"},{name:"Henry Wilson",initials:"HW"},{name:"Ivy Martinez",initials:"IM"},{name:"Jack Taylor",initials:"JT"},{name:"Karen Anderson",initials:"KA"},{name:"Leo Thomas",initials:"LT"}],L=["#1976d2","#388e3c","#d32f2f","#7b1fa2","#f57c00","#0097a7"],o={render:()=>e.jsx("div",{style:{height:320,overflowY:"auto",border:"1px solid #e0e0e0",borderRadius:8,width:360},children:e.jsx(c,{children:g.map((t,s)=>e.jsxs(d.Fragment,{children:[e.jsxs(p,{children:[e.jsx(G,{children:e.jsx(J,{sx:{bgcolor:L[s%L.length]},children:t.initials})}),e.jsx(u,{primary:t.name,secondary:"Team member"})]}),s<g.length-1&&e.jsx(R,{variant:"inset"})]},t.name))})})},l={render:()=>{const[t,s]=d.useState(1);return e.jsx("div",{style:{height:320,overflowY:"auto",border:"1px solid #e0e0e0",borderRadius:8,width:320},children:e.jsx(c,{children:m.map((r,i)=>{const a=i===4||i===9;return e.jsx(p,{disablePadding:!0,children:e.jsx(C,{selected:t===i,disabled:a,onClick:()=>s(i),children:e.jsx(u,{primary:r,secondary:a?"Disabled":t===i?"Selected":void 0})})},r)})})})}};var v,I,b;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    height: 320,
    overflowY: 'auto',
    border: '1px solid #e0e0e0',
    borderRadius: 8,
    width: 320
  }}>
      <List>
        {items.map((item, i) => <React.Fragment key={item}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary={item} secondary={\`Description for \${item.toLowerCase()}\`} />
              </ListItemButton>
            </ListItem>
            {i < items.length - 1 && <Divider />}
          </React.Fragment>)}
      </List>
    </div>
}`,...(b=(I=n.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var f,y,j;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    height: 320,
    overflowY: 'auto',
    border: '1px solid #e0e0e0',
    borderRadius: 8,
    width: 360
  }}>
      <List>
        {iconLabels.map((person, i) => <React.Fragment key={person.name}>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{
              bgcolor: avatarColors[i % avatarColors.length]
            }}>
                  {person.initials}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={person.name} secondary="Team member" />
            </ListItem>
            {i < iconLabels.length - 1 && <Divider variant="inset" />}
          </React.Fragment>)}
      </List>
    </div>
}`,...(j=(y=o.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var A,S,w;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = React.useState(1);
    return <div style={{
      height: 320,
      overflowY: 'auto',
      border: '1px solid #e0e0e0',
      borderRadius: 8,
      width: 320
    }}>
        <List>
          {items.map((item, i) => {
          const disabled = i === 4 || i === 9;
          return <ListItem key={item} disablePadding>
                <ListItemButton selected={selected === i} disabled={disabled} onClick={() => setSelected(i)}>
                  <ListItemText primary={item} secondary={disabled ? 'Disabled' : selected === i ? 'Selected' : undefined} />
                </ListItemButton>
              </ListItem>;
        })}
        </List>
      </div>;
  }
}`,...(w=(S=l.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const ce=["Default","WithIcons","Interactive"];export{n as Default,l as Interactive,o as WithIcons,ce as __namedExportsOrder,de as default};
