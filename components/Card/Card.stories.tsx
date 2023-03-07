import { ComponentStory } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import store from "../../store/store";

import Card from "./";
const queryClient = new QueryClient();

export default {
  title: "Organisms/Card",
  component: Card,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Story />
        </QueryClientProvider>
      </Provider>
    ),
  ],
};

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const CardPrimary = Template.bind({});

CardPrimary.args = {
  name: "Pokéname",
};
