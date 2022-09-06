import React from 'react';
import { View, Text, Image, TouchableOpacity, Platform, StyleSheet } from 'react-native'; 

const CustomButton = ({ title, onPress }) => {
    return(
        <TouchableOpacity
                style={styles.button}
                onPress={() => onPress() }
            >
                <View style={styles.container}>
                    <Text style={styles.text}>{title}</Text>
                </View>
        </TouchableOpacity>
    ); 
}

const styles = StyleSheet.create({
    button: {
        marginLeft: 30,
    },
    container: {
        backgroundColor: '#2D7FF3',
        width: 160,
        height: 35,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    text: {
        color: '#fff',
        textAlign: 'center',
    }
})

export default CustomButton