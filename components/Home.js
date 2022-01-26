import { Text } from 'react-native';
import { useEffect, useState } from 'react';
//components
import Header from './Header'
import ListItems from './ListItems';
import InputModal from './InputModal';


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
 
    //modal 
    const [modalV, setModalV] = useState(false)
    //input for the four fields
    const [inputTitle, setInputTitle] = useState();
    const [inputImage, setInputImage] = useState()
    const [inputDescription, setInputDescription] = useState()
    const [inputRating, setInputRating] = useState()
    
    //add review
    const handleAddReview = async (review) => {
        fetch("https://movie-reviewer-backend.herokuapp.com/review", {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(review)
        }).then(response => response.json()).then(data => {
            getReview()
        })
    }

    return (
        <>
            <Header />
            <InputModal
                modalV={modalV}
                setModalV={setModalV}
                inputTitle={inputTitle}
                setInputTitle={setInputTitle}
                inputImage={inputImage}
                setInputImage={setInputImage}
                inputDescription={inputDescription}
                setInputDescription={setInputDescription}
                inputRating={inputRating}
                setInputRating={setInputRating}
                handleAddReview={handleAddReview}/>
            <ListItems
                reviewApi={reviewApi}
                setReviewApi={setReviewApi}
                getReview={getReview} />

        </>
    );
}

export default Home;