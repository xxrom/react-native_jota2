import React, { Fragment } from "react";
import { SafeAreaView, ScrollView, View, Text, StatusBar } from "react-native";
import { DebugInstructions } from "react-native/Libraries/NewAppScreen";
import styled from "styled-components/native";

import Section from "./components/Section";
import Header from "./components/Header";
import { Colors } from "./theme";

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollViewStyled contentInsetAdjustmentBehavior="automatic">
          <Header label="Clinks" backgroundSource={require("./full.jpg")} />
          <Body>
            <Section title="Learn More" description="read doc =)  " />
            <Section
              title="Learn More"
              description={
                <Text>
                  Edit <TextHighlight>App.js</TextHighlight> to change this
                  screen and then come back to see your edits
                </Text>
              }
            />
            <Section title="Learn More" description={<DebugInstructions />} />
          </Body>
        </ScrollViewStyled>
      </SafeAreaView>
    </Fragment>
  );
};

const ScrollViewStyled = styled(ScrollView)`
  background-color: ${Colors.lighter};
`;
const Body = styled(View)`
  background-color: ${Colors.white};
`;
const TextHighlight = styled(Text)`
  font-weight: 700;
`;

export default App;
