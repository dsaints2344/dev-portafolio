import { Container, Grid, Image } from "@mantine/core";
import { FC } from "react";
import logo from "../../../public/logo.svg";
import NavBar from "./nav-bar";
const MainHeader: FC = () => {
  return (
    <Grid>
      <Grid.Col span={4}>
        <Image
          w={227}
          h={151}
          fit="contain"
          width="75%"
          height="50%"
          src={logo.src}
          alt="header logo"
        />
      </Grid.Col>
      <Grid.Col span={8}>
        <NavBar />
      </Grid.Col>
    </Grid>
  );
};

export default MainHeader;
