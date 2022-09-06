import React, { useState, useEffect } from 'react'; 
import { View, Text, TextInput, TouchableOpacity, Platform, StyleSheet } from 'react-native'; 
import { useIsFocused } from '@react-navigation/native'


import Menu from '../components/Menu'; 
import CustomButton from '../components/CustomButton';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { addNewProject } from '../redux/actions/projectAction'; 

const AddProject = ({ navigation }) => {

    //new project
    const [project, setProject] = useState('');

    //redux
    const { token } = useSelector(state => state.auth); 
    const { error } = useSelector(state => state.project); 
    const dispatch = useDispatch(); 

    const isFocused = useIsFocused()

    useEffect(() => {
        //Update the state you want to be updated
        dispatch({ type : 'reset_project_state' })
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
             <Text style={styles.title}>Add Project</Text>
             <TextInput
                style={styles.textInput}
                placeholder="Add New Project"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={text => setProject(text)}
                value={project}
             />

             {renderError()}

             <View
                style={styles.button}
             >
                <CustomButton 
                    title="Add Project" 
                    onPress={() => {    
                        dispatch(addNewProject(project, token))
                        setProject(''); 
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

export default AddProject; 