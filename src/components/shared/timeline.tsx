import { Box, Button, Flex, Title } from "@mantine/core";

const Timeline = () => {
  return (
    <Box w="50%">
      <Flex justify="space-between">
        <Title color="indigo.8" size="h4" fw={400}>
          Junior Web Developer
        </Title>
        <Button radius="xl" variant="light" color="green.9">
          Full Time
        </Button>
      </Flex>
    </Box>
  );
};

export default Timeline;
