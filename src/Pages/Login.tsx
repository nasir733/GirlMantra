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
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";
import GoogleSvg from "../Assets/GoogleSvg";
import LoginPic from "../Assets/LoginPic.jpeg";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  auth,
  signInWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";

interface Props {
  isLoggedIn: boolean;
  setLoggedIn: Dispatch<SetStateAction<boolean>>;
}
type FormValues = {
  email: string;
};

const Login = (props: Props) => {
  const [email, setEmail] = React.useState(
    window.localStorage.getItem("emailForSignIn") || ""
  );
  const navigate = useNavigate();
  if (props.isLoggedIn) {
    navigate("/");
  }

  React.useEffect(() => {
    // Get the saved email
    const saved_email = window.localStorage.getItem("emailForSignIn");
    console.log(saved_email);
    // Verify the user went through an email link and the saved email is not null
    if (auth.isSignInWithEmailLink(window.location.href) && saved_email) {
      console.log("The If condition is running ");
      // Sign the user in
      auth.signInWithEmailLink(saved_email, window.location.href);
      console.log("The user is signed in");
      props.setLoggedIn(true);
      navigate("/find-challenge");
      console.log("The Props Are updated");
    }
  }, []);

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit: SubmitHandler<FormValues> = async ({ email }) => {
    if (auth.isSignInWithEmailLink(window.location.href) && !!email) {
      console.log("Signing the user in");
      // Sign the user in
      auth.signInWithEmailLink(email, window.location.href).catch((err) => {
        alert("an error occured");
      });
    } else {
      auth
        .sendSignInLinkToEmail(email, {
          url: "https://girlmantra-8b6e4.web.app/login",
          handleCodeInApp: true,
        })
        .then(() => {
          // Save the users email to verify it after they access their email
          window.localStorage.setItem("emailForSignIn", email);
          console.log("email is sent");
          alert("A Link has been sent to your email ");
        })
        .catch((err) => {
          switch (err.code) {
            default:
              alert("An unknown error has occured");
          }
        });
    }
  };
  const ContinueWithGoogle = () => {
    console.log("The google Sign in start ");
    signInWithGoogle().then((res) => {
      props.setLoggedIn(true);
      navigate("/find-challenge");
      console.log("The user is signed in");
    });
  };
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
                Sign In
              </Text>
              <Text color={"#555555"}>Enter your email to sign in</Text>
              <Box mt={"20px"} onClick={() => ContinueWithGoogle()}>
                <GoogleSvg />
              </Box>
            </Box>

            <Box
              w={"100%"}
              h={"239px"}
              d={"flex"}
              flexDirection={"column"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={errors.name}>
                  <FormLabel htmlFor="email" mb="0">
                    Email
                  </FormLabel>
                  <Input
                    mt={"10px"}
                    type="email"
                    placeholder="Your Email"
                    {...register("email", {
                      required: "This is required",
                      minLength: {
                        value: 4,
                        message: "Minimum length should be 4",
                      },
                    })}
                  />
                  <FormErrorMessage>
                    {errors.name && errors.name.message}
                  </FormErrorMessage>
                  <Box
                    d={"Flex"}
                    mt={"10px"}
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
                    type="submit"
                    mt={"10px"}
                  >
                    SIGN IN
                  </chakra.button>
                </FormControl>
              </form>

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
