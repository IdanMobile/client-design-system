// @ts-nocheck
import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { designSystemTheme } from './theme';
import '../../../design-tokens/tokens.css';

interface DesignSystemProviderProps {
  children: React.ReactNode;
}

export const DesignSystemProvider: React.FC<DesignSystemProviderProps> = ({ children }) => (
  <ThemeProvider theme={designSystemTheme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);
