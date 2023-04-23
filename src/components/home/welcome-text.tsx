import { Text } from "@mantine/core";

const WelcomeText = () => {
  return (
    <Text fz={50} fw="bolder" color="americanBlue.7">
      Welcome, <Text>My name is</Text>{" "}
      <Text
        variant="gradient"
        gradient={{ from: "americanBlue", to: "bondiBlue", deg: 20 }}
      >
        David De Los Santos
      </Text>{" "}
      Software Engineer
    </Text>
  );
};

export default WelcomeText;
