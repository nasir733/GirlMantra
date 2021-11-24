import React from "react";
import { chakra } from "@chakra-ui/react";
import "../Styles/LoginButton.css";
interface Props {
  text: string;
}

const LoginButton = (props: Props) => {
  return <button className="GradientButton">{props.text}</button>;
};

export default LoginButton;
