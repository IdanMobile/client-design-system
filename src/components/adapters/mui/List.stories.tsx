// @ts-nocheck
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import { withDesignSystem } from './decorator';

const meta: Meta = {
  title: 'System/Library Components (MUI)/List',
  decorators: [withDesignSystem],
};
export default meta;
type Story = StoryObj;

const items = [
  'Dashboard', 'Profile', 'Settings', 'Notifications', 'Messages',
  'Analytics', 'Reports', 'Team Members', 'Billing', 'Integrations',
  'API Keys', 'Audit Log', 'Help Center', 'Documentation', 'Changelog',
];

export const Default: Story = {
  render: () => (
    <div style={{ height: 320, overflowY: 'auto', border: '1px solid #e0e0e0', borderRadius: 8, width: 320 }}>
      <List>
        {items.map((item, i) => (
          <React.Fragment key={item}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary={item} secondary={`Description for ${item.toLowerCase()}`} />
              </ListItemButton>
            </ListItem>
            {i < items.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </div>
  ),
};

const iconLabels = [
  { name: 'Alice Johnson', initials: 'AJ' },
  { name: 'Bob Smith', initials: 'BS' },
  { name: 'Carol White', initials: 'CW' },
  { name: 'David Brown', initials: 'DB' },
  { name: 'Eve Davis', initials: 'ED' },
  { name: 'Frank Miller', initials: 'FM' },
  { name: 'Grace Lee', initials: 'GL' },
  { name: 'Henry Wilson', initials: 'HW' },
  { name: 'Ivy Martinez', initials: 'IM' },
  { name: 'Jack Taylor', initials: 'JT' },
  { name: 'Karen Anderson', initials: 'KA' },
  { name: 'Leo Thomas', initials: 'LT' },
];

const avatarColors = ['#1976d2', '#388e3c', '#d32f2f', '#7b1fa2', '#f57c00', '#0097a7'];

export const WithIcons: Story = {
  render: () => (
    <div style={{ height: 320, overflowY: 'auto', border: '1px solid #e0e0e0', borderRadius: 8, width: 360 }}>
      <List>
        {iconLabels.map((person, i) => (
          <React.Fragment key={person.name}>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: avatarColors[i % avatarColors.length] }}>
                  {person.initials}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={person.name} secondary="Team member" />
            </ListItem>
            {i < iconLabels.length - 1 && <Divider variant="inset" />}
          </React.Fragment>
        ))}
      </List>
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [selected, setSelected] = React.useState(1);
    return (
      <div style={{ height: 320, overflowY: 'auto', border: '1px solid #e0e0e0', borderRadius: 8, width: 320 }}>
        <List>
          {items.map((item, i) => {
            const disabled = i === 4 || i === 9;
            return (
              <ListItem key={item} disablePadding>
                <ListItemButton
                  selected={selected === i}
                  disabled={disabled}
                  onClick={() => setSelected(i)}
                >
                  <ListItemText
                    primary={item}
                    secondary={disabled ? 'Disabled' : selected === i ? 'Selected' : undefined}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </div>
    );
  },
};
