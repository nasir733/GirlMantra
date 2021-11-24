import {
  Avatar,
  Box,
  chakra,
  Image,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";
import image from "../Assets/download.jpeg";
import RightArrowSvg from "../Assets/RightArrowSvg";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import DangeSignSvg from "../Assets/DangeSignSvg";
import TicSvg from "../Assets/TicSvg";
import { useAppDispatch } from "../app/hooks";
import { login, setName } from "../features/Auth/AuthSlice";
import { useNavigate } from "react-router-dom";

interface Props {
  setUserName: Dispatch<SetStateAction<string>>;
}
type FormValues = {
  name: string;
};
const FindChallenge = (props: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit: SubmitHandler<FormValues> = ({ name }) => {
    props.setUserName(name);
    navigate("/");
  };
  return (
    <Box
      h={"100vh"}
      d={"grid"}
      gridTemplateColumns={".7fr 1fr"}
      gridTemplateAreas={`"Image Main"`}
    >
      <Box bg={"#FBFCF2"} gridArea={"Image"}>
        <Image src={image} objectFit={"cover"} />
      </Box>
      <Box
        gridArea={"Main"}
        bg={"#FBFCF2"}
        d={"flex"}
        justifyContent={"center"}
        alignItems={"start"}
      >
        <Box
          d={"flex"}
          w={"80%"}
          h={"80%"}
          justifyContent={"center"}
          alignItems={"start"}
          flexDirection={"column"}
        >
          <Text fontSize={"3xl"}>Hi What is your name</Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={errors.name}>
              <FormLabel
                htmlFor="name"
                mt={"20px"}
                color={"#555555"}
                fontFamily={"Verdana"}
                lineHeight={"140%"}
              >
                We can be on a first name basis
              </FormLabel>

              <chakra.input
                w={"30vw"}
                outline={"none"}
                border={"none"}
                borderBottom={"1px solid #000000"}
                bg={"#FBFCF2"}
                textDecoration={"none"}
                mt={"50px"}
                id="name"
                placeholder="Type your name here"
                {...register("name", {
                  required: "This is required",
                  minLength: {
                    value: 2,
                    message: "Please fill this in ",
                  },
                })}
              />
              <FormErrorMessage>
                <Tag size="lg" colorScheme="red" borderRadius="full">
                  <DangeSignSvg />
                  <TagLabel>{errors.name && errors.name.message}</TagLabel>
                </Tag>
              </FormErrorMessage>
            </FormControl>

            <Button
              mt={"100px"}
              colorScheme="yellow"
              isLoading={isSubmitting}
              type="submit"
              rightIcon={<TicSvg />}
            >
              OK
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default FindChallenge;
