import { Button, Tooltip, Text, Menu, MenuButton } from "@chakra-ui/react";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/layout";
import React, { useState } from "react";
import { Avatar } from "@chakra-ui/avatar";
import { ChatState } from "../../context/ChatProvider";

const SideBar = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();

  const { user } = ChatState();
  return (
    <>
      <Box
        d="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="white"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="5px"
      >
        <Tooltip
          label="Search Users to chat with"
          hasArrow
          placement="bottom-end"
        >
          <Button variant="ghost">
            <i class="fas fa-search"></i>
            <Text d={{ base: "none", md: "flex" }} px="4">
              Search Users
            </Text>
          </Button>
        </Tooltip>
        <Text font-size="2xl" fontfamily="Work sans">
          Chat-App
        </Text>
        <div>
          <Menu>
            <MenuButton p={1}>
              <BellIcon fontSize={"2xl"} margin={1} />
            </MenuButton>
            {/* <MenuList></MenuList> */}
          </Menu>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              <Avatar size="sm" cursor="pointer" name="" />
            </MenuButton>
          </Menu>
        </div>
      </Box>
    </>
  );
};

export default SideBar;