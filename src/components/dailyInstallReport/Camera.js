import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

//camera icon 
import cam from '../../assets/icons/cameraIcon.png'; 

const Camera = ({ onPress }) => {
    return(
        <View style={styles.container}>
            <View>
            <TouchableOpacity
                onPress={() => onPress()}
            >
                <Image
                    source={cam} 
                />
            </TouchableOpacity>
            </View>
            <Text style={{ color : '#333' }}>Upload Image</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    }
})

export default Camera; 