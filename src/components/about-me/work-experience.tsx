import { Box, Title } from "@mantine/core";
import Timeline from "../shared/timeline";
import { supabaseClient } from "@/api/supabase-client";
import { IExperience } from "@/shared/types/experience";
import { useState, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";

const WorkExperience = () => {
  const [experience, setExperience] = useState<IExperience[]>([]);
  const [education, setEducation] = useState<IExperience[]>([]);
  const { t } = useTranslation();

  const loadExperience = useCallback(async () => {
    let { data, error } = await supabaseClient.from("work_experience").select();
    setExperience(data as IExperience[]);
  }, []);

  const loadEducation = useCallback(async () => {
    let { data, error } = await supabaseClient.from("education").select();
    setEducation(data as IExperience[]);
  }, []);

  useEffect(() => {
    loadExperience();
    loadEducation();
  }, []);

  return (
    <>
      <Box pb="1.6%" sx={{ justifyContent: "left" }}>
        <Title size="h1" color="indigo.7">
          {t("aboutMe.workExperience")}
        </Title>
      </Box>
      <Timeline experience={experience} />
      <Box pb="1.6%" pt="1.9%" sx={{ justifyContent: "left" }}>
        <Title size="h1" color="indigo.7">
          {t("aboutMe.education")}
        </Title>
      </Box>
      <Timeline experience={education} />
    </>
  );
};

export default WorkExperience;
