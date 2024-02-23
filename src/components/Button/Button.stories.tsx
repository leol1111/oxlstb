import React from 'react';
import type { Meta } from '@storybook/react';
import { Text } from '../Text/Text';
import { Button } from './Button';


// Define Meta information for the Button component
const meta: Meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    componentSubtitle: 'A component for displaying buttons.',
  },
};

export default meta;

import {
  PlusIcon,
  XSmallIcon,
  ChevronDownIcon,
  EditIcon,
  MagicIcon,
} from '@shopify/polaris-icons';


export function All() {
 
  return (
    <div>
      <Text as="h4" variant="headingXl">
        Default
      </Text>
      <Default />
      {/* <Text as="h4" variant="headingXl">
        Critical
      </Text>
      <Critical />
      <Text as="h4" variant="headingXl">
        Primary
      </Text>
      <Primary /> */}
     
    </div>
  );
}
export function Default() {
    return (
      <div style={{ display: 'flex', gap: '16px' , margin: '12px 0'}}>
        
            <Button>Label</Button>
            <Button disabled>Label</Button>
            <Button icon={PlusIcon}>Label</Button>
            <Button disabled icon={PlusIcon}>
              Label
            </Button>
            <Button disclosure>Label</Button>
            <Button
              icon={XSmallIcon}
              onClick={() => {}}
              accessibilityLabel="Dismiss"
            />
            <Button
              disabled
              icon={EditIcon}
              onClick={() => {}}
              accessibilityLabel="Dismiss"
            />
      </div>
    );
  }