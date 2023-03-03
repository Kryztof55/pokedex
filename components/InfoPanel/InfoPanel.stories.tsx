import { ComponentStory } from "@storybook/react";
import InfoPanel from "./";

export default {
  title: "Molecules/InfoPanel",
  component: InfoPanel,
};

const Template: ComponentStory<typeof InfoPanel> = (args) => (
  <InfoPanel {...args} />
);

export const InfoPanelPrimary = Template.bind({});

InfoPanelPrimary.args = {
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
