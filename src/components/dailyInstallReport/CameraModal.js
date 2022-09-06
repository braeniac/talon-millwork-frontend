import React from 'react';

import { View, Text, Modal, Alert, TouchableOpacity, StyleSheet} from 'react-native';


const CameraModal = ({ modalVisible, title, setModalVisible, takePhotoFromCamera, chooseFromLibrary }) => {
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
                <View style={{ alignItems : 'center' }}>
                    <Text style={styles.bottomSheetTitle}>Upload Photo</Text>
                    <Text style={styles.bottomSheetSubtitle}>{title}</Text>
                </View>
                <TouchableOpacity
                    style={styles.panelButton}
                    onPress={takePhotoFromCamera}
                >
                    <Text style={styles.panelButtonTitle}>Take Photo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.panelButton}
                    onPress={chooseFromLibrary}
                >
                    <Text style={styles.panelButtonTitle}>Choose from library</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.panelButton}
                    onPress={() => {
                        setModalVisible(!modalVisible)
                    }}
                >
                    <Text style={styles.panelButtonTitle}>Cancel</Text>
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
    bottomSheet: {
        backgroundColor: '#fff',
        padding: 16,
        height: 450,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderTopWidth: 3,
        borderColor: 'lightgray'
    },
    bottomSheetTitle: {
        color: '#333',
        fontSize: 40,
        marginTop: 20,
        fontWeight: '200'
    }, 
    bottomSheetSubtitle: {
        color: '#333',
        marginTop: (Platform.OS === 'ios' ? 10 : 0),
        marginBottom: (Platform.OS === 'ios' ? 20 : 10) 
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#fff',
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#2D7FF3',
        alignItems: 'center',
        marginVertical: 7,
    },
    cancelButton: {
        alignSelf: 'center',
        fontSize: 20,
        paddingBottom: 20,
        paddingTop: 20,
        color: '#333',
    }

})

export default CameraModal;  