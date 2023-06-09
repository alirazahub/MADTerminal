import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import { collection, doc, updateDoc, getDoc,onSnapshot } from "firebase/firestore";
import { db } from '../firebase.js';
import updateCurrentScreen from '../components/utilities/updateCurrentScreen.js';
import ThemeContext from '../contexts/ThemeContext';


export default function ChangeTheme() {
    const { color, background, setColor, setBackground } = useContext(ThemeContext)
    updateCurrentScreen('Change Theme')
    const [theme, setTheme] = useState('light')

    const updateTheme = async () => {
        try {
            if (theme === 'light') {
                var them = 'dark'
            } else {
                var them = 'light'
            }
            setTheme(them)
            const themeRef = doc(collection(db, "labExam"), "labExam");
            await updateDoc(themeRef, { theme: them });
            setBackground(them === 'light' ? 'white' : 'grey')
            console.log('Theme Changed successfully!');
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const docRef = doc(db, "labExam", "labExam");

        const getTheme = async () => {
            try {
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const themeData = docSnap.data().theme;
                    setTheme(themeData);
                    setBackground(themeData === 'light' ? 'white' : 'grey');
                    console.log("Document data:", docSnap.data());
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.log(error);
            }
        };

        getTheme(); // Call the function to retrieve the initial theme data

        // Whenever the data changes in Firestore, the function will be triggered again
        const unsubscribe = onSnapshot(docRef, (docSnap) => {
            if (docSnap.exists()) {
                const themeData = docSnap.data().theme;
                setTheme(themeData);
                setBackground(themeData === 'light' ? 'white' : 'grey');
                console.log("Document data:", docSnap.data());
            } else {
                console.log("No such document!");
            }
        });

        // Make sure to unsubscribe from the snapshot listener when it's no longer needed
        // For example, you can unsubscribe in the cleanup function of a React component
        return () => unsubscribe();

    })
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: background,
            justifyContent: 'center',
            alignItems: 'center'
        }
    })
    return (
        <View style={styles.container}>
            <Text>Your Theme is {theme}</Text>
            <TouchableOpacity onPress={() => updateTheme()}>
                <Text>Change Theme</Text>
            </TouchableOpacity>
        </View>
    )
}
