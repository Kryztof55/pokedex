import { ComponentStory } from "@storybook/react";
import AddFav from "./";

export default {
  title: "Atoms/AddFav",
  component: AddFav,
};

const Template: ComponentStory<typeof AddFav> = (args) => <AddFav {...args} />;

export const AddFavPrimary = Template.bind({});
