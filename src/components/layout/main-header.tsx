import { Container, Grid, Image } from "@mantine/core";
import { FC } from "react";
import logo from "../../../public/logo.svg";
import NavBar from "./nav-bar";
const MainHeader: FC = () => {
  return (
    <Container>
      <Grid>
        <Grid.Col span="auto">
          <Image
            w={227}
            h={151}
            fit="cover"
            width="80%"
            height="50%"
            src={logo.src}
            alt="header logo"
          />
        </Grid.Col>
        <Grid.Col span="auto">
          <NavBar />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default MainHeader;
