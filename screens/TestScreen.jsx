import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { db } from '../firebase'
import { collection, doc, setDoc } from "firebase/firestore";
import axios from 'axios'
import { Alert } from 'react-native';


const TestScreen = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://fakestoreapi.com/products')
            setData(response.data)
        }
        fetchData()
    }, [])

    const addProduct = async (product) => {
        try {
            const newCityRef = doc(collection(db, "products"));
            await setDoc(newCityRef, product);
        } catch (error) {
            console.log(error)
        }
    }

    const handleAddData = async () => {
        try {
            const newCityRef = doc(collection(db, "products"));
            data.forEach(product => {
                addProduct(product)

            });
        } catch (error) {
            console.log(error)
        }
        Alert.alert('Success', 'Data added Successfully', [
            { text: 'OK' }
        ]);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.addButton} onPress={handleAddData}>
                <Text style={styles.buttonText}>Add Data to FireStore</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TestScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: "center"
    },

    addButton: {
        backgroundColor: 'orange',
        padding: 10,
        borderRadius: 5
    },

    buttonText: {
        fontWeight: 'bold'
    }

})