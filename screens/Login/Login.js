import React from "react";
import { TextInput, FormControl, Button } from "../../styles";
import { Title, LoginWrapper, FormContainer } from "./Login.style";

const Login = props => {
  console.log(props)
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

      <Button 
      info 
      title="Login"
      onPress ={()=> props.navigation.navigate("Blogs")} 
      />
    </LoginWrapper>
  );
};

export default Login;
