import { ComponentStory } from "@storybook/react";
import Checkbox from "./";

export default {
  title: "Atoms/Checkbox",
  component: Checkbox,
};

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const CheckboxPrimary = Template.bind({});
