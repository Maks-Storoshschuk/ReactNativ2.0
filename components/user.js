import {FlatList, StyleSheet} from "react-native";
import {View,Text,Button,TouchableOpacity} from "react-native";
import {getUsers} from "../services/Api";
import React from "react";

const User=(props)=>{
    let {item,nav:{navigate}}=props;
    let onPress=()=>{
        navigate('User Detail',{data:item});

    }
    return <View style={[styles.userBox , styles.margins, styles.sizes, styles.align]}>
        <Text>{item.name}</Text>
        <Button title={"User Details"} onPress={onPress}/>
    </View>
}
export default User;
let styles = StyleSheet.create({
    userBox:{
        flex:1,
        backgroundColor: 'silver',

    },
    margins:{
        marginBottom: 3,
        marginLeft: '10%'
    },
    sizes:{
        height: 70,
        width: '80%',
    },
    align:{
        justifyContent: 'center',
        alignItems: 'center'
    }
})