import { ComponentStory } from "@storybook/react";
import MainPanel from "./";

export default {
  title: "Organisms/MainPanel",
  component: MainPanel,
};

const Template: ComponentStory<typeof MainPanel> = (args) => (
  <MainPanel {...args} />
);

export const MainPanelPrimary = Template.bind({});

MainPanelPrimary.args = {
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
    {
      text: "HP",
      stat: "20",
    },
    {
      text: "HP",
      stat: "10",
    },
    {
      text: "HP",
      stat: "40",
    },
  ],
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
};
