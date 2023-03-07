import { ComponentStory } from "@storybook/react";
import InputSearch from "./";

export default {
  title: "Atoms/InputSearch",
  component: InputSearch,
};

const Template: ComponentStory<typeof InputSearch> = (args) => (
  <InputSearch {...args} />
);

export const InputSearchPrimary = Template.bind({});
InputSearchPrimary.args = {
  placeholder: "Search Pokémon",
};
