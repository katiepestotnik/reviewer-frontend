import { Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//styled components
import {
    HeaderContainer,
    HeaderText,
    colors
} from '../styles/appStyles'

function Header(props) {
    return (
        <HeaderContainer>
            <HeaderText>Movie Reviewer</HeaderText>
            <MaterialCommunityIcons name="movie-open-outline" size={40} color="#fff"/>
        </HeaderContainer>
    );
}
export default Header;