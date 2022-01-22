import styled from "styled-components";
import {
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  SafeAreaView,
  TextInput,
  Platform
} from "react-native";
import Constants from "expo-constants";

//colors
export const colors = {
    main: "#1529df",
    text: "#fff",
    tertiary: "#E6E6E6",
    alternative: "#999999",
  };

  //style variables
const statusBarHeight = Constants.statusBarHeight;
const fontStyle = Platform.OS === "android"? "Roboto": 'Futura-MediumItalic'

//main page styles
export const Container = styled.SafeAreaView`
  background-color: ${colors.main};
  padding: 20px;
  flex: 1;
  padding-top: ${statusBarHeight}px;
`;

// Header
export const HeaderContainer = styled.View`
  padding-vertical: 10px;
  margin-bottom: 10px;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderText = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: ${colors.text};
  letter-spacing: 3px;
  fontFamily: ${fontStyle}
`;