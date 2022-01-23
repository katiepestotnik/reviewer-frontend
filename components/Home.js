import { Text } from 'react-native';
import { useState } from 'react';
//components
import Header from './Header'
import ListItems from './ListItems';

function Home(props) {
    //seedReviews
    const seedReviews = [
        { movieName: "Pan's Labyrinth", movieImage: "https://upload.wikimedia.org/wikipedia/en/6/67/Pan%27s_Labyrinth.jpg", movieReview: "Magical and terrifying all at the same time.", movieRating: 5, id: 1 },
        { movieName: "Blade Runner", movieImage: "https://miro.medium.com/max/1400/1*4KkBJLj0-_nGCblVAzlA2A.jpeg", movieReview: "One of my favorites.", movieRating: 5, id: 2 },
        { movieName: "Pan's Labyrinth", movieImage: "https://www.sho.com/site/image-bin/images/0_0_3493874/0_0_3493874_00h_1280x640.jpg", movieReview: "Utterly Boring, turned it off after 20 minutes.", movieRating: 1, id: 3 }
    ]
    const [reviews, setReviews]=useState(seedReviews)
    return (
        <>
          <Header />
            <ListItems
                reviews={reviews}
                setReviews={setReviews}/>
        </>
    );
}

export default Home;