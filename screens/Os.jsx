import React, { useEffect,useState } from 'react';
import { View, Text } from 'react-native'
import { Platform } from 'react-native';
import { collection, doc, getDoc,updateDoc } from "firebase/firestore";
import { db } from '../firebase';
import updateCurrentScreen from '../components/utilities/updateCurrentScreen';

const Os = () => {
    updateCurrentScreen('Os')
    const [phoneOs, setPhoneOs] = useState('')

    const checkAndSavePhoneOS = async () => {
        try {
            const os = Platform.OS;
            setPhoneOs(os)
            const osRef = doc(collection(db, "labExam"), "labExam");
            await updateDoc(osRef, { os });
            console.log('Phone OS updated in Firestore');
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        checkAndSavePhoneOS();
    }, []);


    return (
        <View >
            <Text style={{alignSelf:"center",marginTop:300,fontSize:25}}>Your Operating System is 
            <Text style={{fontWeight:"bold"}}> {phoneOs}</Text>
            </Text>
        </View>
    )
}

export default Os