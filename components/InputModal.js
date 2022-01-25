import { Modal } from 'react-native';
import { Entypo, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'


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


function InputModal({ modalV, setModalV, inputTitle,setInputTitle, setInputImage, inputImage, setInputDescription, inputDescription, setInputRating, inputRating}) {
    //close  modal
    const handleClose = () => {
        setModalV(false);
        setInputRating(null);
        setInputImage(null);
        setInputDescription(null);
        setInputTitle(null);
    }
    //submit function
    const handleSubmit = () => {
        alert('submitted')
    }
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
                    <StyledInput
                        placeholder="Movie Title"
                        placeholderTextColor={colors.main}
                        onChangeText={(input) => setInputTitle(input)}
                        value={inputTitle}
                        onSubmitEditing={handleSubmit}
                    />
                    <StyledInput
                        placeholder="Image URL"
                        placeholderTextColor={colors.main}
                        autoCapitalize="none"
                        onChangeText={(input) => setInputImage(input)}
                        value={inputImage}
                        onSubmitEditing={handleSubmit}
                    />
                    <StyledInput
                        placeholder="What did you think of the movie?"
                        placeholderTextColor={colors.main}
                        multiline={true}
                        onChangeText={(input) => setInputDescription(input)}
                        value={inputDescription}
                        onSubmitEditing={handleSubmit}
                    />
                    <StyledInput
                        placeholder="Rate Movie 1-5"
                        placeholderTextColor={colors.main}
                        onChangeText={(input) => setInputRating(input)}
                        value={inputRating}
                        onSubmitEditing={handleSubmit}
                        maxLength={1}
                    />
                    <ModalInputButton>
                        <ModalTouchable onPress={handleClose}>
                            <AntDesign name="closecircle" size={40} color={colors.main }/>
                        </ModalTouchable>
                        <ModalTouchable onPress={handleSubmit}>
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