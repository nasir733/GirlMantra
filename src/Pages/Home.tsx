import {
  Box,
  Button,
  Center,
  chakra,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import AddPlusIcon from "../Components/AddPlusIcon";
import CardImg from "../Assets/Big.jpg";
import DiscordIcom from "../Assets/DiscordIcom";
import { useNavigate, useRoutes } from "react-router-dom";
interface Props {
  isLoggedIn: boolean;
  userName: string;
}

const Home = (props: Props) => {
  const routeing = useNavigate();
  React.useEffect(() => { 
    if(!props.isLoggedIn){
      routeing("/login");
    }
  })
  return (
    <>
      <Box
        h={"100vh"}
        d={"grid"}
        gridTemplateColumns={".5fr 1fr 1fr .5fr"}
        gridTemplateRows={"155px 1fr 174px"}
        width={"100%"}
        gridTemplateAreas={`
        ". header header ."
        ". cards cards ."
        "footer footer footer footer"
        `}
      >
        <Box
          gridArea={"header"}
          d={"flex"}
          justifyContent={"start"}
          alignItems={"center"}
          borderBottom={"1px solid black"}
        >
          <Text>Good morning, {props.userName} </Text>
        </Box>

        <Box
          gridArea={"cards"}
          d={"grid"}
          gridTemplateColumns={"2fr 1fr"}
          w={"100%"}
          h={"100%"}
          gridTemplateRows={".1fr 1fr"}
          gridGap={8}
          gridTemplateAreas={`"Heading Heading""BigCards SmallCards"`}
        >
          <Box
            gridArea={"Heading"}
            d={"flex"}
            justifyContent={"start"}
            alignItems={"center"}
          >
            <Text fontWeight={"bold"}>👇🏻 Start Your Journey</Text>
          </Box>
          <Box
            gridArea={"BigCards"}
            d={"grid"}
            gridTemplateColumns={"1fr 1fr"}
            gridTemplateAreas={`"leftCard RightCard"`}
            h={"80%"}
          >
            <Box
              boxShadow={" 0 4px 8px 0 rgba(0,0,0,0.2)"}
              w={"90%"}
              backgroundImage={CardImg}
              backgroundRepeat={"no-repeat"}
              backgroundSize={"cover"}
              backgroundPosition={"center"}
              border={"1px solid #C8C5C5"}
              boxSizing={"border-box"}
              borderRadius={"19px"}
              d={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              _hover={{ boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)" }}
            >
              <Box
                d={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDirection={"column"}
                p={""}
              >
                <Text
                  fontStyle={"italic"}
                  fontSize={"2xl"}
                  fontWeight={"normal"}
                  lineHeight={"150%"}
                  textTransform={"uppercase"}
                  color={"white"}
                  fontFamily={"Neue Haas Grotesk Display Pro"}
                >
                  3 Day Challenge
                </Text>
                <Text
                  color={"white"}
                  fontWeight={"900"}
                  fontSize={"4xl"}
                  fontStyle={"normal"}
                  fontFamily={"Neue Haas Grotesk Display Pro"}
                >
                  Softness of <br /> Flexibility
                </Text>
                <chakra.button
                  bg={"#FAF9F9"}
                  borderRadius={"10px"}
                  w={"180px"}
                  h={"37px"}
                  color={"#000000"}
                  fontWeight={"bold"}
                >
                  Start
                </chakra.button>
              </Box>
            </Box>
            <Box
              _hover={{ boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)" }}
              boxShadow={" 0 4px 8px 0 rgba(0,0,0,0.2)"}
              w={"90%"}
              bgColor={"#FAF9F9"}
              d={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              border={"1px solid #C8C5C5"}
              boxSizing={"border-box"}
              borderRadius={"19px"}
            >
              <AddPlusIcon />
            </Box>
          </Box>
          <Box
            gridArea={"SmallCards"}
            height={"80%"}
            display={"flex"}
            justifyContent={"space-around"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <Box
              backgroundColor={"#FAF9F9"}
              w={"100%"}
              h={"80%"}
              border={" 1px solid #C8C5C5"}
              boxSizing={"border-box"}
              borderRadius={"19px"}
              d="flex"
              justifyContent={"start"}
              alignItems={"start"}
              flexDir={"row"}
              flexWrap={"wrap"}
            >
              <Box
                w={"100%"}
                d={"flex"}
                pl={"10px"}
                marginTop={"20px"}
                justifyContent={"space-around"}
                alignItems={"center"}
              >
                <Image
                  boxSize="90px"
                  objectFit="cover"
                  borderRadius={"5.77966px"}
                  src={CardImg}
                />

                <Text fontWeight={900} marginRight={"30px"}>
                  GirlMantra Community
                </Text>
              </Box>
              <Box
                d={"flex"}
                justifyContent={""}
                w={"100%"}
                alignItems={"center"}
              >
                <Text p={"10px"}>
                  Meet fellow participants and stay motivated together. Fitness,
                  Diet, Mental Health -- find support groups for every lifestyle
                  change.
                </Text>
              </Box>
              <Flex
                justifyContent={"space-around"}
                w={"100%"}
                alignItems={"center"}
              >
                <Box
                  w={"25px"}
                  h={"25px"}
                  backgroundColor={"#36D029"}
                  borderRadius={"50%"}
                  display={"block"}
                ></Box>
                <Text>1,250 people online</Text>
                <Button
                  leftIcon={<DiscordIcom />}
                  variant="solid"
                  colorScheme={"yellow"}
                >
                  Connect Discord
                </Button>
              </Flex>
            </Box>

            <Box
              w={"100%"}
              h={"80%"}
              background={
                "linear-gradient(90.72deg, #D0F7FF 0%, #EECDFF 36.46%, #FFEFF0 100%)"
              }
              border={"1px solid #C8C5C5"}
              boxSizing={"border-box"}
              borderRadius={"20px"}
            >
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                h={"100%"}
                flexDirection={"column"}
              >
                <Text w={"80%"} fontSize={"lg"} fontWeight={"bolder"}>
                  PCOS and Pregnancy a seminar with Dr. Harriton
                </Text>
                <Text w={"80%"}>
                  Meet fellow participants and stay motivated together. Fitness,
                  Diet, Mental Health -- find support groups for every lifestyle
                  change.
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          gridArea={"footer"}
          bg={"#FDDB2F"}
          fontWeight={"900"}
          fontSize={"5xl"}
          d={"flex"}
          justifyContent={"start"}
          p={"20px"}
          alignItems={"center"}
        >
          Girl Mantra
        </Box>
      </Box>
    </>
  );
};

export default Home;
