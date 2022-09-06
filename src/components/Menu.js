import React from 'react'; 
import { View, Image, TouchableOpacity, Platform, StyleSheet } from 'react-native'; 

import menu from '../assets/icons/drawerMenu.png'; 

const Menu = ({ navigation }) => {
    return (
        <View>
            <TouchableOpacity
                onPress={ () => navigation.openDrawer() }
            >
                <Image
                    style={styles.menu}
                    source={menu} 
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    menu: {
        marginTop: (Platform.OS == 'ios') ? 50 : 20,
    }
})

export default Menu; 