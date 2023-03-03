import { ComponentStory } from "@storybook/react";
import Title from "./";

export default {
  title: "Atoms/Typography",
  component: Title,
};

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const TitlePrimary = Template.bind({});

TitlePrimary.args = {
  text: "Charmander",
  colorVariant: "dark",
  weight: "regular",
};
