import { ComponentStory } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "react-query";

import Card from "./";
const queryClient = new QueryClient();

export default {
  title: "Organisms/Card",
  component: Card,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
};

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const CardPrimary = Template.bind({});

CardPrimary.args = {
  name: "Pokéname",
};
