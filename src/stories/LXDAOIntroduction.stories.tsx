import React from "react";
import LXDAOIntroduction from "../components/LXDAOIntroduction";

export default {
  title: "Example/LXDAOIntroduction",
  component: LXDAOIntroduction,
  argTypes: { maxWidth: "1216px", xsWidth: "350px" },
};

const Template = () => <LXDAOIntroduction />;

export const component = Template.bind({});
