import { Avatar, Box, Flex, Text, Masonry } from "gestalt";

type NavigationDataType = {
  name: string;
  icon: string | undefined;
  role: string;
};

const navigationData: NavigationDataType = {
  name: "Keerthi",
  icon: undefined,
  role: "User",
};

const Navigation = () => {
  return (
    <Box
      color="secondary"
      padding={5}
      width={"100%"}
      display="flex"
      alignItems="baseline"
    >
      <Flex gap={2}>
        <Avatar
          size="sm"
          name={navigationData.name}
          verified={navigationData.role === "Admin"}
          src={navigationData.icon ?? undefined}
          outline={!navigationData.icon}
        />
        <Flex direction="column" gap={1}>
          <Text> {navigationData.name} </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navigation;
