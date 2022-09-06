import React from 'react';
import { View, Text, TouchableOpacity, Modal, Alert, ScrollView, StyleSheet } from 'react-native';

const CustomPickerUser = ({ modalVisible, setModalVisable, title, DATA, setUID, setFunction }) => {
    return(
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }
            }
        >
            <View style={styles.container}>
                <View style={styles.inner}>
                    <ScrollView style={{ backgroundColor: 'white' }}>
                        <Text style={styles.title}>{title}</Text>
                        {

                            DATA.slice(0).reverse().map((d, i) => (
                                <TouchableOpacity
                                    onPress={() => {
                                            setFunction(d.fName + " " + d.lName)
                                            setUID(d.uid)
                                            setModalVisable(!modalVisible)
                                        }
                                    }
                                >
                                    <View style={{ borderBottomWidth: 1}}>
                                        <Text style={styles.items}>{d.fName + " " + d.lName}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                    <TouchableOpacity
                        onPress={() => setModalVisable(!modalVisible)}
                    >
                        <Text style={styles.cancelButton}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        marginHorizontal: 10
    }, 
    inner: {
        width: '100%',
        height: '40%',
        bottom: 15,
        position: 'absolute',
        backgroundColor: '#fff',
    },
    title: {
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 30,
        fontWeight: '200',
        paddingBottom: 10,
        color: '#333'
    },
    items:{
        alignSelf: 'center',
        fontSize: 20,
        paddingBottom: 20,
        paddingTop: 20,
        color: '#333'
    },
    cancelButton: {
        alignSelf: 'center',
        fontSize: 20,
        paddingBottom: 20,
        paddingTop: 20,
        color: '#333'
    }

})

export default CustomPickerUser;
