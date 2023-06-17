import { IExperience } from "../../shared/types/experience";
import {
  ActionIcon,
  Box,
  Button,
  Flex,
  Title,
  Text,
  Divider,
} from "@mantine/core";
import { IconBuilding, IconCalendarStats } from "@tabler/icons-react";
import { useFormatter } from "next-intl";

type Props = {
  experience: IExperience[];
};

const Timeline = ({ experience }: Props) => {
  const dateFormat = useFormatter();
  return (
    <>
      {experience.map((value) => {
        return (
          <Box w="50%" key={value.id} m="0.5%">
            <Flex justify="space-between">
              <Title color="indigo.8" size="h4" fw={400}>
                {value.title}
              </Title>
              <Button radius="xl" variant="light" color="green.9">
                {value.type}
              </Button>
            </Flex>
            <Flex justify="space-between">
              <Flex>
                <ActionIcon>
                  <IconBuilding />
                </ActionIcon>
                <Box pt="0.5%">
                  <Text fs="xs">{value.location}</Text>
                </Box>
              </Flex>
              <Flex pt="0.5%">
                <ActionIcon>
                  <IconCalendarStats />
                </ActionIcon>
                <Box pt="0.5%">
                  <Text fs="xs">
                    {dateFormat.dateTime(new Date(value.dateStart), {
                      year: "numeric",
                      month: "short",
                    })}{" "}
                    -{" "}
                    {value.dateEnd
                      ? dateFormat.dateTime(new Date(value.dateEnd), {
                          year: "numeric",
                          month: "short",
                        })
                      : "present"}
                  </Text>
                </Box>
              </Flex>
            </Flex>
            <Divider my="0.7%" />
          </Box>
        );
      })}
    </>
  );
};

export default Timeline;
