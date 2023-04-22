import { FC } from "react";
import { Flex, Button, Grid, ActionIcon, Box } from "@mantine/core";
import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";

const NavBar: FC = () => {
  return (
    <Flex justify="space-around">
      <Box m={5}>
        <Flex gap="lg" align="center" justify="flex-start" direction="row">
          <Button variant="subtle" color="indigo.7" size="lg">
            Home
          </Button>
          <Button variant="subtle" color="indigo.7" size="lg">
            About
          </Button>
          <Button variant="subtle" color="indigo.7" size="lg">
            Tech Stack
          </Button>
          <Button variant="subtle" color="indigo.7" size="lg">
            Projects
          </Button>
          <Button variant="subtle" color="indigo.7" size="lg">
            Contact
          </Button>
        </Flex>
      </Box>
      <Box m={4}>
        <Flex gap="lg" justify="flex-end" direction="row">
          <Box mt={13}>
            <ActionIcon color="indigo.7" variant="filled">
              <IconBrandLinkedin />
            </ActionIcon>
          </Box>
          <Box mt={13}>
            <ActionIcon color="indigo.7" variant="filled">
              <IconBrandGithub />
            </ActionIcon>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default NavBar;
