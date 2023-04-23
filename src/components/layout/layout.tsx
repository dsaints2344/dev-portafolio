import { FC, ReactNode } from "react";
import MainHeader from "./main-header";
import { Container, Box } from "@mantine/core";

interface Props {
  children?: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <MainHeader />
      <Box p={23}>{children}</Box>
    </>
  );
};

export default Layout;
