import AboutMeText from "@/components/about-me/about-me-text";
import WorkExperience from "@/components/about-me/work-experience";
import { Box, Flex } from "@mantine/core";

export default function AboutMe() {
  return (
    <Flex direction="column">
      <Box pb="xl">
        <AboutMeText />
      </Box>
      <WorkExperience />
    </Flex>
  );
}
