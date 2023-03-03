import { ComponentStory } from "@storybook/react";
import Caption from "./";

export default {
  title: "Atoms/Typography",
  component: Caption,
};

const Template: ComponentStory<typeof Caption> = (args) => (
  <Caption {...args} />
);

export const CaptionPrimary = Template.bind({});

CaptionPrimary.args = {
  text: "Simple Caption",
  colorVariant: "dark",
  weight: "regular",
};
