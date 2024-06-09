import { View ,StyleSheet,TextInput} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import { Alert } from "react-native";
function StartGameScreen({onPickedNumber}){

const [enterNumber,setEnternumber]=useState(null)

function handleNumberInput(value){
 setEnternumber(value)
}



function submitNumberInput(){
    if(enterNumber==null || enterNumber==0){
        Alert.alert('Enter Number','Please Enter number between 1 to 99',[{text:'Ok',style:'destructive'}])
        return resetNumberInputHandler()
    }
   onPickedNumber(enterNumber)
   Alert.alert('Welcome again',`Your Number is ${enterNumber}`,[{text:'Ok',style:'default'}])

}

function resetNumberInputHandler(){
    setEnternumber(null)
}


    
return <View style={styles.container}>
  <View style={styles.cardDesign}>
<TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" onChangeText={handleNumberInput} value={enterNumber}/>
<View style={styles.buttonLayout}>
<PrimaryButton onPress={submitNumberInput}>Submit</PrimaryButton>
<PrimaryButton onPress={resetNumberInputHandler}>Reset</PrimaryButton>
</View>
</View>
</View>

}

export default StartGameScreen;

const styles= StyleSheet.create({
    container:{
        margin:50
      },
    cardDesign:{
    height:130,
    backgroundColor:'#5cc3e6',
    alignItems:'center' ,
    padding:10,
    borderRadius:8,
    shadowColor:'#525a5d'  ,
    shadowOffset:{width:0,height:5},
    shadowOpacity:0.1,
    shadowRadius:10
 },
 numberInput:{
    color:'white',
    borderBottomColor:'white',
    borderBottomWidth:2,
    width:40,
    paddingVertical:5,
    marginBottom:25,
    fontSize:30 
},
buttonLayout:{
    flexDirection:'row',
    justifyContent: 'space-between',
    width: '55%',
    }

})