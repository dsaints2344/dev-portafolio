import { Grid } from "@mantine/core";
import Image from "next/image";
import TsIcon from "../../../public/logos/ts_logo.svg";
export const TechGrid = () => {
  return (
    <Grid justify="space-between" w="80%">
      <Grid.Col>
        <Image alt="typescript" src={TsIcon} />
      </Grid.Col>
    </Grid>
  );
};
