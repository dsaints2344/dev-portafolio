import { Text } from "@mantine/core";
import { useTranslation } from "react-i18next";

const WelcomeText = () => {
  const { t } = useTranslation();
  const welcomeSalute = t("home.welcomeSalute", { returnObjects: true });
  return (
    <Text component="div" fz={50} fw="bolder" c="americanBlue.7">
      {welcomeSalute[0]}
      <Text inherit>{welcomeSalute[1]}</Text>{" "}
      <Text
        inherit
        variant="gradient"
        gradient={{ from: "americanBlue", to: "bondiBlue", deg: 20 }}
      >
        {t("home.name")}
      </Text>{" "}
      {t("home.title")}
    </Text>
  );
};

export default WelcomeText;
