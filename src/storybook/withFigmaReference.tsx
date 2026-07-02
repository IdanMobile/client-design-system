import React from 'react';
import type { Decorator } from '@storybook/react';

/**
 * Storybook decorator that renders the implemented component side-by-side
 * with its Figma reference image so designers can visually QA implementation
 * fidelity without leaving Storybook.
 *
 * Usage in a component's stories file:
 *
 *   import referencePng from './MyComponent.reference.png';
 *   import { withFigmaReference } from '../../storybook/withFigmaReference';
 *
 *   const meta = {
 *     title: 'Components/MyComponent',
 *     component: MyComponent,
 *     decorators: [withFigmaReference(referencePng)],
 *   } satisfies Meta<typeof MyComponent>;
 *
 * The reference PNG is exported from the canonical Figma variant at sync time
 * and committed next to the component source as `{ComponentName}.reference.png`.
 * This is the exact image the LLM saw when generating the component.
 * When no reference file exists the decorator is a no-op (the factory is simply
 * not called, so no import is added).
 */
/**
 * @param imageUrl   Path/URL to the Figma reference PNG.
 * @param reviewBanner  Optional banner text shown when the component needs
 *   visual review (e.g. "⚠️ Needs Visual Review (62/100)").  When set, an
 *   orange warning strip is rendered above the implementation panel.
 */
export const withFigmaReference = (imageUrl: string, reviewBanner?: string): Decorator =>
  (Story, context) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
        fontFamily: 'sans-serif',
      }}
    >
      {reviewBanner && (
        <div
          style={{
            background: '#FEF3C7',
            borderBottom: '1px solid #F59E0B',
            color: '#92400E',
            fontSize: 12,
            fontWeight: 600,
            padding: '6px 16px',
            letterSpacing: '0.02em',
          }}
        >
          {reviewBanner}
        </div>
      )}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 32,
          alignItems: 'flex-start',
          padding: 24,
        }}
      >
        <div style={{ flex: '0 0 auto' }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#888',
              marginBottom: 10,
            }}
          >
            Implementation
          </div>
          <Story {...context} />
        </div>

        <div
          style={{
            flex: '0 0 auto',
            borderLeft: '1px solid #E5E7EB',
            paddingLeft: 32,
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#888',
              marginBottom: 10,
            }}
          >
            Figma Reference
          </div>
          <img
            src={imageUrl}
            alt="Figma reference design"
            style={{
              display: 'block',
              maxWidth: 560,
              background: '#FAFAFA',
              padding: 16,
              borderRadius: 6,
              border: '1px solid #E5E7EB',
            }}
          />
        </div>
      </div>
    </div>
  );
