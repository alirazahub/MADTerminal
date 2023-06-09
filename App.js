import React,{useState} from 'react';
import 'react-native-gesture-handler';
import BottomNavbar from './components/BottomNavbar/BottomNavbar';
import ThemeContext from './contexts/ThemeContext';

export default function App() {
  const [color, setColor] = useState('white')
  const [background, setBackground] = useState('grey')

  return (
    <>
    <ThemeContext.Provider value={{ color, background,setColor,setBackground }}>
        <BottomNavbar />
      </ThemeContext.Provider>
    </>
  );
}
