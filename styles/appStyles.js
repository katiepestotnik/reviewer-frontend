import styled from "styled-components";
import {
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  SafeAreaView,
  TextInput,
  Platform,
  ImageBackground
} from "react-native";
import Constants from "expo-constants";

//colors
export const colors = {
    main: "#1529df",
    light: "#d7dafb",
    black: "#000",
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
  color: ${colors.light};
  letter-spacing: 3px;
  fontFamily: ${fontStyle}
`;

//listItems
export const List = styled.TouchableHighlight`
  background-color: ${colors.light};
  min-height: 85px;
  width: 100%;
  padding: 15px;
  justify-content: space-around;
  margin-bottom: 15px;
  border-top-right-radius: 40px;border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 40px;
`;
export const ReviewTitle = styled.Text`
  font-size: 20px;
  font-weight: 900;
  font-family: ${fontStyle};
  padding-bottom: 5px;
`
export const ReviewText = styled.Text`
  font-size: 16px;
  letter-spacing: 1px;
  color: ${colors.main};
  padding: 5px;
`;
export const ListHidden = styled.View`
  background-color: ${colors.light};
  flex: 1;
  width: 100%;
  padding: 15px;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 15px;
  border-top-right-radius: 40px;border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 40px;
`;
export const ButtonHidden = styled.TouchableOpacity`
  width: 55px;
  align-items: center;
`;
export const SwipedReviewTitle = styled(ReviewTitle)`
  color: ${colors.black};
  font-style: italic;
  text-decoration: line-through;
`;

