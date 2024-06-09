import { View,Text ,StyleSheet,Pressable} from "react-native";



function PrimaryButton({children,onPress}){

 function buttonPressed(){
onPress()
 }

return <Pressable onPress={buttonPressed}>
  <View style={styles.buttonOuter}>
  <Text style={styles.text}>{children}</Text>
</View> 
</Pressable>
}

export default PrimaryButton;

const styles=StyleSheet.create({
buttonOuter:{
borderColor:'#1d616a',
borderWidth:2,
paddingTop:5,
paddingBottom:5,
paddingRight:10,
paddingLeft:10,
borderRadius:5,
backgroundColor:'#1d616a',
shadowColor:'black',
shadowOffset:{height:10,width:0},
shadowRadius:10,
shadowOpacity:0.3,
},
text:{
color:'white'
}
})