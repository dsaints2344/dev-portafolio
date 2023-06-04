import { Box, Text, Title } from "@mantine/core";

const AboutMeText = () => {
  return (
    <>
      <Box>
        <Title size="h1" color="indigo.7">
          About Me
        </Title>
      </Box>
      <Box w="70%" pt="1.6%">
        <Text color="indigo.8">
          I am a curiosity, problem solving, driven software engineer, with a
          passion for understanding how things work. Which has helped through my
          career, but as a kid, has left a considerable trail of destroyed toys,
          while trying to disassemble them and put them back together.
        </Text>
      </Box>
    </>
  );
};

export default AboutMeText;
