import { Box, Text, Title } from "@mantine/core";
import { useTranslation } from "react-i18next";

const AboutMeText = () => {
  const { t } = useTranslation();
  return (
    <>
      <Box>
        <Title size="h1" color="indigo.7">
          {t("aboutMe.header")}
        </Title>
      </Box>
      <Box w="50%" pt="1.6%">
        <Text color="indigo.8">{t("aboutMe.introduction")}</Text>
      </Box>
    </>
  );
};

export default AboutMeText;
