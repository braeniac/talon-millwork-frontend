import React from 'react'; 
import { Text, View, TouchableOpacity, StyleSheet, Platform, Dimensions } from 'react-native'; 

const height = Dimensions.get('screen').height; 

const RegularUser = ({ navigation }) => {
    return(
        <>
        <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
        >
        <Text style={styles.navigationText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() => navigation.navigate('Profile')}
        >
        <Text style={styles.navigationText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() => navigation.navigate('DailyInstallReport')}
        >
        <Text style={styles.navigationText}>Create Daily Install Report</Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() => navigation.navigate('AddProject')}
        >
        <Text style={styles.navigationText}>Add Project</Text>
        </TouchableOpacity>

        

        <View style={styles.space}></View>
        
        </>
    )
}

const styles = StyleSheet.create({
    navigationText: {
        marginLeft: 30,
        marginBottom: (Platform.OS === 'ios' ? 42 : 30),
        fontSize: 18,
        fontWeight: '200'
    },
    space: {
        marginTop: height * 0.25,
        backgroundColor: 'yellow'
    }
})

export default RegularUser; 