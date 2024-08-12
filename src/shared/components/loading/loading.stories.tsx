import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { AvatarLoading } from "./avatar-loading";
import { LoadingDots } from "./dots";
import { ExampleLoading } from "./example-loading";
import { LoadingGear } from "./gear";
import { LoadingPuls } from "./puls";
import { Spin } from "./spin";
import { Throbbing } from "./throbbing";

type ButtonPageProps = React.ComponentProps<typeof ExampleLoading> & {};

const meta = {
  component: ExampleLoading,
  title: "Loading/ExampleLoading",
  render: ({ ...args }) => (
    <>
      <ExampleLoading {...args} />
    </>
  ),
  tags: ["autodocs"],
  // decorators: [
  //       (story) => <Card><CardContent>{story()}</CardContent></Card>,
  // ],
  args: { children: "button" },
  argTypes: {
    children: { control: "text" },
    onClick: { action: fn() },
  },
  parameters: {
    controls: { expanded: true },
    layout: "centered",
  },
} satisfies Meta<ButtonPageProps>;

export default meta;

type Story = StoryObj<ButtonPageProps>;

export const Default: Story = {
  args: {},
};

export const Gera: Story = {
  render: (args) => <LoadingGear {...args} />,
};
export const Avatar: Story = {
  render: (args) => <AvatarLoading {...args} />,
};
export const Spinner: Story = {
  render: (args) => <Spin {...args} />,
};

export const ThorbbingStory: Story = {
  render: (args) => <Throbbing {...args} />,
};
export const Puls: Story = {
  render: (args) => <LoadingPuls {...args} />,
};
export const Dots: Story = {
  render: (args) => <LoadingDots {...args} />,
};
