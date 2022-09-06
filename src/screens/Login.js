import React, { useState } from 'react'; 
import { View, Text, TextInput, Platform, StyleSheet, TouchableOpacity, Dimensions, Modal } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'; 

//redux
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../redux/actions/authAction'; 

//login button
import CustomButton from '../components/CustomButton'; 
import ForgetPasswordModal from '../components/updateProfile/ForgetPasswordModal';

const Login = ({ navigation })  => {

    const { username, password, error } = useSelector(state => state.auth); 
    const dispatch = useDispatch(); 


    const [modalVisible, setModalVisible] = useState(false);

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
        <KeyboardAwareScrollView
        style={{
            display: "flex",
            flex: 1,
            height: Dimensions.get("window").height,
            width: Dimensions.get("window").width,
        }}
        >
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.subTitle}>Please sign in to continue.</Text>

            <TextInput 
                style={styles.textInput}
                placeholder="Username"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={text => dispatch({ type: 'username_changed', payload: text })}
                value={username}
            />
            
            <TextInput 
                style={styles.textInput}
                placeholder="Password"
                autoCapitalize="none"
                autoCompleteType="password"
                secureTextEntry={true}
                autoCorrect={false}
                onChangeText={text => dispatch({ type: 'password_changed', payload: text })}
                value={password}
            />

            {renderError()}

            <TouchableOpacity 
                style={styles.forgetPassword}
                onPress={ () => setModalVisible(!modalVisible) }    
            >
                <Text style={{ fontSize: 18, color: '#2D7FF3' }}>Forget password?</Text>
            </TouchableOpacity>

            <ForgetPasswordModal 
                modalVisible={modalVisible}
                setModalVisable={setModalVisible}
                title="Recover Password"
            />
           
           <View
                style={styles.button}
           >
                <CustomButton 
                    title="Login" 
                    onPress={() => 
                        dispatch(loginUser({ username, password, navigation }))
                    }
                />
           </View>

        </View>
        </KeyboardAwareScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: (Platform.OS === 'ios' ? 200 : 160),
    },   
    title: {
        fontSize: 60,
        fontWeight: '200',
        color: '#333'
    },
    subTitle: {
        fontSize: (Platform.OS === 'ios' ? 30 : 26),
        fontWeight: '200',
        marginTop: 10,
        marginBottom: 10,
        color: '#333'
    },  
    textInput: {
        borderBottomColor: '#333',
        height: 60, 
        borderBottomWidth: 2,
        color: '#333'
    },
    forgetPassword: {
        paddingTop: 20
    },
    button: {
        marginTop: 40,
        alignItems: 'flex-end'
    }
})


export default Login; 

