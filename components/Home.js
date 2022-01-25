import { Text } from 'react-native';
import { useEffect, useState } from 'react';
//components
import Header from './Header'
import ListItems from './ListItems';

function Home(props) {
    const [reviewApi, setReviewApi] = useState(null);
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
    useEffect(() => getReview(), []);
 
    return (
        <>
          <Header />
            <ListItems
                reviewApi={reviewApi}
                setReviewApi={setReviewApi}
                getReview={getReview}/>
        </>
    );
}

export default Home;