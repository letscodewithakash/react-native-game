import { StyleSheet, View,ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import WelcomeScreen from './screens/WelcomeScreen';

export default function App() {
  const [enterScreen,setScreen]=useState(null);
  const [currentScreen, setCurrentScreen] = useState('welcome');
  console.log(currentScreen)
function handleInputNumber(value){
  if(currentScreen!='welcome'){
    setCurrentScreen('welcome');
  }
  setScreen(value);

  }


  const screenChange = () => {
    setCurrentScreen('startGame');
    console.log('change screen',currentScreen);

  };

  let screen=<StartGameScreen onPickedNumber={handleInputNumber}/>

if(enterScreen!=null){
  screen=<WelcomeScreen onScreenChange={screenChange}/>

} 
 if (currentScreen == 'startGame') {
  console.log('startGame')

  screen = <StartGameScreen onPickedNumber={handleInputNumber}/>;
}

  return (
    <LinearGradient
    colors={['#0583ad', '#1ab376']}
        style={styles.rootSize}>
       <ImageBackground source={require('./assets/images/dice.jpg')} resizeMode='cover' style={styles.rootSize} imageStyle={styles.image}>
    {screen}
    </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootSize:{
    flex: 1
  },
  image:{
   opacity:0.3
  }
});
