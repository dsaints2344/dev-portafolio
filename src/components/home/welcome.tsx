import { FC } from "react";
import { Flex } from "@mantine/core";
import WelcomeText from "./welcome-text";
const Welcome: FC = () => {
  return (
    <Flex justify="space-round">
      <WelcomeText />
    </Flex>
  );
};

export default Welcome;
