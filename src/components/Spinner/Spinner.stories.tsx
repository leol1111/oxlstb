import React, {useCallback, useEffect, useRef, useState} from 'react';
import type { Meta } from '@storybook/react';
import { Spinner } from './Spinner';


// Define Meta information for the Spinner component
const meta: Meta = {
  title: 'Components/Spinner', 
  component: Spinner,
  parameters: {
    componentSubtitle: 'A component for displaying spinner.',
  },
};

export default meta;


export function All() {
  return (
    <>
      <Default />
      <Small />
    </>
  );
}

export function Default() {
  return <Spinner accessibilityLabel="Spinner example" size="large" />;
}

export function Small() {
  return <Spinner accessibilityLabel="Small spinner example" size="small" />;
}
