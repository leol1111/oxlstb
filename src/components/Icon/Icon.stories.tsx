
import type { Meta } from '@storybook/react';
import { Icon } from './Icon';
import { PlusIcon } from '@shopify/polaris-icons'; 
import { Text } from '../Text';


// Define Meta information for the Icon component
const meta: Meta = {
  title: 'Components/Icon', // Provide a icon for your storybook
  component: Icon,
  parameters: {
    componentSubtitle: 'A component for displaying icons.',
  },
};

export default meta;


  export function Default() {
    return <Icon source={PlusIcon} />;
  }

  export function Colored() {
    return (
      <div className="grid gap-4">
        <Text as="p" variant="bodyMd" alignment="center">
          Base tone
        </Text>
        <Icon source={PlusIcon} tone="base" />
        <Text as="p" variant="bodyMd" alignment="center">
          Subdued tone
        </Text>
        <Icon source={PlusIcon} tone="subdued" />
        <Text as="p" variant="bodyMd" alignment="center">
          Primary tone
        </Text>
        <Icon source={PlusIcon} tone="primary" />
        <Text as="p" variant="bodyMd" alignment="center">
          Info tone
        </Text>
        <Icon source={PlusIcon} tone="info" />
        <Text as="p" variant="bodyMd" alignment="center">
          Success tone
        </Text>
        <Icon source={PlusIcon} tone="success" />
        <Text as="p" variant="bodyMd" alignment="center">
          Caution tone
        </Text>
        <Icon source={PlusIcon} tone="caution" />
        <Text as="p" variant="bodyMd" alignment="center">
          Warning tone
        </Text>
        <Icon source={PlusIcon} tone="warning" />
        <Text as="p" variant="bodyMd" alignment="center">
          Critical tone
        </Text>
        <Icon source={PlusIcon} tone="critical" />
        <Text as="p" variant="bodyMd" alignment="center">
          Emphasis tone
        </Text>
        <Icon source={PlusIcon} tone="emphasis" />
        <Text as="p" variant="bodyMd" alignment="center">
          Magic tone
        </Text>
        <Icon source={PlusIcon} tone="magic" />
        <Text as="p" variant="bodyMd" alignment="center">
          Text Primary tone
        </Text>
        <Icon source={PlusIcon} tone="textPrimary" />
        <Text as="p" variant="bodyMd" alignment="center">
          Text Caution tone
        </Text>
        <Icon source={PlusIcon} tone="textCaution" />
        <Text as="p" variant="bodyMd" alignment="center">
          Text Warning tone
        </Text>
        <Icon source={PlusIcon} tone="textWarning" />
        <Text as="p" variant="bodyMd" alignment="center">
          Text Critical tone
        </Text>
        <Icon source={PlusIcon} tone="textCritical" />
        <Text as="p" variant="bodyMd" alignment="center">
          Text Info tone
        </Text>
        <Icon source={PlusIcon} tone="textInfo" />
        <Text as="p" variant="bodyMd" alignment="center">
          Text Success tone
        </Text>
        <Icon source={PlusIcon} tone="textSuccess" />
        <Text as="p" variant="bodyMd" alignment="center">
          Text Magic tone
        </Text>
        <Icon source={PlusIcon} tone="textMagic" />
      </div>
    );
  }
  