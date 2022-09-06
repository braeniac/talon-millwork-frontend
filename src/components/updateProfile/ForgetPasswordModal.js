import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, Alert, StyleSheet, Dimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'; 
import RecoverPassword from './RecoveryPassword'; 

//redux
import { useSelector, useDispatch } from 'react-redux';
import { forgetPassword } from '../../redux/actions/authAction'; 

const ForgetPasswordModal = ({ modalVisible, setModalVisable, title }) => {

    const [uname, setUName] = useState(''); 
    const [recoveryModal, setRocoveryModal] = useState(false); 

    const dispatch = useDispatch(); 




    return(
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }
            }
        >
            <View style={styles.container}>
                <View style={styles.inner}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={{ textAlign : 'center', color : '#333', fontSize : 15 }}>Don't worry, happens to the best of us.</Text>
                    <KeyboardAwareScrollView
                        style={{
                            display: "flex",
                            flex: 1,
                            height: Dimensions.get("window").height,
                            width: Dimensions.get("window").width,
                        }}
                    >
                    <View>
                    
                    <View style={{ marginHorizontal : 20, marginTop : 20 }}>
                    <Text style={styles.text}>Enter your username</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Username"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={text => setUName(text)}
                        value={uname}
                    />
                    </View>

                    <View style={styles.button}>
                    <TouchableOpacity
                        onPress={ () => {
                            setModalVisable(!modalVisible) 
                        }}
                    >
                        <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={ () => {
                            dispatch(forgetPassword(uname))
                            setRocoveryModal(!recoveryModal)
                            setUName('')
                        }}
                    >
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                    </View> 


                    <RecoverPassword 
                        modalVisible={recoveryModal}
                        setModalVisable={setRocoveryModal}
                        title="Recover Password"
                        backToLogin={modalVisible}
                        setBackToLogin={setModalVisable}
                    />

                    </View>
                    </KeyboardAwareScrollView>
                   
                </View>
            </View>

        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }, 
    inner: {
        width: '100%',
        height: '100%',
        top: 0,
        position: 'absolute',
        backgroundColor: '#fff',
    },
    title: {
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 30,
        fontWeight: '200',
        marginTop: 50,
        color: '#333'
    },
    text: {
        color: '#333',
        marginTop: 20,
    },  
    textInput: {
        borderBottomColor: '#333',
        height: 60, 
        borderBottomWidth: 2,
        color: '#333',
        padding: 0,
        marginBottom: 20
    },
    buttonText: {
        fontSize: 20,
        marginHorizontal: 20,
        color: '#333'
    },
    button: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'center'
    }
   
})

export default ForgetPasswordModal; 