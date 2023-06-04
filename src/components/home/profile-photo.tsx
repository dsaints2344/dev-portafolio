import { Image, Box, Avatar, MantineTheme } from "@mantine/core";
import profile from "../../../public/profile-photo.jpeg";
const ProfilePhoto = () => {
  return (
    <Box
      display="flex"
      sx={(theme) => ({
        borderRadius: "50%",
        backgroundColor: theme.colors.richBlack[7],
        width: 315,
        height: 315,
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: theme.fn.gradient({
          from: "americanBlue",
          to: "bondiBlue",
          deg: 200,
        }),
      })}
    >
      <Avatar variant="filled" src={profile.src} radius={150} size={300} />
    </Box>
  );
};

export default ProfilePhoto;
