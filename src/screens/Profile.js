import React, { useState } from 'react'; 
import { View, Text, Modal, Image, Alert, TouchableOpacity, Platform, StyleSheet, SafeAreaView } from 'react-native'; 
import { ScrollView } from 'react-native-gesture-handler';

import Menu from '../components/Menu';
import BasicInformation from '../components/updateProfile/BasicInformation'; 
import UsernameModal from '../components/updateProfile/UsernameModal'; 
import PasswordModal from '../components/updateProfile/PasswordModal'; 

import right from '../assets/icons/right.png'; 

//redux
import { useSelector } from 'react-redux';

const Profile = ({ navigation }) => {

    //redux 
    const { user, isLoggedIn } = useSelector(state => state.auth); 
   

    //username modal
    const [changeUsernameModal, setChangeUserModal] = useState(false); 
    //password modal 
    const [changePasswordModal, setPasswordModal] = useState(false); 

    return (
        <SafeAreaView>
            { (!isLoggedIn) ? null :
                <ScrollView>
                <View style={styles.container}>
                    <Menu navigation={navigation} />
                    <Text style={styles.title}>Profile</Text> 

                    <BasicInformation 
                        user={user}
                    />

                    <Text style={styles.subtitle}>Update Information</Text>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            setChangeUserModal(!changeUsernameModal)
                        }}
                    >
                        <View style={{ flexDirection: 'row',  justifyContent:'space-between'}}>
                            <Text style={styles.buttonText}>Change User Information</Text>
                            <Image 
                                source={right}
                            />
                        </View>
                    </TouchableOpacity>

                    {/* change user information */}

                    <UsernameModal
                        modalVisible={changeUsernameModal}
                        setModalVisable={setChangeUserModal}
                        title="Change User Information"
                    />           

                </View>
                </ScrollView>
            }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: (Platform.OS === 'ios' ? -45 : 0),
        marginHorizontal: 20,
        marginBottom: 30 
    }, 
    title: {
        marginTop: 30, 
        marginBottom: 20, 
        fontSize: 50, 
        fontWeight: '200',
        color: '#333'
    },  
    subtitle: {
        fontWeight: 'bold',
        fontSize: 20,
        borderColor: 'lightgray',
        paddingTop: 20
    },
    button: {
        marginTop: 30,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'lightgray',
        paddingVertical: 15
    },
    buttonText: {
        fontSize: 15,
        paddingLeft: 10,
        paddingTop: 7
    }
})

export default Profile; 