import { Box, Button, Image } from "@chakra-ui/react";
import React from "react";

import { Flex, Spacer } from "@chakra-ui/react";
import Logo from "../Assets/Logo";
import LoginButton from "./LoginButton";

interface Props {}

const NavBar = (props: Props) => {
  return (
    <Box
      d={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      borderBottom={"1px solid #000000"}
      p={"10"}
      w={"100%"}
      h={"70px"}
    >
      <Box w={"250px"} h={"50px"} mt={"20px"}>
        <Logo />
      </Box>
      <Box
        d={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
        w={"40%"}
      >
        <a href="#">Programs</a>
        <a href="#">SignUp</a>
        <LoginButton text={"Log in"} />
      </Box>
    </Box>
  );
};

export default NavBar;
