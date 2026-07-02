// @ts-nocheck
import React from 'react';
import type { Decorator } from '@storybook/react';
import { DesignSystemProvider } from './DesignSystemProvider';

/**
 * Storybook decorator that wraps stories with the DesignSystemProvider.
 * This is how the developer would use it in their app — wrap once at root.
 */
export const withDesignSystem: Decorator = (Story) => (
  <DesignSystemProvider>
    <Story />
  </DesignSystemProvider>
);
