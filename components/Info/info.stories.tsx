import { ComponentStory } from "@storybook/react";
import Info from "./";

export default {
  title: "Molecules/Info",
  component: Info,
};

const Template: ComponentStory<typeof Info> = (args) => <Info {...args} />;

export const InfoPrimary = Template.bind({});

InfoPrimary.args = {
  title: "Altura",
  value: "1,0",
};
