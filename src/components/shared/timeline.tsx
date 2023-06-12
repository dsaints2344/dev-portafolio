import { supabaseClient } from "@/api/supabase-client";
import { IExperience } from "../../shared/types/experience";
import { ActionIcon, Box, Button, Flex, Title, Text } from "@mantine/core";
import { IconBuilding, IconCalendarStats } from "@tabler/icons-react";
import { useCallback, useEffect, useState } from "react";

const Timeline = () => {
  const [experience, setData] = useState<IExperience[]>([]);

  const loadExperience = useCallback(async () => {
    let { data, error } = await supabaseClient.from("work_experience").select();

    console.log(data);
  }, []);

  useEffect(() => {
    loadExperience();
  }, []);

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
      <Flex justify="space-between">
        <Flex>
          <ActionIcon>
            <IconBuilding />
          </ActionIcon>
          <Box pt="0.5%">
            <Text fs="xs">Novosit</Text>
          </Box>
        </Flex>
        <Flex pt="0.5%">
          <ActionIcon>
            <IconCalendarStats />
          </ActionIcon>
          <Box pt="0.5%">
            <Text fs="xs">Dec 2018 - Dec 2022</Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Timeline;
