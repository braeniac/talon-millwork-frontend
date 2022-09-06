import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, Alert, StyleSheet, Dimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'; 

//redux
import { useSelector, useDispatch } from 'react-redux';
import { recoverPassword } from '../../redux/actions/authAction'; 

const RecoverPassword = ({ modalVisible, setModalVisable, title, setBackToLogin, backToLogin }) => {

    let [uname, setUName] = useState(''); 
    let [answer, setAnswer] = useState(''); 
    let [newPassword, setNewPassword] = useState(''); 

    const { error, token, question, questionError } = useSelector(state => state.auth); 
    const dispatch = useDispatch(); 


    //render error message 
    const renderError = () => {
        if (questionError) { 
            return(
                <View style={{ justifyContent : 'center', marginTop: -20 }}>
                    <Text style={{ color : 'red', marginHorizontal: 20, textAlign: 'center' }}>{questionError}</Text>
                </View>
            )
        }
    }

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
                    <KeyboardAwareScrollView
                        style={{
                            display: "flex",
                            flex: 1,
                            height: Dimensions.get("window").height,
                            width: Dimensions.get("window").width,
                        }}
                    >
                    <View>

                    <Text style={{ fontSize: 20, color: '#333', textAlign: 'center', marginBottom: 20 }}>{question}</Text>
                    
                    {renderError()}

                    <View style={{ marginHorizontal : 20 }}>
            
                    <TextInput
                        style={styles.textInput}
                        placeholder="Recovery Question Answer"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={text => setAnswer(text)}
                        value={answer}
                    />
           
                    <TextInput
                        style={styles.textInput}
                        placeholder="Username"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={text => setUName(text)}
                        value={uname}
                    />
            
                    <TextInput
                        style={styles.textInput}
                        placeholder="New Password"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={text => setNewPassword(text)}
                        value={newPassword}
                    />
                    </View>

                    <View style={styles.button}>
                    <TouchableOpacity
                        onPress={ () => {
                            setModalVisable(!modalVisible)
                            setUName('')
                            setAnswer('')
                            setNewPassword('')
                            dispatch({ type : 'reset_question' })
                        }}
                    >
                        <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={ () => { 
                            dispatch(recoverPassword(uname, answer, newPassword))
                            setUName('')
                            setAnswer('')
                            setNewPassword('')
                            setModalVisable(!modalVisible)
                            setBackToLogin(!backToLogin)
                        }}
                    >
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                    </View> 
 
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

export default RecoverPassword; 