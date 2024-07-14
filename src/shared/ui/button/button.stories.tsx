import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button, buttonVariants } from '@/shared/ui';
import { ButtonProps } from './button';

type ButtonPageProps = React.ComponentProps<typeof Button> & {
  footer?: string;
};

const meta = {
  component: Button,
  title: 'Buttons/Button',
  render: ({ footer, ...args }) => (
    <>
      <Button {...args}>button</Button>
      <footer>{footer}</footer>
    </>
  ),
  tags: ['autodocs'],
  // decorators: [
  //       (story) => <Card><CardContent>{story()}</CardContent></Card>,
  // ],
  args: { children: 'button' },
  argTypes: {
    variant: {
      options: Object.keys(buttonVariants),
      control: { type: 'radio' },
    },
    children: { control: 'text' },
    onClick: { action: fn() },
    fullWidth: { active: { control: 'boolean' } },
    disabled: { control: 'boolean' },
    asChild: { table: { disable: true } },
    size: {
      options: Object.keys(buttonVariants),
      control: { type: 'radio' },
    },
  },
  parameters: {
    controls: { expanded: true },
    layout: 'centered',
  },
} satisfies Meta<ButtonPageProps>;

export default meta;

type Story = StoryObj<ButtonPageProps>;

export const buttonDefaultArgs: ButtonProps = {
  disabled: false,
};

export const Default: Story = {
  args: {
    ...buttonDefaultArgs,
    footer: 'Built with Storybook',
  },
};

export const Destructive: Story = {
  args: {
    ...buttonDefaultArgs,
    variant: 'destructive',
  },
};

export const Ghost: Story = {
  args: {
    ...buttonDefaultArgs,
    variant: 'ghost',
  },
};
export const Link: Story = {
  render: (args) => (
    <Button asChild {...args} variant="link">
      <a href="@gmail.com">link to some where</a>
    </Button>
  ),
  args: {
    ...buttonDefaultArgs,
    variant: 'link',
  },
};
export const Secondary: Story = {
  args: {
    ...buttonDefaultArgs,
    variant: 'secondary',
  },
};
export const Outline: Story = {
  args: {
    ...buttonDefaultArgs,
    variant: 'outline',
  },
};
export const Info: Story = {
  args: {
    ...buttonDefaultArgs,
    variant: 'secondary',
  },
};

Info.parameters = {
  viewport: {
    viewports: 'FHD',
  },
};
