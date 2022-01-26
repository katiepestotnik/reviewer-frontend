import { Modal } from 'react-native';
import { Entypo, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'
import { Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';


//styled components
import {
    ModalButton,
    ModalContainer,
    ModalView,
    ModalTouchable,
    ModalInputButton,
    ModalIcon,
    HeaderText,
    colors,
    StyledInput,
} from '../styles/appStyles';


function InputModal({ modalV, setModalV, inputTitle,setInputTitle, setInputImage, inputImage, setInputDescription, inputDescription, setInputRating, inputRating, handleAddReview}) {
    //close  modal
    const handleClose = () => {
        setModalV(false);
        setInputRating(null);
        setInputImage(null);
        setInputDescription(null);
        setInputTitle(null);
    }
    //form
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            movieName: "",
            movieImage: "",
            movieReview: "",
            movieRating: "", 
        }
    });
    const [newReview, setNewReview] = useState({
        movieName: "",
        movieImage: "",
        movieReview: "",
        movieRating: "",
  });
    const onSubmit = data => {
            handleAddReview(data)
            setModalV(false)
    };

    return (
        <>
            <ModalButton onPress={()=>setModalV(true)}>
                <Entypo name="add-to-list" size={30}/>
            </ModalButton>
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalV}
                onRequestClose={handleClose}>
                <ModalContainer>
                    <ModalView>
                        <ModalIcon>
                            <HeaderText>Review</HeaderText>
                        <MaterialCommunityIcons name="movie-edit" size={100} color={colors.light}/>
                        </ModalIcon>
                    <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <StyledInput
                                    placeholder='Movie Name'
                                    placeholderTextColor={colors.main}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                            name="movieName"
                        />
                        {errors.movieName && <Text>This is required</Text>}
                        <Controller
                            control={control}
                            rules={{
                                required: true
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <StyledInput
                                    placeholderTextColor={colors.main}
                                    placeholder="Image URL"
                                    autoCapitalize="none"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                            name="movieImage"
                        />
                        {errors.movieImage && <Text>This is required</Text>}
                        <Controller
                            control={control}
                            rules={{
                                required: true
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <StyledInput
                                    placeholder="What did you think of the movie?"
                                    placeholderTextColor={colors.main}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                            name="movieReview"
                        />
                        {errors.movieReview && <Text>This is required</Text>}
                        <Controller
                            control={control}
                            rules={{
                                maxLength:1
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <StyledInput
                                    placeholder="Rate Movie 1-5"
                                    placeholderTextColor={colors.main}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                            name="movieRating"
                        />
                    <ModalInputButton>
                        <ModalTouchable onPress={handleClose}>
                            <AntDesign name="closecircle" size={40} color={colors.main }/>
                        </ModalTouchable>
                        <ModalTouchable onPress={handleSubmit(onSubmit)}>
                            <AntDesign name="checkcircle" size={40} color={colors.main }/>
                            </ModalTouchable>
                        </ModalInputButton>
                        </ModalView>
                </ModalContainer>
            </Modal>
            
        </>
    );
}

export default InputModal;