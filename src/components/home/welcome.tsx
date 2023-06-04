import { FC } from "react";
import { Flex } from "@mantine/core";
import WelcomeText from "./welcome-text";
import ProfilePhoto from "./profile-photo";
const Welcome: FC = () => {
  return (
    <Flex justify="space-around">
      <WelcomeText />
      <ProfilePhoto />
    </Flex>
  );
};

export default Welcome;
