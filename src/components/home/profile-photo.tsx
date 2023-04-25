import { Image, Box, Avatar } from "@mantine/core";
import profile from "../../../public/profile-photo.jpeg";
const ProfilePhoto = () => {
  return (
    <Box color="cyan" w={325} h={325}>
      <Box m={12}>
        <Avatar
          color="cyan"
          variant="filled"
          src={profile.src}
          radius={150}
          size={300}
        ></Avatar>
      </Box>
    </Box>
  );
};

export default ProfilePhoto;
