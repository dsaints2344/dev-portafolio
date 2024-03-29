import { TechGrid } from "@/components/tech-stack/tech-grid";
import { TechItem } from "@/components/tech-stack/tech-item";
import { Box, Flex, Text } from "@mantine/core";

export default function TechStack() {
  return (
    <Flex direction="column">
      <Box pb="xl">
        <TechGrid />
      </Box>
    </Flex>
  );
}
