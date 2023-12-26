import { Box, Flex, Text, Title } from "@mantine/core";
import { useTranslation } from "react-i18next";

const AboutMeText = () => {
  const { t } = useTranslation();
  return (
    <Flex direction="column" justify="center" align="center">
      <Box>
        <Title size="h1" color="indigo.7">
          {t("aboutMe.header")}
        </Title>
      </Box>
      <Box w="53%" pt="1.6%" display="flex">
        <Text color="indigo.8">{t("aboutMe.introduction")}</Text>
      </Box>
    </Flex>
  );
};

export default AboutMeText;
