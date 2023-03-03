import { ComponentStory } from "@storybook/react";
import Card from "./";

export default {
  title: "Organisms/Card",
  component: Card,
};

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const CardPrimary = Template.bind({});

CardPrimary.args = {
  text: "Simple párrafo",
  colorVariant: "dark",
  weight: "regular",
};
