// @ts-nocheck
import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import Slider from '@mui/material/Slider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Chip from '@mui/material/Chip';
import Alert from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';
import Skeleton from '@mui/material/Skeleton';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Pagination from '@mui/material/Pagination';
import Rating from '@mui/material/Rating';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import { withDesignSystem } from './decorator';

const meta: Meta = {
  title: 'System/Library Components (MUI)/Overview',
  decorators: [withDesignSystem],
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj;

const OverviewPage = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [tab, setTab] = useState(0);

  return (
    <Box sx={{ p: 4, maxWidth: 900 }}>
      <Chip label="Material UI" color="primary" size="small" sx={{ mb: 1 }} />
      <Typography variant="h1" gutterBottom>Library Components (MUI)</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        All components below are native <code>@mui/material</code> components
        with design tokens injected via <code>createTheme()</code> + <code>ThemeProvider</code>.
      </Typography>

      {/* Buttons */}
      <Typography variant="h3" gutterBottom>Buttons</Typography>
      <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', mb: 1 }}>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="text">Text</Button>
        <Button variant="contained" color="secondary">Secondary</Button>
        <Button variant="contained" color="error">Error</Button>
        <Button variant="contained" color="success">Success</Button>
        <Button variant="contained" disabled>Disabled</Button>
      </Box>
      <Box sx={{ display: 'flex', gap: 1.5, mb: 3 }}>
        <Button size="small" variant="contained">Small</Button>
        <Button size="medium" variant="contained">Medium</Button>
        <Button size="large" variant="contained">Large</Button>
      </Box>

      <Divider sx={{ mb: 3 }} />

      {/* TextFields */}
      <Typography variant="h3" gutterBottom>Text Fields</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 300, mb: 3 }}>
        <TextField label="Default" placeholder="Enter text..." />
        <TextField label="With Value" defaultValue="Hello World" />
        <TextField label="Error" error helperText="Required" />
        <TextField label="Disabled" disabled />
      </Box>

      <Divider sx={{ mb: 3 }} />

      {/* Selection Controls */}
      <Typography variant="h3" gutterBottom>Selection Controls</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 1 }}>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Colors" />
        <FormControlLabel control={<Checkbox />} label="Typography" />
        <FormControlLabel control={<Switch defaultChecked />} label="Dark mode" />
      </Box>
      <Box sx={{ maxWidth: 300, mb: 3, mt: 1 }}>
        <Slider defaultValue={60} />
        <Rating defaultValue={4} sx={{ mt: 1 }} />
      </Box>

      <Divider sx={{ mb: 3 }} />

      {/* Cards */}
      <Typography variant="h3" gutterBottom>Cards</Typography>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 }}>
        <Card sx={{ maxWidth: 260 }}>
          <CardContent>
            <Typography variant="h3" gutterBottom>Design Tokens</Typography>
            <Typography variant="body2" color="text.secondary">Synced from Figma — 24 tokens.</Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 260 }}>
          <CardContent>
            <Typography variant="h3" gutterBottom>With Actions</Typography>
            <Typography variant="body2" color="text.secondary">Interactive card.</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Cancel</Button>
            <Button size="small" variant="contained">Confirm</Button>
          </CardActions>
        </Card>
      </Box>

      <Divider sx={{ mb: 3 }} />

      {/* Chips & Avatars */}
      <Typography variant="h3" gutterBottom>Chips & Avatars</Typography>
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
        <Chip label="Default" />
        <Chip label="Primary" color="primary" />
        <Chip label="Success" color="success" />
        <Chip label="Error" color="error" />
        <Chip label="Outlined" variant="outlined" />
        <Chip label="Deletable" onDelete={() => {}} />
      </Box>
      <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center', mb: 3 }}>
        <Avatar sx={{ width: 32, height: 32 }}>S</Avatar>
        <Avatar>M</Avatar>
        <Avatar sx={{ width: 56, height: 56, fontSize: 24 }}>L</Avatar>
        <Badge badgeContent={4} color="primary"><Avatar>N</Avatar></Badge>
        <Badge badgeContent={12} color="error"><Avatar>E</Avatar></Badge>
      </Box>

      <Divider sx={{ mb: 3 }} />

      {/* Alerts */}
      <Typography variant="h3" gutterBottom>Alerts</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, maxWidth: 500, mb: 3 }}>
        <Alert severity="success">Tokens published successfully.</Alert>
        <Alert severity="info">12 tokens detected.</Alert>
        <Alert severity="warning">2 tokens have conflicts.</Alert>
        <Alert severity="error">Sync failed.</Alert>
      </Box>

      <Divider sx={{ mb: 3 }} />

      {/* Tabs */}
      <Typography variant="h3" gutterBottom>Tabs</Typography>
      <Box sx={{ border: 1, borderColor: 'divider', borderRadius: 2, maxWidth: 500, mb: 3 }}>
        <Tabs value={tab} onChange={(_, v) => setTab(v)}>
          <Tab label="Colors" /><Tab label="Typography" /><Tab label="Spacing" />
        </Tabs>
        <Box sx={{ p: 2 }}>
          <Typography variant="body2" color="text.secondary">
            {tab === 0 && 'Color tokens define the palette.'}
            {tab === 1 && 'Typography tokens define font styles.'}
            {tab === 2 && 'Spacing tokens define gaps.'}
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ mb: 3 }} />

      {/* Table */}
      <Typography variant="h3" gutterBottom>Table</Typography>
      <TableContainer component={Paper} sx={{ maxWidth: 500, mb: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Token</TableCell><TableCell>Type</TableCell><TableCell>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[['Brand 500', 'Color', '#0ea5e9'], ['Heading 1', 'Typography', '32px'], ['Medium', 'Radius', '8px']].map(([t, ty, v]) => (
              <TableRow key={t}><TableCell>{t}</TableCell><TableCell>{ty}</TableCell><TableCell>{v}</TableCell></TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Divider sx={{ mb: 3 }} />

      {/* Progress */}
      <Typography variant="h3" gutterBottom>Progress & Loading</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, mb: 3 }}>
        <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
          <CircularProgress size={24} /><CircularProgress /><CircularProgress variant="determinate" value={65} />
        </Box>
        <LinearProgress variant="determinate" value={75} />
        <LinearProgress variant="determinate" value={40} />
        <Box sx={{ display: 'flex', gap: 1.5 }}>
          <Skeleton variant="circular" width={48} height={48} />
          <Box sx={{ flex: 1 }}><Skeleton width="70%" /><Skeleton width="40%" /></Box>
        </Box>
      </Box>

      <Divider sx={{ mb: 3 }} />

      {/* Dialog */}
      <Typography variant="h3" gutterBottom>Dialog</Typography>
      <Button variant="contained" onClick={() => setDialogOpen(true)} sx={{ mb: 3 }}>Open Dialog</Button>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Publish Tokens</DialogTitle>
        <DialogContent><DialogContentText>Push 24 tokens to GitHub?</DialogContentText></DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={() => setDialogOpen(false)}>Publish</Button>
        </DialogActions>
      </Dialog>

      <Divider sx={{ mb: 3 }} />

      {/* More */}
      <Typography variant="h3" gutterBottom>More</Typography>
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap', mb: 2 }}>
        <Tooltip title="Tooltip text"><Button variant="outlined">Hover me</Button></Tooltip>
        <Pagination count={7} />
      </Box>
      <Box sx={{ maxWidth: 500, mb: 3 }}>
        <Accordion defaultExpanded disableGutters>
          <AccordionSummary>▾ Colors</AccordionSummary>
          <AccordionDetails>Color tokens define your brand palette.</AccordionDetails>
        </Accordion>
        <Accordion disableGutters>
          <AccordionSummary>▾ Typography</AccordionSummary>
          <AccordionDetails>Typography tokens define font styles.</AccordionDetails>
        </Accordion>
      </Box>

      <Divider sx={{ mb: 3 }} />

      {/* Select */}
      <Typography variant="h3" gutterBottom>Select</Typography>
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Library</InputLabel>
        <Select defaultValue="mui" label="Library">
          <MenuItem value="mui">Material UI</MenuItem>
          <MenuItem value="radix">Radix UI</MenuItem>
          <MenuItem value="shadcn">shadcn/ui</MenuItem>
        </Select>
      </FormControl>

      <Divider sx={{ my: 3 }} />

      {/* List */}
      <Typography variant="h3" gutterBottom>List</Typography>
      <Box sx={{ height: 150, overflowY: 'auto', border: 1, borderColor: 'divider', borderRadius: 2, maxWidth: 320, mb: 3 }}>
        <List dense>
          {['Dashboard', 'Profile', 'Settings', 'Notifications', 'Messages'].map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      <Divider sx={{ mb: 3 }} />

      {/* Stepper */}
      <Typography variant="h3" gutterBottom>Stepper</Typography>
      <Box sx={{ maxWidth: 500, mb: 3 }}>
        <Stepper activeStep={2}>
          {['Select', 'Configure', 'Review', 'Publish'].map((label) => (
            <Step key={label}><StepLabel>{label}</StepLabel></Step>
          ))}
        </Stepper>
      </Box>

      <Divider sx={{ mb: 3 }} />

      {/* Breadcrumbs */}
      <Typography variant="h3" gutterBottom>Breadcrumbs</Typography>
      <Breadcrumbs sx={{ mb: 3 }}>
        <Link underline="hover" color="inherit" href="#">Home</Link>
        <Link underline="hover" color="inherit" href="#">Design System</Link>
        <Typography color="text.primary">Tokens</Typography>
      </Breadcrumbs>

      <Divider sx={{ mb: 3 }} />

      {/* Divider */}
      <Typography variant="h3" gutterBottom>Divider</Typography>
      <Box sx={{ maxWidth: 400, mb: 3 }}>
        <Typography variant="body2">Content above</Typography>
        <Divider sx={{ my: 1 }} />
        <Typography variant="body2">Content below</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1 }}>
          <Typography variant="body2">Left</Typography>
          <Divider orientation="vertical" flexItem />
          <Typography variant="body2">Right</Typography>
        </Box>
      </Box>

      <Divider sx={{ mb: 3 }} />

      {/* Typography showcase */}
      <Typography variant="h3" gutterBottom>Typography</Typography>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>Body 1 — The quick brown fox jumps over the lazy dog.</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>Body 2 — Smaller muted text.</Typography>
      <Typography variant="caption">CAPTION TEXT</Typography>
    </Box>
  );
};

export const Default: Story = {
  render: () => <OverviewPage />,
};
