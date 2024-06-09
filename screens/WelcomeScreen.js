import { View,Text,StyleSheet,Pressable } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function WelcomeScreen({onScreenChange}){
function changeScreen(){
    onScreenChange('startGame')
}

    return <View style={styles.container}>
    <View style={styles.cardDesign}>
    <Text>Welcome Screen</Text>
    <Pressable style={styles.gameStartButton}>
    <PrimaryButton onPress={changeScreen}>Start Game</PrimaryButton>
    </Pressable>
    </View>
    </View>
    }

export default WelcomeScreen;

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
       padding:50
    },
    cardDesign:{
    height:300,
    backgroundColor:'#e2e9eb',
    alignItems:'center' ,
    padding:25,
    borderRadius:8,
    shadowColor:'#090b0c'  ,
    shadowOffset:{width:0,height:5},
    shadowOpacity:0.1,
    justifyContent:'center',
    alignItems:'center',
    shadowRadius:10
 },
 gameStartButton:{
    paddingTop:20
 }

})