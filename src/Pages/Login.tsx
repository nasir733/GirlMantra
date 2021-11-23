import {
  Box,
  chakra,
  Container,
  Flex,
  FormLabel,
  Image,
  Input,
  Stack,
  Switch,
  Text,
} from "@chakra-ui/react";
import React from "react";
import GoogleSvg from "../Assets/GoogleSvg";
import LoginPic from "../Assets/LoginPic.jpeg";

interface Props {}

const Login = (props: Props) => {
  return (
    <Box h={"90vh"}>
      <Box d={"flex"} w={"100%"} justifyContent={"end"}>
        <Image
          src={LoginPic}
          w={"646.5px"}
          h={"722.46px"}
          objectFit={"cover"}
        />
        <Box
          position={"absolute"}
          left={"50%"}
          top={"50%"}
          transform={"translate(-50%,-50%)"}
          //   bottom={"50%"}
          marginLeft={"auto"}
          marginRight={"auto"}
          backgroundColor={" #FFFFFF"}
          boxShadow={"0px 7px 23px rgba(0, 0, 0, 0.05);"}
          height={"619px"}
          width={"574px"}
          d={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          borderRadius={15}
        >
          <Box
            d={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            flexWrap={"wrap"}
          >
            <Box
              d={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"space-evenly"}
            >
              <Text fontSize={"3xl"} textAlign={"center"} fontWeight={900}>
                Sign Up
              </Text>
              <Text color={"#555555"}>Enter your email to sign in</Text>
              <Box mt={"30px"}>
                <GoogleSvg />
              </Box>
            </Box>

            <Box
              w={"100%"}
              h={"339px"}
              d={"flex"}
              flexDirection={"column"}
              justifyContent={"space-evenly"}
            >
              <FormLabel htmlFor="email" mb="0">
                Email
              </FormLabel>
              <Input placeholder="Your Email" name="email" />
              <Box
                d={"Flex"}
                justifyContent={"start"}
                alignItems={"center"}
                flexWrap={"wrap"}
              >
                <Switch id="email-alerts" colorScheme={"pink"} />
                <Text ml={"10px"}>Remember me</Text>
              </Box>
              <chakra.button
                backgroundColor={"#FDDB2F"}
                w={"350px"}
                h={"45px"}
                borderRadius={12}
                fontWeight={700}
              >
                SIGN UP
              </chakra.button>
              <Text d={"flex"} textAlign={"center"} flexWrap={"wrap"}>
                Don't have an account?
                <Text
                  ml={"10px"}
                  color={"#FDDB2F"}
                  fontWeight={"bold"}
                  textAlign={"center"}
                >
                  Sign up
                </Text>
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
