
import type { Meta } from '@storybook/react';
import { Icon } from './Icon';
import AddIcon from '../../icons/AddIcon'
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

interface Icons {
    [key: string]: any;
  }

  const icons: Icons = AddIcon;

  export function Default() {
    return <Icon source={AddIcon} />;
  }

  export function Colored() {
    return (
      <div className="grid gap-4">
        <Text as="p" variant="bodyMd" alignment="center">
          Base tone
        </Text>
        <Icon source={icons.PlusCircleIcon} tone="base" />
        <Text as="p" variant="bodyMd" alignment="center">
          Subdued tone
        </Text>
        <Icon source={icons.PlusCircleIcon} tone="subdued" />
        <Text as="p" variant="bodyMd" alignment="center">
          Primary tone
        </Text>
        <Icon source={icons.PlusCircleIcon} tone="primary" />
        <Text as="p" variant="bodyMd" alignment="center">
          Info tone
        </Text>
        <Icon source={icons.PlusCircleIcon} tone="info" />
        <Text as="p" variant="bodyMd" alignment="center">
          Success tone
        </Text>
        <Icon source={icons.PlusCircleIcon} tone="success" />
        <Text as="p" variant="bodyMd" alignment="center">
          Caution tone
        </Text>
        <Icon source={icons.PlusCircleIcon} tone="caution" />
        <Text as="p" variant="bodyMd" alignment="center">
          Warning tone
        </Text>
        <Icon source={icons.PlusCircleIcon} tone="warning" />
        <Text as="p" variant="bodyMd" alignment="center">
          Critical tone
        </Text>
        <Icon source={icons.PlusCircleIcon} tone="critical" />
        <Text as="p" variant="bodyMd" alignment="center">
          Emphasis tone
        </Text>
        <Icon source={icons.PlusCircleIcon} tone="emphasis" />
        <Text as="p" variant="bodyMd" alignment="center">
          Magic tone
        </Text>
        <Icon source={icons.PlusCircleIcon} tone="magic" />
        <Text as="p" variant="bodyMd" alignment="center">
          Text Primary tone
        </Text>
        <Icon source={icons.PlusCircleIcon} tone="textPrimary" />
        <Text as="p" variant="bodyMd" alignment="center">
          Text Caution tone
        </Text>
        <Icon source={icons.PlusCircleIcon} tone="textCaution" />
        <Text as="p" variant="bodyMd" alignment="center">
          Text Warning tone
        </Text>
        <Icon source={icons.PlusCircleIcon} tone="textWarning" />
        <Text as="p" variant="bodyMd" alignment="center">
          Text Critical tone
        </Text>
        <Icon source={icons.PlusCircleIcon} tone="textCritical" />
        <Text as="p" variant="bodyMd" alignment="center">
          Text Info tone
        </Text>
        <Icon source={icons.PlusCircleIcon} tone="textInfo" />
        <Text as="p" variant="bodyMd" alignment="center">
          Text Success tone
        </Text>
        <Icon source={icons.PlusCircleIcon} tone="textSuccess" />
        <Text as="p" variant="bodyMd" alignment="center">
          Text Magic tone
        </Text>
        <Icon source={icons.PlusCircleIcon} tone="textMagic" />
      </div>
    );
  }
  