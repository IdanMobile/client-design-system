// @ts-nocheck
/**
 * Design System entry point.
 *
 * Usage:
 *   import { DesignSystemProvider, Button, Card, TextField } from './design-system';
 *
 *   <DesignSystemProvider>
 *     <Button variant="contained">Submit</Button>
 *   </DesignSystemProvider>
 *
 * All exports are native MUI components — the DesignSystemProvider injects
 * design tokens via MUI's ThemeProvider. No custom wrappers needed.
 */

// ── Provider (wrap your app root once) ─────────────────────────
export { DesignSystemProvider } from './DesignSystemProvider';
export { designSystemTheme } from './theme';

// ── Inputs ─────────────────────────────────────────────────────
export { default as Button } from '@mui/material/Button';
export { default as ButtonGroup } from '@mui/material/ButtonGroup';
export { default as Checkbox } from '@mui/material/Checkbox';
export { default as Fab } from '@mui/material/Fab';
export { default as IconButton } from '@mui/material/IconButton';
export { default as Radio } from '@mui/material/Radio';
export { default as RadioGroup } from '@mui/material/RadioGroup';
export { default as Rating } from '@mui/material/Rating';
export { default as Select } from '@mui/material/Select';
export { default as Slider } from '@mui/material/Slider';
export { default as Switch } from '@mui/material/Switch';
export { default as TextField } from '@mui/material/TextField';
export { default as ToggleButton } from '@mui/material/ToggleButton';
export { default as ToggleButtonGroup } from '@mui/material/ToggleButtonGroup';
export { default as Autocomplete } from '@mui/material/Autocomplete';
export { default as FormControlLabel } from '@mui/material/FormControlLabel';
export { default as FormControl } from '@mui/material/FormControl';
export { default as FormLabel } from '@mui/material/FormLabel';
export { default as MenuItem } from '@mui/material/MenuItem';

// ── Data Display ───────────────────────────────────────────────
export { default as Avatar } from '@mui/material/Avatar';
export { default as Badge } from '@mui/material/Badge';
export { default as Chip } from '@mui/material/Chip';
export { default as Divider } from '@mui/material/Divider';
export { default as List } from '@mui/material/List';
export { default as ListItem } from '@mui/material/ListItem';
export { default as ListItemButton } from '@mui/material/ListItemButton';
export { default as ListItemIcon } from '@mui/material/ListItemIcon';
export { default as ListItemText } from '@mui/material/ListItemText';
export { default as Table } from '@mui/material/Table';
export { default as TableBody } from '@mui/material/TableBody';
export { default as TableCell } from '@mui/material/TableCell';
export { default as TableContainer } from '@mui/material/TableContainer';
export { default as TableHead } from '@mui/material/TableHead';
export { default as TableRow } from '@mui/material/TableRow';
export { default as Tooltip } from '@mui/material/Tooltip';
export { default as Typography } from '@mui/material/Typography';

// ── Feedback ───────────────────────────────────────────────────
export { default as Alert } from '@mui/material/Alert';
export { default as CircularProgress } from '@mui/material/CircularProgress';
export { default as Dialog } from '@mui/material/Dialog';
export { default as DialogActions } from '@mui/material/DialogActions';
export { default as DialogContent } from '@mui/material/DialogContent';
export { default as DialogContentText } from '@mui/material/DialogContentText';
export { default as DialogTitle } from '@mui/material/DialogTitle';
export { default as LinearProgress } from '@mui/material/LinearProgress';
export { default as Skeleton } from '@mui/material/Skeleton';
export { default as Snackbar } from '@mui/material/Snackbar';

// ── Navigation ─────────────────────────────────────────────────
export { default as Breadcrumbs } from '@mui/material/Breadcrumbs';
export { default as Drawer } from '@mui/material/Drawer';
export { default as Menu } from '@mui/material/Menu';
export { default as Pagination } from '@mui/material/Pagination';
export { default as Step } from '@mui/material/Step';
export { default as StepLabel } from '@mui/material/StepLabel';
export { default as Stepper } from '@mui/material/Stepper';
export { default as Tab } from '@mui/material/Tab';
export { default as Tabs } from '@mui/material/Tabs';

// ── Surfaces ───────────────────────────────────────────────────
export { default as Accordion } from '@mui/material/Accordion';
export { default as AccordionDetails } from '@mui/material/AccordionDetails';
export { default as AccordionSummary } from '@mui/material/AccordionSummary';
export { default as AppBar } from '@mui/material/AppBar';
export { default as Card } from '@mui/material/Card';
export { default as CardActions } from '@mui/material/CardActions';
export { default as CardContent } from '@mui/material/CardContent';
export { default as Paper } from '@mui/material/Paper';
export { default as Toolbar } from '@mui/material/Toolbar';

// ── Layout ─────────────────────────────────────────────────────
export { default as Box } from '@mui/material/Box';
export { default as Link } from '@mui/material/Link';
