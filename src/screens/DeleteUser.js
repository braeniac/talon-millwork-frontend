import React, { useState, useEffect } from 'react'; 
import { View, Text, TextInput, TouchableOpacity, Platform, StyleSheet, Alert } from 'react-native'; 
import { useIsFocused } from '@react-navigation/native'

import Menu from '../components/Menu';
import CustomButton from '../components/CustomButton';

//redux 
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../redux/actions/userAction'; 

const DeleteUser = ({ navigation }) => {

    const [uname, setUname] = useState('');

    const { token } = useSelector(state => state.auth);
    const { error, success, isDeleting } = useSelector(state => state.user); 
    const dispatch = useDispatch(); 

    //authentication error message -- if user fails to sign in
    const renderError = () => {
        if (error) { 
            return(
                <View style={{ paddingTop: 10 }}>
                    <Text style={{ color : 'red' }}>{error}</Text>
                </View>
            )
        } 
    }

    const isFocused = useIsFocused()

    useEffect(() => {
        //Update the state you want to be updated
        dispatch({ type : 'reset_user_state' })
    } , [isFocused])

    return (
        <View style={styles.container}>
           <Menu navigation={navigation} />
           <Text style={styles.title}>Delete User</Text>

           <TextInput 
                style={styles.textInput}
                placeholder="Username"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={text => setUname(text)}
                value={uname}           
           />

           {renderError()}

           <View
                style={styles.button}
           >
               <CustomButton 
                    title="Delete User" 
                    onPress={ () => {
                        dispatch(deleteUser(token, uname)),
                        setUname(''); 
                    }} 
                />
           </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        marginRight: 20
    }, 
    title: {
        marginTop: 50, 
        fontSize: 50, 
        fontWeight: '200',
        color: '#333'
    },  
    textInput: {
        borderBottomColor: '#333',
        height: 60, 
        borderBottomWidth: 2,
        color: '#333'
    },
    button: {
        marginTop: 40,
        alignItems: 'flex-end'
    }
})

export default DeleteUser; 