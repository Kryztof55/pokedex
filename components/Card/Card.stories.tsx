import { ComponentStory } from "@storybook/react";
import Card from "./";

export default {
  title: "Organisms/Card",
  component: Card,
};

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const CardPrimary = Template.bind({});

CardPrimary.args = {
  types: ["normal", "normal"],
  info: [
    {
      title: "Altura",
      value: "1,0",
    },
    {
      title: "Altura",
      value: "1,0",
    },
    {
      title: "Altura",
      value: "1,0",
    },
    {
      title: "Altura",
      value: "1,0",
    },
  ],
  stats: [
    {
      text: "HP",
      stat: "80",
    },
    {
      text: "HP",
      stat: "50",
    },
    {
      text: "HP",
      stat: "100",
    },
  ],
};
