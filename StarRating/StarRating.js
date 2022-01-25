import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { useState, useEffect } from 'react';


function StarRating(props) {
    const [reviewApi, setReviewApi] = useState(null);
    const filledStar = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png'
    const emptyStar = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';

    const getReview = async () => {
        const response = await fetch("https://movie-reviewer-backend.herokuapp.com/review", {
            method: 'get',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        setReviewApi(data)
    }

    const [defaultRating, setDefaultRating] = useState(5)
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

    return (
        <View style={styles.customRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              key={item}
              onPress={() => setDefaultRating(item)}>
              <Image
                style={styles.starImageStyle}
                source={
                  item <= defaultRating
                    ? {uri: filledStar}
                    : {uri: emptyStar}
                }
              />
              </TouchableOpacity>
              
          );
        })}
        {/* <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={() => alert(defaultRating)}>
          Clicking on button will show the rating as an alert

        </TouchableOpacity> */}
            </View>
    );
}
const styles = StyleSheet.create({
    customRatingBarStyle: {
        flexDirection: 'row',
    },
    starImageStyle: {
        width: 25,
        height: 25,
        resizeMode: 'cover',
    },
    buttonStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30,
        padding: 15,
        backgroundColor: '#8ad24e',
      },
      buttonTextStyle: {
        color: '#fff',
        textAlign: 'center',
      },
})
export default StarRating;