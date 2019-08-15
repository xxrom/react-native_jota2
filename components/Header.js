import React from "react";
import { Text, StyleSheet, ImageBackground } from "react-native";
import styled from "styled-components/native";
import PropsTypes from "prop-types";
import { Colors } from "../theme";

// require("./logo.png")

const Header = ({ backgroundSource, label }) => (
  <ImageBackgroundStyled
    accessibilityRole={"image"}
    source={backgroundSource}
    imageStyle={styles.logo}
  >
    <HeaderText>{label}</HeaderText>
  </ImageBackgroundStyled>
);

export default Header;

Header.PropsTypes = {
  label: PropsTypes.string.isRequired,
  background: PropsTypes.oneOfType([
    PropsTypes.shape({
      uri: PropsTypes.string,
      headers: PropsTypes.objectOf(PropsTypes.string)
    }),
    PropsTypes.number
  ])
};

Header.defaultProps = {
  label: "default Lavel =)"
  // background: require("../full.jpg")
  // todo background:
};

const ImageBackgroundStyled = styled(ImageBackground)`
  padding-bottom: 40;
  padding-top: 96;
  padding-horizontal: 32;
  background-color: ${Colors.lighter};
`;

const HeaderText = styled(Text)`
  font-size: 40;
  font-weight: 600;
  text-align: center;
  color: ${Colors.black};
`;

const styles = StyleSheet.create({
  logo: {
    opacity: 0.2,
    overflow: "visible",
    resizeMode: "cover",
    marginLeft: -128,
    marginBottom: -192
  }
});
