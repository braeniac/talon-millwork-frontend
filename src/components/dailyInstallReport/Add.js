import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Add = ({ title, onPress }) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity
                onPress={onPress}
            >
                <Text style={styles.plus}>+</Text>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 75,
        width: 150, 
        backgroundColor: '#333',
        marginTop: 30
    },
    plus: {
        fontSize: 35,
        alignSelf: 'center',
        paddingTop: 2,
        color: '#fff' 
    },
    text: {
        alignSelf: 'center',
        color: '#fff' 
    }
})

export default Add; 
