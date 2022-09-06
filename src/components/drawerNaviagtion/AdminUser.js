import React, { useState } from 'react'; 
import {View, Text, TouchableOpacity, StyleSheet, Dimensions, Platform } from 'react-native'; 

const AdminUser = ({ navigation }) => {
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


        <TouchableOpacity
            onPress={() => navigation.navigate('AddUser')}
        >
        <Text style={styles.navigationText}>Add User</Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() => navigation.navigate('DeleteUser')}
        >
        <Text style={styles.navigationText}>Delete User</Text>
        </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    navigationText: {
        marginLeft: 30,
        marginBottom: (Platform.OS === 'ios' ? 42 : 30),
        fontSize: 18,
        fontWeight: '200'
    }
})

export default AdminUser; 