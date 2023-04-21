import { FC } from "react";
import { Flex, Button, Grid } from "@mantine/core";

const NavBar: FC = () => {
  return (
    <Grid>
      <Grid.Col>
        <Flex gap="lg" align="center" justify="flex-start" direction="row">
          <Button variant="subtle" color="indigo.7">
            Home
          </Button>
          <Button variant="subtle" color="indigo.7">
            About
          </Button>
          <Button variant="subtle" color="indigo.7">
            Tech Stack
          </Button>
          <Button variant="subtle" color="indigo.7">
            Projects
          </Button>
          <Button variant="subtle" color="indigo.7">
            Contact
          </Button>
        </Flex>
      </Grid.Col>
    </Grid>
  );
};

export default NavBar;
