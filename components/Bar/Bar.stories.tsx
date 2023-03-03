import { ComponentStory } from "@storybook/react";
import Bar from "./";

export default {
  title: "Atoms/Bars",
  component: Bar,
};

const Template: ComponentStory<typeof Bar> = (args) => <Bar {...args} />;

export const BarPrimary = Template.bind({});

BarPrimary.args = {
  stat: 80,
};
