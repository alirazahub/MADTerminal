import { useEffect } from 'react';
import { setDoc, doc, collection, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase.js';

const updateCurrentScreen = (currentScreen) => {
    useEffect(() => {
        const updateFirebaseValue = async () => {
            try {
                const screenRef = doc(collection(db, "labExam"), "labExam");
                await updateDoc(screenRef, { currentScreen });
                console.log('Screen updated successfully!');
            } catch (error) {
                console.log('Error updating Firebase:', error);
            }
        };

        updateFirebaseValue();
    }, [currentScreen]);
};

export default updateCurrentScreen;
