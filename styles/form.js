// Things related to form goes here
import React from "react";
import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { blue } from "./variables";

export const TextInput = styled.TextInput`
  padding-vertical: 5px;
`;

export const FormControl = styled.View`
  margin-bottom: 24px;
`;

const ButtonWrapper = styled.View`
  padding-vertical: 20px;
  flex-direction: column;
  align-items: center;
  border-radius: 100px;
  ${({ info }) =>
    info &&
    css`
      background-color: ${blue};
    `};
`;

const ButtonText = styled.Text`
  color: white;
`;

export const Button = ({ title, onPress, ...rest }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ButtonWrapper {...rest}>
        <ButtonText>{title}</ButtonText>
      </ButtonWrapper>
    </TouchableOpacity>
  );
};
