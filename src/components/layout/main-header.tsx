import { Box, Grid, Image } from "@mantine/core";
import { FC } from "react";
import logo from "../../../public/logo.svg";
import NavBar from "./nav-bar";
const MainHeader: FC = () => {
  return (
    <Grid>
      <Grid.Col span={4}>
        <Box w="65%" h={151}>
          <Image w="65%" fit="contain" src={logo.src} alt="header logo" />
        </Box>
      </Grid.Col>
      <Grid.Col span={8}>
        <NavBar />
      </Grid.Col>
    </Grid>
  );
};

export default MainHeader;
