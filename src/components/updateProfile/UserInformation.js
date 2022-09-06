import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import CustomButton from '../CustomButton'; 

//redux
import { useSelector, useDispatch } from 'react-redux';
import { updateUserInformation } from '../../redux/actions/authAction'; 


const UserInformation = ({ onPress }) => {

    const { user, token } = useSelector(state => state.auth); 
    const dispatch = useDispatch(); 

    const [fName, setFName] = useState(user.fName); 
    const [lName, setLName] = useState(user.lName);
    const [password, setPassword] = useState(''); 
    const [question, setQuestion] = useState(user.recoveryQuestion)
    const [answer, setAnswer] = useState('');

    return(
        <View style={{ marginHorizontal: 20 }}>

            <TextInput
                style={styles.textInput}
                placeholder="First Name"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={text => setFName(text)}
                value={fName}   
                editable={false}        
            />

            <TextInput
                style={styles.textInput}
                placeholder="Last Name"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={text => setLName(text)}
                value={lName}    
                editable={false}          
            />

            <TextInput
                style={styles.textInput}
                placeholder="New password"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={text => setPassword(text)}
                value={password}           
            />

            <TextInput
                style={styles.textInput}
                placeholder="Recovery question"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={text => setQuestion(text)}
                value={question}           
            />

            <TextInput
                style={styles.textInput}
                placeholder="Recovery question answer"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={text => setAnswer(text)}
                value={answer}           
            />

            <View style={styles.button}>
                <TouchableOpacity
                    onPress={onPress}
                >
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={ () => {
                        dispatch(updateUserInformation(fName, lName, password, question, answer, token));
                    }}
                >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>

        </View>
    ); 
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        marginTop: 10,
        color: '#333'
    },
    textInput: {
        borderBottomColor: '#333',
        height: 60, 
        borderBottomWidth: 2,
        color: '#333'
    },
    buttonText: {
        fontSize: 20,
        marginHorizontal: 20
    },
    button: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'center'
    }
})

export default UserInformation; 