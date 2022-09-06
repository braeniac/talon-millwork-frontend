import React, { useState, useEffect } from 'react'; 
import { View, Text, TextInput, Image, TouchableOpacity, Platform, StyleSheet } from 'react-native'; 
import { useIsFocused } from '@react-navigation/native'

import Menu from '../components/Menu';
import CustomButton from '../components/CustomButton';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../redux/actions/userAction'; 

const AddUser = ({ navigation }) => {

    //user input 
    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [uname, setUName] = useState(''); 
    const [role, setRole] = useState(''); 
    const [defaultPassowrd, setDefaultPassword] = useState('');

    //redux 
    const { token } = useSelector(state => state.auth); 
    const { error } = useSelector(state => state.user); 
  
    const dispatch = useDispatch(); 

    const isFocused = useIsFocused()

    useEffect(() => {
        //Update the state you want to be updated
        dispatch({ type : 'reset_user_state' })
    } , [isFocused])
    
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
  
    return (
        <View style={styles.container}>
          <Menu navigation={navigation} />
          <Text style={styles.title}>Add User</Text>

          <TextInput
            style={styles.textInput}
            placeholder="First Name"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={text => setFName(text)}
            value={fname}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Last Name"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={text => setLName(text)}
            value={lname}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Username"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={text => setUName(text)}
            value={uname}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Role"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={text => setRole(text)}
            value={role}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Default Password"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={text => setDefaultPassword(text)}
            value={defaultPassowrd}
          />

          {renderError()}
          
          <View
            style={styles.button}
          >
                <CustomButton 
                  title="Add New User" 
                  onPress={() => {
                    dispatch(
                      addUser(token, fname, lname, uname, role.toUpperCase(), defaultPassowrd)); 
                      setFName(''); 
                      setLName(''); 
                      setUName(''); 
                      setRole(''); 
                      setDefaultPassword(''); 
                  }} 
                />
          </View>
          
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginRight: 20,
        marginLeft: 20
    },
    title: {
        marginTop: (Platform.OS === 'ios' ? 50 : 30),
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

export default AddUser; 