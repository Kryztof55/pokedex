import { ComponentStory } from "@storybook/react";
import TypePill from "./";

export default {
  title: "Molecules/TypePill",
  component: TypePill,
  argTypes: {
    type: {
      options: [
        "normal",
        "fighting",
        "flying",
        "poison",
        "ground",
        "rock",
        "bug",
        "ghost",
        "steel",
        "fire",
        "water",
        "grass",
        "electric",
        "psychic",
        "ice",
        "dragon",
        "dark",
        "fairy",
        "unknown",
        "shadow",
      ],
      control: { type: "select" },
    },
  },
};

const Template: ComponentStory<typeof TypePill> = (args) => (
  <TypePill {...args} />
);

export const TypePillNormal = Template.bind({});

TypePillNormal.args = {
  type: "normal",
};
