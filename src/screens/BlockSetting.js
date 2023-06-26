import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BlockSetting = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.uppr,{flex:1}]}>
        <Text style={[styles.blocks]}>Setting</Text>
      </View>
      <View style={{flex:6}}>
      <View style={[styles.sec,{flex:1}]}></View>
      <View style={[styles.end,{flex:4}]}>
        <View style={{height:"20%",width:"100%",borderBottomWidth:1, borderEndColor:"#000"}}>
          <Text style={{color:"#110D59",fontWeight:'bold', paddingHorizontal:"10%",paddingVertical:"2%"}}>General </Text>
        </View>
        <View style={{height:"20%",width:"100%",borderBottomWidth:1, borderEndColor:"#000"}}>
          <Text style={{color:"#110D59",fontWeight:'bold',paddingHorizontal:"10%",paddingVertical:"2%"}}>Language</Text>
        </View>
        <View style={{height:"20%",width:"100%",borderBottomWidth:1, borderEndColor:"#000"}}>
          <Text style={{color:"#110D59",fontWeight:'bold',paddingHorizontal:"10%",paddingVertical:"2%"}}>Launcher </Text>
        </View>
        <View style={{height:"20%",width:"100%",borderBottomWidth:1, borderEndColor:"#000"}}>
          <Text style={{color:"#110D59",fontWeight:'bold',paddingHorizontal:"10%",paddingVertical:"1%"}}>Timer </Text>
          <Text style={{paddingHorizontal:"10%",color:"#000",}}>Timer Type </Text>
        </View>
        <View style={{height:"20%",width:"100%",borderBottomWidth:1, borderEndColor:"#000"}}>
          <Text style={{color:"#110D59",fontWeight:'bold',paddingHorizontal:"10%",paddingVertical:"5%"}}>Advanced</Text>
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

export default BlockSetting;