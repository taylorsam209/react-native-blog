import React from "react";
import { Container, TextInput, Seperator } from "../../styles";

const NewBlog = props => {
  return (
    <Container>
      <TextInput 
      h1
      placeholder={"Title"} />

      <Seperator />

      <TextInput
      placeholder={'Start typing'}
      />
    </Container>
  );
};

export default NewBlog;
