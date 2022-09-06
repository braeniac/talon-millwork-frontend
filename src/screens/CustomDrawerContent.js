import React, { useState, useEffect } from 'react'; 
import {View, StyleSheet, Dimensions, SafeAreaView } from 'react-native'; 
import CustomButton from '../components/CustomButton'; 
import { ScrollView } from 'react-native-gesture-handler';

import Header from '../components/drawerNaviagtion/Header';
import AdminUser from '../components/drawerNaviagtion/AdminUser';
import RegularUser from '../components/drawerNaviagtion/RegularUser';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../redux/actions/authAction'; 
   
const CustomDrawerContent = ({ navigation }) => {

    const { isLoggedIn, user } = useSelector(state => state.auth); 
    const dispatch = useDispatch(); 

    return(
       
        <SafeAreaView style={{ flex : 1 }}>
            { (!isLoggedIn) ? null :
                
                <ScrollView>
                <Header 
                    initials={`${user.fName.charAt(0)} ${user.lName.charAt(0)}`} 
                    name={user.fName + " " + user.lName} 
                    username={user.uname} 
                    role={(user.role === 'ADMIN') ? true : false}
                />
    
                {
                    ((user.role === 
                        'ADMIN') ? true : false) ? 
                        <AdminUser navigation={navigation} />
                    : 
                        <RegularUser navigation={navigation} />
                }

                <View
                    style={styles.logoutButton}
                >
                    <CustomButton 
                        title="Logout" 
                        onPress={() => 
                            dispatch(logoutUser({ navigation }))
                        } 
                    />
                </View>
                </ScrollView> 

            }
        </SafeAreaView>

    ); 

}

const styles = StyleSheet.create({
    logoutButton: {
        flex: 0.2
    },
    footers: {
        borderColor: 'lightgray',
        borderBottomWidth: 1
    }
})

export default CustomDrawerContent; 