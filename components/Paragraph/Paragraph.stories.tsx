import { ComponentStory } from "@storybook/react";
import Paragraph from "./";

export default {
  title: "Atoms/Typography",
  component: Paragraph,
};

const Template: ComponentStory<typeof Paragraph> = (args) => (
  <Paragraph {...args} />
);

export const ParagraphPrimary = Template.bind({});

ParagraphPrimary.args = {
  text: "Simple párrafo",
  colorVariant: "dark",
  weight: "regular",
};
