import { ComponentStory } from "@storybook/react";
import TypePill from "./";

export default {
  title: "Molecules/TypePill",
  component: TypePill,
};

const Template: ComponentStory<typeof TypePill> = (args) => (
  <TypePill {...args} />
);

export const TypePillNormal = Template.bind({});

TypePillNormal.args = {
  type: "normal",
};
