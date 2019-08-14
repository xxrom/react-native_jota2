import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import { Colors } from "../theme";

const Section = () => {
  return (
    <Container>
      <Title>Learn More</Title>
      <Description>Read the docs to discover what to do next:</Description>
    </Container>
  );
};

export default Section;

const Container = styled(View)`
  margin-top: 32;
  padding-left: 24;
  padding-right: 24;
`;

const Title = styled(Text)`
  font-size: 24;
  font-weight: 600;
  color: ${Colors.black};
`;

const Description = styled(Text)`
  margin-top: 8;
  font-size: 18;
  font-weight: 400;
  color: ${Colors.dark};
`;
