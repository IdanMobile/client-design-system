// @ts-nocheck
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { withDesignSystem } from './decorator';

const meta: Meta<typeof Table> = {
  title: 'System/Library Components (MUI)/Table',
  component: Table,
  decorators: [withDesignSystem],
  parameters: { layout: 'centered' },
};
export default meta;
type Story = StoryObj<typeof meta>;

const rows = [
  { token: 'Brand 500', type: 'Color', value: '#0ea5e9' },
  { token: 'Heading 1', type: 'Typography', value: '32px / 700' },
  { token: 'Medium', type: 'Radius', value: '8px' },
  { token: 'Level 2', type: 'Elevation', value: '2 shadows' },
];

export const Default: Story = {
  render: () => (
    <TableContainer component={Paper} sx={{ maxWidth: 500 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Token</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((r) => (
            <TableRow key={r.token}>
              <TableCell>{r.token}</TableCell>
              <TableCell>{r.type}</TableCell>
              <TableCell>{r.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ),
};
