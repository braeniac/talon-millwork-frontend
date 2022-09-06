import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import CustomButton from '../CustomButton'; 

const UpdateQuesAns = ({ onPress }) => {

    const [question, setQuestion] = useState(''); 
    const [answer, setAnswer] = useState('');

    return(
        <View style={{ marginHorizontal: 20 }}>
            <TextInput
                style={styles.textInput}
                placeholder="Set new recovery question"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={text => setQuestion(text)}
                value={question}           
            />
            <TextInput
                style={styles.textInput}
                placeholder="Set answer to recovery question"
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
                       console.log("submit")
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
        color: '#333',
        marginBottom: 20
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

export default UpdateQuesAns; 