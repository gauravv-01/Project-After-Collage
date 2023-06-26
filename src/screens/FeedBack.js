import { StyleSheet, Text, View, TextInput , TouchableOpacity} from 'react-native'
import React from 'react'
import Field from '../components/Field'

const FeedBack = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.uppr,{flex:1}]}>
        <Text style={[styles.blocks]}>Feed Back</Text>
      </View>
      <View style={{flex:6}}>
      <View style={[styles.sec,{flex:1}]}></View>
      <View style={[styles.end,{flex:4}]}>
      <View style={{height:"60%",width:"100%"}}>
          <Text style={{color:"#110D59",fontSize: 28,fontWeight:'bold',paddingHorizontal:"10%",paddingVertical:"5%"}}>Give FeedBack</Text>
          <Field placeholder= "Email " />
          <Text style={{color:"#110D59",fontSize: 15,fontWeight:'bold',paddingHorizontal:"10%",paddingVertical:"2%"}}>Do you have any thoughts you'd like to share with us..?</Text>
          <TextInput
          placeholder="Your Feed Back Matter To Us"
          value=""
          onChangeText={() => {}}
          style={{
            borderRadius:20,
        marginVertical:"3%",
        color:'#110D59',
        paddingHorizontal:8,
        width:"80%",
        height:200,
        backgroundColor:"rgb(220,220,220)",
        alignSelf:"center"
          }}
          multiline={true}
          numberOfLines={6}
        />
                <View style={{ width: "100%", alignItems: "center" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#110D59",
              width: 100,
              borderRadius: 10,
              alignItems: "center",
              padding: 10,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 22 }}>Send</Text>
          </TouchableOpacity>
        </View>
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

    }

})

export default FeedBack;