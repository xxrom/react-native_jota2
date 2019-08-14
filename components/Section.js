import React from "react";
import { View, Text } from "react-native";
import PropsTypes from "prop-types";
import styled from "styled-components/native";

import { Colors } from "../theme";

const Section = ({
  title = "Section Default Title",
  description = "Section Default Description"
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default Section;

Section.PropsTypes = {
  title: PropsTypes.string.isRequired,
  description: PropsTypes.node.isRequired
};

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
