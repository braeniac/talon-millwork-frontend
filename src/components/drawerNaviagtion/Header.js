import React from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native'; 

const Header = ({ initials, name, username, role }) => {
    return(
        <View style={styles.container}>

            <View style={styles.initials}>
                <Text style={styles.initialsText}>{initials}</Text>
            </View>

            <View style={styles.userInfo}>
                <Text style={styles.textInfo, { fontSize: 20,  }}>{name}</Text>
                <Text style={styles.textInfo}>{username}</Text>
                {role ? <Text style={styles.textInfo}>(Admin)</Text> : null }
            </View>

        </View>
    ); 
}

const styles = StyleSheet.create({
    container: { 
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        borderBottomWidth: 1,
        borderColor: 'lightgray',
        paddingBottom: 20,
        paddingTop: 20, 
    },
    initials: {
        backgroundColor: '#333',
        width: 160, 
        height: 160, 
        borderRadius: 160/2,
        justifyContent: 'center'
    },
    initialsText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 50
    },
    userInfo: {
        marginTop: 10,
        textAlign: 'center',
    },
    textInfo: {
        fontSize: 15,
        textAlign: 'center'
    }
}); 

export default Header; 