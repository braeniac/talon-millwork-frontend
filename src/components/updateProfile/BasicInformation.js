import React from 'react'; 
import { View, Text, StyleSheet } from 'react-native'; 

const BasicInformation = ({ user }) => {
    return(
        <View>
            <Text style={styles.title}>Basic Information</Text>
            <View>
                <Text style={styles.text}> Name: {user.fName + " " + user.lName}        </Text>
                <Text style={styles.text}> Username: {user.uname}                       </Text>
                <Text style={styles.text}> Role: {user.role}                            </Text>
                <Text style={styles.text}> Recovery Question: {user.recoveryQuestion}   </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        borderColor: 'lightgray',
        paddingBottom: 10,
    },
    text: {
        fontSize: 15
    }
})

export default BasicInformation; 