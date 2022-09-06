import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, Alert, StyleSheet, Dimensions, Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'; 

import UpdateQuesAns from './UpdateQuesAns'; 

const PasswordModal = ({ modalVisible, setModalVisable, title }) => {

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
                        
                    <UpdateQuesAns
                        onPress={() => setModalVisable(!modalVisible)}
                    />
                    
                    </View>
                    </KeyboardAwareScrollView>
                   
                </View>
            </View>

        </Modal>
    )
}

const onPress = () => {
    console.log('Change Username')
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
        marginHorizontal: 20,
        marginBottom: 20
    },
   
})

export default PasswordModal; 