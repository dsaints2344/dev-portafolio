import { FC } from "react";
import { Flex, Button, Grid, ActionIcon, Box } from "@mantine/core";
import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import "../../i18n/config";
const NavBar = () => {
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <Flex justify="space-around">
      <Box m={5}>
        <Flex gap="lg" align="center" justify="flex-start" direction="row">
          <Button
            variant="subtle"
            onClick={() => router.push("/")}
            color="indigo.7"
            size="lg"
          >
            {t("common.home")}
          </Button>
          <Button
            variant="subtle"
            onClick={() => router.push("/about-me")}
            color="indigo.7"
            size="lg"
          >
            {t("common.about")}
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
