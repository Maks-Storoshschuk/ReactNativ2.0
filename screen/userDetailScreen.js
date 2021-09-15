import React from "react";
import {Text, View} from "react-native";
import {StyleSheet} from "react-native";

const UserDetailScreen =(props)=>{
    let{route:{params:{data}},navigation}=props
    return<View>
        <Text>{data.name} - {data.email}</Text>
    </View>
}
export default UserDetailScreen
let styles = StyleSheet.create({

})