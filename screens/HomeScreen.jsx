import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { collection,query, getDocs,startAfter, orderBy, limit  } from "firebase/firestore";
import { db } from '../firebase'
import Spinner from "react-native-loading-spinner-overlay/lib";

const HomeScreen = ({navigation}) => {
    const [products, setProducts] = useState([]);
    const [lastVisible, setLastVisible] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchProducts = async () => {
        setIsLoading(true);
        try {
          let productsQuery = query(collection(db, 'products'), orderBy('title'), limit(5));
    
          if (lastVisible) {
            productsQuery = query(collection(db, 'products'), orderBy('title'), startAfter(lastVisible), limit(5));
          }
    
          const productsSnapshot = await getDocs(productsQuery);
          const newProducts = productsSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    
          setLastVisible(productsSnapshot.docs[productsSnapshot.docs.length - 1]);
          setProducts((prevProducts) => [...prevProducts, ...newProducts]);
        } catch (error) {
          console.log(error);
        }
        setIsLoading(false);
      };
    useEffect(() => {
        fetchProducts()
    }, [])

    const handleScroll = ({ nativeEvent }) => {
        const { layoutMeasurement, contentOffset, contentSize } = nativeEvent;
        const isEndReached = layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;

        if (isEndReached && !isLoading) {
            fetchProducts();
        }
    };
    return (
        <View style={styles.container}>
            <Spinner
        visible={isLoading}
        textContent={'Loading...'}
        textStyle={styles.spinnerTextStyle}
      />
            <FlatList
                // horizontal={true}
                data={products}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Details', { item })}>
                    <View style={styles.item}>
                        <Image style={styles.image} source={{ uri: item.image }} />
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.price}>${item.price}</Text>
                    </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item,index)=>index.toString()}
                onScroll={handleScroll}
                onEndReachedThreshold={0.1}
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },

    item: {
        flex: 1,
        flexDirection: 'column',
        margin: 1,
        width: 200,
        height: 350,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: 'black',
        // borderWidth: 1,
        padding: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 10
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },
    title: {
        fontSize: 18,
        color: 'black'
    },
    price: {
        fontSize: 18,
        color: 'black'
    },
    spinnerTextStyle:{
        color: '#FFF',
    }

})