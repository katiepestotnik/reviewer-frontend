import {SwipeListView} from 'react-native-swipe-list-view'
import { Text, ImageBackground, Image} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
//styled components
import {
    List,
    ReviewText,
    ReviewTitle,
    ListHidden,
    ButtonHidden,
    SwipedTodoText,
    colors
} from '../styles/appStyles'

function ListItems({ reviews, setReviews }) {
    //key of swiped row
    const [swipedRow, setSwipedRow] = useState(null);
    
    return (
        <SwipeListView
            data={reviews}
            keyExtractor={(item) => item.id.toString()
         }
            renderItem={(data, index) => {
                const RowText = data.item.id === swipedRow ? SwipedReviewTitle : ReviewTitle;
                let images = data.item.movieImage
                return (
                    <List>
                        <>
                          <RowText>{data.item.movieName}</RowText>
                          <Text>
                            <ImageBackground source={{ uri: `${images}` }} resizeMode='cover' style={{height: 150, width: 150}} />
                          </Text>
                          <ReviewText>{data.item.movieReview}</ReviewText>
                          <ReviewText>{data.item.movieRating}</ReviewText>
                          </> 
                        </List>
                )
            }}
            renderHiddenItem={() => {
                return(<ListHidden>
                    <ButtonHidden>
                        <MaterialCommunityIcons
                            name="delete-circle" size={50}
                            color="#ff1c27"/>
                    </ButtonHidden>
                </ListHidden>)
            }}
            leftOpenValue={70}
            //must be string
            previewRowKey={"1"}
            previewOpenValue={70}
            previewOpenDelay={2000}
            disableLeftSwipe={true}
            showsVerticalScrollIndicator={false}
            style={{
                flex: 1, paddingBottom: 30, marginBottom: 40
            }}
            onRowOpen={(rowKey) => {
                console.log(rowKey)
                setSwipedRow(rowKey)
            }}
            onRowClose={() => {
                setSwipedRow(null)
            }}
        />
    );
}

export default ListItems;