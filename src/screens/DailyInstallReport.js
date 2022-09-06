import React, { useState, useEffect } from 'react'; 
import { View, Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native'; 
import ImagePicker, { openCamera } from 'react-native-image-crop-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'; 
import { useIsFocused } from '@react-navigation/native'

//camera -- upload pre/post images 
import Camera from '../components/dailyInstallReport/Camera';
import CameraModal from '../components/dailyInstallReport/CameraModal';

//add -- for installers, subtrades on site 
import Add from '../components/dailyInstallReport/Add';
import Menu from '../components/Menu';
//submit button
import CustomButton from '../components/CustomButton';
//CustomPicker for projects
import CustomPickerProject from '../components/dailyInstallReport/CustomPickerProject'; 
//CustomPicker for users 
import CustomPickerUser from '../components/dailyInstallReport/CustomPickerUser'; 

//checkboxmodal for installers and subtrades on site 
import AddModal from '../components/dailyInstallReport/AddModal';
import ReactChipsInput from 'react-native-chips';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { allActiveProjects } from '../redux/actions/projectAction'; 
import { retrieveUsers } from '../redux/actions/userAction'; 
import { submitReport } from '../redux/actions/reportAction'; 


const DailyInstallReport = ({ navigation }) => {

    const [date, setDate] = useState(''); 
    const [humidity, setHumidity] = useState(0); 
    const [weather, setWeather] = useState(0); 

    const [project, setProject] = useState('Project');
    const [projectPID, setProjectPID] = useState(0); 

    const [installers, setInstallers] = useState([]);
    const [subtradesOnSite, setSubtradesOnSite] = useState([]);

    const [siteConditions, setSiteConditions] = useState('');
    const [workToBeCompleted, setWorkToBeCompleted] = useState('');
    const [obstacles, setObstacles] = useState('');
    const [notes, setNotes] = useState('');
    const [nextDayPlan, setNextDaysPlan] = useState('');

    const [siteSupervisor, setSiteSupervisor] = useState('Site Supervisor');
    const [siteSupervisorUID, setSiteSupervisorUID] = useState(0); 
    const [completedBy, setCompletedBy] = useState('Completed By');
    const [completedByUID, setCompletedByUID] = useState(0);

    //redux 
    const { token } = useSelector(state => state.auth); 
    const { allProjects, success } = useSelector(state => state.project); 
    const { error, user, isSuccess } = useSelector(state => state.user); 
    const { reportError } = useSelector(state => state.report);   
    
    const dispatch = useDispatch(); 

    //update page 
    const isFocused = useIsFocused()
    useEffect(() => {
        dispatch({ type : 'reset_report' })
        //get date and time 
        setDate(new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString().split('.')[0])
        //get all active projects
        dispatch(allActiveProjects(token))
        //get all active users 
        dispatch(retrieveUsers(token))
        setInstallers([])
        setSubtradesOnSite([])
    } , [isFocused])


    // MODAL --------------------------------------------------------------------------------

    //modal installers 
    const [installersModal, setInstallersModal] = useState(false);
    //modal subtrades on site 
    const [subtradesOnSiteModal, setSubtradesOnSiteModal] = useState(false);
    //modal projects
    const [modalVisible, setModalVisible] = useState(false);
    //modal site supervisor 
    const [siteSupervisorModal, setSiteSuperVisorModal] = useState(false); 
    //modal completed by
    const [completedByModal, setCompletedByModal] = useState(false);


    // CAMERA --------------------------------------------------------------------------------

    //camera modal 
    const [cameraModal, setCameraModal] = useState(false); 

    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: false,
            multiple: true,
        }).then(images => {
            console.log(images)
            setCameraModal(!cameraModal)
        }).catch((error) => 
            console.warn("Image error:", error)
        ); 
    }

    const chooseFromLibrary = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: false,
            multiple: true,
          }).then(images => {
            console.log(images)
            setCameraModal(!cameraModal)
          }).catch((error) => 
            console.warn("Image error:", error)
          );   
    }

    // ERRORS -------------------------------------------------------------------------------------------

    //user error
    const renderUserError = () => {
        if (error) { 
            return(
                <View style={{ paddingTop: 10 }}>
                    <Text style={{ color : 'red' }}>{error}</Text>
                </View>
            )
        }
    }

     //report error
     const renderReportError = () => {
        if (reportError) { 
            return(
                <View style={{ paddingTop: 10 }}>
                    <Text style={{ color : 'red' }}>{reportError}</Text>
                </View>
            )
        }
    }

    // JSX ------------------------------------------------------------------------------------------

    return(
        <>
            <View style={styles.menu}>
                <Menu navigation={navigation} />
            </View>
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Daily Install Report</Text>
                    <KeyboardAwareScrollView
                        style={{
                            display: "flex",
                            flex: 1,
                            height: Dimensions.get("window").height,
                            width: Dimensions.get("window").width,
                        }}
                    >
                    <View style={{ marginHorizontal: 20 }}>  

                    <Text style={{ color: '#333', textAlign: 'center', marginTop : 10 }}>Date: {date.substring(0, 10)} Time: {date.substring(11, 19)}</Text>

                    <Text style={{ color: '#333', marginTop: 20, marginBottom: -16 }}>Humidity: </Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter site humidity"
                        onChangeText={text => setHumidity(text)}
                        value={humidity}
                        keyboardType={'numeric'}
                    />

                    <Text style={{ color: '#333', marginTop: 20, marginBottom: -16 }}>Temperature: </Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter site temperature"
                        onChangeText={text => setWeather(text)}
                        value={weather}
                        keyboardType={'numeric'}
                    />    

                    <TouchableOpacity
                        onPress={ () => setModalVisible(!modalVisible) }
                        style={{borderColor: '#333', borderBottomWidth: 2, paddingBottom: 10, marginTop: 10}}
                    >
                        <Text style={{ color: '#333', marginTop: 30 }}>{project}</Text>
                    </TouchableOpacity>

                    { !(success) ? null : 

                    <CustomPickerProject 
                        modalVisible={modalVisible}
                        setModalVisable={setModalVisible}
                        title="List of projects"
                        DATA={allProjects}
                        setFunction={setProject}
                        setPID={setProjectPID}
                        itemType="name"
                    /> }

                    <Add 
                        title="Installers" 
                        onPress={() => {
                            setInstallersModal(!installersModal)    
                        }}
                    />

                    <AddModal 
                        modalVisible={installersModal}
                        setModalVisable={setInstallersModal}
                        title="Installers"
                        setFunction={setInstallers}
                        DATA={installers}
                        type="Add Installers"
                    />

                    { (installers.length === 0) ? null :
                        <View>
                            <ReactChipsInput 
                                label="Installers added: " 
                                initialChips={installers} 
                                onChangeChips={
                                   chips => setInstallers([].concat(chips))
                                }
                                alertRequired={true} 
                                chipStyle={{ 
                                    borderColor: '#333', 
                                    backgroundColor: '#fff' 
                                }} 
                                inputStyle={{fontSize: 22}} 
                                labelStyle={{ color: '#333'}} 
                                labelOnBlur={{ color: '#333' }} 
                                labelStyle={{ fontSize: 15, color: '#333' }}
                            />
                        </View>
                    }

                    <Text style={styles.text}>Site conditions: </Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter site conditions"
                        onChangeText={text => setSiteConditions(text)}
                        value={siteConditions}
                        multiline={true}
                    />
                    
                    <Camera onPress={ () => {
                            setCameraModal(!cameraModal); 
                        }}
                    />

                    <CameraModal 
                        modalVisible={cameraModal}
                        setModalVisible={setCameraModal}
                        takePhotoFromCamera={takePhotoFromCamera}
                        chooseFromLibrary={chooseFromLibrary}
                        title="Post-Site Conditions"
                    /> 

                    <Add 
                        title="Subtrades on site" 
                        onPress={() => {
                            setSubtradesOnSiteModal(!subtradesOnSiteModal)
                        }} 
                    />

                    <AddModal
                        modalVisible={subtradesOnSiteModal}
                        setModalVisable={setSubtradesOnSiteModal}
                        title="Subtrades on site"
                        DATA={subtradesOnSite}
                        setFunction={setSubtradesOnSite}
                        type="Add subtrades on site"
                        description="Here are a few examples: Framing, plumbing, electrical, flooring, drywall, painters..."
                    />

                    { (subtradesOnSite.length === 0) ? null :
                        <View>
                            <ReactChipsInput 
                                label="Subtrades on site: " 
                                initialChips={subtradesOnSite} 
                                onChangeChips={
                                   chips => setSubtradesOnSite([].concat(chips))
                                }
                                alertRequired={true} 
                                chipStyle={{ 
                                    borderColor: '#333', 
                                    backgroundColor: '#fff' 
                                }} 
                                inputStyle={{fontSize: 22}} 
                                labelStyle={{ color: '#333'}} 
                                labelOnBlur={{ color: '#333' }} 
                                labelStyle={{ fontSize: 15, color: '#333' }}
                            />
                        </View>
                    }
                    

                    <Text style={styles.text}>Work to be completed: </Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter work that needs to be completed"
                        onChangeText={text => setWorkToBeCompleted(text)}
                        value={workToBeCompleted}
                        multiline={true}
                    />

                    <Text style={styles.text}>Obstacles: </Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter obstacles faced"
                        onChangeText={text => setObstacles(text)}
                        value={obstacles}
                        multiline={true}
                    />

                    <Text style={styles.text}>Notes: </Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter extra notes"
                        onChangeText={text => setNotes(text)}
                        value={notes}
                        multiline={true}
                    />
                    
                    <Camera onPress={ () => {
                            setCameraModal(!cameraModal); 
                        }}
                    />

                    <CameraModal 
                        modalVisible={cameraModal}
                        setModalVisible={setCameraModal}
                        takePhotoFromCamera={takePhotoFromCamera}
                        chooseFromLibrary={chooseFromLibrary}
                        title="Post-Site Conditions"
                    />
                    
                    <Text style={styles.text}>Next day plan: </Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter what needs to be done"
                        onChangeText={text => setNextDaysPlan(text)}
                        value={nextDayPlan}
                        multiline={true}
                    /> 

                    <TouchableOpacity
                        onPress={ () => setSiteSuperVisorModal(!siteSupervisorModal) }
                        style={{borderColor: '#333', borderBottomWidth: 2, paddingBottom: 10, marginTop: 50}}
                    >
                        <Text style={{ color: '#333' }}>{siteSupervisor}</Text>
                    </TouchableOpacity>

                    { !(isSuccess) ? null : 

                    <CustomPickerUser 
                        modalVisible={siteSupervisorModal}
                        setModalVisable={setSiteSuperVisorModal}
                        title="List site supervisors"
                        DATA={user}
                        setFunction={setSiteSupervisor}
                        setUID={setSiteSupervisorUID}
                    /> }

                    {renderUserError()}  

                    <TouchableOpacity
                        onPress={ () => setCompletedByModal(!completedByModal) }
                        style={{borderColor: '#333', borderBottomWidth: 2, paddingBottom: 10, marginTop: 50}}
                    >
                        <Text style={{ color: '#333' }}>{completedBy}</Text>
                    </TouchableOpacity>

                    { !(isSuccess) ? null : 

                    <CustomPickerUser 
                        modalVisible={completedByModal}
                        setModalVisable={setCompletedByModal}
                        title="Completed by"
                        DATA={user}
                        setFunction={setCompletedBy}
                        itemType="name"
                        setUID={setCompletedByUID}
                    /> }    

                    {renderUserError()}  

                    {renderReportError()}

                    <View
                        style={styles.button}
                    >
                        <CustomButton 
                            title="Submit" 
                            onPress={() => {
                                //submit report 
                                dispatch(submitReport(token,
                                    `${project} DIR`,
                                    projectPID, 
                                    date, 
                                    humidity, 
                                    weather, 
                                    siteConditions, 
                                    obstacles, 
                                    workToBeCompleted, 
                                    notes, 
                                    nextDayPlan, 
                                    completedByUID, 
                                    siteSupervisorUID, 
                                    installers, 
                                    subtradesOnSite)),
                                //reset form 
                                setDate(new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString().split('.')[0]),
                                setHumidity(0),
                                setWeather(0),
                                setProject('Project'),
                                setProjectPID(0),
                                setSiteConditions(''),
                                setWorkToBeCompleted(''),
                                setWorkToBeCompleted(''),
                                setObstacles(''),
                                setNotes(''),
                                setNextDaysPlan(''),    
                                setSiteSupervisor('Site Supervisor'),
                                setSiteSupervisorUID(0),
                                setCompletedBy('Completed By'),
                                setCompletedByUID(0),
                                setInstallers([]),
                                setSubtradesOnSite([])
                            }}
                        />
                    </View>

                    </View> 
                    </KeyboardAwareScrollView>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 60
    },
    menu: {
        marginHorizontal: 20
    },  
    title: {
        alignSelf: 'center',
        fontSize: 35,
        fontWeight: '200',
    },
    text: {
        color: '#333',
        marginTop: 20,
    },  
    textInput: {
        borderBottomColor: '#333',
        height: 60, 
        borderBottomWidth: 2,
        color: '#333',
        padding: 0,
        textAlignVertical: 'top',
    },
    button: {
        marginTop: 40,
        alignItems: 'flex-end'
    }
})

export default DailyInstallReport; 
