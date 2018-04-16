import React from "react";
import { TextInput, FormControl, Button } from "../../styles";
import { Title, LoginWrapper, FormContainer } from "./Login.style";

const Login = props => {
  return (
    <LoginWrapper>
      <Title h4>Sign in to start blogging</Title>
      <FormContainer>
        <FormControl>
          <TextInput
            placeholder={"Email address"}
            keyboardType={"email-address"}
          />
        </FormControl>

        <FormControl>
          <TextInput placeholder={"Password"} secureTextEntry />
        </FormControl>
      </FormContainer>

      <Button info title="Login" />
    </LoginWrapper>
  );
};

export default Login;
