import { Box, Button, Image } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";

import { Flex, Spacer } from "@chakra-ui/react";
import Logo from "../Assets/Logo";
import LoginButton from "./LoginButton";
import { logout } from "../firebase";
import { useNavigate } from "react-router-dom";

interface Props {
  isLoggedIn: boolean;
  setLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const NavBar = (props: Props) => {
  const routing = useNavigate();
  const logoutHandler = () => {
    logout();
    props.setLoggedIn(false);
    routing("/login");
  };
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
        {props.isLoggedIn ? (
          <>
            <button onClick={logoutHandler}>LogOut</button>
          </>
        ) : (
          <>
            <a href="#">Programs</a>
            <a href="#">SignUp</a>
            <LoginButton text={"Log in"} />
          </>
        )}
      </Box>
    </Box>
  );
};

export default NavBar;
