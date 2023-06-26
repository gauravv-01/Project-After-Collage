import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.uppr,{flex:1}]}>
        <Text style={[styles.blocks]}>About Us </Text>
      </View>
      <View style={{flex:6}}>
      <View style={[styles.sec,{flex:1}]}></View>
      <View style={[styles.end,{flex:4}]}>
      <View style={{height:"60%",width:"100%"}}>
          <Text style={{color:"#110D59",fontSize: 28,fontWeight:'bold',paddingHorizontal:"10%",paddingVertical:"2%"}}>Welcome To DigiDost</Text>
          <Text></Text>
        </View>
        <View style={{height:"7.58%",width:"100%",borderWidth:0.5, borderEndColor:"#000"}}>
          <Text style={[styles.Version]}>Version:</Text>
        </View>
        <View style={{height:"7.58%",width:"100%",borderWidth:0.5, borderEndColor:"#000"}}>
          <Text style={[styles.Contact]}>Contact us  ✉️</Text>
        </View>
        <View style={{height:"7.58%",width:"100%",borderWidth:0.5, borderEndColor:"#000"}}>
          <Text style={[styles.Policy]}>Privacy Policy  🔗 </Text>
        </View>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:
    {
        height:"100%",
        width:"100%",
        backgroundColor:"white"
    },

    uppr:
    {
        width: "100%",
        backgroundColor:"#144E76",
        borderBottomLeftRadius:70,
    },
    blocks:
    {
      color: "#fff",
      fontSize: 28,
      fontWeight: "bold",
      paddingVertical:"8%",
      paddingHorizontal:"12%"
    },
    sec:
    {
        width: "100%",
        backgroundColor:"#144E76",
        
    
    },
    end:
    {
        width:"100%",
        height:"100%",
        backgroundColor:"white",
        borderTopEndRadius:70,
        position:"absolute",

    },
    Version:
    {
      paddingHorizontal:"8%",
      paddingVertical:"2%",
      color:"#110D59",
      fontSize: 20,
    },
    Contact:
    {
      paddingHorizontal:"8%",
      paddingVertical:"2%",
      color:"#110D59",
      fontSize: 20,
    },
    Policy:
    {
      paddingHorizontal:"8%",
      paddingVertical:"2%",
      color:"#110D59",
      fontSize: 20,
    },


})

export default About;